// ==UserScript==
// @name         GeoFS-All-in-one-Addon
// @namespace    http://tampermonkey.net/
// @version      2025-03-28
// @description  23 addons, their instructions, and detailed flight procedures, compiled together
// @author       geofspilot
// @match        https://www.geo-fs.com/geofs.php?v=*
// @match        https://*.geo-fs.com/geofs.php*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=geo-fs.com
// @resource     airports https://github.com/avramovic/geofs-ai-atc/raw/master/airports.json
// @resource     radiostatic https://github.com/avramovic/geofs-ai-atc/raw/master/radio-static.mp3
// @require      https://raw.githubusercontent.com/scitor/GeoFS/master/geofs.lib.js?0.8.6.1171
// @require      https://raw.githubusercontent.com/scitor/GeoFS/master/randomJobs/patch.js?0.8.6.1171
// @require      https://raw.githubusercontent.com/scitor/GeoFS/master/randomJobs/manager.js?0.8.6.1171
// @require      https://raw.githubusercontent.com/scitor/GeoFS/master/randomJobs/airport.handler.js?0.8.6.1171
// @require      https://raw.githubusercontent.com/scitor/GeoFS/master/randomJobs/flight.handler.js?0.8.6.1171
// @require      https://raw.githubusercontent.com/scitor/GeoFS/master/randomJobs/generator.js?0.8.6.1171
// @require      https://raw.githubusercontent.com/scitor/GeoFS/master/randomJobs/window.js?0.8.6.1171
// @require      https://raw.githubusercontent.com/scitor/GeoFS/master/randomJobs/career.page.js?0.8.6.1171
// @require      https://raw.githubusercontent.com/scitor/GeoFS/master/randomJobs/airport.page.js?0.8.6.1171
// @require      https://raw.githubusercontent.com/scitor/GeoFS/master/randomJobs/flightplan.page.js?0.8.6.1171
// @grant        GM.getResourceText
// @grant        GM.getResourceUrl
// @grant        GM_xmlhttpRequest
// @grant        GM_addStyle
// ==/UserScript==
let pushToTalk = true; //Use this to set whether you want the PTT version or the normal version of the AI ATC.

