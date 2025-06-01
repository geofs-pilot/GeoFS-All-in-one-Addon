function menus() {
    function createAddonManager() {
        const geofsPreferencesPanel = document.querySelector('.geofs-list.geofs-toggle-panel.geofs-preference-list');


        const addonListItem = document.createElement('li');
        addonListItem.className = 'geofs-list-collapsible-item';
        addonListItem.innerText = 'Addons';


        const dropdownIcon = document.createElement('li');
        dropdownIcon.className = 'geofs-collapsible-item::before';
        dropdownIcon.style.marginRight = '5px';


        addonListItem.appendChild(dropdownIcon);


        const addonContent = document.createElement('div');


        addonContent.className = 'geofs-list';
        addonContent.style.display = 'none';


        addonListItem.appendChild(addonContent);


        addonListItem.onclick = () => {
            const isVisible = addonContent.style.display === 'block';
            addonContent.style.display = isVisible ? 'none' : 'block';
            dropdownIcon.style.transform = isVisible ? 'rotate(0deg)' : 'rotate(90deg)';
        };


            //ADDON DESCRIPTIONS GO HERE:
        const descriptions = {
            'AI ATC': `***works with tampermonkey only, see the GitHub page***


            Uses PuterJS GPT and speech-to-text to provide AI air traffic control
            Type a message using Ctrl+click (or [D] if using PTT version)
            You have to be within 50 nautical miles of the airport to talk to it
            Click on the radio icon to tune in to different airport; you can tune to a particular airport ATC by using their ICAO code
            If ATC tells you to wait for instructions, you must check in with them every 10-20 seconds
            You must specify which runway you want to land on`,


            'Autoland++': `Automatically deploys spoilers, disables autopilot, and activates reverse thrust on touchdown. Arm using [Shift]. `,


            'Autothrottle': `Regulates aircraft speed while retaining pilot control`,


            'Better NAV Map': `***works with tampermonkey only, see the GitHub page***


            Changes the navigation map of GeoFS to another tile provider`,


            'Camera cycling': `Randomly cycles through the camera angles for each airplane every 30 seconds. You can toggle this on and off by pressing [W]. By default, it excludes cockpit-less cam, free cam, chase cam and fixed cam.`,
            
            'Extra vehicles': `Extra vehicles in GeoFS presented by JXT`,


            'Failures': `Adds the ability for systems to fail (you have to enable it first)
            -Landing gear
            -Fuel leak
            -Flight control
            -Electrical
            -Structural
            -Hydraulic
            -Pressurization
            -Engines `,


            'Flight path vector': `Shows approximately where your flight path intersects the ground. Hidden by pressing [Insert]`,


            'Fuel': `Simulates fuel consumption by calculating burn rate from throttle setting and fuel capacity from aircraft mass. To refuel, you must be on the ground, stationary, and have engines off`,


            'GPWS': `Adds GPWS callouts (airliners)
            For the minimums to work, you need to type in the BAROMETRIC (MSL) minimum altitude/desision height (without the-½) as defined at the bottom of the IFR approach plate.
            For the Glideslope alarm to work, you must be tuned into an ILS.
            For some of the callouts to work, you must be descending.
            `,


            'Information display': `Displays Indicated Airspeed, Mach, Ground Speed, Altitude, Above Ground Level, Heading, Vertical Speed, Throttle %, AOA, Glideslope angle (must be tuned into ILS), G-force, and status of overpowered engines, camera cycling, and fuel`,


            'Landing stats': `Upon landing, displays vertical speed, G-forces, airspeed, roll, tilt, TDZ accuracy, and more. For the TDZ to work you must be tuned into ILS `,


            'Overpowered engines': `Sets the engine thrust to 6x the normal thrust, and the ceiling to 300,000 feet.
            Toggle using [Q]`,


            'Pushback': `Adds pushback tugs for most military and civilian aircraft which appear if you are stationary.`,


            'Random Jobs': `***works with tampermonkey only, see the GitHub page***


            Shows flights departing from the airport you are currently at and can also load flight plans for those routes
            Tracks your completed flights under “Career”`,


            'Realism pack': `Toggle button for KCAS/KTAS instruments
            Fixed PFD/HUD sizes for all CC aircraft
            Blackout over 9 Gs (cockpit view only)
            Fighter condensation effects
            SSR shaders by AriakimTaiyo 
            Immersion sounds for A320/A220/A350, 737/777 
            Helicopter rotor strikes cause crashes
            Basic propwash
            Livery Selector by Kolos26 (use alone if Realism Pack crashes)
            Bug fixes for F-14, XB-70
            F-14 swing wing physics
            8 addon aircraft: (note: these aircraft may not have full functionality and often buggy)
            F/A-18C: Tailhook, paddle switch (G-limiter override)
            Su-27: Cobra button (not Su-35)
            MiG-17
            E-7 Wedgetail AWACS
            MiG-21: X toggles drop tank
            Morane-Saulnier Type G
            F-117 Nighthawk
            F-14A Tomcat: More realistic physics than F-14B
            Paddle switch/Cobra button: ["] (apostrophe/quotation mark)
            Clickable cockpits:
            Piper Cub: Mixture (toggles engine)
            Cessna 172: Throttle, mixture (toggles engine)
            Embraer Phenom 100: Throttle, landing gear, parking brake
            DHC-6 Twin Otter: Flaps
            Douglas DC-3: Flaps, throttle, mixture, magnetos (both must be on for auto-start)
            Alisport Silent 2: Speedbrake, flaps
            DHC-2 Beaver: Flaps, throttle, mixture (toggles engine), water rudders
            Airbus A380: Speedbrake
            Minor F-16 sound tweak (directional)
            Sonic booms & high-G sounds
            Stall buffet camera effect 
            Lift-based wingflex for most CC airliners 
            Realism fixes: HAL Tejas, F-15, F-22
            Tricky Corsair startup (advance throttle slightly)
            F-16 brake parachute
            Turbofan spool-up delay (10%-70% RPM)
            Advanced 2D Clouds Gen V1
            Fighter jet ejection seats ([E] to eject, [B] to descend faster)
            HUD machmeter
            Lag reduction`,


            'Sky Dolly': `Adds the functionality of the Sky Dolly MSFS addon. Specifically, the formation mode and logbook. To use it, open up the GMenu (the little GeoFS icon at the bottom) and click on "Open GUI". To start a new recording, press "Start new recording." To stop recording, press the "Stop Recording" button. Then, press "Update Window" to show the recording, enable it with the checkbox, and press "Save" to save changes. Then, rewind the time slider and press "Start Playback" to see your plane fly (or fly with it).`,


            'Slew mode': `Mimics slew mode from FSX
            Toggle: [Y]
            Fwd: [I]
            Back: [K]
            Left: [J]
            Right: [L]
            Up:[U]
            Down: [Enter]
            Yaw right: [.]
            Yaw left: [,]
            Roll right: [→]
            Roll left: [←]
            Tilt up: [↑]
            Tilt downL: [↓]`,


            'UI tweaks': `Adds a popout chat. Mouse wheel functionality was added to GeoFS natively.`
        };
        
        function addAddon(name) {
            const descriptionText = descriptions[name] || 'No description available.';
            const addonItem = document.createElement('ul');
            addonItem.className = 'no-hover geofs-list-collapsible-item geofs-hideForApp';
            addonItem.style.position = 'relative';
            addonItem.style.backgroundColor = 'rgba(255, 255, 255, 0.5)'


            addonItem.innerText = name;


            const descDropdownIcon = document.createElement('li');
            descDropdownIcon.className = 'geofs-collapsible-item::before';
            descDropdownIcon.style.marginRight = '5px';


            const description = document.createElement('li');
            description.className = 'geofs-list-item-description';
            description.innerText = descriptionText;
            description.style.display = 'none';
            description.style.lineHeight = '1.1';
            description.style.paddingRight = '15px';




            addonItem.onclick = (event) => {
                event.stopPropagation();
                const descIsVisible = description.style.display === 'block';
                description.style.display = descIsVisible ? 'none' : 'block';
                descDropdownIcon.style.transform = descIsVisible ? 'rotate(0deg)' : 'rotate(90deg)';
                const isVisible = addonContent.style.display === 'block';
                addonContent.style.display = isVisible ? 'none' : 'block';
                dropdownIcon.style.transform = isVisible ? 'rotate(0deg)' : 'rotate(90deg)';
            };


            addonItem.appendChild(description);
            addonListItem.appendChild(addonItem);
            addonListItem.appendChild(addonContent);
        }
        //ADDON NAMES GO HERE:
        addAddon('AI ATC');
        addAddon('Ad remover');
        addAddon('Autoland++');
        addAddon('Autothrottle');
        addAddon('Better NAV Map');
        addAddon('Camera cycling');
        addAddon('Extra vehicles');
        addAddon('Failures');
        addAddon('Flight path vector');
        addAddon('Fuel');
        addAddon('GPWS');
        addAddon('Information display');
        addAddon('Landing stats');
        addAddon('Overpowered engines');
        addAddon('Pushback');
        addAddon('Random Jobs')
        addAddon('Realism pack');
        addAddon('Sky Dolly');
        addAddon('Slew mode');
        addAddon('Taxiway lights');
        addAddon('Taxiway signs');
        addAddon('UI tweaks');


        geofsPreferencesPanel.appendChild(addonListItem);
    }


    function createInstructions() {
        const geofsPreferencesPanel = document.querySelector('.geofs-list.geofs-toggle-panel.geofs-preference-list');


        const instructionListItem = document.createElement('li');
        instructionListItem.className = 'geofs-list-collapsible-item';
        instructionListItem.innerText = 'Procedures';




        const dropdownIcon = document.createElement('li');
        dropdownIcon.className = 'geofs-collapsible-item::before';
        dropdownIcon.style.marginRight = '5px';


        instructionListItem.appendChild(dropdownIcon);


        const instructionContent = document.createElement('div');


        instructionContent.className = 'geofs-list';
        instructionContent.style.display = 'none';


        instructionListItem.appendChild(instructionContent);


        instructionListItem.onclick = () => {
            const isVisible = instructionContent.style.display === 'block';
            instructionContent.style.display = isVisible ? 'none' : 'block';
            dropdownIcon.style.transform = isVisible ? 'rotate(0deg)' : 'rotate(90deg)';
        };




        
            //INSTRUCTIONS GO HERE:
        const descriptions = {
            'Preflight procedures': `Review procedures
            Load/create flight plan
            Check METAR, decide on VFR or IFR
            Check elevations of departure and arrival airports
            Choose suitable cruise altitude (for short flights, 10x distance eg. 150nm→15000ft)
            Check duration, fuel range, choose suitable aircraft
            Calculate top of descent (0.003x cruise alt minus airport elevation)
            Load in aircraft at gate, recheck everything, check controls, pushback`,


            'VFR rules': `
            1. Weather Minimums:
            Maintain specific visibility and cloud clearance (refer to below).
            Visual Reference:
            Always fly with visual reference to the ground or horizon.
            Daytime and Nighttime:
            VFR can be conducted during the day and night (night VFR requires additional training and equipment).
            2. Altitude Rules (Cruising Altitudes):
            Above 3,000 feet AGL and below 18,000 feet MSL:
            Fly odd thousand + 500 feet (e.g., 3,500, 5,500) when heading east (0°-179°).
            Fly even thousand + 500 feet (e.g., 4,500, 6,500) when heading west (180°-359°).
            3. Airspace Requirements:
            Class A: VFR not permitted.
            Class B: Requires explicit ATC clearance and two-way radio communication.
            Class C and D: Requires two-way radio communication before entering.
            Class E and G: No ATC clearance required unless specified (Class E surface area airports).
            4. Weather Minimums by Airspace:
            Class B: 3SM vis, clear of clouds
            Class C/D: 3SM vis, 500ft below clouds, or 1000ft above clouds, 2000ft horizontal
            Class E: 3SM vis below 10000, 5SM vis above; cloud clearance same as C/D (below 10K), 1000 below and above and 1SM horizontal (above 10K)
            Class G: 1SM vis (day, below 1200AGL), 3SM (night); clear of clouds below 1200 AGL, cloud clearance same as C/D above 1200AGL
            5. Equipment Requirements:
            Day VFR:
            Altimeter, airspeed indicator, compass, tachometer, oil pressure gauge, temperature gauge (liquid-cooled engines), fuel gauges, and more (refer to FAR 91.205).
            Night VFR:
            Add navigation lights, anti-collision lights, an electrical source, and a spare set of fuses.
            6. Minimum Safe Altitudes:
            1,000 feet above highest obstacle in congested areas.
            500 feet above surface in uncongested areas.
            Do not operate closer than 500 feet to people, vessels, or structures in sparsely populated areas.
            7. Right-of-Way Rules:
            Yield to aircraft in distress.
            Aircraft being overtaken has the right of way.
            Converging aircraft: The aircraft on the right has the right of way.
            Powered aircraft yield to balloons, gliders, and airships.
            8. Key Limitations:
            VFR flight not allowed above FL180 (Class A airspace).
            Special VFR (SVFR) may be requested to operate in controlled airspace below VFR minimums (must remain clear of clouds).`,
            
            'IFR rules': `
            1. Basic Requirements:
            Purpose: IFR is used when visual navigation is not possible, such as in low visibility or poor weather conditions.
            Flight Plan: A filed and approved IFR flight plan is mandatory before operating under IFR.
            Clearance: Pilots must receive ATC clearance to operate under IFR.
            2. Weather Minimums:
            No Visual Reference Required: IFR flights can be conducted in instrument meteorological conditions (IMC), such as clouds, fog, or other conditions below VFR weather minimums.
            Approach Minimums: Specific weather conditions for instrument approaches are based on published approach plates (e.g., decision height, visibility).
            3. Equipment Requirements (FAR 91.205): The following equipment is required for IFR flight:
            VFR Equipment: All instruments and equipment required for VFR flight.
            Navigation Instruments:
            Two-way radio communication.
            Navigation equipment suitable for the route and approach (e.g., VOR, GPS).
            Additional Instruments:
            Gyroscopic pitch and bank indicator (attitude indicator).
            Gyroscopic direction indicator (heading indicator).
            Slip-skid indicator.
            Sensitive altimeter adjustable for barometric pressure.
            Clock with sweep-second hand or digital equivalent.
            Generator or alternator.
            Gyroscopic turn and bank indicator.
            4. Clearance Requirements:
            Clearance Delivery: ATC clearance is required before entering controlled airspace under IFR.
            Route Compliance: Follow the route and altitude as specified in the clearance.
            Amendments: Notify ATC of deviations due to weather or emergencies.
            5. Altitude Rules:
            Assigned Altitudes: Fly the altitude assigned by ATC.
            Minimum Enroute Altitude (MEA): Fly no lower than the MEA on published routes.
            Off Route: Maintain at least 1,000 feet (2,000 feet in mountainous areas) above obstacles within 4 nautical miles of course.
            6. Instrument Approaches:
            Types of Approaches:
            Precision Approaches (e.g., ILS): Provides lateral and vertical guidance.
            Non-Precision Approaches (e.g., VOR, RNAV): Provides lateral guidance only.
            Decision Altitude (DA)/Decision Height (DH): Point at which a landing decision must be made during a precision approach.
            Minimum Descent Altitude (MDA): The lowest altitude to descend during a non-precision approach until visual contact is made.
            7. Lost Communication Procedures (FAR 91.185): If radio communication is lost:
            Route: Follow the last assigned route, expected route, or as filed in your flight plan (in that order).
            Altitude: Fly the highest of:
            -Last assigned altitude.
            -Minimum enroute altitude (MEA).
            -Expected altitude.
            8. Holding Patterns:
            Follow standard ATC instructions or published holding patterns.
            Standard Turns: Right-hand turns are standard unless otherwise specified.
            9. Alternate Airport Requirements:
            IFR flights require an alternate airport in the flight plan unless specific conditions are met:
            Destination has at least 2,000-foot ceilings and 3 SM visibility within 1 hour of ETA.
            10. Key Safety Practices:
            Scan Instruments: Maintain situational awareness through regular instrument scanning.
            ATC Communication: Maintain constant communication and promptly respond to instructions.
            Currency: Pilots must meet instrument proficiency requirements (e.g., six instrument approaches, holding procedures, and tracking within the last six months).`,


            'Other rules, METAR, sectional charts, airspace': `
            Speed limits: 
            250 kts below FL100
            Mach 1 above FL100
            No person may operate an aircraft beneath Class B airspace, or in a VFR corridor through Class B, at an indicated airspeed of more than 200 knots
            No person may operate an aircraft at an indicated airspeed of more than 200 knots at or below 2,500 feet above the surface, within 4 nautical miles of the primary Class C or Class D airport.
            UNLESS: the minimum safe speed of an operation exceeds the speed limit, in which case a pilot can fly at that minimum speed.


            Standard Rate Turns: Speed / 10 + 7 = bank angle


            Decoding METAR
            PHNL 250953Z 05007G17KT 10SM FEW024 FEW040 27/19 A3001 RMK AO2 SLP163 T02670194 403220261
            PHNL: Location
            -250953Z: 25th of the month, time 09:53 GMT
            -05007G17K: Wind heading 050, 7 kts, gusting up to 17 kts, also note: 00000=no wind, VRB=variable
            -10SM: visibility 10 statute miles, can also be in meters
            -FEW024: Few clouds, 2400 ft AGL, also SCT=scattered, BKN=broken, OVC=overcast, CB=cumulonimbus, TCU=towering CB, CAVOK=cloud and visibility OK
            -FEW040: Few clouds, 4000 ft AGL
            27/19: Temp 27C, Dewpoint 19C
            -A3001: Atmospheric pressure 30.01Hg, can also be in mb, Hp
            -RMK: Remarks
            -A02: Automated station with precipitation sensor
            -SLP163: Sea Level Pressure 1016.3 mb
            -T02670194: Detailed temp: 26.7C, dewpoint 19.4C
            -403220261: 24-hour high and low (as indicated by the 4), positive (as indicated by the 0s): 32.2C, 26.1C 


            -Additional cloud classification: (eg. 8/903) note: 0 = no clouds
            First number: the numerator of a fraction /8, representing sky coverage
            Second number: Low clouds
            1 = cumulus humilis or fractus
            2 = cumulus mediocris or congestus
            3 = cumulonimbus calvus
            4 = stratocumulus cumulogenitus
            5 = stratocumulus other than cumulogenitus
            6 = stratus nebulosus or fractus
            7 = stratus fractus or cumulus fractus (bad weather type)
            8 = cumulus and stratocumulos together
            9 = cumulonimbus capillatus (anvil)
            3rd number: Mid clouds 
            1 = altostratus translucidus
            2 = altostratus opacus or nimbostratus
            3 = altocumulus translucidus
            4 = patches of altocumulus, variable cover
            5 = altocumulus in bands/layers
            6 = altocumulus cumulogenitus
            7 = altocumulus castellanus
            8 = altocumulus lenticularis
            9 = altocumulus with turrets/towers
            4th number: High clouds
            1 = cirrus fibratus, not increasing
            2 = cirrus spissatus
            3 = cirrus castellanus or floccus
            4 = cirrus fibratus, increasing
            5 = cirrus and cirrostratus, increasing 
            7 = cirrostratus covering sky
            8 = only cirrocumulus
            9 = cirrocumulus with cirrostratus or cirrus


            Blue Airport Symbol – Towered airport
            Magenta Airport Symbol – Non-towered airport
            Runway Layout – Pictorial representation of paved runways longer than 8069 ft
            Hollow Circle with ‘X’ – Abandoned airport
            ‘R’ inside a Circle – Private airport (permission required)
            ‘H’ inside a Circle – Heliport
            ‘U’ inside a Circle – Ultralight field
            Seaplane Base Anchor Symbol – Water landing area


            Airspace Boundaries
            Solid Blue Line – Class B airspace
            Solid Magenta Line – Class C airspace
            Dashed Blue Line – Class D airspace
            Dashed Magenta Line – Class E airspace starting at the surface
            Fading Magenta Line – Class E airspace starting at 700 ft AGL
            Fading Blue Line – Class E airspace starting at 1200 ft AGL
            Prohibited/Restricted Areas (P-XXX/R-XXX) – Special-use airspace requiring clearance
            Warning/MOA/Alert Areas (W-XXX, MOA-XXX, A-XXX) – Military or hazardous flight activity
            National Security Areas (NSA) – Sensitive areas requiring caution


            Navigational Aids (NAVAIDs)
            Blue Hexagon with Dot in Center – VOR station
            Blue Hexagon with Box and Dashes – VOR-DME station
            Blue Hexagon with Small Rectangle Below – VORTAC station
            Magenta Circle with Box – NDB (Non-Directional Beacon)
            Magenta Circle with Star – NDB with limited service
            Radio & Communication Symbols
            ‘C’ in a Circle – CTAF (Common Traffic Advisory Frequency)
            ‘L’ in a Circle – Lighting available
            *‘L’ in a Circle – Pilot-controlled lighting
            ‘*’ Next to a Frequency – Part-time operation


            Obstructions & Terrain
            Black Dot with Tower Symbol – Obstruction below 1000 ft AGL
            Black Dot with Tower & Number – Obstruction with height in feet MSL
            Tower with Lightning Bolt – Obstruction with lighting
            Two Towers with Line Between – Powerline or cable crossing
            Brown Contour Lines – Terrain elevation
            Large Numbers in Brown – Maximum Elevation Figure (MEF) in thousands of feet MSL
            Landmarks & Features
            City Name in Bold – Major populated area
            Magenta Open Circle – VFR Waypoint
            Railroad Line – Black line with cross-hatches
            Major Roads – Black solid lines
            Interstate Highways – Blue solid lines
            Bridges, Tunnels, Dams – Small black icons


            Other Important Symbols
            ‘VR-XXX’ or ‘IR-XXX’ – Military Training Routes (Visual/Instrument)
            ADIZ Boundary Line – Solid magenta or blue lines with notches
            Glider Symbol – Designated glider operations
            Parachute Symbol – Active parachute jump area
            Hot Air Balloon Symbol – Balloon operations area


            Airspace Classes
            1. Class A (High-level, controlled airspace)
            Altitude: Generally from 18,000 feet MSL (Mean Sea Level) up to 60,000 feet MSL.
            Control: Strictly controlled and requires ATC (Air Traffic Control) clearance for all aircraft operations.
            Flight Rules: Only IFR (Instrument Flight Rules) are permitted.
            Communication: Continuous two-way communication with ATC is mandatory.
            Usage: Primarily for commercial airline routes and high-altitude flights.
            2. Class B (Terminal airspace around major airports)
            Altitude: Extends from the surface up to 10,000 feet MSL, surrounding major airports.
            Control: Also highly controlled; ATC clearance is required to enter and operate within this airspace.
            Flight Rules: VFR (Visual Flight Rules) and IFR are allowed, but VFR flights need to obtain ATC permission before entry.
            Communication: Continuous two-way communication with ATC is required.
            Usage: Primarily around busy, large airports like Los Angeles (LAX), Chicago O'Hare (ORD), etc.
            3. Class C (Controlled airspace around airports)
            Altitude: From the surface to 4,000 feet above the airport elevation.
            Control: Requires ATC communication to enter; VFR pilots must establish two-way communication with ATC before entering.
            Flight Rules: Both VFR and IFR can operate, but communication with ATC is necessary for VFR operations.
            Communication: Two-way communication is required for VFR flights entering Class C.
            Usage: Typically used for airports with moderate traffic, such as regional airports.
            4. Class D (Controlled airspace around smaller airports)
            Altitude: From the surface up to around 2,500 feet above the airport elevation.
            Control: ATC clearance is required to enter and operate within Class D airspace, but the communication requirement is only for IFR flights.
            Flight Rules: VFR flights are allowed without ATC clearance but must establish communication with ATC before entering.
            Communication: Two-way communication is required before entering or operating in Class D.
            Usage: Smaller regional airports with moderate traffic.
            5. Class E (Controlled airspace for non-towered areas)
            Altitude: It extends from 1,200 feet AGL (Above Ground Level) up to 18,000 feet MSL and also includes some airspace surrounding airports and along certain airways.
            Control: Class E airspace is controlled airspace but can be used for both VFR and IFR flights.
            Flight Rules: Both VFR and IFR are allowed, but IFR flights are given priority for ATC services.
            Communication: Communication with ATC is only required under IFR.
            Usage: Class E is common in areas where there are fewer commercial air traffic routes or in areas where no other controlled airspace is needed.
            6. Class G (Uncontrolled airspace)
            Altitude: From the surface up to 1,200 feet AGL in some areas, and in some remote locations, it can extend up to 14,500 feet AGL.
            Control: Class G airspace is uncontrolled, meaning ATC does not provide services, although IFR flights must still follow certain rules.
            Flight Rules: VFR is typically allowed without ATC communication, but IFR flights must remain in contact with ATC.
            Communication: No communication with ATC is required for VFR flights.
            Usage: This airspace is used primarily in rural and less-traveled areas.`,


            'ATC procedures': `1. Preflight and Clearance
            Pilot (to Clearance Delivery):
            "JFK Clearance, American 123, IFR to Miami, ready to copy clearance."
            ATC (Response):
            "American 123, cleared to Miami via Kennedy Six departure, radar vectors to White intersection, then as filed. Climb and maintain 5,000 feet. Departure frequency 124.7. Squawk 4572."
            Pilot (Acknowledges):
            "Cleared to Miami via Kennedy Six departure, radar vectors to White, then as filed. Climb and maintain 5,000. Departure on 124.7. Squawk 4572, American 123."


            2. Pushback and Taxi
            Pilot (to Ground Control):
            "JFK Ground, American 123, gate B12, ready for pushback and start."
            Ground (Response):
            "American 123, pushback and start approved. Expect taxi via Alpha to runway 31L."
            Pilot (Acknowledges):
            "Pushback and start approved, taxi via Alpha to runway 31L, American 123."
            Pilot Action: Pushback from the gate, start engines, and taxi to the runway.


            3. Takeoff
            Pilot (to Tower):
            "JFK Tower, American 123, holding short of runway 31L, ready for departure."
            Tower (Response):
            "American 123, JFK Tower, runway 31L, cleared for takeoff. Climb runway heading, maintain 5,000 feet."
            Pilot (Acknowledges):
            "Cleared for takeoff, runway 31L, climb runway heading, maintain 5,000, American 123."
            Pilot Action: Line up on the runway, advance throttles, and take off.


            4. Departure
            Tower (Hands Off to Departure):
            "American 123, contact New York Departure on 124.7, good day."
            Pilot (Acknowledges):
            "Contact New York Departure on 124.7, American 123, good day."
            Pilot (to Departure):
            "New York Departure, American 123, passing 2,500 for 5,000, Kennedy Six departure."
            Departure (Response):
            "American 123, radar contact. Climb and maintain FL230. Proceed direct White."
            Pilot (Acknowledges):
            "Climb and maintain FL230, direct White, American 123."


            5. Enroute
            Pilot (to Center):
            "Atlanta Center, American 123, level at FL350."
            Center (Response):
            "American 123, Atlanta Center, roger. Continue as filed."
            Pilot Action: Monitor instruments, communicate as needed, and prepare for arrival.


            6. Arrival
            Pilot (to Approach):
            "Miami Approach, American 123, descending via the HILEY Three arrival, requesting ILS runway 8R."
            Approach (Response):
            "American 123, Miami Approach, cleared ILS runway 8R. Maintain 2,000 until established, contact Tower on 118.3."
            Pilot (Acknowledges):
            "Cleared ILS runway 8R, maintain 2,000 until established, contact Tower on 118.3, American 123."


            7. Landing and Taxi
            Pilot (to Tower):
            "Miami Tower, American 123, established on the ILS runway 8R."
            Tower (Response):
            "American 123, cleared to land, runway 8R. Wind 090 at 10 knots."
            Pilot (Acknowledges):
            "Cleared to land, runway 8R, American 123."
            After Landing (to Ground Control):
            "Miami Ground, American 123, clear of runway 8R, taxi to gate D5."
            Ground (Response):
            "American 123, taxi to gate D5 via Alpha, Bravo."
            Pilot (Acknowledges):
            "Taxi to gate D5 via Alpha, Bravo, American 123."`,


            'Climb procedures': `1) Make sure to select your first waypoint and set desired cruise altitude. Set V/S to 3000 fpm and speed to 230 kts. Set Flaps to 2 for Takeoff
            2)Raise flaps to 0 at 1500 ft AGL. Reduce thrust to 80% and engage autopilot, hold V/S at 3000 fpm and speed at 230 kts.
            3) At 4000 ft AGL, reduce V/S to 2400 fpm.
            4) At 10000 ft, increase speed to 250 kts & reduce V/S to 2200 fpm.
            5) At 18000 ft, increase speed to 270 kts & reduce V/S to 1800 fpm.
            6) At 25000 ft, increase speed to 280 kts & reduce V/S to 1500 fpm.
            7) At 30000 ft, set speed to Mach 0.76 (448 kts) & reduce V/S to 1000 fpm.
            8) At cruise altitude, set speed to desired cruise speed & set V/S to 0000 fpm if necessary`,


            'Descent procedures': `1) Calculate T/D in advance. This can be done by subtracting the arrival elevation from your cruise alt, then multiplying that by 0.003 (e.g: for cruise 32000ft with approximately 2000 ft arrival elevation, T/D will be 90nm). 
            2) At 5 nautical miles away from T/D, reduce speed to Mach 0.76 (448 kts) & set V/S to-2400 fpm.
            3) At T/D, set alt to 4000 ft
            4) At 30000 ft AGL , reduce speed to 280 kts & increase V/S to-2200 fpm
            5) At 25000 ft AGL, reduce speed to 270 kts
            6) At 18000 ft AGL, increase V/S to-1800 fpm
            7) At 12000 ft, AGL reduce speed to 250 kts
            8) At 10000 ft AGL, reduce speed to 240 kts
            9) At 7000 ft AGL, reduce speed to 230 kts & increase V/S to-1500 fpm
            10) At 5000 ft AGL, reduce speed to 210 kts & set flaps to 1
            11) At 4000 ft AGL, reduce speed to 190 kts & set flaps to 2. Set V/S to-1200 fpm & hold altitude till 12 nautical miles.
            12) At 12 nautical miles, set alt to 0 ft AGL and tune in to ILS if autolanding.
            13) At 3000 ft AGL, reduce speed to 170 kts & set flaps to 3
            14) At 2500 ft AGL, reduce speed to 160 kts & set flaps to full. Lower landing gear.
            15) Adjust V/S as necessary for approach at your discretion.
            16) Prepare to disengage AP below 1000 ft (final approach). If autolanding, disregard. Arm spoilers [Shift]`,


            'Go around procedures': `1) Announce the Go-Around
            Verbalize: "Go-Around" to notify crew or ATC.
            Communicate: Inform ATC (e.g., "Going around, [call sign]") if in controlled airspace.
            2) Apply Full Power
            Smoothly and promptly advance the throttle to full power.
            Ensure propeller and mixture are set appropriately (for piston engines).
            3) Pitch for Climb Attitude
            Establish Positive Climb: Adjust pitch to achieve the appropriate climb attitude 
            Monitor the airspeed to avoid stalling.
            4) Retract Flaps Gradually
            Retract flaps incrementally as airspeed increases, following manufacturer guidelines.
            Avoid retracting flaps all at once, which could lead to a loss of lift.
            5) Ensure Positive Rate of Climb
            Verify Vertical Speed: Ensure the aircraft is climbing by checking the VSI or altimeter.
            Gear Up: If applicable, retract the landing gear after confirming a positive rate of climb.
            6) Stabilize the Aircraft
            Maintain a consistent climb at a safe airspeed (e.g., Vy for best climb rate).
            Stay aligned with the runway centerline or follow ATC instructions for missed approach procedures.
            7) Communicate with ATC (if required)
            Inform ATC of the go-around and request further instructions. For example:
            "Missed approach, climbing to [altitude], heading [heading], [call sign]."
            8) Follow Missed Approach Procedure
            If operating under IFR or at a controlled airport, execute the published missed approach procedure.
            If VFR, reposition for another approach or leave the traffic pattern as appropriate.
            9) Assess and Plan Next Steps
            Analyze the reason for the go-around (e.g., unstable approach, obstruction on the runway, ATC instruction, etc.).
            Decide whether to attempt another landing, divert to an alternate airport, or hold for further instructions.`
        };


        function addInstruction(name) {
            const descriptionText = descriptions[name] || 'No description available.';
            const instructionItem = document.createElement('ul');
            instructionItem.className = 'no-hover geofs-list-collapsible-item geofs-hideForApp';
            instructionItem.style.position = 'relative';
            instructionItem.style.backgroundColor = 'rgba(255, 255, 255, 0.5)'
            instructionItem.innerText = name;


            const descDropdownIcon = document.createElement('li');
            descDropdownIcon.className = 'geofs-collapsible-item::before';
            descDropdownIcon.style.marginRight = '5px';


            const description = document.createElement('li');
            description.className = 'geofs-list-item-description';
            description.innerText = descriptionText;
            description.style.display = 'none';
            description.style.lineHeight = '1.1';
            description.style.paddingRight = '15px';




            instructionItem.onclick = (event) => {
                event.stopPropagation();
                const descIsVisible = description.style.display === 'block';
                description.style.display = descIsVisible ? 'none' : 'block';
                descDropdownIcon.style.transform = descIsVisible ? 'rotate(0deg)' : 'rotate(90deg)';
                const isVisible = instructionContent.style.display === 'block';
                instructionContent.style.display = isVisible ? 'none' : 'block';
                dropdownIcon.style.transform = isVisible ? 'rotate(0deg)' : 'rotate(90deg)';
            };


            instructionItem.appendChild(description);
            instructionListItem.appendChild(instructionItem);
            instructionListItem.appendChild(instructionContent);
        }
        //INSTRUCTION ITEMS GO HERE:
        addInstruction('Preflight procedures');
        addInstruction('VFR rules');
        addInstruction('IFR rules');
        addInstruction('Other rules, METAR, sectional charts, airspace');
        addInstruction('ATC procedures');
        addInstruction('Climb procedures');
        addInstruction('Descent procedures');
        addInstruction('Go around procedures');


        geofsPreferencesPanel.appendChild(instructionListItem);
    }


    function createFailures() {
        const geofsPreferencesPanel = document.querySelector('.geofs-list.geofs-toggle-panel.geofs-preference-list');


        const failureListItem = document.createElement('li');
        failureListItem.className = 'geofs-list-collapsible-item';
        failureListItem.innerText = 'Failures';




        const dropdownIcon = document.createElement('li');
        dropdownIcon.className = 'geofs-collapsible-item::before';
        dropdownIcon.style.marginRight = '5px';


        failureListItem.appendChild(dropdownIcon);


        const failureContent = document.createElement('div');


        failureContent.className = 'geofs-list';
        failureContent.style.display = 'none';


        failureListItem.appendChild(failureContent);


        failureListItem.onclick = () => {
            const isVisible = failureContent.style.display === 'block';
            failureContent.style.display = isVisible ? 'none' : 'block';
            dropdownIcon.style.transform = isVisible ? 'rotate(0deg)' : 'rotate(90deg)';
        };




            //FAILURES GO HERE:
        const descriptions = {
            'Electrical': `1. Identify and manage the failure:
            - Check circuit breakers and reset if safe to do so.
            - Turn off non-essential electrical systems.
            2. Switch to alternate power:
            - Use battery power or emergency generator (if available).
            3. Navigate and communicate:
            - Use handheld radio or emergency frequencies (121.5 MHz) if primary radios fail.
            4. Land ASAP:
            - Divert to the nearest airport with visual approach capabilities.`,


            'Fuel leak/starvation': `Fuel Leak
            1. Detect the leak:
            - Look for fuel pressure loss, quantity drop, or visible/smelled leak.
            2. Isolate the problem:
            - Shut off fuel to affected engine or tank.
            - Crossfeed fuel if necessary and possible.
            3. Plan to land:
              - Declare an emergency.
            - Divert to the nearest airport.
            4. Evacuate if required:
            - After landing, shut down engines and evacuate immediately to avoid fire risk.


            Fuel Starvation
            1. Maintain Aircraft Control
            - Establish best glide speed to maximize your glide distance.
            -Trim the aircraft for stable flight.
            2. Assess Restart Possibility
            -Switch fuel tanks to ensure all available fuel is used (if applicable).
            -Turn on the auxiliary fuel pump and check mixture settings.
            -Attempt to restart the engine by verifying ignition and throttle positions.
            3. Declare an Emergency
            -Notify ATC: Declare an emergency and provide your position and intentions.
            -Squawk 7700 on your transponder.
            -Use 121.5 MHz for distress communication if no other frequency is available.
            4. Select a Landing Site
            -Choose the best available landing area:
            -Prefer an airport if within gliding distance.
            -If no airport is reachable, look for flat, open areas such as fields or roads (away from populated areas).
            5. Execute Forced Landing
            -Glide to the landing site: Maintain best glide speed.
            -Prepare for landing:
            -Extend flaps as needed once landing is assured.
            -Secure the aircraft:
            -Shut off fuel, ignition, and electrical systems to reduce fire risk.
            -Open doors slightly to prevent them from jamming after landing.
            -Brace for impact: Ensure passengers are briefed on bracing positions.`,


            'Gear': `1. Identify the problem:
            - Check landing gear indicators and circuit breakers.
            - Attempt to cycle the landing gear (up, then down).
            2. Use backup systems:
            - Deploy manual or emergency gear extension system if available.
            3. Prepare for landing:
            - Perform a low pass for visual inspection by ATC or ground personnel.
            - Plan for a no-flap or partial-flap landing if needed.
            4. Brace for abnormal landing:
            - Land on the main gear (if one side is operable) or belly land.
            - Shut down engines and fuel before touchdown.`,


            'Hydraulic/control': `Controls Not Working (Partial/Complete Failure)
            1. Assess the extent of failure:
            - Identify which controls (pitch, roll, yaw) are inoperative.
            2. Use backup systems:
            - Engage autopilot if available to stabilize the aircraft.
            - Use trim, rudder, or asymmetric thrust for limited control.
            3. Plan an emergency landing:
            - Declare an emergency.
            - Aim for a long runway with minimal obstacles.
            4. Brace for impact:
            - Brief passengers and prepare for a hard or unconventional landing.


             Hydraulic Failure
            1. Identify the issue:
            - Check hydraulic pressure and fluid levels.
            2. Switch to alternate systems:
            - Activate backup or manual hydraulic pumps if available.
            3. Manage affected systems:
            - Use manual control for flaps, brakes, and landing gear if hydraulics are nonfunctional.
            4. Land as soon as possible:
            - Prepare for longer landing roll and reduced braking effectiveness.`,


            'Loss of cabin pressure': `1. Recognize the issue:
            - Monitor cabin altitude and oxygen levels.
            2. Don oxygen masks:
            - Ensure all passengers and crew use oxygen masks.
            3. Descend immediately:
            - Initiate an emergency descent to 10,000 feet or safe altitude.
            4. Land ASAP:
            - Divert to the nearest suitable airport.`,


            'Loss of power': `1. Establish glide:
            - Pitch for best glide speed.
            2. Restart attempt:
            - Switch fuel tanks, turn on auxiliary fuel pump, adjust mixture, and check ignition.
            3. Declare an emergency:
            - Notify ATC and squawk 7700.
            4. Select a Landing Site
            -Choose the best available landing area:
            -Prefer an airport if within gliding distance.
            -If no airport is reachable, look for flat, open areas such as fields or roads (away from populated areas).
            5. Execute Forced Landing
            -Glide to the landing site: Maintain best glide speed.
            -Prepare for landing:
            -Extend flaps as needed once landing is assured.
            -Secure the aircraft:
            -Shut off fuel, ignition, and electrical systems to reduce fire risk.
            -Open doors slightly to prevent them from jamming after landing.
            -Brace for impact: Ensure passengers are briefed on bracing positions`,


            'Structural': `1. Assess the situation:
            - Determine if the damage is controllable or catastrophic.
            - Slow to maneuvering speed (Va) to prevent further stress.
            2. Avoid further damage:
            - Limit maneuvers and avoid turbulence.
            3. Plan an emergency landing:
            - Declare an emergency and head to the nearest suitable airport.`
        };


        function addfailure(name) {
            const descriptionText = descriptions[name] || 'No description available.';
            const failureItem = document.createElement('ul');
            failureItem.className = 'no-hover geofs-list-collapsible-item geofs-hideForApp';
            failureItem.style.position = 'relative';
            failureItem.style.backgroundColor = 'rgba(255, 255, 255, 0.5)'
            failureItem.innerText = name;


            const descDropdownIcon = document.createElement('li');
            descDropdownIcon.className = 'geofs-collapsible-item::before';
            descDropdownIcon.style.marginRight = '5px';


            const description = document.createElement('li');
            description.className = 'geofs-list-item-description';
            description.innerText = descriptionText;
            description.style.display = 'none';
            description.style.lineHeight = '1.1';
            description.style.paddingRight = '15px';




            failureItem.onclick = (event) => {
                event.stopPropagation();
                const descIsVisible = description.style.display === 'block';
                description.style.display = descIsVisible ? 'none' : 'block';
                descDropdownIcon.style.transform = descIsVisible ? 'rotate(0deg)' : 'rotate(90deg)';
                const isVisible = failureContent.style.display === 'block';
                failureContent.style.display = isVisible ? 'none' : 'block';
                dropdownIcon.style.transform = isVisible ? 'rotate(0deg)' : 'rotate(90deg)';
            };


            failureItem.appendChild(description);
            failureListItem.appendChild(failureItem);
            failureListItem.appendChild(failureContent);
        }
        //FAILURE ITEMS HERE:
        addfailure('Electrical');
        addfailure('Fuel leak/starvation');
        addfailure('Gear');
        addfailure('Hydraulic/control');
        addfailure('Loss of cabin pressure');
        addfailure('Loss of power');
        addfailure('Structural');


        geofsPreferencesPanel.appendChild(failureListItem);
    }


    createAddonManager();
    createInstructions();
    createFailures();
};