function ai () {

(function() {
    'use strict';

    const head = document.querySelector('head');
    if (head) {
        const puterJS = document.createElement('script');
        puterJS.src = 'https://js.puter.com/v2/';
        head.appendChild(puterJS);

        const growlJS = document.createElement('script');
        growlJS.src = 'https://cdn.jsdelivr.net/gh/avramovic/geofs-ai-atc@master/vanilla-notify.min.js';
        head.appendChild(growlJS);

        const growlCSS = document.createElement('link');
        growlCSS.href = 'https://cdn.jsdelivr.net/gh/avramovic/geofs-ai-atc@master/vanilla-notify.css';
        growlCSS.rel = 'stylesheet';
        head.appendChild(growlCSS);
    }

    let airports;
    GM.getResourceText("airports").then((data) => {
        airports = JSON.parse(data);
    });

    let radiostatic;
    GM.getResourceText("radiostatic").then((data) => {
        radiostatic = new Audio('data:audio/mp3;'+data);
        radiostatic.loop = false;
    });

    let tunedInAtc;
    let controllers = {};
    let context = {};
    let oldNearest = null;

    const observer = new MutationObserver(() => {
        const menuList = document.querySelector('div.geofs-ui-bottom');

        if (menuList && !menuList.querySelector('.geofs-atc-icon')) {
            const micIcon = document.createElement('i');
            micIcon.className = 'material-icons';
            micIcon.innerText = 'headset_mic';

            const knobIcon = document.createElement('i');
            knobIcon.className = 'material-icons';
            knobIcon.innerText = 'radio';

            const tuneInButton = document.createElement('button');
            tuneInButton.className = 'mdl-button mdl-js-button mdl-button--icon geofs-f-standard-ui geofs-tunein-icon';
            tuneInButton.title = "Click to set ATC frequency.";

            tuneInButton.addEventListener('click', (e) => {
                let nearestAp = findNearestAirport();
                let apCode = prompt('Enter airport ICAO code', nearestAp.code);
                if (apCode == null || apCode === '') {
                    error('You cancelled the dialog.')
                } else {
                    apCode = apCode.toUpperCase();
                    if (typeof unsafeWindow.geofs.mainAirportList[apCode] === 'undefined') {
                        error('Airport with code '+ apCode + ' can not be found!');
                    } else {
                        tunedInAtc = apCode;
                        initController(apCode);
                        info('Your radio is now tuned to '+apCode+' frequency. You will now talk to them.');
                    }
                }
            });

            const atcButton = document.createElement('button');
            atcButton.className = 'mdl-button mdl-js-button mdl-button--icon geofs-f-standard-ui geofs-atc-icon';
            atcButton.title = "Click to talk to the ATC. Ctrl+click (Cmd+click on Mac) to input text instead of talking.";

            atcButton.addEventListener('click', (e) => {
                if (typeof tunedInAtc === 'undefined') {
                    error("No frequency set. Click the radio icon to set the frequency!");
                } else if (e.ctrlKey || e.metaKey) {
                    let pilotMsg = prompt("Please enter your message to the ATC:");
                    if (pilotMsg != null && pilotMsg != "") {
                        callAtc(pilotMsg);
                    } else {
                        error("You cancelled the dialog");
                    }
                } else {
                    navigator.mediaDevices.getUserMedia({ audio: true });
                    let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
                    let recognition = new SpeechRecognition();
                    recognition.continuous = false;
                    recognition.lang = 'en-US';
                    recognition.interimResults = false;
                    recognition.maxAlternatives = 1;
                    recognition.start();
                    recognition.onresult = (event) => {
                        let pilotMsg = event.results[event.results.length - 1][0].transcript;
                        if (pilotMsg != null && pilotMsg != "") {
                            callAtc(pilotMsg);
                        } else {
                            error("No speech recognized. Speak up?");
                        }
                        recognition.stop();
                    };
                    recognition.onerror = (event) => {
                        error('Speech recognition error: ' + event.error);
                    };
                }
            });

            atcButton.appendChild(micIcon);
            tuneInButton.appendChild(knobIcon);

            menuList.appendChild(tuneInButton);
            menuList.appendChild(atcButton);
        }
    });

    observer.observe(document.body, {childList: true, subtree: true});

    function haversine(lat1, lon1, lat2, lon2) {
        const R = 6371; // Radius of the Earth in kilometers
        const toRad = (deg) => deg * (Math.PI / 180);

        const dLat = toRad(lat2 - lat1);
        const dLon = toRad(lon2 - lon1);

        const a =
              Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return (R * c) / 1.852; // Distance in nautical miles
    }

    function findNearestAirport() {
        let nearestAirport = null;
        let minDistance = Infinity;

        for (let apCode in unsafeWindow.geofs.mainAirportList) {
            let distance = findAirportDistance(apCode);

            if (distance < minDistance) {
                minDistance = distance;
                nearestAirport = {
                    code: apCode,
                    distance: distance
                };
            }
        }

        return nearestAirport;
    }

    function findAirportDistance(code) {
        let aircraftPosition = {
            lat: unsafeWindow.geofs.aircraft.instance.lastLlaLocation[0],
            lon: unsafeWindow.geofs.aircraft.instance.lastLlaLocation[1],
        };
        let ap = unsafeWindow.geofs.mainAirportList[code];
        let airportPosition = {
            lat: ap[0],
            lon: ap[1]
        };

        return haversine(
          aircraftPosition.lat,
          aircraftPosition.lon,
          airportPosition.lat,
          airportPosition.lon
        );
    }

    function calculateBearing(lat1, lon1, lat2, lon2) {
        const toRadians = (deg) => deg * (Math.PI / 180);
        const toDegrees = (rad) => rad * (180 / Math.PI);

        const dLon = toRadians(lon2 - lon1);
        const y = Math.sin(dLon) * Math.cos(toRadians(lat2));
        const x = Math.cos(toRadians(lat1)) * Math.sin(toRadians(lat2)) -
          Math.sin(toRadians(lat1)) * Math.cos(toRadians(lat2)) * Math.cos(dLon);
        const bearing = toDegrees(Math.atan2(y, x));

        // Normalize to 0-360 degrees
        return (bearing + 360) % 360;
    }

    function getRelativeDirection(airportLat, airportLon, airplaneLat, airplaneLon) {
        // Calculate the bearing from the airport to the airplane
        const bearing = calculateBearing(airportLat, airportLon, airplaneLat, airplaneLon);

        // Determine the direction based on the bearing
        if (bearing >= 337.5 || bearing < 22.5) {
            return "north";
        } else if (bearing >= 22.5 && bearing < 67.5) {
            return "northeast";
        } else if (bearing >= 67.5 && bearing < 112.5) {
            return "east";
        } else if (bearing >= 112.5 && bearing < 157.5) {
            return "southeast";
        } else if (bearing >= 157.5 && bearing < 202.5) {
            return "south";
        } else if (bearing >= 202.5 && bearing < 247.5) {
            return "southwest";
        } else if (bearing >= 247.5 && bearing < 292.5) {
            return "west";
        } else if (bearing >= 292.5 && bearing < 337.5) {
            return "northwest";
        }
    }

    function initController(apCode) {
        controllers[apCode] = controllers[apCode] || null;

        if (controllers[apCode] == null) {
            let date = new Date().toISOString().split('T')[0];
            fetch('https://randomuser.me/api/?gender=male&nat=au,br,ca,ch,de,us,dk,fr,gb,in,mx,nl,no,nz,rs,tr,ua,us&seed='+apCode+'-'+date)
              .then(response => {
                  if (!response.ok) {
                      throw new Error('HTTP error! status: '+response.status);
                  }
                  return response.text();
              }).then(resourceText => {
                let json = JSON.parse(resourceText)
                controllers[apCode] = json.results[0];
            });
        }
    }

    function error(msg) {
        vNotify.error({text:msg, title:'Error', visibleDuration: 10000});
    }

    function info(msg, title) {
        title = title || 'Information';
        vNotify.info({text:msg, title:title, visibleDuration: 10000});
    }

    function atcSpeak(text) {
        let synth = window.speechSynthesis;
        let voices = synth.getVoices();
        let toSpeak = new SpeechSynthesisUtterance(text);
        toSpeak.voice = voices[0];
        synth.speak(toSpeak);
    }

    function atcGrowl(text, airport_code) {
        vNotify.warning({text: text, title: airport_code+' ATC', visibleDuration: 20000});
    }

    function atcMessage(text, airport_code) {
        atcGrowl(text, airport_code);
        atcSpeak(text);
    }

    function pilotMessage(text) {
        let user = unsafeWindow.geofs.userRecord;
        let airplane = unsafeWindow.geofs.aircraft.instance.aircraftRecord;

        let callsign = "Foo";
        if (user.id != 0) {
            callsign = user.callsign;
        }

        vNotify.success({text: text, title: airplane.name+': '+callsign, visibleDuration: 10000});
    }

     function isOnGround() {
        return unsafeWindow.geofs.animation.values.groundContact === 1;
    }

    function seaAltitude() {
        return unsafeWindow.geofs.animation.values.altitude;
    }

    function groundAltitude() {
        return Math.max(seaAltitude() - unsafeWindow.geofs.animation.values.groundElevationFeet - 50, 0);
    }

    function getPilotInfo(today) {
        let user = unsafeWindow.geofs.userRecord;

        let pilot = {
            callsign: 'Foo',
            name: 'not known',
            licensed_at: today
        };

        if (user.id != 0) {
            pilot = {
                callsign: user.callsign,
                name: user.firstname + ' ' + user.lastname,
                licensed_at: user.created
            };
        }

        return pilot;
    }

    // generate controller for the nearest airport for today
    setInterval(function() {
        let airport = findNearestAirport();
        let airportMeta = airports[airport.code];

        if (oldNearest !== airport.code) {
            let apName = airportMeta ? airportMeta.name+' ('+airport.code+')' : airport.code;
            info('You are now in range of '+apName+'. Set your radio frequency to <b>'+airport.code+'</b> to tune in with them');
            oldNearest = airport.code;
            initController(airport.code);
        }
    }, 500);

    function callAtc(pilotMsg) {
        let airport = {
            distance: findAirportDistance(tunedInAtc),
            code: tunedInAtc,
        };

        let date = new Date().toISOString().split('T')[0];
        let time = unsafeWindow.geofs.animation.values.hours + ':' + unsafeWindow.geofs.animation.values.minutes;
        let airportMeta = airports[airport.code];
        let controller = controllers[airport.code];
        let apName = airportMeta ? airportMeta.name + ' (' + airport.code + ')' : airport.code;
        let pilot = getPilotInfo(date);

        if (typeof controller === 'undefined') {
            radiostatic.play();
            info('Airport '+apName+' seems to be closed right now. Try again later...');
            initController(airport.code);
            return;
        }

        if (airport.distance > 50) {
            radiostatic.play();
            error('Frequency '+airport.code+' is out of range. You need to be at least 50 nautical miles away from the airport to contact it.');
            return;
        }

        let airportPosition = {
            lat: unsafeWindow.geofs.mainAirportList[airport.code][0],
            lon: unsafeWindow.geofs.mainAirportList[airport.code][1],
        };

        if (typeof context[airport.code] === "undefined") {
            let season = unsafeWindow.geofs.animation.values.season;
            let daynight = unsafeWindow.geofs.animation.values.night ? 'night' : 'day';
            if (unsafeWindow.geofs.isSnow || unsafeWindow.geofs.isSnowy) {
                daynight = 'snowy '+daynight;
            }

            let intro = 'You are '+controller.name.first+' '+controller.name.last+', a '+controller.dob.age+' years old '+controller.gender+' ATC controller on the '+apName+' for today. ' +
                'Your airport location is (lat: '+airportPosition.lat+', lon: '+airportPosition.lon+'). You are talking to pilot whose name is '+pilot.name+' callsign ('+pilot.callsign+') and they\'ve been piloting since '+pilot.licensed_at+'. ' +
                'You will be acting as ground, tower (if the plane is below or at 5000 ft) or approach or departure (if above 5000 ft), depending on whether the plane is on the ground, their distance from the airport, heading and previous context. ' +
                'If the aircraft is in the air, keep your communication short and concise, as a real ATC. If they\'re on the ground, your replies should still be short (1-2 sentence per reply), but you can ' +
                'use a more relaxed communication like making jokes, discussing weather, other traffic etc. If asked why so slow on replies, say you\'re busy, like the real ATC. '+
                'Today is '+date+', time is '+time+', a beautiful '+season+' '+daynight;

            context[airport.code] = [];
            context[airport.code].push({content: intro, role: 'system'});
        }

        // provide current update
        let airplane = unsafeWindow.geofs.aircraft.instance.aircraftRecord;
        let aircraftPosition = {
            lat: unsafeWindow.geofs.aircraft.instance.lastLlaLocation[0],
            lon: unsafeWindow.geofs.aircraft.instance.lastLlaLocation[1],
        };

        let onGround = isOnGround() ? 'on the ground' : 'in the air';
        let distance;

        if (airport.distance > 1) {
            let relativeDirection = getRelativeDirection(airportPosition.lat, airportPosition.lon, aircraftPosition.lat, aircraftPosition.lon);
            distance = airport.distance+' nautical miles '+relativeDirection+' from the airport';
        } else if (isOnGround()) {
            distance = 'at the airport';
        } else {
            distance = 'above the airport';
        }

        let movingSpeed;
        if (isOnGround()) {
            if (unsafeWindow.geofs.animation.values.kias > 1) {
                movingSpeed = 'moving at '+unsafeWindow.geofs.animation.values.kias+' kts'
            } else {
                movingSpeed = 'stationary';
            }
        } else {
            movingSpeed = 'flying at '+unsafeWindow.geofs.animation.values.kias+' kts, heading '+unsafeWindow.geofs.animation.values.heading360;
        }

        let address = pilot.callsign+', '+airport.code;
        if (isOnGround()) {
            address += ' Ground';
        } else if (seaAltitude() <= 5000) {
            address += ' Tower';
        } else {
            address += ' Area Control';
        }

        if (airplane.name.toLowerCase().includes('cessna') || airplane.name.toLowerCase().includes('piper')) {
            address = airplane.name + ' ' + address;
        }

        let relativeWindDirection = unsafeWindow.geofs.animation.values.relativeWind;
        let windDirection = (unsafeWindow.geofs.animation.values.heading360 + relativeWindDirection + 360) % 360;
        let wind = unsafeWindow.geofs.animation.values.windSpeedLabel + ', direction '+ windDirection + ' degrees (or '+relativeWindDirection+' degrees relative to the heading of the aircraft)';

        let currentUpdate = 'Date and time: '+date+' '+time+'. '+
            'The pilot is flying '+airplane.name+' and their position is '+onGround+' '+distance+'. The altitude of the aircraft is '+seaAltitude()+' feet above the sea level ('+groundAltitude()+' feet above ground). ' +
            'The plane is '+movingSpeed+'. Wind speed is '+wind+'. Air temperature is '+unsafeWindow.geofs.animation.values.airTemp+' degrees celsius. '+
            'You should address them with "'+address+'", followed by the message.';

        // remove old currentUpdate, leaving only the last one
        if (context[airport.code].length >= 4) {
            context[airport.code].splice(-3, 1);
        }

        context[airport.code].push({content: currentUpdate, role: 'system'});
        context[airport.code].push({content: pilotMsg, role: 'user'});

        pilotMessage(pilotMsg);

        puter.ai.chat(context[airport.code]).then(function(resp) {
            context[airport.code].push(resp.message);
            atcMessage(resp.message.content, airport.code);
        });
    }

})();
};

function ptt () {

(function() {
    'use strict';

    const head = document.querySelector('head');
    if (head) {
        const puterJS = document.createElement('script');
        puterJS.src = 'https://js.puter.com/v2/';
        head.appendChild(puterJS);

        const growlJS = document.createElement('script');
        growlJS.src = 'https://cdn.jsdelivr.net/gh/avramovic/geofs-ai-atc@master/vanilla-notify.min.js';
        head.appendChild(growlJS);

        const growlCSS = document.createElement('link');
        growlCSS.href = 'https://cdn.jsdelivr.net/gh/avramovic/geofs-ai-atc@master/vanilla-notify.css';
        growlCSS.rel = 'stylesheet';
        head.appendChild(growlCSS);
    }

    let airports;
    GM.getResourceText("airports").then((data) => {
        airports = JSON.parse(data);
    });

    let radiostatic;
    GM.getResourceText("radiostatic").then((data) => {
        radiostatic = new Audio('data:audio/mp3;'+data);
        radiostatic.loop = false;
    });

    let tunedInAtc;
    let controllers = {};
    let context = {};
    let oldNearest = null;

    const observer = new MutationObserver(() => {
        const menuList = document.querySelector('div.geofs-ui-bottom');

        if (menuList && !menuList.querySelector('.geofs-atc-icon')) {
            const micIcon = document.createElement('i');
            micIcon.className = 'material-icons';
            micIcon.innerText = 'headset_mic';

            const knobIcon = document.createElement('i');
            knobIcon.className = 'material-icons';
            knobIcon.innerText = 'radio';

            const tuneInButton = document.createElement('button');
            tuneInButton.className = 'mdl-button mdl-js-button mdl-button--icon geofs-f-standard-ui geofs-tunein-icon';
            tuneInButton.title = "Click to set ATC frequency.";

            tuneInButton.addEventListener('click', (e) => {
                let nearestAp = findNearestAirport();
                let apCode = prompt('Enter airport ICAO code', nearestAp.code);
                if (apCode == null || apCode === '') {
                    error('You cancelled the dialog.')
                } else {
                    apCode = apCode.toUpperCase();
                    if (typeof unsafeWindow.geofs.mainAirportList[apCode] === 'undefined') {
                        error('Airport with code '+ apCode + ' can not be found!');
                    } else {
                        tunedInAtc = apCode;
                        initController(apCode);
                        info('Your radio is now tuned to '+apCode+' frequency. You will now talk to them.');
                    }
                }
            });

            const atcButton = document.createElement('button');
            atcButton.className = 'mdl-button mdl-js-button mdl-button--icon geofs-f-standard-ui geofs-atc-icon';
            atcButton.title = "Click to talk to the ATC. Ctrl+click (Cmd+click on Mac) to input text instead of talking.";

            // Listen for 'D' key press
            document.addEventListener("keydown", function (event) {
                if (event.key.toLowerCase() === "d"  && !event.ctrlKey && !event.altKey && !event.metaKey) {
                    const active = document.activeElement;
                    const tag = active.tagName.toLowerCase();

                    const isTextField =
                          tag === "input" ||
                          tag === "textarea" ||
                          active.isContentEditable;

                    if (isTextField) return; // Ignore if typing in a text field
                    // Create a synthetic click event with ctrlKey set to true
                    const syntheticEvent = new MouseEvent('click', {
                        //cancelable: true,
                        ctrlKey: true, // Simulate Ctrl key being pressed
                    });

                    // Dispatch the event on the ATC button
                    atcButton.dispatchEvent(syntheticEvent);
                }
            });


            atcButton.addEventListener('click', (e) => {
                if (typeof tunedInAtc === 'undefined') {
                    error("No frequency set. Click the radio icon to set the frequency!");
                } else if (e.ctrlKey || e.metaKey) {
                    let pilotMsg = prompt("Please enter your message to the ATC:");
                    if (pilotMsg != null && pilotMsg != "") {
                        callAtc(pilotMsg);
                    } else {
                        error("You cancelled the dialog");
                    }
                } else {
                    navigator.mediaDevices.getUserMedia({ audio: true });
                    let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
                    let recognition = new SpeechRecognition();
                    recognition.continuous = false;
                    recognition.lang = 'en-US';
                    recognition.interimResults = false;
                    recognition.maxAlternatives = 1;
                    recognition.start();
                    recognition.onresult = (event) => {
                        let pilotMsg = event.results[event.results.length - 1][0].transcript;
                        if (pilotMsg != null && pilotMsg != "") {
                            callAtc(pilotMsg);
                        } else {
                            error("No speech recognized. Speak up?");
                        }
                        recognition.stop();
                    };
                    recognition.onerror = (event) => {
                        error('Speech recognition error: ' + event.error);
                    };
                }
            });

            atcButton.appendChild(micIcon);
            tuneInButton.appendChild(knobIcon);

            menuList.appendChild(tuneInButton);
            menuList.appendChild(atcButton);
        }
    });

    observer.observe(document.body, {childList: true, subtree: true});

    function haversine(lat1, lon1, lat2, lon2) {
        const R = 6371; // Radius of the Earth in kilometers
        const toRad = (deg) => deg * (Math.PI / 180);

        const dLat = toRad(lat2 - lat1);
        const dLon = toRad(lon2 - lon1);

        const a =
              Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return (R * c) / 1.852; // Distance in nautical miles
    }

    function findNearestAirport() {
        let nearestAirport = null;
        let minDistance = Infinity;

        for (let apCode in unsafeWindow.geofs.mainAirportList) {
            let distance = findAirportDistance(apCode);

            if (distance < minDistance) {
                minDistance = distance;
                nearestAirport = {
                    code: apCode,
                    distance: distance
                };
            }
        }

        return nearestAirport;
    }

    function findAirportDistance(code) {
        let aircraftPosition = {
            lat: unsafeWindow.geofs.aircraft.instance.lastLlaLocation[0],
            lon: unsafeWindow.geofs.aircraft.instance.lastLlaLocation[1],
        };
        let ap = unsafeWindow.geofs.mainAirportList[code];
        let airportPosition = {
            lat: ap[0],
            lon: ap[1]
        };

        return haversine(
          aircraftPosition.lat,
          aircraftPosition.lon,
          airportPosition.lat,
          airportPosition.lon
        );
    }

    function calculateBearing(lat1, lon1, lat2, lon2) {
        const toRadians = (deg) => deg * (Math.PI / 180);
        const toDegrees = (rad) => rad * (180 / Math.PI);

        const dLon = toRadians(lon2 - lon1);
        const y = Math.sin(dLon) * Math.cos(toRadians(lat2));
        const x = Math.cos(toRadians(lat1)) * Math.sin(toRadians(lat2)) -
          Math.sin(toRadians(lat1)) * Math.cos(toRadians(lat2)) * Math.cos(dLon);
        const bearing = toDegrees(Math.atan2(y, x));

        // Normalize to 0-360 degrees
        return (bearing + 360) % 360;
    }

    function getRelativeDirection(airportLat, airportLon, airplaneLat, airplaneLon) {
        // Calculate the bearing from the airport to the airplane
        const bearing = calculateBearing(airportLat, airportLon, airplaneLat, airplaneLon);

        // Determine the direction based on the bearing
        if (bearing >= 337.5 || bearing < 22.5) {
            return "north";
        } else if (bearing >= 22.5 && bearing < 67.5) {
            return "northeast";
        } else if (bearing >= 67.5 && bearing < 112.5) {
            return "east";
        } else if (bearing >= 112.5 && bearing < 157.5) {
            return "southeast";
        } else if (bearing >= 157.5 && bearing < 202.5) {
            return "south";
        } else if (bearing >= 202.5 && bearing < 247.5) {
            return "southwest";
        } else if (bearing >= 247.5 && bearing < 292.5) {
            return "west";
        } else if (bearing >= 292.5 && bearing < 337.5) {
            return "northwest";
        }
    }

    function initController(apCode) {
        controllers[apCode] = controllers[apCode] || null;

        if (controllers[apCode] == null) {
            let date = new Date().toISOString().split('T')[0];
            fetch('https://randomuser.me/api/?gender=male&nat=au,br,ca,ch,de,us,dk,fr,gb,in,mx,nl,no,nz,rs,tr,ua,us&seed='+apCode+'-'+date)
              .then(response => {
                  if (!response.ok) {
                      throw new Error('HTTP error! status: '+response.status);
                  }
                  return response.text();
              }).then(resourceText => {
                let json = JSON.parse(resourceText)
                controllers[apCode] = json.results[0];
            });
        }
    }

    function error(msg) {
        vNotify.error({text:msg, title:'Error', visibleDuration: 10000});
    }

    function info(msg, title) {
        title = title || 'Information';
        vNotify.info({text:msg, title:title, visibleDuration: 10000});
    }

    function atcSpeak(text) {
        let synth = window.speechSynthesis;
        let voices = synth.getVoices();
        let toSpeak = new SpeechSynthesisUtterance(text);
        toSpeak.voice = voices[0];
        synth.speak(toSpeak);
    }

    function atcGrowl(text, airport_code) {
        vNotify.warning({text: text, title: airport_code+' ATC', visibleDuration: 20000});
    }

    function atcMessage(text, airport_code) {
        atcGrowl(text, airport_code);
        atcSpeak(text);
    }

    function pilotMessage(text) {
        let user = unsafeWindow.geofs.userRecord;
        let airplane = unsafeWindow.geofs.aircraft.instance.aircraftRecord;

        let callsign = "Foo";
        if (user.id != 0) {
            callsign = user.callsign;
        }

        vNotify.success({text: text, title: airplane.name+': '+callsign, visibleDuration: 10000});
    }

     function isOnGround() {
        return unsafeWindow.geofs.animation.values.groundContact === 1;
    }

    function seaAltitude() {
        return unsafeWindow.geofs.animation.values.altitude;
    }

    function groundAltitude() {
        return Math.max(seaAltitude() - unsafeWindow.geofs.animation.values.groundElevationFeet - 50, 0);
    }

    function getPilotInfo(today) {
        let user = unsafeWindow.geofs.userRecord;

        let pilot = {
            callsign: 'Foo',
            name: 'not known',
            licensed_at: today
        };

        if (user.id != 0) {
            pilot = {
                callsign: user.callsign,
                name: user.firstname + ' ' + user.lastname,
                licensed_at: user.created
            };
        }

        return pilot;
    }

    // generate controller for the nearest airport for today
    setInterval(function() {
        let airport = findNearestAirport();
        let airportMeta = airports[airport.code];

        if (oldNearest !== airport.code) {
            let apName = airportMeta ? airportMeta.name+' ('+airport.code+')' : airport.code;
            info('You are now in range of '+apName+'. Set your radio frequency to <b>'+airport.code+'</b> to tune in with them');
            oldNearest = airport.code;
            initController(airport.code);
        }
    }, 500);

    function callAtc(pilotMsg) {
        let airport = {
            distance: findAirportDistance(tunedInAtc),
            code: tunedInAtc,
        };

        let date = new Date().toISOString().split('T')[0];
        let time = unsafeWindow.geofs.animation.values.hours + ':' + unsafeWindow.geofs.animation.values.minutes;
        let airportMeta = airports[airport.code];
        let controller = controllers[airport.code];
        let apName = airportMeta ? airportMeta.name + ' (' + airport.code + ')' : airport.code;
        let pilot = getPilotInfo(date);

        if (typeof controller === 'undefined') {
            radiostatic.play();
            info('Airport '+apName+' seems to be closed right now. Try again later...');
            initController(airport.code);
            return;
        }

        if (airport.distance > 50) {
            radiostatic.play();
            error('Frequency '+airport.code+' is out of range. You need to be at least 50 nautical miles away from the airport to contact it.');
            return;
        }

        let airportPosition = {
            lat: unsafeWindow.geofs.mainAirportList[airport.code][0],
            lon: unsafeWindow.geofs.mainAirportList[airport.code][1],
        };

        if (typeof context[airport.code] === "undefined") {
            let season = unsafeWindow.geofs.animation.values.season;
            let daynight = unsafeWindow.geofs.animation.values.night ? 'night' : 'day';
            if (unsafeWindow.geofs.isSnow || unsafeWindow.geofs.isSnowy) {
                daynight = 'snowy '+daynight;
            }

            let intro = 'You are '+controller.name.first+' '+controller.name.last+', a '+controller.dob.age+' years old '+controller.gender+' ATC controller on the '+apName+' for today. ' +
                'Your airport location is (lat: '+airportPosition.lat+', lon: '+airportPosition.lon+'). You are talking to pilot whose name is '+pilot.name+' callsign ('+pilot.callsign+') and they\'ve been piloting since '+pilot.licensed_at+'. ' +
                'You will be acting as ground, tower (if the plane is below or at 5000 ft) or approach or departure (if above 5000 ft), depending on whether the plane is on the ground, their distance from the airport, heading and previous context. ' +
                'If the aircraft is in the air, keep your communication short and concise, as a real ATC. If they\'re on the ground, your replies should still be short (1-2 sentence per reply), but you can ' +
                'use a more relaxed communication like making jokes, discussing weather, other traffic etc. If asked why so slow on replies, say you\'re busy, like the real ATC. '+
                'Today is '+date+', time is '+time+', a beautiful '+season+' '+daynight;

            context[airport.code] = [];
            context[airport.code].push({content: intro, role: 'system'});
        }

        // provide current update
        let airplane = unsafeWindow.geofs.aircraft.instance.aircraftRecord;
        let aircraftPosition = {
            lat: unsafeWindow.geofs.aircraft.instance.lastLlaLocation[0],
            lon: unsafeWindow.geofs.aircraft.instance.lastLlaLocation[1],
        };

        let onGround = isOnGround() ? 'on the ground' : 'in the air';
        let distance;

        if (airport.distance > 1) {
            let relativeDirection = getRelativeDirection(airportPosition.lat, airportPosition.lon, aircraftPosition.lat, aircraftPosition.lon);
            distance = airport.distance+' nautical miles '+relativeDirection+' from the airport';
        } else if (isOnGround()) {
            distance = 'at the airport';
        } else {
            distance = 'above the airport';
        }

        let movingSpeed;
        if (isOnGround()) {
            if (unsafeWindow.geofs.animation.values.kias > 1) {
                movingSpeed = 'moving at '+unsafeWindow.geofs.animation.values.kias+' kts'
            } else {
                movingSpeed = 'stationary';
            }
        } else {
            movingSpeed = 'flying at '+unsafeWindow.geofs.animation.values.kias+' kts, heading '+unsafeWindow.geofs.animation.values.heading360;
        }

        let address = pilot.callsign+', '+airport.code;
        if (isOnGround()) {
            address += ' Ground';
        } else if (seaAltitude() <= 5000) {
            address += ' Tower';
        } else {
            address += ' Area Control';
        }

        if (airplane.name.toLowerCase().includes('cessna') || airplane.name.toLowerCase().includes('piper')) {
            address = airplane.name + ' ' + address;
        }

        let relativeWindDirection = unsafeWindow.geofs.animation.values.relativeWind;
        let windDirection = (unsafeWindow.geofs.animation.values.heading360 + relativeWindDirection + 360) % 360;
        let wind = unsafeWindow.geofs.animation.values.windSpeedLabel + ', direction '+ windDirection + ' degrees (or '+relativeWindDirection+' degrees relative to the heading of the aircraft)';

        let currentUpdate = 'Date and time: '+date+' '+time+'. '+
            'The pilot is flying '+airplane.name+' and their position is '+onGround+' '+distance+'. The altitude of the aircraft is '+seaAltitude()+' feet above the sea level ('+groundAltitude()+' feet above ground). ' +
            'The plane is '+movingSpeed+'. Wind speed is '+wind+'. Air temperature is '+unsafeWindow.geofs.animation.values.airTemp+' degrees celsius. '+
            'You should address them with "'+address+'", followed by the message.';

        // remove old currentUpdate, leaving only the last one
        if (context[airport.code].length >= 4) {
            context[airport.code].splice(-3, 1);
        }

        context[airport.code].push({content: currentUpdate, role: 'system'});
        context[airport.code].push({content: pilotMsg, role: 'user'});

        pilotMessage(pilotMsg);

        puter.ai.chat(context[airport.code]).then(function(resp) {
            context[airport.code].push(resp.message);
            atcMessage(resp.message.content, airport.code);
        });
    }

})();

};