function addonExecution () {


    function adblock () {
        (() => {var adblockScript = document.createElement('script'); adblockScript.src="https://raw.githack.com/RadioactivePotato/GeoFS-Ad-Remover/main/GeoFS%20Ad%20Remover-0.1.user.js";document.body.appendChild(adblockScript);})()
    };


    function autoland () {
       async function waitForCondition(t){return new Promise(i=>{let a=setInterval(()=>{t()&&(clearInterval(a),i())},100)})}async function waitForUI(){return waitForCondition(()=>"undefined"!=typeof ui)}async function waitForInstance(){return waitForCondition(()=>geofs.aircraft&&geofs.aircraft.instance)}async function waitForInstruments(){return waitForCondition(()=>instruments&&geofs.aircraft.instance.setup.instruments)}async function autospoilers(){await waitForUI(),await waitForInstance(),geofs.aircraft.instance.animationValue.spoilerArming=0;let t=()=>{geofs.aircraft.instance.groundContact||0!==controls.airbrakes.position||(geofs.aircraft.instance.animationValue.spoilerArming=0===geofs.aircraft.instance.animationValue.spoilerArming?1:0)},i=()=>{controls.airbrakes.target=0===controls.airbrakes.target?1:0,controls.setPartAnimationDelta(controls.airbrakes),geofs.aircraft.instance.animationValue.spoilerArming=0};controls.setters.setSpoilerArming={label:"Spoiler Arming",set:t},controls.setters.setAirbrakes={label:"Air Brakes",set:i},await waitForInstruments(),instruments.definitions.spoilers.overlay.overlays[3]={anchor:{x:0,y:0},size:{x:50,y:50},position:{x:0,y:0},animations:[{type:"show",value:"spoilerArming",when:[1]},{type:"hide",value:"spoilerArming",when:[0]}],class:"control-pad-dyn-label green-pad",text:"SPLR<br/>ARM",drawOrder:1},instruments.init(geofs.aircraft.instance.setup.instruments);let a=geofs.camera.currentMode,n=geofs.camera.currentFOV;window.geofs.camera.set(a),window.geofs.camera.setFOV(n),$(document).keydown(function(t){16!==t.which||t.ctrlKey||t.altKey||t.metaKey||(console.log("Toggled Arming Spoilers"),controls.setters.setSpoilerArming.set())}),setInterval(function(){1===geofs.aircraft.instance.animationValue.spoilerArming&&geofs.aircraft.instance.groundContact&&(0===controls.airbrakes.position&&controls.setters.setAirbrakes.set(),geofs.aircraft.instance.animationValue.spoilerArming=0,geofs.autopilot.setSpeed(0),setTimeout(()=>{geofs.autopilot.turnOff(),$(document).trigger("autothrottleOff")},200),setTimeout(()=>{controls.throttle=-9},200))},100),setInterval(function(){["3292","3054"].includes(geofs.aircraft.instance.id)&&void 0===geofs.aircraft.instance.setup.instruments.spoilers&&(geofs.aircraft.instance.setup.instruments.spoilers="",instruments.init(geofs.aircraft.instance.setup.instruments))},500)}autospoilers();
    };


    function athrottle () {
        (() => {var athrScript = document.createElement('script'); athrScript.src="https://raw.githack.com/meatbroc/geofs-autothrottle/main/userscript.js";document.body.appendChild(athrScript);})()
    };


    function camera () {
        !function(){"use strict";let e=[],t=0,a=null,n=null;function c(){cycling=!1,a&&clearInterval(a)}globalThis.cycling=!1,!function r(){let i=setInterval(()=>{geofs?.camera?.modes&&geofs?.aircraft?.instance&&(clearInterval(i),n=geofs.aircraft.instance.id,setInterval(()=>{if(geofs.aircraft&&geofs.aircraft.instance){let e=geofs.aircraft.instance.id;e!==n&&(n=e,console.log("Stopped cycling due to aircraft change"),c())}},1e3),document.addEventListener("keydown",function(n){"w"!==n.key.toLowerCase()||n.ctrlKey||n.altKey||n.metaKey||((cycling=!cycling)?(console.log("Camera cycling started."),!geofs.camera||!geofs.camera.modes||(a&&clearInterval(a),function a(){let n=[2,3,4,5];e=geofs.camera.modes.map((e,t)=>t).filter(e=>!n.includes(e));for(let c=e.length-1;c>0;c--){let r=Math.floor(Math.random()*(c+1));[e[c],e[r]]=[e[r],e[c]]}t=0}(),a=setInterval(()=>{!geofs.pause&&cycling&&e.length>0&&(geofs.camera.set(e[t]),console.log("Switched to camera:",e[t]),t=(t+1)%e.length)},3e4))):(c(),console.log("Camera cycling stopped.")))}),console.log("Script running. Press 'W' to toggle."))},500)}()}();    
    };


    function vehicles () {
        (() => {var vehicleScript = document.createElement('script'); vehicleScript.src="https://raw.githack.com/af267/GeoFS-Extra-Vehicles/main/main.js";document.body.appendChild(vehicleScript);})()
    };


    function failuresAndFuel () {   		//Includes both fuel and failures
        class Failure{constructor(){this.aId=window.window.geofs.aircraft.instance.id,this.enabled=!1,this.failures=[],this.fails={landingGear:{front:!1,left:!1,right:!1},fuelLeak:!1,flightCtrl:{ailerons:!1,elevators:!1,rudder:!1},electrical:!1,structural:!1,hydraulic:{flaps:!1,brakes:!1,spoilers:!1},pitotStatic:!1,pressurization:!1,engines:[]};for(var e=0;e<window.window.geofs.aircraft.instance.engines.length;e++)this.fails.engines.push({i:!1});this.chances={landingGear:{front:0,left:0,right:0},fuelLeak:0,flightCtrl:{ailerons:0,elevators:0,rudder:0},electrical:0,structural:0,hydraulic:{flaps:0,brakes:0,spoilers:0},pitotStatic:0,pressurization:0,engines:[]};for(var t=0;t<window.window.geofs.aircraft.instance.engines.length;t++)this.chances.engines.push({v:0})}fail(e){for(var t=window.window.geofs.aircraft.instance.engines.length,i=0;i<t;i++)e=="engine"+i&&(alert("Engine "+(i+1)+" failed!"),window.window.geofs.aircraft.instance.engines[i].thrust=0,new window.window.geofs.fx.ParticleEmitter({off:0,anchor:window.window.geofs.aircraft.instance.engines[0].points.contrailAnchor||{worldPosition:window.window.geofs.aircraft.instance.engines[0].object3d.worldPosition},duration:1e10,rate:.03,life:1e4,easing:"easeOutQuart",startScale:.01,endScale:.2,randomizeStartScale:.01,randomizeEndScale:.15,startOpacity:1,endOpacity:.2,startRotation:"random",texture:"whitesmoke"}),setInterval(()=>{window.window.geofs.fx.setParticlesColor(new window.Cesium.Color(.1,.1,.1,1))},20));if(!e.includes("engine"))switch(e){case"fuelLeak":this.fails.fuelLeak||(alert("Fuel leak! Less than 2 minutes of fuel remaining"),this.fails.fuelLeak=!0,globalThis.leakingFuel=!0);break;case"gearFront":if(!this.fails.landingGear.front){alert("Nose gear failure"),this.fails.landingGear.front=!0;var n=2;for(i=0;i<window.window.geofs.aircraft.instance.suspensions.length;i++)(window.window.geofs.aircraft.instance.suspensions[i].name.includes("front")||window.window.geofs.aircraft.instance.suspensions[i].name.includes("nose")||window.window.geofs.aircraft.instance.suspensions[i].name.includes("tail"))&&(n=i);this.failures.push(setInterval(()=>{window.window.geofs.aircraft.instance.suspensions[n].collisionPoints[0][2]=30}),1e3)}break;case"gearLeft":if(!this.fails.landingGear.left){alert("Left gear failure"),this.fails.landingGear.left=!0;var a=0;for(i=0;i<window.window.geofs.aircraft.instance.suspensions.length;i++)(window.window.geofs.aircraft.instance.suspensions[i].name.includes("left")||window.window.geofs.aircraft.instance.suspensions[i].name.includes("l"))&&(a=i);this.failures.push(setInterval(()=>{window.window.geofs.aircraft.instance.suspensions[a].collisionPoints[0][2]=30}),1e3)}break;case"gearRight":if(alert("Right gear failure"),!this.fails.landingGear.right){this.fails.landingGear.right=!0;var l=1;for(i=0;i<window.window.geofs.aircraft.instance.suspensions.length;i++)(window.window.geofs.aircraft.instance.suspensions[i].name.includes("right")||window.window.geofs.aircraft.instance.suspensions[i].name.includes("r_g"))&&(l=i);this.failures.push(setInterval(()=>{window.window.geofs.aircraft.instance.suspensions[l].collisionPoints[0][2]=30}),1e3)}break;case"ailerons":alert("Flight control failure (ailerons)"),this.fails.flightCtrl.ailerons||(this.fails.flightCtrl.ailerons=!0,this.failures.push(setInterval(()=>{for(var e in window.window.geofs.aircraft.instance.airfoils)window.window.geofs.aircraft.instance.airfoils[e].name.toLowerCase().includes("aileron")&&(window.window.geofs.aircraft.instance.airfoils[e].object3d._scale=[0,0,0])}),1e3));break;case"elevators":alert("Flight control failure (elevators)"),this.fails.flightCtrl.elevators||(this.fails.flightCtrl.elevators=!0,this.failures.push(setInterval(()=>{for(var e in window.window.geofs.aircraft.instance.airfoils)window.window.geofs.aircraft.instance.airfoils[e].name.toLowerCase().includes("elevator")&&(window.window.geofs.aircraft.instance.airfoils[e].object3d._scale=[0,0,0])}),1e3));break;case"rudder":alert("Flight control failure (rudder)"),this.fails.flightCtrl.rudder||(this.fails.flightCtrl.rudder=!0,this.failures.push(setInterval(()=>{for(var e in window.window.geofs.aircraft.instance.airfoils)window.window.geofs.aircraft.instance.airfoils[e].name.toLowerCase().includes("rudder")&&(window.window.geofs.aircraft.instance.airfoils[e].object3d._scale=[0,0,0])}),1e3));break;case"electrical":this.fails.electrical||(alert("Electrical failure"),this.fails.electrical=!0,this.failures.push(setInterval(()=>{for(var e=1;e<=5;e++)window.window.geofs.aircraft.instance.cockpitSetup.parts[e].object3d._scale=[0,0,0];window.window.geofs.autopilot.turnOff(),window.instruments.hide()}),1e3));break;case"structural":this.fails.structural||(alert("Significant structural damage detected"),console.log("Boeing, am I right?"),this.fails.structural=!0,this.failures.push(setInterval(()=>{window.weather.definition.turbulences=3}),1e3));break;case"flaps":this.fails.hydraulic.flaps||(alert("Hydraulic failure (flaps)"),this.fails.hydraulic.flaps=!0,this.failures.push(setInterval(()=>{window.controls.flaps.target=Math.floor(.6822525475345469*(2*window.window.geofs.animation.values.flapsSteps)),window.controls.flaps.delta=20}),1e3));break;case"brakes":this.fails.hydraulic.brakes||(alert("Hydraulic failure (brakes)"),this.fails.hydraulic.brakes=!0,this.failures.push(setInterval(()=>{window.controls.brakes=0}),500));break;case"spoilers":this.fails.hydraulic.spoilers||(alert("Hydraulic failure (spoilers)"),this.fails.hydraulic.spoilers=!0,this.failures.push(setInterval(()=>{window.controls.airbrakes.target=.2,window.controls.airbrakes.delta=20}),1e3));break;case"pressurization":this.fails.pressurization||(alert("Cabin depressurization! Get at or below 9,000 ft MSL!"),this.fails.pressurization=!0,this.failures.push(setInterval(()=>{window.window.geofs.animation.values.altitude>9e3?window.weather.definition.turbulences=(window.window.geofs.animation.values.altitude-9e3)/5200:window.weather.definition.turbulences=0}),1e3))}}tick(){if(this.enabled&&!window.flight.recorder.playing&&!window.geofs.paused){for(var e in console.log("tick"),this.chances.landingGear)Math.random()<this.chances.landingGear[e]&&this.fail("gear"+(e[0].toUpperCase()+e.substr(1,e.length)));for(var t in this.chances)if("number"==typeof this.chances[t])Math.random()<this.chances[e]&&this.fail(t);else if("landingGear"!==t)for(var i in this.chances[t])Math.random()<this.chances[t][i]&&this.fail(i);setTimeout(()=>{this.tick()},6e4)}}reset(){for(var e in this.failures)clearInterval(this.failures[e]);this.enabled=!1}}function waitForEntities(){try{if(!1==window.window.geofs.cautiousWithTerrain){window.mainFailureFunction();return}}catch(e){console.log("Error in waitForEntities:",e)}setTimeout(()=>{waitForEntities()},1e3)}function runFuelSystem(){var e,t;function i(){let e=document.createElement("div");e.style.position="absolute",e.style.bottom="8px",e.style.right="108px",e.style.width="75px",e.style.height="17px",e.style.border="1px solid black",e.style.borderRadius="5px",e.style.backgroundColor="black",e.style.zIndex="1000";let t=document.createElement("div");return t.style.height="100%",t.style.width="100%",t.style.backgroundColor="green",t.style.borderRadius="5px",e.appendChild(t),document.querySelector(".geofs-ui-bottom").appendChild(e),{fuelBar:t,fuelBarContainer:e}}let n;setInterval(()=>{0===r.fuel&&(controls.throttle=0,window.geofs.aircraft.instance.stopEngine())},10);let a,l,r=(l=(a=window.geofs.aircraft.instance.definition.mass)<15e3?.25:.75,globalThis.initialFuel=a*l,{fuel:initialFuel,initialFuel}),s=function e(t){let i=document.createElement("button");return i.textContent="Refuel",i.style.position="absolute",i.style.bottom="5px",i.style.right="108px",i.style.padding="4px 8px",i.style.fontSize="14px",i.style.backgroundColor="yellow",i.style.border="1px solid black",i.style.borderRadius="5px",i.style.zIndex="1000",document.querySelector(".geofs-ui-bottom").appendChild(i),i.addEventListener("click",()=>{t.fuel=t.initialFuel,console.log("Plane refueled.")}),i}(r);e=r,n=setInterval(()=>{if(window.geofs.pause||window.flight.recorder.playing||document.hidden)return;let t=window.geofs.aircraft.instance.engines.reduce((e,t)=>e+(t.thrust||0),0),i=window.geofs.aircraft.instance.engines[0]?.afterBurnerThrust!==void 0,n=i&&Math.abs(window.geofs.animation.values.smoothThrottle)>.9,a=i?window.geofs.aircraft.instance.engines.reduce((e,t)=>e+(t.afterBurnerThrust||0),0):0,l=Math.abs(window.geofs.animation.values.smoothThrottle),r=n?a/150:t/150;globalThis.leakingFuel?fuelBurnRate=globalThis.initialFuel/120*3600:(fuelBurnRate=window.geofs.aircraft.instance.engine.on?r+l*(3*r-r):0,0==t&&(fuelBurnRate=0)),e.fuel-=fuelBurnRate*(1/3600),e.fuel<0&&(e.fuel=0),globalThis.fuelPercentage=e.fuel/e.initialFuel*100,0===e.fuel&&(window.fuelBurnRate=0),console.log(`Fuel Burn Rate per Hour: ${fuelBurnRate.toFixed(6)}`),console.log(`Fuel Burned This Second: ${(fuelBurnRate/3600).toFixed(6)}`),console.log(`Fuel Remaining: ${e.fuel.toFixed(2)}`)},1e3);let u=window.geofs.aircraft.instance.aircraftRecord.id;setInterval(()=>{window.geofs.aircraft.instance.aircraftRecord.id!==u&&(s.remove(),u=window.geofs.aircraft.instance.aircraftRecord.id,clearInterval(n),runFuelSystem())},1e3),setInterval(()=>{let e=window.geofs.aircraft.instance.groundSpeed,t=window.geofs.aircraft.instance.groundContact,i=window.geofs.aircraft.instance.engine.on;flight.recorder.playing?s.style.display="none":s.style.display=e<1&&t&&!i?"block":"none"},100)}window.openFailuresMenu=function(){if(window.failuresMenu){if(window.failuresMenu.hidden=!window.failuresMenu.hidden,window.window.geofs.aircraft.instance.id!==window.aId)for(window.failure.reset(),window.failure=new Failure,e=`
        <div style="position: fixed; width: 640px; height: 10px; background: lightgray; cursor: move;" id="dragPart"></div>
        <p style="cursor: pointer;right: 0px;position: absolute;background: gray;height: fit-content;" onclick="window.failuresMenu.hidden=true;">X</p>
    <p>Note: Some failures may require a manual refresh of the page.</p>
    <button id="enBtn" onclick="(function(){window.failure.enabled=true; window.failure.tick(); document.getElementById('enBtn').hidden = true;})();">Enable</button>
    <button onclick="window.failure.reset()">RESET ALL</button>
        <h1>Landing Gear</h1>
        <h2>Front</h2>
        <span style="
    font-size: large;
    vertical-align: top;
">Chance per minute: </span>
        <input type="range" value="0" min="0" max="1" step="0.01" id="slide1" onchange="[document.getElementById('input1').value, window.failure.chances.landingGear.gearFront]=[document.getElementById('slide1').value, document.getElementById('slide1').value]" draggable="false" style="
    vertical-align: bottom;
">
        <input disabled="true;" id="input1" style="
    width: 40px;
">
    <button onclick="failure.fail('gearFront')">FAIL</button>
        <br>
        <h2>Left</h2>
        <span style="
    font-size: large;
    vertical-align: top;
">Chance per minute: </span>
        <input type="range" min="0" max="1" step="0.01" id="slideGearL" onchange="[document.getElementById('inputGearL').value, window.failure.chances.landingGear.left]=[document.getElementById('slideGearL').valueAsNumber, document.getElementById('slideGearL').valueAsNumber]" draggable="false" style="
    vertical-align: bottom;
">
        <input disabled="true;" id="inputGearL" style="
    width: 40px;
">


        <button onclick="failure.fail('gearLeft')">FAIL</button>
    <br>
        <h2>Right</h2>
        <span style="
    font-size: large;
    vertical-align: top;
">Chance per minute: </span>
            <input type="range" min="0" max="1" step="0.01" id="slideGearR" onchange="[document.getElementById('inputGearR').value, window.failure.chances.landingGear.right]=[document.getElementById('slideGearR').valueAsNumber, document.getElementById('slideGearR').valueAsNumber]" draggable="false" style="
    vertical-align: bottom;
">
        <input disabled="true;" id="inputGearR" style="
    width: 40px;
">
    <button onclick="failure.fail('gearRight')">FAIL</button>
    <br>
        <h1>Fuel Leak</h1>
        <span style="
    font-size: large;
    vertical-align: top;
">Chance per minute: </span>
        <input type="range" min="0" max="1" step="0.01" id="slideFuelLeak" onchange="[document.getElementById('inputFuelLeak').value, window.failure.chances.fuelLeak]=[document.getElementById('slideFuelLeak').valueAsNumber, document.getElementById('slideFuelLeak').valueAsNumber]" draggable="false" style="
    vertical-align: bottom;
">
        <input disabled="true;" id="inputFuelLeak" style="
    width: 40px;
">






        <button onclick="failure.fail('fuelLeak')">FAIL</button>
    <br>
    <h1>Flight Control</h1>
    <h2>Ailerons</h2>
        <span style="
    font-size: large;
    vertical-align: top;
">Chance per minute: </span>
        <input type="range" min="0" max="1" step="0.01" id="slideFlightCtrl" onchange="[document.getElementById('inputFlightCtrl').value, window.failure.chances.flightCtrl.ailerons]=[document.getElementById('slideFlightCtrl').valueAsNumber, document.getElementById('slideFlightCtrl').valueAsNumber]" draggable="false" style="vertical-align: bottom;">
    <input disabled="true;" id="inputFlightCtrl" style="
    width: 40px;
">
        <button onclick="failure.fail('ailerons')">FAIL</button><br>
            <h2>Elevators</h2>
        <span style="
    font-size: large;
    vertical-align: top;
">Chance per minute: </span>
        <input type="range" min="0" max="1" step="0.01" id="slideElevator" onchange="[document.getElementById('inputElevator').value, window.failure.chances.flightCtrl.elevator]=[document.getElementById('slideElevator').valueAsNumber, document.getElementById('slideElevator').valueAsNumber]" draggable="false" style="vertical-align: bottom;">
    <input disabled="true;" id="inputElevator" style="
    width: 40px;
">
        <button onclick="failure.fail('elevators')">FAIL</button><br>
        <h2>Rudder</h2>
        <span style="
    font-size: large;
    vertical-align: top;
">Chance per minute: </span>
        <input type="range" min="0" max="1" step="0.01" id="slideRudder" onchange="[document.getElementById('inputRudder').value, window.failure.chances.flightCtrl.rudder]=[document.getElementById('slideRudder').valueAsNumber, document.getElementById('slideRudder').valueAsNumber]" draggable="false" style="vertical-align: bottom;">
    <input disabled="true;" id="inputRudder" style="
    width: 40px;
">
        <button onclick="failure.fail('rudder')">FAIL</button><br>
    <h1>Electrical</h1>
        <span style="
    font-size: large;
    vertical-align: top;
">Chance per minute: </span>
        <input type="range" min="0" max="1" step="0.01" id="slideElectrical" onchange="[document.getElementById('inputElectrical').value, window.failure.chances.electrical]=[document.getElementById('slideElectrical').valueAsNumber, document.getElementById('slideElectrical').valueAsNumber]" draggable="false" style="
    vertical-align: bottom;
">


        <input disabled="true;" id="inputElectrical" style="
    width: 40px;
">
        <button onclick="failure.fail('electrical')">FAIL</button>


    <br>


    <h1>Structural</h1>
        <span style="
    font-size: large;
    vertical-align: top;
">Chance per minute: </span>
        <input type="range" min="0" max="1" step="0.01" id="slideStructural" onchange="[document.getElementById('inputStructural').value, window.failure.chances.structural]=[document.getElementById('slideStructural').valueAsNumber, document.getElementById('slideStructural').valueAsNumber]" draggable="false" style="
    vertical-align: bottom;
">


        <input disabled="true;" id="inputStructural" style="
    width: 40px;
">
        <button onclick="failure.fail('structural')">FAIL</button>


    <br>
    <h1>Hydraulic</h1>
<h2>Flaps</h2>
        <span style="
    font-size: large;
    vertical-align: top;
">Chance per minute: </span>
        <input type="range" min="0" max="1" step="0.01" id="slideFlaps" onchange="[document.getElementById('inputFlaps').value, window.failure.chances.hydraulic.flaps]=[document.getElementById('slideFlaps').valueAsNumber, document.getElementById('slideFlaps').valueAsNumber]" draggable="false" style="
    vertical-align: bottom;
">


        <input disabled="true;" id="inputFlaps" style="
    width: 40px;
">
        <button onclick="failure.fail('flaps')">FAIL</button>
<h2>Brakes</h2>
    <span style="
    font-size: large;
    vertical-align: top;
">Chance per minute: </span>
        <input type="range" min="0" max="1" step="0.01" id="slideBrakes" onchange="[document.getElementById('inputBrakes').value, window.failure.chances.hydraulic.brakes]=[document.getElementById('slideBrakes').valueAsNumber, document.getElementById('slideBrakes').valueAsNumber]" draggable="false" style="
    vertical-align: bottom;
">


        <input disabled="true;" id="inputBrakes" style="
    width: 40px;
">
        <button onclick="failure.fail('brakes')">FAIL</button>
<h2>Spoilers</h2>
    <span style="
    font-size: large;
    vertical-align: top;
">Chance per minute: </span>
        <input type="range" min="0" max="1" step="0.01" id="slideSpoilers" onchange="[document.getElementById('inputSpoilers').value, window.failure.chances.hydraulic.spoilers]=[document.getElementById('slideSpoilers').valueAsNumber, document.getElementById('slideSpoilers').valueAsNumber]" draggable="false" style="
    vertical-align: bottom;
">
        <input disabled="true;" id="inputSpoilers" style="
    width: 40px;
">
<button onclick="failure.fail('spoilers')">FAIL</button>
    <h1>Cabin Pressurization</h1>
    <span style="
    font-size: large;
    vertical-align: top;
">Chance per minute: </span>
        <input type="range" min="0" max="1" step="0.01" id="slidePressurization" onchange="[document.getElementById('inputPressurization').value, window.failure.chances.pressurization]=[document.getElementById('slidePressurization').valueAsNumber, document.getElementById('slidePressurization').valueAsNumber]" draggable="false" style="
    vertical-align: bottom;
">
        <input disabled="true;" id="inputPressurization" style="
    width: 40px;
">
        <button onclick="failure.fail('pressurization')">FAIL</button>
        <h1>Engines</h1>
        `,t=0;t<window.window.geofs.aircraft.instance.engines.length;t++)e+=`
            <h2>Engine ${t+1}</h2>
    <span style="
    font-size: large;
    vertical-align: top;
">Chance per minute: </span>
        <input type="range" min="0" max="1" step="0.01" id="slideEngine${t}" onchange="document.getElementById('inputEngine${t}').value=document.getElementById('slideEngine${t}').valueAsNumber; window.failure.chances.engines[i] = document.getElementById('slideEngine${t}').valueAsNumber"; draggable="false" style="
    vertical-align: bottom;
">
        <input disabled="true;" id="inputEngine${t}" style="
    width: 40px;
">
        <button onclick="failure.fail('engine${t}')">FAIL</button>
            `,window.failuresMenu.innerHTML=e}else{window.failure=new Failure,window.failuresMenu=document.createElement("div"),window.failuresMenu.style.position="fixed",window.failuresMenu.style.width="640px",window.failuresMenu.style.height="480px",window.failuresMenu.style.background="white",window.failuresMenu.style.display="block",window.failuresMenu.style.overflow="scroll",window.failuresMenu.style.zIndex="10000",window.failuresMenu.id="failMenu",window.failuresMenu.className="geofs-ui-left",document.body.appendChild(window.failuresMenu);for(var e=`
        <div style="position: fixed; width: 640px; height: 10px; background: lightgray; cursor: move;" id="dragPart"></div>
        <p style="cursor: pointer;right: 0px;position: absolute;background: gray;height: fit-content;" onclick="window.failuresMenu.hidden=true;">X</p>
    <p>Note: Some failures may require a manual refresh of the page.</p>
    <button id="enBtn" onclick="(function(){window.failure.enabled=true; window.failure.tick(); document.getElementById('enBtn').hidden = true;})();">Enable</button>
    <button onclick="window.failure.reset()">RESET ALL</button>
        <h1>Landing Gear</h1>
        <h2>Front</h2>
        <span style="
    font-size: large;
    vertical-align: top;
">Chance per minute: </span>
        <input type="range" value="0" min="0" max="1" step="0.01" id="slide1" onchange="[document.getElementById('input1').value, window.failure.chances.landingGear.gearFront]=[document.getElementById('slide1').value, document.getElementById('slide1').value]" draggable="false" style="
    vertical-align: bottom;
">
        <input disabled="true;" id="input1" style="
    width: 40px;
">
    <button onclick="failure.fail('gearFront')">FAIL</button>
        <br>
        <h2>Left</h2>
        <span style="
    font-size: large;
    vertical-align: top;
">Chance per minute: </span>
        <input type="range" min="0" max="1" step="0.01" id="slideGearL" onchange="[document.getElementById('inputGearL').value, window.failure.chances.landingGear.left]=[document.getElementById('slideGearL').valueAsNumber, document.getElementById('slideGearL').valueAsNumber]" draggable="false" style="
    vertical-align: bottom;
">
        <input disabled="true;" id="inputGearL" style="
    width: 40px;
">


        <button onclick="failure.fail('gearLeft')">FAIL</button>
    <br>
        <h2>Right</h2>
        <span style="
    font-size: large;
    vertical-align: top;
">Chance per minute: </span>
            <input type="range" min="0" max="1" step="0.01" id="slideGearR" onchange="[document.getElementById('inputGearR').value, window.failure.chances.landingGear.right]=[document.getElementById('slideGearR').valueAsNumber, document.getElementById('slideGearR').valueAsNumber]" draggable="false" style="
    vertical-align: bottom;
">
        <input disabled="true;" id="inputGearR" style="
    width: 40px;
">
    <button onclick="failure.fail('gearRight')">FAIL</button>
    <br>
        <h1>Fuel Leak</h1>
        <span style="
    font-size: large;
    vertical-align: top;
">Chance per minute: </span>
        <input type="range" min="0" max="1" step="0.01" id="slideFuelLeak" onchange="[document.getElementById('inputFuelLeak').value, window.failure.chances.fuelLeak]=[document.getElementById('slideFuelLeak').valueAsNumber, document.getElementById('slideFuelLeak').valueAsNumber]" draggable="false" style="
    vertical-align: bottom;
">
        <input disabled="true;" id="inputFuelLeak" style="
    width: 40px;
">






        <button onclick="failure.fail('fuelLeak')">FAIL</button>
    <br>
    <h1>Flight Control</h1>
    <h2>Ailerons</h2>
        <span style="
    font-size: large;
    vertical-align: top;
">Chance per minute: </span>
        <input type="range" min="0" max="1" step="0.01" id="slideFlightCtrl" onchange="[document.getElementById('inputFlightCtrl').value, window.failure.chances.flightCtrl.ailerons]=[document.getElementById('slideFlightCtrl').valueAsNumber, document.getElementById('slideFlightCtrl').valueAsNumber]" draggable="false" style="vertical-align: bottom;">
    <input disabled="true;" id="inputFlightCtrl" style="
    width: 40px;
">
        <button onclick="failure.fail('ailerons')">FAIL</button><br>
            <h2>Elevators</h2>
        <span style="
    font-size: large;
    vertical-align: top;
">Chance per minute: </span>
        <input type="range" min="0" max="1" step="0.01" id="slideElevator" onchange="[document.getElementById('inputElevator').value, window.failure.chances.flightCtrl.elevator]=[document.getElementById('slideElevator').valueAsNumber, document.getElementById('slideElevator').valueAsNumber]" draggable="false" style="vertical-align: bottom;">
    <input disabled="true;" id="inputElevator" style="
    width: 40px;
">
        <button onclick="failure.fail('elevators')">FAIL</button><br>
        <h2>Rudder</h2>
        <span style="
    font-size: large;
    vertical-align: top;
">Chance per minute: </span>
        <input type="range" min="0" max="1" step="0.01" id="slideRudder" onchange="[document.getElementById('inputRudder').value, window.failure.chances.flightCtrl.rudder]=[document.getElementById('slideRudder').valueAsNumber, document.getElementById('slideRudder').valueAsNumber]" draggable="false" style="vertical-align: bottom;">
    <input disabled="true;" id="inputRudder" style="
    width: 40px;
">
        <button onclick="failure.fail('rudder')">FAIL</button><br>
    <h1>Electrical</h1>
        <span style="
    font-size: large;
    vertical-align: top;
">Chance per minute: </span>
        <input type="range" min="0" max="1" step="0.01" id="slideElectrical" onchange="[document.getElementById('inputElectrical').value, window.failure.chances.electrical]=[document.getElementById('slideElectrical').valueAsNumber, document.getElementById('slideElectrical').valueAsNumber]" draggable="false" style="
    vertical-align: bottom;
">


        <input disabled="true;" id="inputElectrical" style="
    width: 40px;
">
        <button onclick="failure.fail('electrical')">FAIL</button>


    <br>


    <h1>Structural</h1>
        <span style="
    font-size: large;
    vertical-align: top;
">Chance per minute: </span>
        <input type="range" min="0" max="1" step="0.01" id="slideStructural" onchange="[document.getElementById('inputStructural').value, window.failure.chances.structural]=[document.getElementById('slideStructural').valueAsNumber, document.getElementById('slideStructural').valueAsNumber]" draggable="false" style="
    vertical-align: bottom;
">


        <input disabled="true;" id="inputStructural" style="
    width: 40px;
">
        <button onclick="failure.fail('structural')">FAIL</button>


    <br>
    <h1>Hydraulic</h1>
<h2>Flaps</h2>
        <span style="
    font-size: large;
    vertical-align: top;
">Chance per minute: </span>
        <input type="range" min="0" max="1" step="0.01" id="slideFlaps" onchange="[document.getElementById('inputFlaps').value, window.failure.chances.hydraulic.flaps]=[document.getElementById('slideFlaps').valueAsNumber, document.getElementById('slideFlaps').valueAsNumber]" draggable="false" style="
    vertical-align: bottom;
">


        <input disabled="true;" id="inputFlaps" style="
    width: 40px;
">
        <button onclick="failure.fail('flaps')">FAIL</button>
<h2>Brakes</h2>
    <span style="
    font-size: large;
    vertical-align: top;
">Chance per minute: </span>
        <input type="range" min="0" max="1" step="0.01" id="slideBrakes" onchange="[document.getElementById('inputBrakes').value, window.failure.chances.hydraulic.brakes]=[document.getElementById('slideBrakes').valueAsNumber, document.getElementById('slideBrakes').valueAsNumber]" draggable="false" style="
    vertical-align: bottom;
">


        <input disabled="true;" id="inputBrakes" style="
    width: 40px;
">
        <button onclick="failure.fail('brakes')">FAIL</button>
<h2>Spoilers</h2>
    <span style="
    font-size: large;
    vertical-align: top;
">Chance per minute: </span>
        <input type="range" min="0" max="1" step="0.01" id="slideSpoilers" onchange="[document.getElementById('inputSpoilers').value, window.failure.chances.hydraulic.spoilers]=[document.getElementById('slideSpoilers').valueAsNumber, document.getElementById('slideSpoilers').valueAsNumber]" draggable="false" style="
    vertical-align: bottom;
">
        <input disabled="true;" id="inputSpoilers" style="
    width: 40px;
">
<button onclick="failure.fail('spoilers')">FAIL</button>
    <h1>Cabin Pressurization</h1>
    <span style="
    font-size: large;
    vertical-align: top;
">Chance per minute: </span>
        <input type="range" min="0" max="1" step="0.01" id="slidePressurization" onchange="[document.getElementById('inputPressurization').value, window.failure.chances.pressurization]=[document.getElementById('slidePressurization').valueAsNumber, document.getElementById('slidePressurization').valueAsNumber]" draggable="false" style="
    vertical-align: bottom;
">
        <input disabled="true;" id="inputPressurization" style="
    width: 40px;
">
        <button onclick="failure.fail('pressurization')">FAIL</button>
        <h1>Engines</h1>
        `,t=0;t<window.window.geofs.aircraft.instance.engines.length;t++){e+=`
            <h2>Engine ${t+1}</h2>
    <span style="
    font-size: large;
    vertical-align: top;
">Chance per minute: </span>
        <input type="range" min="0" max="1" step="0.01" id="slideEngine${t}" onchange="document.getElementById('inputEngine${t}').value=document.getElementById('slideEngine${t}').valueAsNumber; window.failure.chances.engines[i] = document.getElementById('slideEngine${t}').valueAsNumber"; draggable="false" style="
    vertical-align: bottom;
">
        <input disabled="true;" id="inputEngine${t}" style="
    width: 40px;
">
        <button onclick="failure.fail('engine${t}')">FAIL</button>
            `,window.failuresMenu.innerHTML=e;let i=document.getElementById("failMenu"),n=document.getElementById("dragPart");n.addEventListener("mousedown",function(e){let t=e.clientX-i.getBoundingClientRect().left,n=e.clientY-i.getBoundingClientRect().top;function a(e){i.style.left=`${e.clientX-t}px`,i.style.top=`${e.clientY-n}px`}function l(){document.removeEventListener("mousemove",a),document.removeEventListener("mouseup",l)}document.addEventListener("mousemove",a),document.addEventListener("mouseup",l)})}}},window.mainFailureFunction=function(){"use strict";window.failBtn=document.createElement("div"),window.failBtn.style.position="fixed",window.failBtn.style.right="60px",window.failBtn.style.height="36px",window.failBtn.style.bottom="0px",window.failBtn.style.border="transparent",window.failBtn.style.background="rgb(255,0,0)",window.failBtn.style.color="white",window.failBtn.style.fontWeight="600",window.failBtn.style.fontSize="20px",window.failBtn.style.cursor="pointer",window.failBtn.style.zIndex="10000",document.body.appendChild(window.failBtn),window.failBtn.innerHTML='<button style="position: inherit; right: inherit; height: inherit; top: inherit; border: inherit; background: inherit; color: inherit; font-weight: inherit; fontSize: inherit; cursor: inherit;" onclick="window.openFailuresMenu()">FAIL</button>',setInterval(()=>{flight.recorder.playing?window.failBtn.style.display="none":window.failBtn.style.display="block"},100),console.log("Failures loaded.")},waitForEntities(),runFuelSystem();
    };


    function fpv () {
        function cF(a,t,i){return{x:a,y:t,z:i}}function waitForEntities(){try{if(geofs.api){main();return}}catch(a){console.log("Error in waitForEntities:",a)}setTimeout(waitForEntities,1e3)}function main(){let a;window.y=geofs.api.viewer.entities.add({position:Cesium.Cartesian3.fromDegrees(geofs.camera.lla[1],geofs.camera.lla[0],geofs.animation.values.groundElevationFeet/3.2808399),billboard:{image:"https://tylerbmusic.github.io/GPWS-files_geofs/FPV.png",scale:.03*(1/geofs.api.renderingSettings.resolutionScale)}}),geofs.api.renderingSettings.resolutionScale<=.6&&(window.y.billboard.image="https://tylerbmusic.github.io/GPWS-files_geofs/FPV_Lowres.png"),window.lastLoc=Cesium.Cartesian3.fromDegrees(geofs.camera.lla[1],geofs.camera.lla[0],geofs.camera.lla[2]),setInterval(function a(){!geofs.animation.values||geofs.isPaused()||(window.currLoc&&(window.lastLoc=window.currLoc),window.currLoc=Cesium.Cartesian3.fromDegrees(geofs.camera.lla[1],geofs.camera.lla[0],geofs.camera.lla[2]),window.deltaLoc=[window.currLoc.x-window.lastLoc.x,window.currLoc.y-window.lastLoc.y,window.currLoc.z-window.lastLoc.z],void 0!==geofs.animation.values.altitude&&void 0!==geofs.animation.values.groundElevationFeet&&(geofs.animation.values.altitude,geofs.animation.values.groundElevationFeet,geofs.aircraft.instance.collisionPoints[geofs.aircraft.instance.collisionPoints.length-2].worldPosition[2]),geofs.aircraft.instance.groundContact||window.deltaLoc[0]+window.deltaLoc[1]+window.deltaLoc[2]==0||(window.y.position=cF(window.currLoc.x+window.howFar*window.deltaLoc[0],window.currLoc.y+window.howFar*window.deltaLoc[1],window.currLoc.z+window.howFar*window.deltaLoc[2])))},geofs.debug.fps?1/Number(geofs.debug.fps)+5:100),a=!0,document.addEventListener("keydown",function(t){"Insert"===t.key&&(a=!a)}),setInterval(()=>{a?window.y.show=!geofs.aircraft.instance.groundContact:window.y.show=!1},100)}window.lastLoc,window.onload=setTimeout(waitForEntities,1e4),window.howFar=15;
    };


    function gpws () {
        !function(){"use strict";window.soundsToggleKey="w";let i=[1023,1021,1018,1016,2706,5193,3575,2843,2899,5156,2878,2879,3140,3534,2870,2871,2865,5086,242,4646,2856,244,4631,2951,2153,2973,239,2788,2418,2420,2426,2395,3011,2772,2769,4140,5203,2003,3054,252,5193,238,4743,4745,237,4764,4402,240,3179,3180,235,2386,2706,3307,247,5073,1069,2461,2004,3289,3436,236,3036,2943,3341,2700,4017,3460,5038,2556,2976,3109,2892,2752,5,6,4,10,20,24,25,26,1014];function e(i,e,t){if(i>=100){if(i<=e+10&&i>=e-10)return!0}else if(i>=10){if(i<e+4&&i>e-4)return!0}else if(i<=e+1&&i>=e-1)return!0;return!1}setInterval(()=>{let e=Number(geofs.aircraft.instance.id),t=i.includes(e);window.soundsOn=t,console.log(`Has GPWS? ${t} `)},1e3),window.a2500=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/2500.wav"),window.a2000=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/2000.wav"),window.a1000=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/1000.wav"),window.a500=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/500.wav"),window.a400=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/400.wav"),window.a300=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/300.wav"),window.a200=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/200.wav"),window.a100=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/100.wav"),window.a50=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/50.wav"),window.a40=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/40.wav"),window.a30=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/30.wav"),window.a20=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/20.wav"),window.a10=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/10.wav"),window.aRetard=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/retard.wav"),window.a5=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/5.wav"),window.stall=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/stall.wav"),window.glideSlope=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/glideslope.wav"),window.tooLowFlaps=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/too-low_flaps.wav"),window.tooLowGear=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/too-low_gear.wav"),window.apDisconnect=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/ap-disconnect.wav"),window.minimumBaro=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/minimum.wav"),window.dontSink=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/dont-sink.wav"),window.masterA=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/masterAlarm.wav"),window.bankAngle=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/bank-angle.wav"),window.overspeed=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/overspeed.wav"),window.justPaused=!1,window.masterA.loop=!0,window.bankAngle.loop=!0,window.overspeed.loop=!0,window.iminimums=!1,window.i2500=!1,window.i2000=!1,window.i1000=!1,window.i500=!1,window.i400=!1,window.i300=!1,window.i200=!1,window.i100=!1,window.i50=!1,window.i40=!1,window.i30=!1,window.i20=!1,window.i10=!1,window.i7=!1,window.i5=!1,window.gpwsRefreshRate=100,window.willTheDoorFallOff=!1,window.didAWheelFall=!1,window.wasAPOn=!1;var t=document.getElementById("flightDataDisplay1");if(!t){var a=document.getElementsByClassName("geofs-ui-bottom")[0];(t=document.createElement("div")).id="flightDataDisplay1",t.classList="mdl-button",setInterval(()=>{flight.recorder.playing?t.style.display="none":t.style.display="inline"},100),a.appendChild(t)}t.innerHTML=`
    <input style="background: 0 0; border: none; border-radius: 2px; color: #000; display: inline-block; padding: 0 8px; width: 60px;" placeholder="Minimums (Baro)" id="minimums">
`,setInterval(function i(){if(void 0===geofs.animation.values||geofs.isPaused())geofs.isPaused()&&!window.justPaused&&(window.a2500.pause(),window.a2000.pause(),window.a1000.pause(),window.a500.pause(),window.a400.pause(),window.a300.pause(),window.a200.pause(),window.a100.pause(),window.a50.pause(),window.a40.pause(),window.a30.pause(),window.a20.pause(),window.a10.pause(),window.aRetard.pause(),window.a5.pause(),window.stall.pause(),window.glideSlope.pause(),window.tooLowFlaps.pause(),window.tooLowGear.pause(),window.apDisconnect.pause(),window.minimumBaro.pause(),window.dontSink.pause(),window.masterA.pause(),window.bankAngle.pause(),window.overspeed.pause(),window.justPaused=!0);else{window.justPaused&&(window.justPaused=!1),window.willTheDoorFallOff=geofs.aircraft.instance.aircraftRecord.name.includes("Boeing"),window.isAsOldAsYourMom=geofs.aircraft.instance.aircraftRecord.name.includes("757")||geofs.aircraft.instance.aircraftRecord.name.includes("767"),window.isAsOldAsYourMom&&!window.wasAsOldAsYourMom?(window.a2500=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/b2500.wav"),window.a2000=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/b2000.wav"),window.a1000=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/o1000.wav"),window.a500=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/o500.wav"),window.a400=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/o400.wav"),window.a300=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/o300.wav"),window.a200=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/o200.wav"),window.a100=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/o100.wav"),window.a50=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/o50.wav"),window.a40=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/o40.wav"),window.a30=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/o30.wav"),window.a20=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/o20.wav"),window.a10=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/o10.wav"),window.a5=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/b5.wav"),window.stall=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/bstall.wav"),window.glideSlope=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/oglideslope.wav"),window.tooLowFlaps=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/otoo-low_flaps.wav"),window.tooLowGear=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/otoo-low_gear.wav"),window.apDisconnect=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/bap-disconnect.wav"),window.minimumBaro=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/ominimums.wav"),window.dontSink=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/odont-sink.wav"),window.masterA=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/bmasterAlarm.wav"),window.bankAngle=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/obank-angle.wav"),window.overspeed=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/boverspeed.wav"),window.masterA.loop=!0,window.bankAngle.loop=!0,window.overspeed.loop=!0):!window.willTheDoorFallOff||window.didAWheelFall||window.isAsOldAsYourMom?!window.willTheDoorFallOff&&window.didAWheelFall&&(window.a2500=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/2500.wav"),window.a2000=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/2000.wav"),window.a1000=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/1000.wav"),window.a500=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/500.wav"),window.a400=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/400.wav"),window.a300=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/300.wav"),window.a200=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/200.wav"),window.a100=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/100.wav"),window.a50=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/50.wav"),window.a40=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/40.wav"),window.a30=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/30.wav"),window.a20=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/20.wav"),window.a10=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/10.wav"),window.a5=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/5.wav"),window.stall=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/stall.wav"),window.glideSlope=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/glideslope.wav"),window.tooLowFlaps=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/too-low_flaps.wav"),window.tooLowGear=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/too-low_gear.wav"),window.apDisconnect=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/ap-disconnect.wav"),window.minimumBaro=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/minimum.wav"),window.dontSink=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/dont-sink.wav"),window.masterA=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/masterAlarm.wav"),window.bankAngle=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/bank-angle.wav"),window.overspeed=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/overspeed.wav"),window.masterA.loop=!0,window.bankAngle.loop=!0,window.overspeed.loop=!0):(window.a2500=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/b2500.wav"),window.a2000=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/b2000.wav"),window.a1000=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/b1000.wav"),window.a500=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/b500.wav"),window.a400=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/b400.wav"),window.a300=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/b300.wav"),window.a200=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/b200.wav"),window.a100=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/b100.wav"),window.a50=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/b50.wav"),window.a40=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/b40.wav"),window.a30=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/b30.wav"),window.a20=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/b20.wav"),window.a10=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/b10.wav"),window.a5=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/b5.wav"),window.stall=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/bstall.wav"),window.glideSlope=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/bglideslope.wav"),window.tooLowFlaps=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/btoo-low_flaps.wav"),window.tooLowGear=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/btoo-low_gear.wav"),window.apDisconnect=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/bap-disconnect.wav"),window.minimumBaro=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/bminimums.wav"),window.dontSink=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/bdont-sink.wav"),window.masterA=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/bmasterAlarm.wav"),window.bankAngle=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/bbank-angle.wav"),window.overspeed=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/boverspeed.wav"),window.masterA.loop=!0,window.bankAngle.loop=!0,window.overspeed.loop=!0);var t,a=null!==document.getElementById("minimums")&&void 0!==document.getElementById("minimums").value?Number(document.getElementById("minimums").value):void 0,s=void 0!==geofs.animation.values.altitude&&void 0!==geofs.animation.values.groundElevationFeet?Math.round(geofs.animation.values.altitude-geofs.animation.values.groundElevationFeet+3.2808399*geofs.aircraft.instance.collisionPoints[geofs.aircraft.instance.collisionPoints.length-2].worldPosition[2]):"N/A",o=void 0!==geofs.animation.values.verticalSpeed?Math.round(geofs.animation.values.verticalSpeed):"N/A";t=geofs.animation.getValue("NAV1Direction")&&geofs.animation.getValue("NAV1Distance")!==.185*geofs.runways.getNearestRunway([geofs.nav.units.NAV1.navaid.lat,geofs.nav.units.NAV1.navaid.lon,0]).lengthMeters?"to"===geofs.animation.getValue("NAV1Direction")?Number((Math.atan((geofs.animation.values.altitude/3.2808399+(geofs.aircraft.instance.collisionPoints[geofs.aircraft.instance.collisionPoints.length-2].worldPosition[2]+.1)-geofs.nav.units.NAV1.navaid.elevation)/(geofs.animation.getValue("NAV1Distance")+.185*geofs.runways.getNearestRunway([geofs.nav.units.NAV1.navaid.lat,geofs.nav.units.NAV1.navaid.lon,0]).lengthMeters))*RAD_TO_DEGREES).toFixed(1)):Number((Math.atan((geofs.animation.values.altitude/3.2808399+(geofs.aircraft.instance.collisionPoints[geofs.aircraft.instance.collisionPoints.length-2].worldPosition[2]+.1)-geofs.nav.units.NAV1.navaid.elevation)/Math.abs(geofs.animation.getValue("NAV1Distance")-.185*geofs.runways.getNearestRunway([geofs.nav.units.NAV1.navaid.lat,geofs.nav.units.NAV1.navaid.lon,0]).lengthMeters))*RAD_TO_DEGREES).toFixed(1)):void 0,audio.on&&window.soundsOn&&((geofs.aircraft.instance.stalling&&!geofs.aircraft.instance.groundContact||null!==geofs.nav.units.NAV1.navaid&&s>100&&(t<geofs.nav.units.NAV1.navaid.slope-1.5||t>geofs.nav.units.NAV1.navaid.slope+2)||!geofs.aircraft.instance.groundContact&&s<300&&void 0!==geofs.aircraft.instance.definition.gearTravelTime&&geofs.animation.values.gearPosition>=.5||!geofs.aircraft.instance.groundContact&&s<500&&void 0!==geofs.animation.values.flapsSteps&&0==geofs.animation.values.flapsPosition&&window.tooLowGear.paused||!geofs.aircraft.instance.groundContact&&s<300&&geofs.animation.values.throttle>.95&&o<=0||Math.abs(geofs.aircraft.instance.animationValue.aroll)>45)&&window.masterA.paused?window.masterA.play():geofs.aircraft.instance.stalling&&!geofs.aircraft.instance.groundContact||null!==geofs.nav.units.NAV1.navaid&&s>100&&(t<geofs.nav.units.NAV1.navaid.slope-1.5||t>geofs.nav.units.NAV1.navaid.slope+2)||!geofs.aircraft.instance.groundContact&&s<300&&void 0!==geofs.aircraft.instance.definition.gearTravelTime&&geofs.animation.values.gearPosition>=.5||!geofs.aircraft.instance.groundContact&&s<500&&void 0!==geofs.animation.values.flapsSteps&&0==geofs.animation.values.flapsPosition&&window.tooLowGear.paused||!geofs.aircraft.instance.groundContact&&s<300&&geofs.animation.values.throttle>.95&&o<=0||Math.abs(geofs.aircraft.instance.animationValue.aroll)>45||window.masterA.paused||window.masterA.pause(),Math.abs(geofs.aircraft.instance.animationValue.aroll)>45&&window.bankAngle.paused?window.bankAngle.play():Math.abs(geofs.aircraft.instance.animationValue.aroll)>45||window.bankAngle.paused||window.bankAngle.pause(),geofs.aircraft.instance.stalling&&!geofs.aircraft.instance.groundContact&&window.stall.paused?window.stall.play():window.stall.paused||geofs.aircraft.instance.stalling||window.stall.pause(),null!==geofs.nav.units.NAV1.navaid&&s>100&&(t<geofs.nav.units.NAV1.navaid.slope-1.5||t>geofs.nav.units.NAV1.navaid.slope+2)&&window.glideSlope.paused&&window.glideSlope.play(),!geofs.aircraft.instance.groundContact&&s<300&&void 0!==geofs.aircraft.instance.definition.gearTravelTime&&geofs.animation.values.gearPosition>=.5&&window.tooLowGear.paused&&window.tooLowGear.play(),!geofs.aircraft.instance.groundContact&&s<500&&void 0!==geofs.animation.values.flapsSteps&&0==geofs.animation.values.flapsPosition&&window.tooLowGear.paused&&window.tooLowFlaps.paused&&window.tooLowFlaps.play(),!geofs.autopilot.on&&window.wasAPOn&&window.apDisconnect.play(),o<=0?(!geofs.aircraft.instance.groundContact&&s<300&&geofs.animation.values.throttle>.95&&window.dontSink.paused&&window.dontSink.play(),void 0!==a&&geofs.animation.values.altitude+2>a&&a>geofs.animation.values.altitude-2&&!window.iminimums&&(window.minimumBaro.play(),window.iminimums=!0),e(2500,s)&&!window.i2500&&(window.a2500.play(),window.i2500=!0),e(2e3,s)&&!window.i2000&&(window.a2000.play(),window.i2000=!0),e(1e3,s)&&!window.i1000&&(window.a1000.play(),window.i1000=!0),e(500,s)&&!window.i500&&(window.a500.play(),window.i500=!0),e(400,s)&&!window.i400&&(window.a400.play(),window.i400=!0),e(300,s)&&!window.i300&&(window.a300.play(),window.i300=!0),e(200,s)&&!window.i200&&(window.a200.play(),window.i200=!0),e(100,s)&&!window.i100&&(window.a100.play(),window.i100=!0),e(50,s)&&!window.i50&&(window.a50.play(),window.i50=!0),e(40,s)&&!window.i40&&(window.a40.play(),window.i40=!0),e(30,s)&&!window.i30&&(window.a30.play(),window.i30=!0),e(20,s)&&!window.i20&&(window.a20.play(),window.i20=!0),e(10,s)&&!window.i10&&(window.a10.play(),window.i10=!0),geofs.aircraft.instance.groundContact||!(s+geofs.animation.values.verticalSpeed/60*2<=1)||window.i7||(window.aRetard.play(),window.i7=!0),e(5,s)&&!window.i5&&(window.a5.play(),window.i5=!0),window.gpwsRefreshRate=30):o>0&&(window.iminimums&&(window.iminimums=!1),window.i2500&&(window.i2500=!1),window.i2000&&(window.i2000=!1),window.i1000&&(window.i1000=!1),window.i500&&(window.i500=!1),window.i400&&(window.i400=!1),window.i300&&(window.i300=!1),window.i200&&(window.i200=!1),window.i100&&(window.i100=!1),window.i50&&(window.i50=!1),window.i40&&(window.i40=!1),window.i30&&(window.i30=!1),window.i20&&(window.i20=!1),window.i10&&(window.i10=!1),window.i7&&(window.i7=!1),window.i5&&(window.i5=!1),window.gpwsRefreshRate=100))}window.wasAPOn=geofs.autopilot.on,window.didAWheelFall=window.willTheDoorFallOff,window.wasAsOldAsYourMom=geofs.aircraft.instance.aircraftRecord.name.includes("757")||geofs.aircraft.instance.aircraftRecord.name.includes("767")},window.gpwsRefreshRate)}();
    };


    function info () {
        setInterval(function n(){if(geofs.animation.values){var a,i,e,o=geofs.animation.values.kias?geofs.animation.values.kias.toFixed(1):"N/A",l=geofs.animation.values.mach?geofs.animation.values.mach.toFixed(2):"N/A",t=geofs.animation.values.groundSpeed?geofs.animation.values.groundSpeed.toFixed(1):"N/A",d=geofs.animation.values.altitude?Math.round(geofs.animation.values.altitude):"N/A",r=geofs.animation.values.heading360?Math.round(geofs.animation.values.heading360):"N/A",s=void 0!==geofs.animation.values.altitude&&void 0!==geofs.animation.values.groundElevationFeet?Math.round(geofs.animation.values.altitude-geofs.animation.values.groundElevationFeet+3.2808399*geofs.aircraft.instance.collisionPoints[geofs.aircraft.instance.collisionPoints.length-2].worldPosition[2]):"N/A",$=void 0!==geofs.animation.values.verticalSpeed?Math.round(geofs.animation.values.verticalSpeed):"N/A",p=!1===geofs.aircraft.instance.engine.on?"OFF":void 0!==geofs.animation.values.throttle?geofs.animation.values.throttle<.005&&geofs.animation.values.throttle>=0?"IDLE":(100*geofs.animation.values.throttle).toFixed(0)+"%":"N/A",c=void 0!==geofs.aircraft.instance.angleOfAttackDeg?geofs.aircraft.instance.angleOfAttackDeg.toFixed(1):"N/A";a=geofs.animation.getValue("NAV1Direction")&&600!==geofs.animation.getValue("NAV1Distance")?"to"===geofs.animation.getValue("NAV1Direction")?(Math.atan(.3048*s/(geofs.animation.getValue("NAV1Distance")+600))*RAD_TO_DEGREES).toFixed(1)+"\xb0":(Math.atan(.3048*s/Math.abs(geofs.animation.getValue("NAV1Distance")-600))*RAD_TO_DEGREES).toFixed(1)+"\xb0":"N/A";var u=geofs.animation.values.loadFactor.toFixed(1);i=!0==globalThis.isOverpowered?"ON":"OFF",e=!0==globalThis.cycling?"ON":"OFF";var b=globalThis.fuelPercentage,g=void 0!==b?0===b?"0%":b<1?"1%":b.toFixed(0)+"%":"N/A";let y=document.querySelector(".geofs-ui-bottom");if(y){var x=document.getElementById("flightDataDisplay");x||((x=document.createElement("div")).id="flightDataDisplay",x.style.height="36px",x.style.minWidth="64px",x.style.padding="0 16px",x.style.display="inline-block",x.style.fontFamily='"Roboto", "Helvetica", "Arial", sans-serif',x.style.fontSize="14px",x.style.fontWeight="500",x.style.textTransform="uppercase",x.style.overflow="hidden",x.style.willChange="box-shadow",x.style.transition="box-shadow .2s cubic-bezier(.4,0,1,1), background-color .2s cubic-bezier(.4,0,.2,1), color .2s cubic-bezier(.4,0,.2,1)",x.style.textAlign="center",x.style.lineHeight="36px",x.style.verticalAlign="middle",x.style.pointerEvents="none",document.body.appendChild(x))}y.appendChild(x),x.innerHTML=`
                <span style="background: 0 0; border: none; border-radius: 2px; color: #000; display: inline-block; padding: 0 8px;">KIAS ${o}</span>|
                <span style="background: 0 0; border: none; border-radius: 2px; color: #000; display: inline-block; padding: 0 8px;">Mach ${l}</span>|
                <span style="background: 0 0; border: none; border-radius: 2px; color: #000; display: inline-block; padding: 0 8px;">GS ${t}</span>|
                <span style="background: 0 0; border: none; border-radius: 2px; color: #000; display: inline-block; padding: 0 8px;">ALT ${d}</span>|
                <span style="background: 0 0; border: none; border-radius: 2px; color: #000; display: inline-block; padding: 0 8px;">AGL ${s}</span>|
                <span style="background: 0 0; border: none; border-radius: 2px; color: #000; display: inline-block; padding: 0 8px;">HDG ${r}</span>|
                <span style="background: 0 0; border: none; border-radius: 2px; color: #000; display: inline-block; padding: 0 8px;">V/S ${"N/A"===$?"N/A":$}</span>|
                <span style="background: 0 0; border: none; border-radius: 2px; color: #000; display: inline-block; padding: 0 8px;">THR ${p}</span>|
                <span style="background: 0 0; border: none; border-radius: 2px; color: #000; display: inline-block; padding: 0 8px;">AOA ${c}</span>|
                <span style="background: 0 0; border: none; border-radius: 2px; color: #000; display: inline-block; padding: 0 8px;">GSLOPE ${a}</span>|
                <span style="background: 0 0; border: none; border-radius: 2px; color: #000; display: inline-block; padding: 0 8px;">G ${u}</span>|
                <span style="background: 0 0; border: none; border-radius: 2px; color: #000; display: inline-block; padding: 0 8px;">OP ${i}</span>|
                <span style="background: 0 0; border: none; border-radius: 2px; color: #000; display: inline-block; padding: 0 8px;">CC ${e}</span>|
                <span style="background: 0 0; border: none; border-radius: 2px; color: #000; display: inline-block; padding: 0 8px;">FUEL ${g}</span>
            `,flight.recorder.playing?x.style.display="none":x.style.display="inline-block"}},100);
    };


    function stats () {
        setTimeout(function(){"use strict";window.closeTimer=!0,window.closeSeconds=10,window.refreshRate=20,window.counter=0,window.isLoaded=!1,window.justLanded=!1,window.vertSpeed=0,window.oldAGL=0,window.newAGL=0,window.calVertS=0,window.groundSpeed=0,window.ktias=0,window.kTrue=0,window.bounces=0,window.statsOpen=!1,window.isGrounded=!0,window.isInTDZ=!1,window.softLanding=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/soft_landing.wav"),window.hardLanding=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/hard_landing.wav"),window.crashLanding=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/crash_landing.wav"),window.statsDiv=document.createElement("div"),window.statsDiv.style.width="fit-content",window.statsDiv.style.height="fit-content",window.statsDiv.style.background="linear-gradient(to bottom right, rgb(29, 52, 87), rgb(20, 40, 70))",window.statsDiv.style.zIndex="100000",window.statsDiv.style.margin="30px",window.statsDiv.style.padding="15px",window.statsDiv.style.fontFamily="Arial, sans-serif",window.statsDiv.style.boxShadow="0 8px 24px rgba(0,0,0,0.3), 0 4px 12px rgba(0,0,0,0.2)",window.statsDiv.style.color="white",window.statsDiv.style.position="fixed",window.statsDiv.style.borderRadius="12px",window.statsDiv.style.left="-50%",window.statsDiv.style.transition="0.4s ease",window.statsDiv.style.border="1px solid rgba(255,255,255,0.1)",document.body.appendChild(window.statsDiv),setInterval(function t(){if(!1==geofs.cautiousWithTerrain&&!geofs.isPaused()){if((void 0!==geofs.animation.values.altitude&&void 0!==geofs.animation.values.groundElevationFeet?geofs.animation.values.altitude-geofs.animation.values.groundElevationFeet+3.2808399*geofs.aircraft.instance.collisionPoints[geofs.aircraft.instance.collisionPoints.length-2].worldPosition[2]:"N/A")<500){if(window.justLanded=geofs.animation.values.groundContact&&!window.isGrounded,window.justLanded&&!window.statsOpen){if(window.closeTimer&&setTimeout(window.closeLndgStats,1e3*window.closeSeconds),window.statsOpen=!0,window.statsDiv.innerHTML=`
                <button style="
                    right: 10px;
                    top: 10px;
                    position: absolute;
                    background: rgba(255,255,255,0.2);
                    border: none;
                    color: white;
                    cursor: pointer;
                    width: 30px;
                    height: 30px;
                    border-radius: 50%;
                    font-weight: bold;"
                    onclick="window.closeLndgStats()">✕</button>
                    <style>
                        .info-block {
                            display: grid;
                            grid-template-columns: repeat(2, 1fr);
                            gap: 10px;
                            font-size: 14px;
                        }
                        .landing-quality {
                            grid-column: 1 / -1;
                            text-align: center;
                            font-weight: bold;
                            margin-top: 10px;
                            padding: 5px;
                            border-radius: 5px;
                        }
                    </style>
                    <div class="info-block">
                        <span>Vertical speed: ${window.vertSpeed} fpm</span>
                        <span>G-Forces: ${(geofs.animation.values.accZ/9.80665).toFixed(2)}G</span>
                        <span>Terrain-calibrated V/S: ${window.calVertS.toFixed(1)}</span>
                        <span>True airspeed: ${window.kTrue} kts</span>
                        <span>Ground speed: ${window.groundSpeed.toFixed(1)} kts</span>
                        <span>Indicated speed: ${window.ktias} kts</span>
                        <span>Roll: ${geofs.animation.values.aroll.toFixed(1)} degrees</span>
                        <span>Tilt: ${geofs.animation.values.atilt.toFixed(1)} degrees</span>
                        <span id="bounces">Bounces: 0</span>
                    </div>
                `,window.statsDiv.style.left="0px",geofs.nav.units.NAV1.inRange&&(window.statsDiv.innerHTML+=`
                        <div style="margin-top: 10px; font-size: 14px;">
                            <span>Landed in TDZ? ${window.isInTDZ}</span>
                            <span>Deviation from center: ${geofs.nav.units.NAV1.courseDeviation.toFixed(1)}</span>
                        </div>`),0>Number(window.vertSpeed)){let e="",i="";Number(window.vertSpeed)>=-50?(e="landing-quality",i="SUPER BUTTER!",window.statsDiv.innerHTML+=`
                                <div class="${e}" style="background-color: green; color: white;">
                                    ${i}
                                </div>`,window.softLanding.play()):Number(window.vertSpeed)>=-200?(e="landing-quality",i="BUTTER",window.statsDiv.innerHTML+=`
                                <div class="${e}" style="background-color: green; color: white;">
                                    ${i}
                                </div>`,window.softLanding.play()):Number(window.vertSpeed)>=-500&&-200>Number(window.vertSpeed)?(window.hardLanding.play(),e="landing-quality",i="ACCEPTABLE",window.statsDiv.innerHTML+=`
                                <div class="${e}" style="background-color: yellow; color: black;">
                                    ${i}
                                </div>`):Number(window.vertSpeed)>=-1e3&&-500>Number(window.vertSpeed)?(window.hardLanding.play(),e="landing-quality",i="HARD LANDING",window.statsDiv.innerHTML+=`
                                <div class="${e}" style="background-color: red; color: white;">
                                    ${i}
                                </div>`):(-1e3>=Number(window.vertSpeed)||Number(window.vertSpeed>200))&&(window.crashLanding.play(),e="landing-quality",i="CRASH LANDING",window.statsDiv.innerHTML+=`
                                <div class="${e}" style="background-color: crimson; color: white;">
                                    ${i}
                                </div>`)}}else window.justLanded&&window.statsOpen&&(window.bounces++,document.getElementById("bounces").innerHTML=`Bounces: ${window.bounces}`,window.softLanding.pause());geofs.nav.units.NAV1.inRange&&(window.isInTDZ=geofs.nav.units.NAV1.distance*FEET_TO_METERS>.052902913939976676*geofs.runways.getNearestRunway([geofs.nav.units.NAV1.navaid.lat,geofs.nav.units.NAV1.navaid.lon,0]).lengthMeters&&geofs.nav.units.NAV1.distance*FEET_TO_METERS<.06136825053484974*geofs.runways.getNearestRunway([geofs.nav.units.NAV1.navaid.lat,geofs.nav.units.NAV1.navaid.lon,0]).lengthMeters?"Yes":"No"),window.groundSpeed=geofs.animation.values.groundSpeedKnt,window.ktias=geofs.animation.values.kias.toFixed(1),window.kTrue=geofs.aircraft.instance.trueAirSpeed.toFixed(1),window.vertSpeed=geofs.animation.values.verticalSpeed.toFixed(1),window.gForces=geofs.animation.values.accZ/9.80665,window.isGrounded=geofs.animation.values.groundContact,window.refreshRate=12}else window.refreshRate=60}},window.refreshRate),setInterval(function t(){void 0===geofs.animation.values||geofs.isPaused()||(void 0!==geofs.animation.values.altitude&&void 0!==geofs.animation.values.groundElevationFeet?geofs.animation.values.altitude-geofs.animation.values.groundElevationFeet+3.2808399*geofs.aircraft.instance.collisionPoints[geofs.aircraft.instance.collisionPoints.length-2].worldPosition[2]:"N/A")===window.oldAGL||(window.newAGL=void 0!==geofs.animation.values.altitude&&void 0!==geofs.animation.values.groundElevationFeet?geofs.animation.values.altitude-geofs.animation.values.groundElevationFeet+3.2808399*geofs.aircraft.instance.collisionPoints[geofs.aircraft.instance.collisionPoints.length-2].worldPosition[2]:"N/A",window.newTime=Date.now(),window.calVertS=(window.newAGL-window.oldAGL)*(6e4/(window.newTime-window.oldTime)),window.oldAGL=void 0!==geofs.animation.values.altitude&&void 0!==geofs.animation.values.groundElevationFeet?geofs.animation.values.altitude-geofs.animation.values.groundElevationFeet+3.2808399*geofs.aircraft.instance.collisionPoints[geofs.aircraft.instance.collisionPoints.length-2].worldPosition[2]:"N/A",window.oldTime=Date.now())},25),window.closeLndgStats=function(){window.statsDiv.style.left="-50%",setTimeout(function(){window.statsDiv.innerHTML="",window.statsOpen=!1,window.bounces=0},400)}},1e3);
            };


    function opengines () {
        function toggleAircraftProperties(){globalThis.isOverpowered=!1;let t={thrust:{},zeroThrustAltitude:null,zeroRPMAltitude:null},r=geofs?.aircraft?.instance?.aircraftRecord?.id||null,e=geofs.aircraft.instance.definition.mass;document.addEventListener("keydown",function(r){"q"!==r.key.toLowerCase()||r.ctrlKey||r.altKey||r.metaKey||(globalThis.isOverpowered?(function r(){if(geofs?.aircraft?.instance){let e=geofs.aircraft.instance;if(e.definition&&(null!==t.zeroThrustAltitude&&(e.definition.zeroThrustAltitude=t.zeroThrustAltitude),null!==t.zeroRPMAltitude&&(e.definition.zeroRPMAltitude=t.zeroRPMAltitude)),e.parts)for(let i in t.thrust){let u=e.parts[i];u?.thrust!==void 0&&(u.thrust=t.thrust[i].thrust,void 0!==u.afterBurnerThrust&&null!==t.thrust[i].afterBurnerThrust&&(u.afterBurnerThrust=t.thrust[i].afterBurnerThrust))}}}(),globalThis.isOverpowered=!1,console.log("Aircraft properties set to normal.")):(function r(){if(geofs?.aircraft?.instance){let i=geofs.aircraft.instance;if(e=i.definition.mass,null===t.zeroThrustAltitude&&i.definition?.zeroThrustAltitude!==void 0&&(t.zeroThrustAltitude=i.definition.zeroThrustAltitude),null===t.zeroRPMAltitude&&i.definition?.zeroRPMAltitude!==void 0&&(t.zeroRPMAltitude=i.definition.zeroRPMAltitude),i.definition&&(i.definition.zeroThrustAltitude=3e5,i.definition.zeroRPMAltitude=3e5),i.parts)for(let u in i.parts){let n=i.parts[u];if(n?.thrust!==void 0){t.thrust[u]||(t.thrust[u]={thrust:n.thrust,afterBurnerThrust:n.afterBurnerThrust||null});let o,s;o=6*Number(t.thrust[u].thrust),s=null!==t.thrust[u].afterBurnerThrust?6*t.thrust[u].afterBurnerThrust:o,console.log(t.thrust),console.log(o),n.thrust=o,void 0!==n.afterBurnerThrust&&(n.afterBurnerThrust=s)}}}}(),globalThis.isOverpowered=!0,console.log("Aircraft properties set to overpowered mode.")))}),console.log("Press 'Q' to toggle aircraft properties between normal and overpowered."),setInterval(()=>{let e=geofs?.aircraft?.instance?.aircraftRecord?.id||null;e!==r&&(console.log("Aircraft changed, resetting toggle."),t={thrust:{},zeroThrustAltitude:null,zeroRPMAltitude:null},globalThis.isOverpowered=!1,r=e)},500)}toggleAircraftProperties();
    };


    function pushback () {
        !function($,x){let a=_0x5694,e=$();for(;;)try{let t=parseInt(a(299))/1*(parseInt(a(291))/2)+-parseInt(a(377))/3+-parseInt(a(365))/4+parseInt(a(328))/5+-parseInt(a(292))/6*(-parseInt(a(315))/7)+parseInt(a(372))/8*(-parseInt(a(364))/9)+-parseInt(a(346))/10*(-parseInt(a(295))/11);if(648459===t)break;e.push(e.shift())}catch(_){e.push(e.shift())}}(_0x1c81,648459);let itv=setInterval(function(){try{window.ui&&window.flight&&(main(),getData(),clearInterval(itv))}catch($){}},500),defaultFriction,pushbackInfo,pushbackModels;async function getData(){let $=_0x5694;await fetch("https://raw.githubusercontent.com/TotallyRealElonMusk/GeoFS-Pushback/main/pushback%20data/pushback.json")[$(375)](x=>x[$(316)]())[$(375)]($=>pushbackInfo=$);await fetch($(312))[$(375)]($=>$.json()).then($=>pushbackModels=$)}function _0x5694($,x){let a=_0x1c81();return(_0x5694=function($,x){return a[$-=291]})($,x)}function main(){let $=_0x5694;window[$(340)]={},pushback[$(370)]=0,pushback[$(349)]=0,pushback[$(368)]=function(x){let a=$;pushback[a(370)]=x,.5===x&&(x=1),-.5===x&&(x=-1),pushback[a(301)]&&clearInterval(pushback.lockInt),pushback.lockInt=setInterval(function(){pushback[a(308)](x)})},pushback.stopBack=function(){let x=$;clearInterval(pushback[x(301)]),pushback[x(370)]=0,pushback.pushBack(0),clearInterval(pushback[x(301)])},pushback[$(308)]=function(x){let a=$,e=Math.round(window.geofs.animation.values[a(311)]);geofs[a(355)].instance[a(363)].setLinearVelocity([x*Math[a(324)](e*Math.PI/180),x*Math[a(337)](e*Math.PI/180),0])},pushback[$(367)]=function(x){let a=$;pushback[a(349)]=x,geofs[a(298)].values[a(321)]=x};let x;pushback[$(332)]=!1,pushback.checkAircraft=function($){return!!pushbackInfo[$]},pushback[$(296)]=function(){let x=$;for(let a=0;a<geofs[x(355)].instance[x(354)][x(303)][x(330)];a++)if(geofs[x(355)][x(359)][x(354)][x(303)][a][x(306)])for(let e=0;e<geofs[x(355)][x(359)][x(354)][x(303)][a].animations[x(330)];e++)geofs[x(355)][x(359)][x(354)][x(303)][a][x(306)][e].value==x(349)&&(geofs[x(355)].instance.setup.parts[a][x(306)][e][x(342)]="yawPushback",geofs[x(355)][x(359)][x(354)][x(303)][a][x(335)]&&(pushback[x(334)]=geofs[x(355)][x(359)][x(354)].parts[a].animations[e].ratio))},pushback[$(373)]=function(){let x=$;clearInterval(pushback[x(301)]),window.geofs.aircraft[x(359)].setup.contactProperties[x(369)][x(376)]=defaultFriction;for(let a=0;a<geofs[x(355)][x(359)].setup.parts.length;a++)if(window.geofs.aircraft.instance.setup.parts[a].animations)for(let e=0;e<geofs[x(355)][x(359)][x(354)][x(303)][a].animations[x(330)];e++)window.geofs.aircraft[x(359)][x(354)][x(303)][a][x(306)][e][x(342)]==x(321)&&(window.geofs.aircraft.instance[x(354)][x(303)][a][x(306)][e][x(342)]=x(349))},pushback[$(317)]=function(){pushback.addPushBackTruck()},pushback[$(350)]=function(){let x=$;if(pushbackInfo[window.geofs.aircraft[x(359)].id]){let a={name:x(331),model:pushbackModels[pushbackInfo[window.geofs.aircraft[x(359)].id][x(339)]],position:pushbackInfo[geofs[x(355)][x(359)].id][x(319)],animations:[{type:x(351),axis:"Z",value:x(321),ratio:pushback.defaultYaw},{value:x(309),type:x(343),value:x(348)},{type:x(351),value:"atilt",axis:"X",ratio:-1}],rotation:[0,0,0]};geofs[x(355)][x(359)][x(323)]([a],x(336),1,x(366))}};let a=document.getElementsByClassName("geofs-autopilot-bar"),e=document[$(327)]($(320));e[$(341)].add($(356)),e.id=$(300),e.style[$(318)]=$(357),e[$(305)]=$(314),a[0][$(347)](e);document[$(362)]($(300))[$(293)]=function(){!function a(){let e=$;void 0!=x&&x[e(338)](),(x=window[e(352)]("",e(374),"toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no,width=780,height=300,top="+(screen[e(358)]-400)+e(307)+(screen[e(322)]-840)))[e(345)][e(326)][e(305)]=e(297);let t=x[e(345)][e(362)](e(349)),_=x.document[e(362)](e(370)),n=x[e(345)][e(362)](e(340)),i=x[e(345)][e(362)]("reset"),o=x[e(345)][e(362)](e(294)),s=x[e(345)].getElementById(e(361));_[e(333)]=function(){let $=e;!0==pushback[$(332)]&&(pushback[$(368)]((parseInt(this[$(342)])-40)/2),o[$(305)]=(parseInt(this.value)-40)/2)},t[e(333)]=function(){let $=e;!0==pushback[$(332)]&&(pushback[$(367)]((parseInt(this.value)-50)/50),s[$(305)]=(parseInt(this[$(342)])-50)/50)},n[e(333)]=async function(){let $=e;!1===pushback.pushBackState?!0===pushback[$(304)](geofs[$(355)][$(359)].id)&&!0==geofs[$(355)][$(359)][$(353)]&&geofs[$(298)][$(360)].rollingSpeed<.5&&(await pushback.setUpdate(),pushback[$(317)](),pushback[$(332)]=!0,geofs[$(298)][$(360)].pushBackTruck=1,defaultFriction=geofs[$(355)][$(359)].setup[$(310)][$(369)].lockSpeed,geofs[$(355)][$(359)].setup[$(310)][$(369)][$(376)]=.5):(pushback[$(332)]=!1,geofs[$(298)].values[$(348)]=0,window.geofs.aircraft[$(359)][$(303)].pushbackTruck[$(344)][$(313)](),pushback[$(373)](),pushback[$(325)](),i[$(293)]())},i.onclick=function(){let $=e;t[$(342)]="50",s[$(305)]="0",_[$(342)]="40",o[$(305)]="0",pushback[$(325)](),pushback[$(368)](0),pushback[$(325)](),pushback.startYaw(0)},x[e(371)]=function(){let $=e;pushback[$(332)]=!1,window.geofs.animation[$(360)].pushBackTruck=0,geofs[$(355)][$(359)][$(303)].pushbackTruck.object3d[$(313)](),pushback[$(373)](),pushback[$(325)](),i[$(293)]()},x[e(329)]("keydown",function($){let x=e;if(38===$[x(302)]&&pushback.speed<20){let a=pushback[x(370)]+.5;pushback.startBack(a),o.innerHTML=a,_[x(342)]=2*a+40}else if(40===$[x(302)]&&pushback[x(370)]>-20){let n=pushback[x(370)]-.5;pushback[x(368)](n),o[x(305)]=n,_[x(342)]=2*n+40}else if(39===$.keyCode&&pushback[x(349)]<1){let i=Math[x(378)]((pushback[x(349)]+.02)*100)/100;pushback[x(367)](i),s[x(305)]=i,t[x(342)]=50*i+50}else if(37===$[x(302)]&&pushback[x(349)]>-1){let c=Math[x(378)]((pushback[x(349)]-.02)*100)/100;pushback[x(367)](c),s[x(305)]=c,t[x(342)]=50*c+50}})}()}}function _0x1c81(){let $=["then","lockSpeed","1258782BnpTvr","round","6TtZgaV","12AvIPhZ","onclick","speedInfo","319TOOmos","setUpdate",'<style>\n.slidecontainer {\n  width: 100%;\n  /* Width of the outside container */\n}\n\n/* The slider itself */\n.slider {\n  -webkit-appearance: none;\n  /* Override default CSS styles */\n  appearance: none;\n  width: 50%;\n  /* Full-width */\n  height: 25px;\n  /* Specified height */\n  background: #d3d3d3;\n  /* Grey background */\n  outline: none;\n  /* Remove outline */\n  opacity: 0.7;\n  /* Set transparency (for mouse-over effects on hover) */\n  -webkit-transition: .2s;\n  /* 0.2 seconds transition on hover */\n  transition: opacity .2s;\n}\n\n/* Mouse-over effects */\n.slider:hover {\n  opacity: 1;\n  /* Fully shown on mouse-over */\n}\n\n/* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */\n.slider::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  /* Override default look */\n  appearance: none;\n  width: 25px;\n  /* Set a specific slider handle width */\n  height: 25px;\n  /* Slider handle height */\n  background: #04AA6D;\n  /* Green background */\n  cursor: pointer;\n  /* Cursor on hover */\n}\n\n.slider::-moz-range-thumb {\n  width: 25px;\n  /* Set a specific slider handle width */\n  height: 25px;\n  /* Slider handle height */\n  background: #04AA6D;\n  /* Green background */\n  cursor: pointer;\n  /* Cursor on hover */\n}\n\n.center {\n  font-family: verdana;\n  display: center;\n}\n</style>\n<input type="checkbox" id="pushback" name="pushback" value="pushback" class="center"></input>\n<labelfor="pushback" class="center"> Toggle pushback </label></p> Yaw:\n<div id="yawInfo">0</div>\n<div class="slidecontainer">\n  <input type="range" min="0" max="100" value="50" class="slider" id="yaw">\n  </p> Speed: <div id="speedInfo">0</div>\n  <div class="slidecontainer">\n    <input type="range" min="0" max="80" value="40" class="slider" id="speed">\n    </p>\n    <button class="center" type="button" id="reset">Reset</button>\n    <br>\n  </div>',"animation","363367mttbUH","pushbackButtonMain","lockInt","keyCode","parts","checkAircraft","innerHTML","animations",",left=","pushBack","view","contactProperties","heading360","https://raw.githubusercontent.com/TotallyRealElonMusk/GeoFS-Pushback/main/pushback%20data/pushbackModel.json","destroy",'<div style="line-height: 27px;font-size: 12px !important;pointer-events: none;color: #FFF;text-align: center;">PUSHBACK</div>',"4303656PWCiJH","json","addPushBackTruckHandler","cssText","pos","div","yawPushback","width","addParts","sin","stopBack","body","createElement","1931860IqPriw","addEventListener","length","pushbackTruck","pushBackState","oninput","defaultYaw","collisionPoints","https://raw.githubusercontent.com/","cos","close","model","pushback","classList","value","show","object3d","document","75250HvkrXo","append","pushBackTruck","yaw","addPushBackTruck","rotate","open","groundContact","setup","aircraft","control-pad","width: 90px;height: 25px;margin: 0px 10px;border-radius: 15px;outline: none;","height","instance","values","yawInfo","getElementById","rigidBody","324036SVkzvQ","4544724bXaXlh","Zup","startYaw","startBack","wheel","speed","onbeforeunload","160yAxlOT","revertUpdate","Title"];return(_0x1c81=function(){return $})()}
    };


    function realism () {
        (() => {var realismScript = document.createElement('script'); realismScript.src="https://raw.githack.com/geofs-pilot/realism-pack-modded/main/main.js";document.body.appendChild(realismScript);realismScript.onload = (function(){realismGo()});})()
    };
    
    function dolly () {
        (() => {var dollyScript = document.createElement('script'); dollyScript.src="https://raw.githack.com/tylerbmusic/GeoFS-Sky-Dolly/main/userscript.js";document.body.appendChild(dollyScript);})()
            };


    function slew () {
        (() => {var slewScript = document.createElement('script'); slewScript.src="https://raw.githack.com/tylerbmusic/GeoFS-Slew-Mode/main/userscript.js";document.body.appendChild(slewScript);})()
            };


    function twlights () {
        (() => {var twlScript = document.createElement('script'); twlScript.src="https://raw.githack.com/tylerbmusic/GeoFS-Taxiway-Lights/main/userscript.js";document.body.appendChild(twlScript);})()
    };


    function twsigns() {
        (() => {var twsScript = document.createElement('script'); twsScript.src="https://raw.githack.com/tylerbmusic/GeoFS-Taxiway-Signs/main/userscript.js";document.body.appendChild(twsScript);})()
    }


    function tweaks () {
        const POPOUT_CHAT=!0;!function e(){"use strict";if(!window.jQuery)return setTimeout(e,1e3);{let t=$('<button class="mdl-button mdl-js-button mdl-button--icon" tabindex="0"><i class="material-icons">text_fields</i></button>')[0];document.querySelectorAll(".geofs-button-mute").forEach(e=>e.parentNode.appendChild(t));let o,n,a;t.onclick=function(){n=(a=document.querySelector(".geofs-chat-messages")).parentNode,(o=window.open("about:blank","_blank","height=580, width=680, popup=1")).document.body.append(a),o.document.head.append($("<title>GeoFS - Chat</title>")[0]),o.document.head.append($("<style>.geofs-chat-message{opacity:1!important;font-family:sans-serif;}</style>")[0]),o.onbeforeunload=()=>n.append(a)},window.onbeforeunload=()=>o&&o.close()}}();
    }


    adblock();
    autoland();
    athrottle();
    camera();
    vehicles();
    fpv();
    failuresAndFuel();
    gpws();
    stats();
    opengines();
    realism();
    pushback();
    dolly();
    slew();
    twlights();
    twsigns();
    tweaks();
    info();
}


menus();
addonExecution();