function nav () {

(function() {
    'use strict';

    // tile provider selector (googleHybrid, googleStreets, geofs)
    const tileProvider = 'googleStreets';

    // tile providers
    const tileProviders = {
        googleHybrid: 'https://mt0.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',
        googleStreets: 'https://mt0.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',
        geofs: 'https://data2.geo-fs.com/osm/{z}/{x}/{y}.png'
    };

    // wait for geofs to fully load before changing map tile provider
    function waitForGeoFS() {
        if (typeof geofs !== 'undefined' && typeof geofs.osmTileProvider !== 'undefined') {
            changeTileProvider();
        } else {
            setTimeout(waitForGeoFS, 1000);
        }
    }

    function changeTileProvider() {
        if (tileProviders[tileProvider]) {
            geofs.osmTileProvider = tileProviders[tileProvider];
            console.log(`Map tile provider changed to ${tileProvider}`);
        } else {
            console.error(`Tile provider ${tileProvider} is not recognized`);
        }
    }

    waitForGeoFS();
})();
};

function charts () {

(function() {
    'use strict';

    // --- Configuration ---
    const CHART_DATA_URL = 'https://raw.githubusercontent.com/mansoorbarri/geofs-charts/refs/heads/main/charts.json';

    const MOD_BUTTON_ID = 'geofs-taxi-chart-mod-button';
    const SEARCH_PANEL_ID = 'geofs-taxi-chart-search-panel';
    const CHART_DISPLAY_ID = 'geofs-taxi-chart-display';

    let airportChartData = {};
    let uiCreated = false;
    let buttonReinsertionInterval;
    let lastSearchedIcao = ''; // New variable to store the last searched ICAO

    // --- Helper Functions ---
    function loadChartData() {
        return new Promise((resolve, reject) => {
            GM_xmlhttpRequest({
                method: 'GET',
                url: CHART_DATA_URL,
                onload: function(response) {
                    try {
                        airportChartData = JSON.parse(response.responseText);
                        console.log('GeoFS Taxi Charts: Chart data loaded successfully. Number of airports:', Object.keys(airportChartData).length);
                        console.log('GeoFS Taxi Charts: First 5 airport ICAOs loaded:', Object.keys(airportChartData).slice(0, 5));
                        resolve();
                    } catch (e) {
                        console.error('GeoFS Taxi Charts: Error parsing JSON data:', e);
                        reject(new Error('Failed to parse chart data.'));
                    }
                },
                onerror: function(response) {
                    console.error('GeoFS Taxi Charts: Error fetching chart data:', response.status, response.statusText, response);
                    reject(new Error(`Failed to fetch chart data: ${response.status} ${response.statusText}`));
                }
            });
        });
    }

    function displayChart(icao) {
        console.log(`GeoFS Taxi Charts: displayChart called for ICAO: ${icao}`);
        const airportInfo = airportChartData[icao.toUpperCase()];
        const displayDiv = document.getElementById(CHART_DISPLAY_ID);

        if (!displayDiv) {
            console.error('GeoFS Taxi Charts: Chart display div not found!');
            return;
        }

        if (airportInfo) {
            console.log('GeoFS Taxi Charts: Airport info found for ICAO:', icao, airportInfo);
            if (airportInfo.taxi_chart_url) {
                console.log('GeoFS Taxi Charts: Taxi chart URL found:', airportInfo.taxi_chart_url);
                const chartHtml = `<img src="${airportInfo.taxi_chart_url}" alt="Taxi Chart for ${icao}" style="max-width: 100%; height: auto;">`;
                const infoLink = airportInfo.info_url ? `<p><a href="${airportInfo.info_url}" target="_blank" style="color: lightblue;">More info for ${airportInfo.name || icao}</a></p>` : '';
                displayDiv.innerHTML = `
                    <p>Taxi Chart for ${airportInfo.name || icao.toUpperCase()}</p>
                    ${chartHtml}
                    ${infoLink}
                `;
                displayDiv.style.display = 'block';
            } else {
                console.warn('GeoFS Taxi Charts: No taxi_chart_url found for ICAO:', icao);
                displayDiv.innerHTML = `<p>No taxi chart URL found for ${icao.toUpperCase()}.</p>`;
                displayDiv.style.display = 'block';
            }
        } else {
            console.warn('GeoFS Taxi Charts: No airport data found for ICAO:', icao.toUpperCase());
            displayDiv.innerHTML = `<p>No airport data found for ${icao.toUpperCase()}.</p>`;
            displayDiv.style.display = 'block';
        }
        displayDiv.style.setProperty('display', 'block', 'important');
        displayDiv.style.setProperty('z-index', '100000', 'important');
        displayDiv.style.setProperty('background-color', 'rgba(100, 0, 0, 0.9)', 'important'); // Reddish tint
        console.log('GeoFS Taxi Charts: Chart display panel forced visible.');
    }

    function hideChart() {
        document.getElementById(CHART_DISPLAY_ID).style.display = 'none';
        console.log('GeoFS Taxi Charts: Chart display panel hidden.');
    }

    function toggleSearchPanel() {
        const searchPanel = document.getElementById(SEARCH_PANEL_ID);
        const icaoInput = document.getElementById('geofs-icao-search-input');

        if (!searchPanel) {
            console.error('GeoFS Taxi Charts: Search panel div not found!');
            return;
        }

        if (searchPanel.style.display === 'block') {
            // Panel is currently open, so close it
            searchPanel.style.display = 'none';
        } else {
            // Panel is currently closed, so open it and populate with last search
            searchPanel.style.display = 'block';
            if (icaoInput) {
                icaoInput.value = lastSearchedIcao; // Set the input value to the last searched ICAO
                icaoInput.focus(); // Optionally focus the input when panel opens
            }
        }
        console.log(`GeoFS Taxi Charts: Search panel display set to: ${searchPanel.style.display}`);
    }

    // --- Core UI Creation / Re-creation Logic ---
    function createModButtonAndPanels() {
        const targetPanel = document.querySelector('.geofs-ui-right');
        const referenceElement = document.querySelector('.geofs-pads-container'); // Element we want to insert before
        let modButton = document.getElementById(MOD_BUTTON_ID);

        if (!targetPanel) {
            return false;
        }

        // Only create if it doesn't exist AND the reference element is found
        if (!modButton && referenceElement) {
            modButton = document.createElement('button');
            modButton.id = MOD_BUTTON_ID;
            modButton.className = 'geofs-button geofs-icon';
            modButton.innerHTML = '&#x1F50D;'; // Magnifying glass icon (Unicode)
            modButton.title = 'Search Airport Taxi Charts';
            modButton.onclick = toggleSearchPanel;

            // Basic styling for GeoFS button, adjust margins as needed
            modButton.style.cssText = `
                font-size: 1.2em;
                padding: 5px 10px;
                display: flex;
                align-items: center;
                justify-content: center;
                height: 40px;
                line-height: 40px;
                margin-left: 5px; /* Spacing from the left */
                margin-bottom: 10px; /* Spacing above the pads container */
                box-sizing: border-box;
                z-index: 999;
                background-color: grey !important; /* Blue for 'attempted re-insertion' */
                transparency: 50%
                color: white !important;
                border: 2px solid white !important;
                box-shadow: 0 0 10px rgba(255,255,0,0.5) !important;
            `;

            targetPanel.insertBefore(modButton, referenceElement); // Insert before the pads container
            console.log('GeoFS Taxi Charts: Mod button CREATED and inserted before .geofs-pads-container.');
        } else if (modButton && referenceElement && !targetPanel.contains(modButton)) {
            // If button exists but detached and reference element is there, re-insert
            console.log('GeoFS Taxi Charts: Mod button found but not in .geofs-ui-right or not before .geofs-pads-container. Re-inserting.');
            targetPanel.insertBefore(modButton, referenceElement);
            modButton.style.backgroundColor = '#FF5733 !important'; // Orange for 're-inserted'
        } else if (modButton && targetPanel.contains(modButton)) {
            // If button exists and is already in the right place, keep its color green
            // console.log('GeoFS Taxi Charts: Mod button already exists and is correctly placed.');
            modButton.style.backgroundColor = '#4CAF50 !important'; // Green for 'stable'
        } else if (!referenceElement) {
            console.warn('GeoFS Taxi Charts: .geofs-pads-container not found. Cannot precisely place button. Appending to .geofs-ui-right instead.');
            // Fallback: If pads container isn't there, just append to .geofs-ui-right
            if (!modButton) {
                modButton = document.createElement('button');
                modButton.id = MOD_BUTTON_ID;
                modButton.className = 'geofs-button geofs-icon';
                modButton.innerHTML = '&#x1F50D;';
                modButton.title = 'Search Airport Taxi Charts';
                modButton.onclick = toggleSearchPanel;
                modButton.style.cssText = `
                    font-size: 1.2em; padding: 5px 10px; display: flex; align-items: center;
                    justify-content: center; height: 40px; line-height: 40px; margin-left: 5px;
                    box-sizing: border-box; z-index: 999; background-color: #008CBA !important;
                    color: white !important; border: 2px solid yellow !important;
                    box-shadow: 0 0 10px rgba(255,255,0,0.5) !important;
                `;
            }
            targetPanel.appendChild(modButton);
        }


        const checkButton = document.getElementById(MOD_BUTTON_ID);
        if (checkButton) {
            const computedStyle = window.getComputedStyle(checkButton);
            if (computedStyle.display === 'none' || computedStyle.opacity === '0' || computedStyle.visibility === 'hidden' || parseInt(computedStyle.width) === 0 || parseInt(computedStyle.height) === 0) {
                console.warn('GeoFS Taxi Charts: WARNING: Mod button appears to be hidden or zero-sized. Forcing visibility.');
                checkButton.style.setProperty('display', 'flex', 'important');
                checkButton.style.setProperty('opacity', '1', 'important');
                checkButton.style.setProperty('visibility', 'visible', 'important');
                checkButton.style.setProperty('width', '40px', 'important');
                checkButton.style.setProperty('height', '40px', 'important');
            }
        }
        return true;
    }

function createOtherUIElements() {
        if (document.getElementById(SEARCH_PANEL_ID) && document.getElementById(CHART_DISPLAY_ID)) {
            return;
        }

        console.log('GeoFS Taxi Charts: Creating search panel and chart display.');

        const searchPanel = document.createElement('div');
        searchPanel.id = SEARCH_PANEL_ID;
        searchPanel.style.cssText = `
            position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
            background-color: rgba(0, 0, 0, 0.95); border: 2px solid #555; padding: 25px;
            z-index: 100002; color: white; display: none; border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5); text-align: center;
            min-width: 300px;
        `;
        document.body.appendChild(searchPanel);

        const closeSearchButton = document.createElement('button');
        closeSearchButton.innerText = 'X';
        closeSearchButton.style.cssText = `
            position: absolute; top: 8px; right: 8px;
            background: rgba(255, 255, 255, 0.2); border: none; color: white;
            font-size: 1.5em; cursor: pointer; width: 35px; height: 35px; border-radius: 50%;
            display: flex; justify-content: center; align-items: center;
            transition: background-color 0.2s;
        `;
        closeSearchButton.onmouseover = function() { this.style.backgroundColor = 'rgba(255, 255, 255, 0.3)'; };
        closeSearchButton.onmouseout = function() { this.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'; };
        closeSearchButton.onclick = toggleSearchPanel; // Close search panel
        searchPanel.appendChild(closeSearchButton);

        const inputLabel = document.createElement('label');
        inputLabel.innerText = 'Enter ICAO Code: ';
        inputLabel.style.marginRight = '10px';
        inputLabel.style.fontSize = '1.1em';
        searchPanel.appendChild(inputLabel);

        const icaoInput = document.createElement('input');
        icaoInput.id = 'geofs-icao-search-input';
        icaoInput.type = 'text';
        icaoInput.placeholder = 'e.g., EGLL, KSFO';
        icaoInput.style.cssText = `
            padding: 10px; border: 1px solid #777; background-color: #333;
            color: white; border-radius: 5px; margin-right: 10px;
            width: 150px; text-transform: uppercase; font-size: 1em;
        `;

        // --- NEW CODE FOR EVENT STOPPING ---
        icaoInput.addEventListener('keydown', (event) => {
            event.stopPropagation(); // Prevent the event from bubbling up to the game
        });
        icaoInput.addEventListener('keyup', (event) => {
            event.stopPropagation(); // Prevent the event from bubbling up to the game
        });
        // You might also want to stop 'keypress'
        icaoInput.addEventListener('keypress', (event) => {
            event.stopPropagation(); // Prevent the event from bubbling up to the game
        });
        // --- END NEW CODE ---

        icaoInput.addEventListener('keypress', (event) => { // This listener was already here, keep it for 'Enter' key
            if (event.key === 'Enter') {
                searchButton.click();
            }
        });
        searchPanel.appendChild(icaoInput);

        const searchButton = document.createElement('button');
        searchButton.innerText = 'Search';
        searchButton.className = 'geofs-button';
        searchButton.style.cssText = `
            padding: 10px 20px; font-size: 1em; border-radius: 5px;
            background-color: #007bff; color: white; border: none; cursor: pointer;
            transition: background-color 0.2s;
        `;
        searchButton.onmouseover = function() { this.style.backgroundColor = '#0056b3'; };
        searchButton.onmouseout = function() { this.style.backgroundColor = '#007bff'; };
        searchButton.onclick = () => {
            const icao = icaoInput.value.trim().toUpperCase();
            if (icao) {
                lastSearchedIcao = icao; // Store the searched ICAO
                displayChart(icao);
                toggleSearchPanel(); // Close the search panel
            } else {
                alert('Please enter an ICAO code.');
            }
        };
        searchPanel.appendChild(searchButton);

        const chartDisplayDiv = document.createElement('div');
        chartDisplayDiv.id = CHART_DISPLAY_ID;
        chartDisplayDiv.style.cssText = `
            position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
            background-color: rgba(0, 0, 0, 0.85); border: 2px solid #555; padding: 15px;
            z-index: 100000; max-width: 95vw; max-height: 95vh; overflow: auto;
            color: white; display: none; border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        `;
        document.body.appendChild(chartDisplayDiv);

        const closeChartButton = document.createElement('button');
        closeChartButton.innerText = 'X';
        closeChartButton.style.cssText = `
            position: absolute; top: 8px; right: 8px;
            background: rgba(255, 255, 255, 0.2); border: none; color: white;
            font-size: 1.5em; cursor: pointer; width: 35px; height: 35px; border-radius: 50%;
            display: flex; justify-content: center; align-items: center;
            transition: background-color 0.2s;
        `;
        closeChartButton.onmouseover = function() { this.style.backgroundColor = 'rgba(255, 255, 255, 0.3)'; };
        closeChartButton.onmouseout = function() { this.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'; };
        closeChartButton.onclick = hideChart;
        chartDisplayDiv.appendChild(closeChartButton);

        GM_addStyle(`
            #${CHART_DISPLAY_ID} img {
                border: 1px solid #777; margin-top: 10px; display: block;
            }
            #${CHART_DISPLAY_ID} p {
                margin: 5px 0; text-align: center;
            }
            .geofs-button {
                background: linear-gradient(to bottom, #4CAF50, #45a049);
                border: 1px solid #4CAF50;
                color: white;
                font-weight: bold;
                text-shadow: 0px 1px 1px rgba(0,0,0,0.3);
                border-radius: 4px;
                cursor: pointer;
                transition: background-color 0.2s;
                height: 40px;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                padding: 0 15px;
            }
            .geofs-button:hover {
                background: linear-gradient(to bottom, #45a049, #3e8e41);
            }
        `);
    }

    // --- Main Execution ---

    loadChartData()
        .then(() => {
            console.log('GeoFS Taxi Charts: Chart data loaded. Starting UI observation and persistence.');

            createModButtonAndPanels();
            createOtherUIElements();

            const observer = new MutationObserver((mutationsList, observer) => {
                const targetPanel = document.querySelector('.geofs-ui-right');
                const referenceElement = document.querySelector('.geofs-pads-container');
                if (targetPanel && referenceElement && !uiCreated) {
                    console.log('GeoFS Taxi Charts: MutationObserver detected .geofs-ui-right and .geofs-pads-container. Triggering button creation/check.');
                    createModButtonAndPanels();
                    createOtherUIElements();
                    uiCreated = true;
                }
            });

            observer.observe(document.documentElement, { childList: true, subtree: true });

            buttonReinsertionInterval = setInterval(() => {
                const modButton = document.getElementById(MOD_BUTTON_ID);
                const targetPanel = document.querySelector('.geofs-ui-right');
                const referenceElement = document.querySelector('.geofs-pads-container');

                if (!targetPanel) {
                    return;
                }

                // Check if button exists and is in the correct parent and position
                const isButtonCorrectlyPlaced = modButton &&
                                                targetPanel.contains(modButton) &&
                                                (referenceElement ? modButton.nextSibling === referenceElement : true); // Check if it's right before reference or just in target if no reference

                if (!isButtonCorrectlyPlaced) {
                    console.warn('GeoFS Taxi Charts: Persistent check: Mod button disappeared or was detached/misplaced from .geofs-ui-right! Attempting re-insertion.');
                    createModButtonAndPanels(); // This will re-insert it
                }
            }, 2000);

            setTimeout(() => {
                if (!uiCreated) {
                    console.warn('GeoFS Taxi Charts: Long timeout triggered. UI not created by observer or interval. Final attempt at creation.');
                    createModButtonAndPanels();
                    createOtherUIElements();
                    uiCreated = true;
                }
            }, 15000);

        })
        .catch(error => {
            console.error('Failed to initialize GeoFS Taxi Charts mod due to data loading error:', error);
            alert('GeoFS Taxi Charts mod could not load airport data. See console for details.');
        });

    document.addEventListener('click', (event) => {
        const searchPanel = document.getElementById(SEARCH_PANEL_ID);
        const chartDisplay = document.getElementById(CHART_DISPLAY_ID);
        const modButton = document.getElementById(MOD_BUTTON_ID);
        const icaoInput = document.getElementById('geofs-icao-search-input'); // Get the input element

        if (searchPanel && searchPanel.style.display === 'block' &&
            !searchPanel.contains(event.target) && event.target !== modButton) {
            console.log('GeoFS Taxi Charts: Closing search panel via outside click, retaining input.');
            // Don't clear icaoInput.value here
            toggleSearchPanel(); // This will now just close the panel
        }

        if (chartDisplay && chartDisplay.style.display === 'block' &&
            !chartDisplay.contains(event.target) && event.target !== modButton && !searchPanel.contains(event.target) ) {
             console.log('GeoFS Taxi Charts: Closing chart display via outside click.');
             hideChart();
        }
    });

    window.addEventListener('beforeunload', () => {
        if (buttonReinsertionInterval) {
            clearInterval(buttonReinsertionInterval);
            console.log('GeoFS Taxi Charts: Cleared re-insertion interval.');
        }
    });

})();
};

nav();
charts();
if (pushToTalk) {
    ptt();
} else {
    ai();
}


'use strict';

const githubRepo = 'https://raw.githubusercontent.com/scitor/GeoFS/master';
let wait = 1;
(function init() {
    if (!Object.keys(aList[0]).length && wait<5) {
        return setTimeout(init, 1000 * wait++);
    }
    geofs.randomJobs = new RandomJobsMod(aList, aIndex, '0.8.6.1171');
    geofs.randomJobs.init(() => new MainWindow(geofs.randomJobs).init());
})();


const waitForGeoFS = setInterval(() => {
    if (typeof geofs !== "undefined" && geofs.aircraft && geofs.aircraft.instance) {
        clearInterval(waitForGeoFS);
        setTimeout(() => {
            (() => {var addonScript = document.createElement('script');
            addonScript.src="https://raw.githack.com/geofs-pilot/GeoFS-All-in-one-Addon/main/main.js";
            document.body.appendChild(addonScript);})()
            console.log("GeoFS loaded, running addons…");
        }, 1000);
    }
}, 100);
