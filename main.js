  function menus () {
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


          function addAddon(name) {
              //ADDON DESCRIPTIONS GO HERE:
              const descriptions = {
                  'AI ATC': `***works with tampermonkey only, GeoFS AI ATC on Github***
                  
                  Uses PuterJS GPT and speech-to-text to provide AI air traffic control
                  Type a message using Ctrl+click
                  you have to be within 50 nautical miles of the airport to talk to it
                  click on the radio icon to tune in to different airport; you can tune to a particular airport ATC by using their ICAO code
                  If ATC tells you to wait for instructions, you must check in with them every 10-20 seconds
                  You must specify which runway you want to land on`,

                  'ATC airspace': `2 airspace monitoring modes accessible via the AIRSPACE button at the top
                  RDR mode has larger range and will set the radius of your airspace up to 25 km
                  RDR mode creates an invisible circle centered around your airport of choice that senses if a plane enters or exits it regardless of altitude
                  Set your radius and your airport to begin monitoring
                  When planes enter or exit this airspace, a sound and notification are activated
                  VIS mode uses which planes are visible to notify you
                  When the number of players visible to you changes, the sound and notification are activated
                  While VIS mode is based on where you are, you can remotely monitor airspace using the RDR mode, which uses the input airport as the center of the airspace`,
                  
                  'Autoland++': `Automatic spoiler arming system
                  Auto-disables autopilot on touchdown
                  Automatic reverse thrust activation on landing
                  Visual indicator for spoiler arm status (press [Shift] to arm)`,
	     
	      'Autothrottle': `Regulates aircraft speed while retaining pilot control`,
          		
                
                  'Failures': `Adds the ability for systems to fail`,

  	     'Flight path vector': `Shows approximately where your flight path intersects the ground. It also displays your glideslope if you are tuned into ILS. Hide the FPV by pressing [Insert]`,

                  'Fuel': `Simulates fuel consumption by calculating burn rate from throttle setting and fuel capacity from aircraft mass. To refuel, you must be on the ground, stationary, and have engines off`,

                  'GPWS': `Adds GPWS callouts
                  For the minimums to work, you need to type in the BAROMETRIC (MSL) minimum altitude/desision height (without the -½) as defined at the bottom of the IFR approach plate.
                  For the Glideslope alarm to work, you must be tuned into an ILS.
                  For some of the callouts to work, you must be descending.
     	     Toggle using [W]`,

                  'Information display': `Displays Indicated Airspeed, Mach, Ground Speed, Altitude, Above Ground Level, Heading, Vertical Speed, Throttle %`,
	    
      'Jobs': `***works with tampermonkey only, GeoFS/randomJobs on Github***

     Shows flights departing from the airport you are currently at and can also load flight plans for those routes
     Tracks your completed flights under “Career”`,

                  'Landing stats': `Upon landing, displays vertical speed, G-forces, airspeed, roll, tilt, TDZ accuracy, and more. For the TDZ to work you must be tuned into ILS `,

                  'Overpowered engines': `Sets the engine thrust to 900,000 and the ceiling to 300,000 feet.
                  Toggle using [Q]`,

                  'Pushback': `Adds pushback tugs for most military and civilian aircraft which appear if you are stationary.`,

                  'Realism pack': `Toggle button for KCAS/KTAS instruments
                    Fixed PFD/HUD sizes for all CC aircraft
                    ILS autoland for autopilot approaches
                    Blackout over 9 Gs (cockpit view only)
                    Fighter condensation effects
                    SSR shaders by AriakimTaiyo (*)
                    Immersion sounds for A320/A220/A350, 737/777 (*)
                    Helicopter rotor strikes cause crashes
                    Basic propwash
                    Livery Selector by Kolos26 (use alone if Realism Pack crashes)
                    Bug fixes for F-14, XB-70
                    F-14 swing wing physics
                    8 addon aircraft:
                    F/A-18C: Tailhook, paddle switch (G-limiter override)
                    Su-27: Cobra button (not Su-35)
                    MiG-17
                    E-7 Wedgetail AWACS
                    MiG-21: X toggles drop tank
                    Morane-Saulnier Type G
                    F-117: No working stealth
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
                    Carrier catapults (*)
                    Taxi to USS John C. Stennis front deck, press [Q] to lock/unlock launch bar, [~] to launch (full power recommended)
                    Stall buffet camera effect (*)
                    Lift-based wingflex for most CC airliners (*)
                    Realism fixes: HAL Tejas, F-15, F-22
                    Tricky Corsair startup (advance throttle slightly)
                    F-16 brake parachute
                    Turbofan spool-up delay (10%-70% RPM)
                    Advanced 2D Clouds Gen V1
                    Autospoilers (Shift to arm)
                    Fighter jet ejection seats ([E] to eject, [B] to descend faster)
                    HUD machmeter
                    Lag reduction`,

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

                   'Taxiway lights': `Creates taxiway lights that turn yellow when nearing a runway to help distinguish intersections`,

      'UI tweaks': `Allows you to adjust autopilot using mouse wheel and adds a popout chat`
              };
              
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
          //ADDON NAMES AND runFunctions GO HERE:
          addAddon('AI ATC');
          addAddon('Adblock');
          addAddon('ATC airspace');
          addAddon('Autoland++');
          addAddon('Autothrottle');
          addAddon('Failures');
          addAddon('Flight path vector');
          addAddon('Fuel');
          addAddon('GPWS');
          addAddon('Information display');
          addAddon('Jobs')
          addAddon('Landing stats');
          addAddon('Overpowered engines');
          addAddon('Pushback');
          addAddon('Realism pack');
          addAddon('Slew mode');
          addAddon('Taxiway lights');         
          addAddon('UI tweaks'); 

          geofsPreferencesPanel.appendChild(addonListItem);
      }

function createInstructions() { //—-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
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


          function addInstruction(name) {
              //INSTRUCTIONS GO HERE:
              const descriptions = {
                  'Preflight procedures': `Run FlightControl.ahk for numpad controls
Review procedures
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

Decoding METAR - detailed guide here.
PHNL 250953Z 05007G17KT 10SM FEW024 FEW040 27/19 A3001 RMK AO2 SLP163 
T02670194 403220261

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

                  'Climb procedures': `1) Make sure to select your first waypoint and set desired cruise altitude. Set V/S to 3000 fpm and speed to 230 kts. Set Flaps to 2 for Takeoff, rotate at around 140 to 200 kts, depending on aircraft. Nose up 10-15°. Do NOT stick forward to hold the airplane down to reach faster than normal speed before rotation. This puts strain on the nose wheel and takes weight off the main gear, causing wheelbarrowing, loss of control, and nose gear damage.
2)Raise flaps to 0 at 1500 ft AGL. Reduce thrust to 80% and engage autopilot, hold V/S at 3000 fpm and speed at 230 kts.
3) At 4000 ft AGL, reduce V/S to 2400 fpm.
4) At 10000 ft, increase speed to 250 kts & reduce V/S to 2200 fpm.
5) At 18000 ft, increase speed to 270 kts & reduce V/S to 1800 fpm.
6) At 25000 ft, increase speed to 280 kts & reduce V/S to 1500 fpm.
7) At 30000 ft, set speed to Mach 0.76 (448 kts) & reduce V/S to 1000 fpm.
8) At cruise altitude, set speed to desired cruise speed & set V/S to 0000 fpm if necessary`,

                  'Descent procedures': `1) Calculate T/D in advance. This can be done by subtracting the arrival elevation from your cruise alt, then multiplying that by 0.003 (e.g: for cruise FL320 with approximately 2000 ft arrival elevation, T/D will be 90nm). 
2) At 5 nautical miles away from T/D, reduce speed to Mach 0.76 (448 kts) & set V/S to -2400 fpm.
3) At T/D, set alt to 4000 ft
4) At 30000 ft AGL , reduce speed to 280 kts & increase V/S to -2200 fpm
5) At 25000 ft AGL, reduce speed to 270 kts
6) At 18000 ft AGL, increase V/S to -1800 fpm
7) At 12000 ft, AGL reduce speed to 250 kts
8) At 10000 ft AGL, reduce speed to 240 kts
9) At 7000 ft AGL, reduce speed to 230 kts & increase V/S to -1500 fpm
10) At 5000 ft AGL, reduce speed to 210 kts & set flaps to 1
11) At 4000 ft AGL, reduce speed to 190 kts & set flaps to 2. Set V/S to -1200 fpm & hold altitude till 12 nautical miles.
12) At 12 nautical miles, set alt to 0 ft AGL and tune in to ILS if autolanding.
13) At 3000 ft AGL, reduce speed to 170 kts & set flaps to 3
14) At 2500 ft AGL, reduce speed to 160 kts & set flaps to full. Lower landing gear.
15) Adjust V/S as necessary for approach at your discretion.
16) Prepare to disengage AP below 1000 ft (final approach). If autolanding, disregard. Arm spoilers (Shift)
17) Follow the lighting aids (ALS, VASI, PAPI)
18) Flare before touchdown on main wheels, engage spoilers and reverse thrust if applicable (automatically engaged when autolanding), engage wheel brakes when weight on wheels. Do NOT stick forward to hold the airplane down. This puts strain on the nose wheel and takes weight off the main gear, causing wheelbarrowing, loss of control and braking power, and nose gear damage. Raise flaps only when clear of runway.`,

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

function createFailures() { //—-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
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


          function addfailure(name) {
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

                  'Pitot-static system': `1. Detect the failure:
   - Look for discrepancies in airspeed, altitude, or vertical speed indicators.
2. Switch to alternate systems:
   - Use alternate static source or GPS for speed/altitude.
3. Fly by attitude:
   - Use artificial horizon, power settings, and known pitch for control.
4. Land ASAP:
   - Descend to VFR conditions if possible.`,

                  'Structural': `1. Assess the situation:
   - Determine if the damage is controllable or catastrophic.
   - Slow to maneuvering speed (Va) to prevent further stress.
2. Avoid further damage:
   - Limit maneuvers and avoid turbulence.
3. Plan an emergency landing:
   - Declare an emergency and head to the nearest suitable airport.`
              };
              
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
          addfailure('Pitot-static system');
          addfailure('Structural');
          
          geofsPreferencesPanel.appendChild(failureListItem);
      }

createAddonManager();
createInstructions();
createFailures();
};

function addonExecution () {

function adblock () {
function removeElementsByClass(e){let s=document.getElementsByClassName(e);for(;s.length>0;)s[0].parentNode.removeChild(s[0])}removeElementsByClass("geofs-adbanner geofs-adsense-container");
};

function airspace () {
let radius=1,airportName="";function checkUser(t){let i=distanceInKmBetweenEarthCoordinates(t[0],t[1],window.geofs.mainAirportList[airportName][0],window.geofs.mainAirportList[airportName][1]);return i<radius||!(i>radius)}function distanceInKmBetweenEarthCoordinates(t,i,o,s){var n=degreesToRadians(o-t),r=degreesToRadians(s-i),l=Math.sin(n/2)*Math.sin(n/2)+Math.sin(r/2)*Math.sin(r/2)*Math.cos(t=degreesToRadians(t))*Math.cos(o=degreesToRadians(o));return 6371*(2*Math.atan2(Math.sqrt(l),Math.sqrt(1-l)))}function degreesToRadians(t){return t*Math.PI/180}function check(t){let i=[];for(let[o,s]of Object.entries(t))try{void 0!==s.lastUpdate.co&&null!==s.lastUpdate.co&&checkUser(s.lastUpdate.co)&&i.push(o)}catch(n){}return i}Array.prototype.equals&&console.warn("Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code."),Array.prototype.equals=function(t){if(!t)return!1;if(t===this)return!0;if(this.length!=t.length)return!1;for(var i=0,o=this.length;i<o;i++)if(this[i]instanceof Array&&t[i]instanceof Array){if(!this[i].equals(t[i]))return!1}else if(this[i]!=t[i])return!1;return!0},Object.defineProperty(Array.prototype,"equals",{enumerable:!1}),Array.prototype.diff=function(t){return this.filter(i=>!t.includes(i)).concat(t.filter(t=>!this.includes(t)))},Object.defineProperty(Array.prototype,"diff",{enumerable:!1});let airspace={},visible={},a,b,d,e,sonarSound=new Audio("https://raw.githubusercontent.com/meatbroc/geofs-atc-airspace/main/sonar.mp3");function createHaring(t){let i=document.createElement("div");i.classList.add("geofs-haring"),i.innerHTML=`<div class="geofs-content"><p>${t}</p></div></div></div>`,document.body.appendChild(i),setTimeout(function(){i.remove()},3e3)}function action(t,i,o){(t=(t=t.map(t=>{try{if(multiplayer.users[t]&&void 0==multiplayer.users[t].isTraffic)return multiplayer.users[t].callsign}catch(i){console.error("Error reading player "+t+"'s data")}})).filter(function(t){return void 0!==t})).length>0&&(i.length<o.length?(createHaring(`${t} entered your airspace`),sonarSound.play()):i.length>o.length&&(createHaring(`${t} left your airspace`),sonarSound.play()),console.log(t))}airspace.init=function(){a=check(multiplayer.users),b=check(multiplayer.users),airspace.interval=setInterval(function t(){let i=a.diff(b);0!=i.length&&action(i,a,b),a=b,b=check(multiplayer.users)},200)},airspace.stop=function(){clearInterval(airspace.interval),a=void 0,b=void 0},visible.init=function(){d=Object.keys(multiplayer.visibleUsers),e=Object.keys(multiplayer.visibleUsers),visible.interval=setInterval(function t(){let i=d.diff(e);0!=d.diff(e).length&&action(i,d,e),d=e,e=Object.keys(multiplayer.visibleUsers)},200)},visible.stop=function(){clearInterval(visible.interval),d=void 0,e=void 0};const style=document.createElement("style");style.innerHTML=`
     .ext-autopilot-pad {
         width: 90px;
         margin: 0px 10px;
     }
     .ext-autopilot-bar {
         white-space: nowrap;
         display: flex;
         align-items: flex-start;
         pointer-events: all;
     }
     .ext-control-pad {
         border: 1px solid #888;
         background-color: #000;
         box-shadow: 0px 0px 5px #000;
         border-radius: 15px;
         cursor: pointer !important;
     }
     .ext-autopilot-controls {
         vertical-align: bottom;
         display: none;
         margin-right: 10px;
     }
     .ext-autopilot-control {
         position: relative;
         text-align: center;
         margin: 0px 5px;
         color: white;
         line-height: 25px;
         display: inline-block;
     }
     .ext-airport-label {
         position: relative !important;
         left: 17.5px;
     }
     .ext-highlighted {
         color: #66ff00 !important;
         border-color: white !important;
     }
     .ext-highlighted2 {
         color: #FF0000 !important;
         border-color: white !important;
     }
     .ext-autopilot-control span {
         display: block;
         text-align: center;
         text-shadow: #000 1px 1px 3px;
         font-size: 12px;
         top: 2px;
         position: relative;
     }
     .ext-autopilot-bar .ext-autopilot-switch .ext-switchRight {
         border-radius: 0px 15px 15px 0px;
         left: 0px;
     }
     .ext-autopilot-bar .ext-autopilot-switch .ext-switchLeft {
         border-radius: 15px 0px 0px 15px;
         border-right: 5px;
         right: -3px;
     }
     .ext-autopilot-bar .ext-autopilot-switch a {
         user-select: none;
         -webkit-user-select: none;
         position: relative;
         display: inline-block;
         width: 35px;
         height: 17px;
         line-height: 19px;
         cursor: pointer;
         color: white;
         background: #000;
         margin: 2px 0px;
         display: inline-block;
         border: 1px solid white;
         box-shadow: 0px 0px 5px #000;
     }
     .ext-autopilot-bar .ext-autopilot-control {
         position: relative;
         text-align: center;
         margin: 0px 5px;
         color: white;
         line-height: 25px;
         display: inline-block;
     }
     .ext-autopilot-bar .ext-autopilot-course {
         width: 35px !important;
     }
     .ext-autopilot-bar .ext-autopilot-airport {
         width: 70px !important;
     }
     .ext-numberDown {
         border-radius: 15px 0px 0px 15px;
         line-height: 23px;
         right: -5px;
         position: relative !important;
     }
     .ext-numberUp {
         border-radius: 0px 15px 15px 0px;
         line-height: 26px;
         left: -5px;
         position: relative !important;
     }
     .ext-airportInput {
         border-radius: 15px 0px 0px 15px !important;
     }
     .ext-autopilot-control .ext-numberDown,.ext-autopilot-control .ext-numberUp {
         user-select: none;
         -webkit-user-select: none;
         vertical-align: top;
         cursor: pointer;
         text-align: center;
         color: white;
         background: #000;
         margin: 0px;
         width: 30px;
         display: inline-block;
         border: 1px solid white;
         height: 25px;
         box-shadow: 0px 0px 5px #000;
     }
     .ext-autopilot-control .ext-numberValue {
         font-family: 'LCD-Bold', monospace;
         font-size: 20px !important;
         letter-spacing: 1px;
         display: inline-block;
         vertical-align: top;
         padding: 0px 5px;
         margin: 0px;
         background: #000;
         border: 1px solid;
         border-radius: 0px;
         height: 25px;
         line-height: 26px;
         box-shadow: 0px 0px 5px #000;
         color: white;
         width: 80px;
         text-align: right;
     }
  `,document.head.appendChild(style);const controlButton=document.createElement("div");controlButton.classList.add("ext-autopilot-bar"),controlButton.innerHTML=`
                 <div class="ext-control-pad ext-autopilot-pad" id="atc-button" tabindex="0">
                     <div class="control-pad-label transp-pad">AIRSPACE</div>
                     `;const container=document.getElementsByClassName("geofs-autopilot-bar");container[0].appendChild(controlButton);const controlElmnt=document.createElement("div");controlElmnt.classList.add("ext-autopilot-controls"),controlElmnt.style.display="none",controlElmnt.innerHTML=`
                     <div class="ext-autopilot-control">
                         <span class="ext-autopilot-switch ext-autopilot-mode">
                             <a class="ext-switchLeft" data-method="setMode" value="HDG" id="radar-sel">RDR</a>
                             <a class="ext-switchRight" data-method="setMode" value="NAV" id="vis-sel">VIS</a>
                         </span>
                     </div>
     `;const radiusElmnt=document.createElement("div");radiusElmnt.classList.add("ext-autopilot-control"),radiusElmnt.style.display="none",radiusElmnt.innerHTML=`
                         <a class="ext-numberDown" id="radius-selDown">-</a>
                         <input class="ext-numberValue ext-autopilot-course" min="0" max="359" data-loop="true" step="1" maxlength="3" value="1">
                         <a class="ext-numberUp" id="radius-selUp">+</a>
                         <span>RDR RADIUS</span>
     `;const airportElmnt=document.createElement("div");airportElmnt.classList.add("ext-autopilot-control"),airportElmnt.style.display="none",airportElmnt.style.width="64px",airportElmnt.innerHTML=`
                         <input class="ext-airportInput ext-numberValue ext-autopilot-airport geofs-stopKeyboardPropagation geofs-stopKeyupPropagation" id="airport-selInput" min="0" max="359" data-loop="true" step="1" maxlength="4" value="">
                         <a class="ext-numberUp" id="airport-selSub">→</a>
                         <span class="ext-airport-label">AIRPORT</span>
     `;const container2=document.getElementsByClassName("ext-autopilot-bar");container2[0].appendChild(controlElmnt),container2[0].appendChild(radiusElmnt),container2[0].appendChild(airportElmnt);let extMode=0;document.getElementById("atc-button").addEventListener("click",function(){this.classList.toggle("active"),this.classList.contains("active")?(controlElmnt.style.display="block",this.classList.add("green-pad"),this.classList.contains("red-pad")&&this.classList.remove("red-pad")):(controlElmnt.style.display="none",radiusElmnt.style.display="none",airportElmnt.style.display="none",1===extMode?(airspace.stop(),document.getElementById("radar-sel").classList.remove("green-pad")):2===extMode&&(visible.stop(),document.getElementById("vis-sel").classList.remove("green-pad")),extMode=0,this.classList.remove("green-pad"),this.classList.add("red-pad"),setTimeout(()=>{this.classList.remove("red-pad")},3e3))}),document.getElementById("radar-sel").addEventListener("click",function(){0===extMode&&(extMode=3,this.classList.add("green-pad")),2===extMode&&(extMode=3,visible.stop(),document.getElementById("vis-sel").classList.remove("green-pad"),this.classList.add("green-pad")),radiusElmnt.style.display="block",airportElmnt.style.display="block"}),document.getElementById("vis-sel").addEventListener("click",function(){0===extMode&&(extMode=2,visible.init(),this.classList.add("green-pad"),document.getElementById("radar-sel").classList.contains("green-pad")&&document.getElementById("radar-sel").classList.remove("green-pad")),1===extMode&&(extMode=2,airspace.stop(),visible.init(),document.getElementById("radar-sel").classList.remove("green-pad"),this.classList.add("green-pad")),3===extMode&&(extMode=2,visible.init(),document.getElementById("radar-sel").classList.remove("green-pad"),this.classList.add("green-pad")),radiusElmnt.style.display="none",airportElmnt.style.display="none"}),document.getElementById("radius-selUp").addEventListener("click",function(){radiusElmnt.childNodes[3].value<25&&radiusElmnt.childNodes[3].value++,radius=parseInt(radiusElmnt.childNodes[3].value)}),document.getElementById("radius-selDown").addEventListener("click",function(){radiusElmnt.childNodes[3].value>1&&radiusElmnt.childNodes[3].value--,radius=parseInt(radiusElmnt.childNodes[3].value)}),document.getElementById("airport-selSub").addEventListener("click",function(){4===airportElmnt.childNodes[1].value.length&&window.geofs.mainAirportList[airportElmnt.childNodes[1].value]?(airportName=airportElmnt.childNodes[1].value,airportElmnt.childNodes[1].classList.add("ext-highlighted"),extMode=1,airspace.init()):(airportElmnt.childNodes[1].classList.add("ext-highlighted2"),setTimeout(()=>{airportElmnt.childNodes[1].classList.remove("ext-highlighted2"),airportElmnt.childNodes[1].value=""},3e3))}),document.getElementById("airport-selInput").addEventListener("click",function(){this.value="",this.classList.contains("ext-highlighted")&&this.classList.remove("ext-highlighted"),this.classList.contains("ext-highlighted2")&&this.classList.remove("ext-highlighted2")});
};

function autoland () {
async function waitForCondition(i){return new Promise(t=>{let n=setInterval(()=>{i()&&(clearInterval(n),t())},100)})}async function waitForUI(){return waitForCondition(()=>"undefined"!=typeof ui)}async function waitForInstance(){return waitForCondition(()=>window.geofs.aircraft&&window.geofs.aircraft.instance)}async function waitForInstruments(){return waitForCondition(()=>instruments&&window.geofs.aircraft.instance.setup.instruments)}async function autospoilers(){await waitForUI(),await waitForInstance(),window.geofs.aircraft.instance.animationValue.spoilerArming=0;let i=()=>{window.geofs.aircraft.instance.groundContact||0!==controls.airbrakes.position||(window.geofs.aircraft.instance.animationValue.spoilerArming=0===window.geofs.aircraft.instance.animationValue.spoilerArming?1:0)},t=()=>{controls.airbrakes.target=0===controls.airbrakes.target?1:0,controls.setPartAnimationDelta(controls.airbrakes),window.geofs.aircraft.instance.animationValue.spoilerArming=0};controls.setters.setSpoilerArming={label:"Spoiler Arming",set:i},controls.setters.setAirbrakes={label:"Air Brakes",set:t},await waitForInstruments(),instruments.definitions.spoilers.overlay.overlays[3]={anchor:{x:0,y:0},size:{x:50,y:50},position:{x:0,y:0},animations:[{type:"show",value:"spoilerArming",when:[1]},{type:"hide",value:"spoilerArming",when:[0]}],class:"control-pad-dyn-label green-pad",text:"SPLR<br/>ARM",drawOrder:1},instruments.init(window.geofs.aircraft.instance.setup.instruments),$(document).keydown(function(i){16===i.which&&(console.log("Toggled Arming Spoilers"),controls.setters.setSpoilerArming.set())}),setInterval(function(){1===window.geofs.aircraft.instance.animationValue.spoilerArming&&window.geofs.aircraft.instance.groundContact&&(0===controls.airbrakes.position&&controls.setters.setAirbrakes.set(),window.geofs.aircraft.instance.animationValue.spoilerArming=0,window.geofs.autopilot.setSpeed(0),setTimeout(()=>{window.geofs.autopilot.turnOff()},200),controls.setters.fullReverse.set())},100),setInterval(function(){["3292","3054"].includes(window.geofs.aircraft.instance.id)&&void 0===window.geofs.aircraft.instance.setup.instruments.spoilers&&(window.geofs.aircraft.instance.setup.instruments.spoilers="",instruments.init(window.geofs.aircraft.instance.setup.instruments))},500)}autospoilers();
};

function throttle () {
window.executeOnEventDone("geofsInitialized",function t(){window.geofs.autothrottle={on:!1,init:function(){window.geofs.autothrottle.initStyles(),window.geofs.autothrottle.callbackID=window.geofs.api.addFrameCallback(window.geofs.autothrottle.tickWrapper);let t=$("<div/>").addClass("ext-autothrottle-bar").html('<div class="ext-autothrottle-control-pad ext-autothrottle-pad" id="autothrottle-button" tabindex="0" onclick="window.geofs.autothrottle.toggle()"><div class="control-pad-label transp-pad">A/THR</div>');$(".geofs-autopilot-bar").append(t);let o=$("<div/>").html('<a class="ext-autothrottle-numberDown numberDown ext-autothrottle-control">-</a><input class="ext-autothrottle-numberValue numberValue ext-autothrottle-course" min="0" smallstep="5" stepthreshold="100" step="10" data-method="setSpeed" maxlength="4" value="0"><a class="ext-autothrottle-numberUp numberUp">+</a><span>KTS</span>').addClass("ext-autothrottle-control"),e=$("<div/>").addClass("geofs-autopilot-control").html('<span class="ext-autothrottle-switch ext-autothrottle-mode"><a class="ext-autothrottle-switchLeft switchLeft green-pad" data-method="setArm" value="false" id="armOff">MNL</a><a class="ext-autothrottle-switchRight switchRight" data-method="setArm" value="true" id="armOn">LND</a></span>');$("<div/>").addClass("ext-autothrottle-controls").hide().append(o,e).appendTo($(".ext-autothrottle-bar"));let r=$("<div/>").addClass("mdl-tooltip").attr("for","autothrottle-button").text("Toggle autothrottle on/off");t.append(r),componentHandler.upgradeElement(r[0]),$(document).on("autothrottleOn",function(){window.geofs.autopilot.on&&window.geofs.autopilot.turnOff(),clearTimeout(window.geofs.autothrottle.panelTimeout),$(".ext-autothrottle-controls").show(),$(".ext-autothrottle-pad").removeClass("red-pad").addClass("green-pad"),window.geofs.autothrottle.on=!0;var t=Math.round(window.geofs.animation.values.kias);window.geofs.autopilot.setSpeed(t),$(".ext-autothrottle-numberValue").val(t)}),$(document).on("autothrottleOff",function(){$(".ext-autothrottle-pad").removeClass("green-pad").addClass("red-pad"),$(".ext-autothrottle-controls").hide(),window.geofs.autothrottle.panelTimeout=setTimeout(function(){$(".ext-autothrottle-pad").removeClass("red-pad").removeClass("green-pad")},3e3),window.geofs.autothrottle.on=!1}),$(document).on("autopilotOn",function(){window.geofs.autothrottle.on&&$(document).trigger("autothrottleOff")})},initStyles:function(){let t=document.createElement("style");t.innerHTML=`
                   .ext-autothrottle-pad {
                       width: 60px;
                       margin: 0px 10px;
                   }
                   .ext-autothrottle-bar {
                       white-space: nowrap;
                       display: flex;
                       align-items: flex-start;
                       pointer-events: all;
                   }
                   .ext-autothrottle-control-pad {
                       border: 1px solid #888;
                       background-color: #000;
                       box-shadow: 0px 0px 5px #000;
                       border-radius: 15px;
                       cursor: pointer !important;
                   }
                   .ext-autothrottle-controls {
                       vertical-align: bottom;
                       display: none;
                       margin-right: 10px;
                   }
                   .ext-autothrottle-control {
                       position: relative;
                       text-align: center;
                       margin: 0px 5px;
                       color: white;
                       line-height: 25px;
                       display: inline-block;
                   }
                   .ext-autothrottle-airport-label {
                       position: relative !important;
                       left: 17.5px;
                   }
                   .ext-autothrottle-highlighted {
                       color: #66ff00 !important;
                       border-color: white !important;
                   }
                   .ext-autothrottle-highlighted2 {
                       color: #FF0000 !important;
                       border-color: white !important;
                   }
                   .ext-autothrottle-control span {
                       display: block;
                       text-align: center;
                       text-shadow: #000 1px 1px 3px;
                       font-size: 12px;
                       top: 2px;
                       position: relative;
                   }
                   .ext-autothrottle-bar .ext-autothrottle-switch .ext-autothrottle-switchRight {
                       top: -25px !important;
                       border-radius: 0px 15px 15px 0px;
                       left: 0px;
                   }
                   .ext-autothrottle-bar .ext-autothrottle-switch .ext-autothrottle-switchLeft {
                       top: -25px !important;
                       border-radius: 15px 0px 0px 15px;
                       border-right: 5px;
                       right: -3px;
                   }
                   .ext-autothrottle-bar .ext-autothrottle-switch a {
                       user-select: none;
                       -webkit-user-select: none;
                       position: relative;
                       display: inline-block;
                       width: 35px;
                       height: 17px;
                       line-height: 19px;
                       cursor: pointer;
                       color: white;
                       background: #000;
                       margin: 2px 0px;
                       display: inline-block;
                       border: 1px solid white;
                       box-shadow: 0px 0px 5px #000;
                   }
                   .ext-autothrottle-bar .ext-autothrottle-control {
                       position: relative;
                       text-align: center;
                       margin: 0px 5px;
                       color: white;
                       line-height: 25px;
                       display: inline-block;
                   }
                   .ext-autothrottle-bar .ext-autothrottle-course {
                       width: 35px !important;
                   }
                   .ext-autothrottle-bar .ext-autothrottle-airport {
                       width: 70px !important;
                   }
                   .ext-autothrottle-numberDown {
                       border-radius: 15px 0px 0px 15px;
                       line-height: 23px;
                       right: -5px;
                       position: relative !important;
                   }
                   .ext-autothrottle-numberUp {
                       border-radius: 0px 15px 15px 0px;
                       line-height: 26px;
                       left: -5px;
                       position: relative !important;
                   }
                   .ext-autothrottle-airportInput {
                       border-radius: 15px 0px 0px 15px !important;
                   }
                   .ext-autothrottle-control .ext-autothrottle-numberDown,.ext-autothrottle-control .ext-autothrottle-numberUp {
                       user-select: none;
                       -webkit-user-select: none;
                       vertical-align: top;
                       cursor: pointer;
                       text-align: center;
                       color: white;
                       background: #000;
                       margin: 0px;
                       width: 30px;
                       display: inline-block;
                       border: 1px solid white;
                       height: 25px;
                       box-shadow: 0px 0px 5px #000;
                   }
                   .ext-autothrottle-control .ext-autothrottle-numberValue {
                       font-family: 'LCD-Bold', monospace;
                       font-size: 20px !important;
                       letter-spacing: 1px;
                       display: inline-block;
                       vertical-align: top;
                       padding: 0px 5px;
                       margin: 0px;
                       background: #000;
                       border: 1px solid;
                       border-radius: 0px;
                       height: 25px;
                       line-height: 26px;
                       box-shadow: 0px 0px 5px #000;
                       color: white;
                       width: 80px;
                       text-align: right;
                   }
                `,document.head.appendChild(t)},toggle:function(){window.geofs.autothrottle.error||(window.geofs.autothrottle.on?$(document).trigger("autothrottleOff"):$(document).trigger("autothrottleOn"))},tick:function(t,o){var e=clamp(Math.floor(o/window.geofs.api.renderingSettings.physicsDeltaMs),1,10),r=t/e,a=window.geofs.animation.values,l=window.geofs.autopilot,i=l.values.speed,n=a.kias;"mach"==window.geofs.autopilot.speedMode&&(i=window.geofs.utils.machToKnots(l.values.speed),n=window.geofs.utils.machToKnots(a.mach)),l.PIDs.throttle.set(i,0,1),controls.throttle=l.PIDs.throttle.compute(n,r),controls.throttle=clamp(controls.throttle,0,1),window.geofs.debug.autothrottleValues=[t,o,e,r,a,l,i,n]},tickWrapper:function(t){if(window.geofs.autothrottle.on){if(window.geofs.aircraft.instance.groundContact&&window.geofs.autothrottle.armed){controls.throttle=0,$(document).trigger("autothrottleOff");return}var o=t-window.geofs.utils.now();try{window.geofs.autothrottle.tick(o/1e3,o)}catch(e){window.geofs.autothrottle.handleError(e)}}},handleError:function(t){console.error(t),ui.notification.show("An error with autothrottle occured, autothrottle is now disabled. Check console for more details."),window.geofs.debug.log("meatbroc autothrottle error"),window.geofs.api.removeFrameCallback(window.geofs.autothrottle.callbackID),$(document).trigger("autothrottleOff"),window.geofs.autothrottle.error=!0}},window.geofs.autothrottle.init(),window.geofs.autopilot.setArm=function(t){let o=JSON.parse(t);window.geofs.autothrottle.armed=o,o?($("#armOn").addClass("green-pad"),$("#armOff").removeClass("green-pad")):($("#armOff").addClass("green-pad"),$("#armOn").removeClass("green-pad"))}});
};

function failures () {   		//Includes both fuel and failures
// ==UserScript==
// @name         GeoFS Failures
// @version      0.3.2
// @description  Adds the ability for systems to fail
// @author       GGamerGGuy
// @match        https://www.geo-fs.com/window.geofs.php?v=*
// @match        https://*.geo-fs.com/window.geofs.php*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=geo-fs.com
// @grant        none
// ==/UserScript==
class Failure {
    constructor() {
        this.aId = window.window.geofs.aircraft.instance.id; //aircraft ID
        this.enabled = false; //Start disabled
        this.failures = []; //Array with all failure intervals
        this.fails = {
            landingGear: {
                front: false,
                left: false,
                right: false
            },
            fuelLeak: false,
            flightCtrl: {
                ailerons: false,
                elevators: false,
                rudder: false,
            },
            electrical: false,
            structural: false,
            hydraulic: {
                flaps: false,
                brakes: false,
                spoilers: false
            },
            pitotStatic: false,
            pressurization: false,
            engines: []
        } //End fails
        for (var i = 0; i < window.window.geofs.aircraft.instance.engines.length; i++) {
            this.fails.engines.push({i: false});
        }
        this.chances = { //Chances of a failure happening every minute, from 0 to 1
            landingGear: {
                front: 0,
                left: 0,
                right: 0
            },
            fuelLeak: 0,
            flightCtrl: {
                ailerons: 0,
                elevators: 0,
                rudder: 0
            },
            electrical: 0,
            structural: 0,
            hydraulic: {
                flaps: 0,
                brakes: 0,
                spoilers: 0
            },
            pitotStatic: 0,
            pressurization: 0,
            engines: []
        } //End chances
        for (var v = 0; v < window.window.geofs.aircraft.instance.engines.length; v++) {
            this.chances.engines.push({v: 0});
        }
    } //End constructor

    fail(system) {
        var ngin_l = window.window.geofs.aircraft.instance.engines.length; //N-Gin Length
        //Engine (first because the number varies):
        //Left:  window.window.geofs.aircraft.instance.definition.parts[79].thrust = 0;
        //Right: window.window.geofs.aircraft.instance.definition.parts[82].thrust = 0;
        for (var i = 0; i < ngin_l; i++) {
            if (system == ("engine" + i)) {
                alert("Engine " + (i+1) + " failed!");
                window.window.geofs.aircraft.instance.engines[i].thrust = 0;
                var v = new window.window.geofs.fx.ParticleEmitter({
                    off: 0,
                    anchor: window.window.geofs.aircraft.instance.engines[0].points.contrailAnchor || {worldPosition: window.window.geofs.aircraft.instance.engines[0].object3d.worldPosition},
                    duration: 1E10,
                    rate: .03,
                    life: 1E4, //10 seconds
                    easing: "easeOutQuart",
                    startScale: .01,
                    endScale: .2,
                    randomizeStartScale: .01,
                    randomizeEndScale: .15,
                    startOpacity: 1,
                    endOpacity: .2,
                    startRotation: "random",
                    texture: "whitesmoke"
                });
                var p = setInterval(() => {window.window.geofs.fx.setParticlesColor(new window.Cesium.Color(0.1,0.1,0.1,1));},20);
            }
        }



if (!system.includes("engine")) {
                      switch (system) {
                case "fuelLeak":
                // Check if a fuel leak has already been triggered
                if (!this.fails.fuelLeak) {
                    alert("Fuel leak! Less than 2 minutes of fuel remaining");
                    this.fails.fuelLeak = true;
globalThis.leakingFuel = true;
                    // Calculate fuel leak rate: drain all fuel in 2 minutes (120 seconds)
                    globalThis.fuelLeakRate = (initialFuel / 120) * 3600; // Convert from seconds to per hour
                }

    break;

            

                    
                    //Landing gear:
                    //Front landing gear failure:
                case "gearFront":
                    if (!this.fails.landingGear.front) {
                        alert("Nose gear failure");
                        this.fails.landingGear.front = true;
                        var fG = 2;
                        for (i = 0; i < window.window.geofs.aircraft.instance.suspensions.length; i++) {
                            if (window.window.geofs.aircraft.instance.suspensions[i].name.includes("front") || window.window.geofs.aircraft.instance.suspensions[i].name.includes("nose") || window.window.geofs.aircraft.instance.suspensions[i].name.includes("tail")) {
                                fG = i;
                            }
                        }
                        this.failures.push(setInterval(() => {
                            window.window.geofs.aircraft.instance.suspensions[fG].collisionPoints[0][2] = 30;
                        }),1000);
                    }
                    break;
                    //Left landing gear failure:
                case "gearLeft":
                    if (!this.fails.landingGear.left) {
                        alert("Left gear failure");
                        this.fails.landingGear.left = true;
                        var lG = 0;
                        for (i = 0; i < window.window.geofs.aircraft.instance.suspensions.length; i++) {
                            if (window.window.geofs.aircraft.instance.suspensions[i].name.includes("left") || window.window.geofs.aircraft.instance.suspensions[i].name.includes("l")) {
                                lG = i;
                            }
                        }
                        this.failures.push(setInterval(() => {
                            window.window.geofs.aircraft.instance.suspensions[lG].collisionPoints[0][2] = 30;
                        }),1000);
                    }
                    break;
                    //Right landing gear failure:
                case "gearRight":
                    alert("Right gear failure");
                    if (!this.fails.landingGear.right) {
                        this.fails.landingGear.right = true;
                        var rG = 1;
                        for (i = 0; i < window.window.geofs.aircraft.instance.suspensions.length; i++) {
                            if (window.window.geofs.aircraft.instance.suspensions[i].name.includes("right") || window.window.geofs.aircraft.instance.suspensions[i].name.includes("r_g")) {
                                rG = i;
                            }
                        }
                        this.failures.push(setInterval(() => {
                            window.window.geofs.aircraft.instance.suspensions[rG].collisionPoints[0][2] = 30;
                        }),1000);
                    }
                    break;

                    //Flight control:
                    //Left aileron: window.window.geofs.aircraft.instance.definition.parts[6].object3d._scale = [0,0,0];
                    //Right aileron: window.window.geofs.aircraft.instance.definition.parts[29].object3d._scale = [0,0,0];
                case "ailerons":
                    alert("Flight control failure (ailerons)");
                    if (!this.fails.flightCtrl.ailerons) {
                        this.fails.flightCtrl.ailerons = true;
                        this.failures.push(setInterval(() => {
                            for (var t in window.window.geofs.aircraft.instance.airfoils) {
                                if (window.window.geofs.aircraft.instance.airfoils[t].name.toLowerCase().includes("aileron")) {
                                    window.window.geofs.aircraft.instance.airfoils[t].object3d._scale = [0,0,0];
                                }
                            }
                        }),1000);
                    }
                    break;
                    //Left elevator: window.window.geofs.aircraft.instance.definition.parts[51].object3d._scale = [0,0,0];
                    //Right elevator: window.window.geofs.aircraft.instance.definition.parts[52].object3d._scale = [0,0,0];
                case "elevators":
                    alert("Flight control failure (elevators)");
                    if (!this.fails.flightCtrl.elevators) {
                        this.fails.flightCtrl.elevators = true;
                        this.failures.push(setInterval(() => {
                            for (var t in window.window.geofs.aircraft.instance.airfoils) {
                                if (window.window.geofs.aircraft.instance.airfoils[t].name.toLowerCase().includes("elevator")) {
                                    window.window.geofs.aircraft.instance.airfoils[t].object3d._scale = [0,0,0];
                                }
                            }
                        }),1000);
                    }
                    break;
                case "rudder":
                    alert("Flight control failure (rudder)");
                    if (!this.fails.flightCtrl.rudder) {
                        this.fails.flightCtrl.rudder = true;
                        this.failures.push(setInterval(() => {
                            for (var t in window.window.geofs.aircraft.instance.airfoils) {
                                if (window.window.geofs.aircraft.instance.airfoils[t].name.toLowerCase().includes("rudder")) {
                                    window.window.geofs.aircraft.instance.airfoils[t].object3d._scale = [0,0,0];
                                }
                            }
                        }),1000);
                    }
                    break;

                    //Electrical:
                    //for (var i = 1; i <= 5; i++) {
                    //window.window.geofs.aircraft.instance.cockpitSetup.parts[i].object3d._scale = [0,0,0];
                    //}
                    //instruments.hide();
                case "electrical":
                    if (!this.fails.electrical) {
                        alert("Electrical failure");
                        this.fails.electrical = true;
                        this.failures.push(setInterval(() => {
                            for (var i = 1; i <= 5; i++) {
                                window.window.geofs.aircraft.instance.cockpitSetup.parts[i].object3d._scale = [0,0,0];
                            }
                            window.window.geofs.autopilot.turnOff();
                            window.instruments.hide();
                        }),1000);
                    }
                    break;

                case "structural":
                    if (!this.fails.structural) {
                        alert("Significant structural damage detected");
                        console.log("Boeing, am I right?");
                        this.fails.structural = true;
                        this.failures.push(setInterval(() => {
                            window.weather.definition.turbulences = 3;
                        }),1000);
                    }
                    break;

                    //Hydraulic:
                    //Flaps: controls.flaps.target = Math.floor(Math.random()*(window.window.geofs.animation.values.flapsSteps*2));  controls.flaps.delta = 20;
                case "flaps":
                    if (!this.fails.hydraulic.flaps) {
                        alert("Hydraulic failure (flaps)");
                        this.fails.hydraulic.flaps = true;
                        this.failures.push(setInterval(() => {
                            window.controls.flaps.target = Math.floor(0.6822525475345469*(window.window.geofs.animation.values.flapsSteps*2)); //0.6822525475345469 is a random number, which keeps things consistent
                            window.controls.flaps.delta = 20;
                        }),1000);
                    }
                    break;
                    //Brakes: controls.brakes = 0;
                case "brakes":
                    if (!this.fails.hydraulic.brakes) {
                        alert("Hydraulic failure (brakes)");
                        this.fails.hydraulic.brakes = true;
                        this.failures.push(setInterval(() => {
                            window.controls.brakes = 0;
                        }),500);
                    }
                    break;
                    //Spoilers: controls.airbrakes.target = Math.round(Math.random()*20)/10;  controls.airbrakes.delta = 20;
                case "spoilers":
                    if (!this.fails.hydraulic.spoilers) {
                        alert("Hydraulic failure (spoilers)");
                        this.fails.hydraulic.spoilers = true;
                        this.failures.push(setInterval(() => {
                            window.controls.airbrakes.target = 0.2;
                            window.controls.airbrakes.delta = 20;
                        }),1000);
                    }
                    break;

                case "pressurization":
                    if (!this.fails.pressurization) {
                        alert("Cabin depressurization! Get at or below 9,000 ft MSL!");
                        this.fails.pressurization = true;
                        this.failures.push(setInterval(() => {
                            if (window.window.geofs.animation.values.altitude > 9000) {
                                window.weather.definition.turbulences = (window.window.geofs.animation.values.altitude - 9000) / 5200; //Dynamically adjust turbulence based on altitude
                            } else {
                                window.weather.definition.turbulences = 0;
                            }
                        }),1000);
                    }
                    break;
            } //End system switch
        } //End not system.includes engine if statement
    } //End fail method
    tick() {
        if (this.enabled) {
            console.log("tick");
            for (var i in this.chances.landingGear) {
                if (Math.random() < this.chances.landingGear[i]) {
                    this.fail("gear" + (i[0].toUpperCase() + i.substr(1,i.length)));
                } //End if
            } //End for
            for (var q in this.chances) {
                if (typeof this.chances[q] == "number") {
                    if (Math.random() < this.chances[i]) {
                        this.fail(q);
                    }
                } else if (q !== "landingGear") {
                    for (var j in this.chances[q]) {
                        if (Math.random() < this.chances[q][j]) {
                            this.fail(j);
                        } //End if
                    } //End for
                } //End else if
            } //End for
            setTimeout(() => {this.tick();}, 60000);
        } //End if enabled statement
    } //End tick method
    reset() {
        for (var i in this.failures) {
            clearInterval(this.failures[i]);
        }
        //this.failures = [];
        this.enabled = false;
        //window.window.geofs.resetFlight();
    }
} //End failure class
window.openFailuresMenu = function() {
    if (!window.failuresMenu) {
        window.failure = new Failure();
        window.failuresMenu = document.createElement("div");
        window.failuresMenu.style.position = "fixed";
        window.failuresMenu.style.width = "640px";
        window.failuresMenu.style.height = "480px";
        window.failuresMenu.style.background = "white";
        window.failuresMenu.style.display = "block";
        window.failuresMenu.style.overflow = "scroll";
        window.failuresMenu.style.zIndex = "10000";
        window.failuresMenu.id = "failMenu";
        window.failuresMenu.className = "geofs-ui-left";
        document.body.appendChild(window.failuresMenu);
        var htmlContent = `
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
        `;
        for (var i = 0; i < window.window.geofs.aircraft.instance.engines.length; i++) {
            htmlContent += `
            <h2>Engine ${i+1}</h2>
    <span style="
    font-size: large;
    vertical-align: top;
">Chance per minute: </span>
        <input type="range" min="0" max="1" step="0.01" id="slideEngine${i}" onchange="document.getElementById('inputEngine${i}').value=document.getElementById('slideEngine${i}').valueAsNumber; window.failure.chances.engines[i] = document.getElementById('slideEngine${i}').valueAsNumber"; draggable="false" style="
    vertical-align: bottom;
">
        <input disabled="true;" id="inputEngine${i}" style="
    width: 40px;
">
        <button onclick="failure.fail('engine${i}')">FAIL</button>
            `;
            window.failuresMenu.innerHTML = htmlContent;
            const draggableDiv = document.getElementById('failMenu');
            const dragPart = document.getElementById('dragPart');

            dragPart.addEventListener('mousedown', function(e) {
                let offsetX = e.clientX - draggableDiv.getBoundingClientRect().left;
                let offsetY = e.clientY - draggableDiv.getBoundingClientRect().top;

                function mouseMoveHandler(e) {
                    draggableDiv.style.left = `${e.clientX - offsetX}px`;
                    draggableDiv.style.top = `${e.clientY - offsetY}px`;
                }

                function mouseUpHandler() {
                    document.removeEventListener('mousemove', mouseMoveHandler);
                    document.removeEventListener('mouseup', mouseUpHandler);
                }

                document.addEventListener('mousemove', mouseMoveHandler);
                document.addEventListener('mouseup', mouseUpHandler);
            });
        }
    } else {
        window.failuresMenu.hidden = !window.failuresMenu.hidden;
        if (window.window.geofs.aircraft.instance.id !== window.aId) {
            window.failure.reset();
            window.failure = new Failure();
            htmlContent = `
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
        `;
            for (i = 0; i < window.window.geofs.aircraft.instance.engines.length; i++) {
                htmlContent += `
            <h2>Engine ${i+1}</h2>
    <span style="
    font-size: large;
    vertical-align: top;
">Chance per minute: </span>
        <input type="range" min="0" max="1" step="0.01" id="slideEngine${i}" onchange="document.getElementById('inputEngine${i}').value=document.getElementById('slideEngine${i}').valueAsNumber; window.failure.chances.engines[i] = document.getElementById('slideEngine${i}').valueAsNumber"; draggable="false" style="
    vertical-align: bottom;
">
        <input disabled="true;" id="inputEngine${i}" style="
    width: 40px;
">
        <button onclick="failure.fail('engine${i}')">FAIL</button>
            `;
                window.failuresMenu.innerHTML = htmlContent;
            }
        }
    }
}
window.mainFailureFunction = function() {
    'use strict';
    window.failBtn = document.createElement('div');
window.failBtn.style.position="fixed",window.failBtn.style.right="60px",window.failBtn.style.height="36px",window.failBtn.style.bottom="0px",window.failBtn.style.border="transparent",window.failBtn.style.background="rgb(255,0,0)",window.failBtn.style.color="white",window.failBtn.style.fontWeight="600",window.failBtn.style.fontSize="20px",window.failBtn.style.cursor="pointer",window.failBtn.style.zIndex="10000",document.body.appendChild(window.failBtn),window.failBtn.innerHTML='<button style="position: inherit; right: inherit; height: inherit; top: inherit; border: inherit; background: inherit; color: inherit; font-weight: inherit; fontSize: inherit; cursor: inherit;" onclick="window.openFailuresMenu()">FAIL</button>';
    /*
    Some failures include:
     - Landing gear (nearly half of all aircraft-related failures) //works
     - Fuel leak (timer, then window.window.geofs.aircraft.instance.stopEngine()) //works
     - Flight control //works
     - Electrical //
     - Structural (weather.definition.turbulences = 5) //Y
     - Hydraulic (flaps, brakes, spoilers) //Y
     //- Pitot-Static (airspeed, altitude, vertical speed) (skipping this one for now too)
     - Cabin pressurization (weather.definition.turbulences = 5 when above 9,000 ft) //Y
     - Engine failure (from fire, bird strikes, or bad boeing build quality) //Y
     Discord user Singapore (singapore7216) requests a way to set the likelihood for a system to fail
     */
    console.log("Failures loaded.");
};
function waitForEntities() {
    try {
        if (window.window.geofs.cautiousWithTerrain == false) {
            // Entities are already defined, no need to wait
            window.mainFailureFunction();
            return;
        }
    } catch (error) {
        // Handle any errors (e.g., log them)
        console.log('Error in waitForEntities:', error);
    }
    // Retry after 1000 milliseconds
    setTimeout(() => {waitForEntities();}, 1000);
}
waitForEntities();

//GeoFS Fuel: Attempts to simulate fuel consumption somewhat realistically
//Calculates fuel capacity based on aircraft mass
//Calculates burn rates based on RPM
//Recalculates when switching aircraft
//Accounts for afterburner use
//Shuts off engines when fuel depleted
//Must be on the ground, groundspeed 0, and engines off to refuel
//Fine-tune endurance and burnrates on lines 57 and 71 - the higher the values, the longer the endurance (for line 82, change both of the 140's)

function runFuelSystem() {
    function createFuelBar() {
        const fuelBarContainer = document.createElement("div");
        fuelBarContainer.style.position = "absolute";
        fuelBarContainer.style.bottom = "8px";
        fuelBarContainer.style.right = "190px";
        fuelBarContainer.style.width = "75px";
        fuelBarContainer.style.height = "17px";
        fuelBarContainer.style.border = "1px solid black";
        fuelBarContainer.style.borderRadius = "5px";
        fuelBarContainer.style.backgroundColor = "black";
        fuelBarContainer.style.zIndex = "1000";

        const fuelBar = document.createElement("div");
        fuelBar.style.height = "100%";
        fuelBar.style.width = "100%";
        fuelBar.style.backgroundColor = "green";
        fuelBar.style.borderRadius = "5px";

        fuelBarContainer.appendChild(fuelBar);
        document.querySelector(".geofs-ui-bottom").appendChild(fuelBarContainer);
        return { fuelBar, fuelBarContainer };
    }

    function createRefuelButton(fuelState) {
        const refuelButton = document.createElement("button");
        refuelButton.textContent = "Refuel";
        refuelButton.style.position = "absolute";
        refuelButton.style.bottom = "5px";
        refuelButton.style.right = "271px";
        refuelButton.style.padding = "4px 8px";
        refuelButton.style.fontSize = "14px";
        refuelButton.style.backgroundColor = "yellow";
        refuelButton.style.border = "1px solid black";
        refuelButton.style.borderRadius = "5px";
        refuelButton.style.zIndex = "1000";
        document.querySelector(".geofs-ui-bottom").appendChild(refuelButton);
        
        refuelButton.addEventListener("click", () => {
            fuelState.fuel = fuelState.initialFuel;
            console.log("Plane refueled.");
        });
        return refuelButton;
    }

    function initializeFuelSystem() {
        let mass = window.geofs.aircraft.instance.definition.mass;
        window.initialFuel = mass * 0.75;
        return { fuel: initialFuel, initialFuel };
    }

    let fuelUpdateInterval;
    function updateFuelSystem(fuelState, fuelBar, refuelButton) {
        fuelUpdateInterval = setInterval(() => {
            if (window.geofs.pause) return;
            const maxThrust = window.geofs.aircraft.instance.engines.reduce((sum, engine) => sum + (engine.thrust || 0), 0);
            const hasAfterburners = window.geofs.aircraft.instance.engines[0]?.afterBurnerThrust !== undefined;
            const usingAfterburners = hasAfterburners && Math.abs(window.geofs.animation.values.smoothThrottle) > 0.9;
            const totalAfterBurnerThrust = hasAfterburners ? window.geofs.aircraft.instance.engines.reduce((sum, engine) => sum + (engine.afterBurnerThrust || 0), 0) : 0;
            const currentThrust = usingAfterburners ? totalAfterBurnerThrust : Math.abs(window.geofs.animation.values.smoothThrottle) * maxThrust;
            const throttle = currentThrust / maxThrust;
            const idleBurnRate = usingAfterburners ? totalAfterBurnerThrust / 140 : maxThrust / 140;
            const fullThrottleBurnRate = idleBurnRate * 3;
//let fuelBurnRate;

if (globalThis.leakingFuel) {
	fuelBurnRate = globalThis.fuelLeakRate;
} else {
                fuelBurnRate = window.geofs.aircraft.instance.engine.on ? idleBurnRate + throttle * (fullThrottleBurnRate - idleBurnRate) : 0;
if (maxThrust == 0) {
   fuelBurnRate = 0
}
	}
	


            const timeElapsed = 1 / 3600;
            fuelState.fuel -= fuelBurnRate * timeElapsed;
            if (fuelState.fuel < 0) fuelState.fuel = 0;

            const fuelPercentage = (fuelState.fuel / fuelState.initialFuel) * 100;
            fuelBar.style.width = `${fuelPercentage}%`;
            fuelBar.style.backgroundColor = fuelPercentage > 15 ? "green" : fuelPercentage > 7 ? "orange" : "red";

         if (fuelState.fuel === 0) {
    window.fuelBurnRate = 0; // Reset fuel burn rate when fuel is empty
    setInterval(() => {
        if (fuelState.fuel === 0) {
            controls.throttle = 0;
            window.geofs.aircraft.instance.stopEngine();
        }
    }, 10);
    console.log("Fuel depleted! Engines have been turned off.");
}



            console.log(`Fuel Burn Rate per Hour: ${fuelBurnRate.toFixed(6)}`);
            console.log(`Fuel Burned This Second: ${(fuelBurnRate / 3600).toFixed(6)}`);
            console.log(`Fuel Remaining: ${fuelState.fuel.toFixed(2)}`)
        }, 1000);
    }

    const fuelState = initializeFuelSystem();
    const { fuelBar, fuelBarContainer } = createFuelBar();
    const refuelButton = createRefuelButton(fuelState);
    updateFuelSystem(fuelState, fuelBar, refuelButton);
    let lastAircraftId = window.geofs.aircraft.instance.aircraftRecord.id;
    setInterval(() => {
        if (window.geofs.aircraft.instance.aircraftRecord.id !== lastAircraftId) {
            fuelBarContainer.remove();
            refuelButton.remove();
            lastAircraftId = window.geofs.aircraft.instance.aircraftRecord.id;
            clearInterval(fuelUpdateInterval);
            runFuelSystem();
        }
    }, 1000);
    setInterval(() => {
    	const groundSpeed = window.geofs.aircraft.instance.groundSpeed;
const groundContact = window.geofs.aircraft.instance.groundContact;
const engineOn = window.geofs.aircraft.instance.engine.on;
refuelButton.style.display = (groundSpeed < 1 && groundContact && !engineOn) ? "block" : "none";
    }, 100);
}

runFuelSystem();
};

function fpv () {
function cF(e,a,i){return{x:e,y:a,z:i}}function waitForEntities(){try{if(window.geofs.api){main();return}}catch(e){console.log("Error in waitForEntities:",e)}setTimeout(waitForEntities,1e3)}function main(){window.y=window.geofs.api.viewer.entities.add({position:Cesium.Cartesian3.fromDegrees(window.geofs.camera.lla[1],window.geofs.camera.lla[0],window.geofs.animation.values.groundElevationFeet/3.2808399),billboard:{image:"https://tylerbmusic.github.io/GPWS-files_geofs/FPV.png",scale:.03*(1/window.geofs.api.renderingSettings.resolutionScale)}}),window.geofs.api.renderingSettings.resolutionScale<=.6&&(window.y.billboard.image="https://tylerbmusic.github.io/GPWS-files_geofs/FPV_Lowres.png"),window.lastLoc=Cesium.Cartesian3.fromDegrees(window.geofs.camera.lla[1],window.geofs.camera.lla[0],window.geofs.camera.lla[2]),setInterval(function e(){if(window.geofs.animation.values&&!window.geofs.isPaused()){window.currLoc&&(window.lastLoc=window.currLoc),window.currLoc=Cesium.Cartesian3.fromDegrees(window.geofs.camera.lla[1],window.geofs.camera.lla[0],window.geofs.camera.lla[2]),window.deltaLoc=[window.currLoc.x-window.lastLoc.x,window.currLoc.y-window.lastLoc.y,window.currLoc.z-window.lastLoc.z];var a,i=void 0!==window.geofs.animation.values.altitude&&void 0!==window.geofs.animation.values.groundElevationFeet?Math.round(window.geofs.animation.values.altitude-window.geofs.animation.values.groundElevationFeet+3.2808399*window.geofs.aircraft.instance.collisionPoints[window.geofs.aircraft.instance.collisionPoints.length-2].worldPosition[2]):"N/A";a=window.geofs.animation.getValue("NAV1Direction")&&600!==window.geofs.animation.getValue("NAV1Distance")?"to"===window.geofs.animation.getValue("NAV1Direction")?(Math.atan(.3048*i/(window.geofs.animation.getValue("NAV1Distance")+600))*RAD_TO_DEGREES).toFixed(1):(Math.atan(.3048*i/Math.abs(window.geofs.animation.getValue("NAV1Distance")-600))*RAD_TO_DEGREES).toFixed(1):"N/A",window.geofs.aircraft.instance.groundContact||window.deltaLoc[0]+window.deltaLoc[1]+window.deltaLoc[2]==0||(window.y.position=cF(window.currLoc.x+window.howFar*window.deltaLoc[0],window.currLoc.y+window.howFar*window.deltaLoc[1],window.currLoc.z+window.howFar*window.deltaLoc[2]));var t=document.getElementById("flightDataDisplay0");t||((t=document.createElement("div")).id="flightDataDisplay0",t.style.position="fixed",t.style.bottom="0",t.style.right="83px",t.style.height="36px",t.style.minWidth="64px",t.style.padding="0 16px",t.style.display="inline-block",t.style.fontFamily='"Roboto", "Helvetica", "Arial", sans-serif',t.style.fontSize="14px",t.style.textTransform="uppercase",t.style.overflow="hidden",t.style.willChange="box-shadow",t.style.transition="box-shadow .2s cubic-bezier(.4,0,1,1), background-color .2s cubic-bezier(.4,0,.2,1), color .2s cubic-bezier(.4,0,.2,1)",t.style.textAlign="center",t.style.lineHeight="36px",t.style.verticalAlign="middle",t.style.zIndex="9999",document.body.appendChild(t)),t.innerHTML=`
                <span style="background: 0 0; border: none; border-radius: 2px; color: #000; display: inline-block; padding: 0 8px;">Gslope ${a}</span>
            `}},window.geofs.debug.fps?1/Number(window.geofs.debug.fps)+5:100),document.addEventListener("keydown",function(e){"Insert"===e.key&&(window.y.show=!window.y.show)})}window.lastLoc,window.onload=setTimeout(waitForEntities,1e4),window.howFar=15;
};

function gpws () {
setTimeout(function(){"use strict";function i(i,e,t){if(i>=100){if(i<=e+10&&i>=e-10)return!0}else if(i>=10){if(i<e+4&&i>e-4)return!0}else if(i<=e+1&&i>=e-1)return!0;return!1}window.soundsToggleKey="w",window.soundsOn=!0,window.a2500=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/2500.wav"),window.a2000=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/2000.wav"),window.a1000=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/1000.wav"),window.a500=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/500.wav"),window.a400=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/400.wav"),window.a300=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/300.wav"),window.a200=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/200.wav"),window.a100=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/100.wav"),window.a50=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/50.wav"),window.a40=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/40.wav"),window.a30=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/30.wav"),window.a20=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/20.wav"),window.a10=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/10.wav"),window.aRetard=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/retard.wav"),window.a5=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/5.wav"),window.stall=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/stall.wav"),window.glideSlope=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/glideslope.wav"),window.tooLowFlaps=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/too-low_flaps.wav"),window.tooLowGear=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/too-low_gear.wav"),window.apDisconnect=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/ap-disconnect.wav"),window.minimumBaro=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/minimum.wav"),window.dontSink=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/dont-sink.wav"),window.masterA=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/masterAlarm.wav"),window.bankAngle=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/bank-angle.wav"),window.overspeed=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/overspeed.wav"),window.justPaused=!1,window.masterA.loop=!0,window.bankAngle.loop=!0,window.overspeed.loop=!0,window.iminimums=!1,window.i2500=!1,window.i2000=!1,window.i1000=!1,window.i500=!1,window.i400=!1,window.i300=!1,window.i200=!1,window.i100=!1,window.i50=!1,window.i40=!1,window.i30=!1,window.i20=!1,window.i10=!1,window.i7=!1,window.i5=!1,window.gpwsRefreshRate=100,window.willTheDoorFallOff=!1,window.didAWheelFall=!1,window.wasAPOn=!1;var e=document.getElementById("flightDataDisplay1");if(!e){var t=document.getElementsByClassName("geofs-ui-bottom")[0];(e=document.createElement("div")).style.width="15px",e.id="flightDataDisplay1",e.classList="mdl-button",t.appendChild(e)}e.innerHTML=`
                <input style="background: 0 0; border: none; border-radius: 2px; color: #000; display: inline-block; padding: 0 8px;" placeholder="Minimums (Baro)" id="minimums">
            `,setInterval(function e(){if(void 0===window.geofs.animation.values||window.geofs.isPaused())window.geofs.isPaused()&&!window.justPaused&&(window.a2500.pause(),window.a2000.pause(),window.a1000.pause(),window.a500.pause(),window.a400.pause(),window.a300.pause(),window.a200.pause(),window.a100.pause(),window.a50.pause(),window.a40.pause(),window.a30.pause(),window.a20.pause(),window.a10.pause(),window.aRetard.pause(),window.a5.pause(),window.stall.pause(),window.glideSlope.pause(),window.tooLowFlaps.pause(),window.tooLowGear.pause(),window.apDisconnect.pause(),window.minimumBaro.pause(),window.dontSink.pause(),window.masterA.pause(),window.bankAngle.pause(),window.overspeed.pause(),window.justPaused=!0);else{window.justPaused&&(window.justPaused=!1),window.willTheDoorFallOff=window.geofs.aircraft.instance.aircraftRecord.name.includes("Boeing"),window.isAsOldAsYourMom=window.geofs.aircraft.instance.aircraftRecord.name.includes("757")||window.geofs.aircraft.instance.aircraftRecord.name.includes("767"),window.isAsOldAsYourMom&&!window.wasAsOldAsYourMom?(window.a2500=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/b2500.wav"),window.a2000=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/b2000.wav"),window.a1000=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/o1000.wav"),window.a500=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/o500.wav"),window.a400=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/o400.wav"),window.a300=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/o300.wav"),window.a200=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/o200.wav"),window.a100=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/o100.wav"),window.a50=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/o50.wav"),window.a40=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/o40.wav"),window.a30=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/o30.wav"),window.a20=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/o20.wav"),window.a10=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/o10.wav"),window.a5=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/b5.wav"),window.stall=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/bstall.wav"),window.glideSlope=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/oglideslope.wav"),window.tooLowFlaps=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/otoo-low_flaps.wav"),window.tooLowGear=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/otoo-low_gear.wav"),window.apDisconnect=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/bap-disconnect.wav"),window.minimumBaro=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/ominimums.wav"),window.dontSink=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/odont-sink.wav"),window.masterA=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/bmasterAlarm.wav"),window.bankAngle=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/obank-angle.wav"),window.overspeed=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/boverspeed.wav"),window.masterA.loop=!0,window.bankAngle.loop=!0,window.overspeed.loop=!0):!window.willTheDoorFallOff||window.didAWheelFall||window.isAsOldAsYourMom?!window.willTheDoorFallOff&&window.didAWheelFall&&(window.a2500=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/2500.wav"),window.a2000=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/2000.wav"),window.a1000=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/1000.wav"),window.a500=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/500.wav"),window.a400=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/400.wav"),window.a300=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/300.wav"),window.a200=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/200.wav"),window.a100=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/100.wav"),window.a50=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/50.wav"),window.a40=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/40.wav"),window.a30=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/30.wav"),window.a20=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/20.wav"),window.a10=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/10.wav"),window.a5=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/5.wav"),window.stall=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/stall.wav"),window.glideSlope=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/glideslope.wav"),window.tooLowFlaps=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/too-low_flaps.wav"),window.tooLowGear=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/too-low_gear.wav"),window.apDisconnect=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/ap-disconnect.wav"),window.minimumBaro=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/minimum.wav"),window.dontSink=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/dont-sink.wav"),window.masterA=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/masterAlarm.wav"),window.bankAngle=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/bank-angle.wav"),window.overspeed=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/overspeed.wav"),window.masterA.loop=!0,window.bankAngle.loop=!0,window.overspeed.loop=!0):(window.a2500=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/b2500.wav"),window.a2000=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/b2000.wav"),window.a1000=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/b1000.wav"),window.a500=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/b500.wav"),window.a400=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/b400.wav"),window.a300=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/b300.wav"),window.a200=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/b200.wav"),window.a100=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/b100.wav"),window.a50=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/b50.wav"),window.a40=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/b40.wav"),window.a30=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/b30.wav"),window.a20=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/b20.wav"),window.a10=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/b10.wav"),window.a5=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/b5.wav"),window.stall=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/bstall.wav"),window.glideSlope=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/bglideslope.wav"),window.tooLowFlaps=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/btoo-low_flaps.wav"),window.tooLowGear=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/btoo-low_gear.wav"),window.apDisconnect=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/bap-disconnect.wav"),window.minimumBaro=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/bminimums.wav"),window.dontSink=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/bdont-sink.wav"),window.masterA=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/bmasterAlarm.wav"),window.bankAngle=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/bbank-angle.wav"),window.overspeed=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/boverspeed.wav"),window.masterA.loop=!0,window.bankAngle.loop=!0,window.overspeed.loop=!0);var t,a=null!==document.getElementById("minimums")&&void 0!==document.getElementById("minimums").value?Number(document.getElementById("minimums").value):void 0,s=void 0!==window.geofs.animation.values.altitude&&void 0!==window.geofs.animation.values.groundElevationFeet?Math.round(window.geofs.animation.values.altitude-window.geofs.animation.values.groundElevationFeet+3.2808399*window.geofs.aircraft.instance.collisionPoints[window.geofs.aircraft.instance.collisionPoints.length-2].worldPosition[2]):"N/A",o=void 0!==window.geofs.animation.values.verticalSpeed?Math.round(window.geofs.animation.values.verticalSpeed):"N/A";t=window.geofs.animation.getValue("NAV1Direction")&&window.geofs.animation.getValue("NAV1Distance")!==.185*window.geofs.runways.getNearestRunway([window.geofs.nav.units.NAV1.navaid.lat,window.geofs.nav.units.NAV1.navaid.lon,0]).lengthMeters?"to"===window.geofs.animation.getValue("NAV1Direction")?Number((Math.atan((window.geofs.animation.values.altitude/3.2808399+(window.geofs.aircraft.instance.collisionPoints[window.geofs.aircraft.instance.collisionPoints.length-2].worldPosition[2]+.1)-window.geofs.nav.units.NAV1.navaid.elevation)/(window.geofs.animation.getValue("NAV1Distance")+.185*window.geofs.runways.getNearestRunway([window.geofs.nav.units.NAV1.navaid.lat,window.geofs.nav.units.NAV1.navaid.lon,0]).lengthMeters))*RAD_TO_DEGREES).toFixed(1)):Number((Math.atan((window.geofs.animation.values.altitude/3.2808399+(window.geofs.aircraft.instance.collisionPoints[window.geofs.aircraft.instance.collisionPoints.length-2].worldPosition[2]+.1)-window.geofs.nav.units.NAV1.navaid.elevation)/Math.abs(window.geofs.animation.getValue("NAV1Distance")-.185*window.geofs.runways.getNearestRunway([window.geofs.nav.units.NAV1.navaid.lat,window.geofs.nav.units.NAV1.navaid.lon,0]).lengthMeters))*RAD_TO_DEGREES).toFixed(1)):void 0,audio.on&&window.soundsOn&&((window.geofs.aircraft.instance.stalling&&!window.geofs.aircraft.instance.groundContact||null!==window.geofs.nav.units.NAV1.navaid&&s>100&&(t<window.geofs.nav.units.NAV1.navaid.slope-1.5||t>window.geofs.nav.units.NAV1.navaid.slope+2)||!window.geofs.aircraft.instance.groundContact&&s<300&&void 0!==window.geofs.aircraft.instance.definition.gearTravelTime&&window.geofs.animation.values.gearPosition>=.5||!window.geofs.aircraft.instance.groundContact&&s<500&&void 0!==window.geofs.animation.values.flapsSteps&&0==window.geofs.animation.values.flapsPosition&&window.tooLowGear.paused||!window.geofs.aircraft.instance.groundContact&&s<300&&window.geofs.animation.values.throttle>.95&&o<=0||Math.abs(window.geofs.aircraft.instance.animationValue.aroll)>45)&&window.masterA.paused?window.masterA.play():window.geofs.aircraft.instance.stalling&&!window.geofs.aircraft.instance.groundContact||null!==window.geofs.nav.units.NAV1.navaid&&s>100&&(t<window.geofs.nav.units.NAV1.navaid.slope-1.5||t>window.geofs.nav.units.NAV1.navaid.slope+2)||!window.geofs.aircraft.instance.groundContact&&s<300&&void 0!==window.geofs.aircraft.instance.definition.gearTravelTime&&window.geofs.animation.values.gearPosition>=.5||!window.geofs.aircraft.instance.groundContact&&s<500&&void 0!==window.geofs.animation.values.flapsSteps&&0==window.geofs.animation.values.flapsPosition&&window.tooLowGear.paused||!window.geofs.aircraft.instance.groundContact&&s<300&&window.geofs.animation.values.throttle>.95&&o<=0||Math.abs(window.geofs.aircraft.instance.animationValue.aroll)>45||window.masterA.paused||window.masterA.pause(),Math.abs(window.geofs.aircraft.instance.animationValue.aroll)>45&&window.bankAngle.paused?window.bankAngle.play():Math.abs(window.geofs.aircraft.instance.animationValue.aroll)>45||window.bankAngle.paused||window.bankAngle.pause(),window.geofs.aircraft.instance.stalling&&!window.geofs.aircraft.instance.groundContact&&window.stall.paused?window.stall.play():window.stall.paused||window.geofs.aircraft.instance.stalling||window.stall.pause(),null!==window.geofs.nav.units.NAV1.navaid&&s>100&&(t<window.geofs.nav.units.NAV1.navaid.slope-1.5||t>window.geofs.nav.units.NAV1.navaid.slope+2)&&window.glideSlope.paused&&window.glideSlope.play(),!window.geofs.aircraft.instance.groundContact&&s<300&&void 0!==window.geofs.aircraft.instance.definition.gearTravelTime&&window.geofs.animation.values.gearPosition>=.5&&window.tooLowGear.paused&&window.tooLowGear.play(),!window.geofs.aircraft.instance.groundContact&&s<500&&void 0!==window.geofs.animation.values.flapsSteps&&0==window.geofs.animation.values.flapsPosition&&window.tooLowGear.paused&&window.tooLowFlaps.paused&&window.tooLowFlaps.play(),!window.geofs.autopilot.on&&window.wasAPOn&&window.apDisconnect.play(),o<=0?(!window.geofs.aircraft.instance.groundContact&&s<300&&window.geofs.animation.values.throttle>.95&&window.dontSink.paused&&window.dontSink.play(),void 0!==a&&window.geofs.animation.values.altitude+2>a&&a>window.geofs.animation.values.altitude-2&&!window.iminimums&&(window.minimumBaro.play(),window.iminimums=!0),i(2500,s)&&!window.i2500&&(window.a2500.play(),window.i2500=!0),i(2e3,s)&&!window.i2000&&(window.a2000.play(),window.i2000=!0),i(1e3,s)&&!window.i1000&&(window.a1000.play(),window.i1000=!0),i(500,s)&&!window.i500&&(window.a500.play(),window.i500=!0),i(400,s)&&!window.i400&&(window.a400.play(),window.i400=!0),i(300,s)&&!window.i300&&(window.a300.play(),window.i300=!0),i(200,s)&&!window.i200&&(window.a200.play(),window.i200=!0),i(100,s)&&!window.i100&&(window.a100.play(),window.i100=!0),i(50,s)&&!window.i50&&(window.a50.play(),window.i50=!0),i(40,s)&&!window.i40&&(window.a40.play(),window.i40=!0),i(30,s)&&!window.i30&&(window.a30.play(),window.i30=!0),i(20,s)&&!window.i20&&(window.a20.play(),window.i20=!0),i(10,s)&&!window.i10&&(window.a10.play(),window.i10=!0),window.geofs.aircraft.instance.groundContact||!(s+window.geofs.animation.values.verticalSpeed/60*2<=1)||window.i7||(window.aRetard.play(),window.i7=!0),i(5,s)&&!window.i5&&(window.a5.play(),window.i5=!0),window.gpwsRefreshRate=30):o>0&&(window.iminimums&&(window.iminimums=!1),window.i2500&&(window.i2500=!1),window.i2000&&(window.i2000=!1),window.i1000&&(window.i1000=!1),window.i500&&(window.i500=!1),window.i400&&(window.i400=!1),window.i300&&(window.i300=!1),window.i200&&(window.i200=!1),window.i100&&(window.i100=!1),window.i50&&(window.i50=!1),window.i40&&(window.i40=!1),window.i30&&(window.i30=!1),window.i20&&(window.i20=!1),window.i10&&(window.i10=!1),window.i7&&(window.i7=!1),window.i5&&(window.i5=!1),window.gpwsRefreshRate=100))}window.wasAPOn=window.geofs.autopilot.on,window.didAWheelFall=window.willTheDoorFallOff,window.wasAsOldAsYourMom=window.geofs.aircraft.instance.aircraftRecord.name.includes("757")||window.geofs.aircraft.instance.aircraftRecord.name.includes("767")},window.gpwsRefreshRate),document.addEventListener("keydown",function(i){i.key===window.soundsToggleKey&&(window.soundsOn=!window.soundsOn)})},8e3);
};

function info () {
setInterval(function a(){if(window.geofs.animation.values){var i=window.geofs.animation.values.kias?window.geofs.animation.values.kias.toFixed(1):"N/A",n=window.geofs.animation.values.mach?window.geofs.animation.values.mach.toFixed(2):"N/A",e=window.geofs.animation.values.groundSpeed?window.geofs.animation.values.groundSpeed.toFixed(1):"N/A",t=window.geofs.animation.values.altitude?Math.round(window.geofs.animation.values.altitude):"N/A",s=window.geofs.animation.values.heading360?Math.round(window.geofs.animation.values.heading360):"N/A",l=void 0!==window.geofs.animation.values.altitude&&void 0!==window.geofs.animation.values.groundElevationFeet?Math.round(window.geofs.animation.values.altitude-window.geofs.animation.values.groundElevationFeet+3.2808399*window.geofs.aircraft.instance.collisionPoints[window.geofs.aircraft.instance.collisionPoints.length-2].worldPosition[2]):"N/A",o=void 0!==window.geofs.animation.values.verticalSpeed?Math.round(window.geofs.animation.values.verticalSpeed):"N/A",d=void 0!==window.geofs.animation.values.throttle?0===window.geofs.animation.values.throttle?"IDLE":(100*window.geofs.animation.values.throttle).toFixed(0)+"%":"N/A",p=document.querySelector(".geofs-ui-bottom");if(p){var u=document.getElementById("flightDataDisplay");u||((u=document.createElement("div")).id="flightDataDisplay",u.style.display="inline-block",u.style.fontFamily='"Roboto", "Helvetica", "Arial", sans-serif',u.style.fontWeight="450",u.style.fontSize="14px",u.style.textTransform="uppercase",u.style.textAlign="left",u.style.lineHeight="36px",u.style.padding="0px 8px",u.style.borderRadius="5px",p.appendChild(u)),u.innerHTML=`
                <span style="padding: 0 8px;">KIAS ${i}</span> |
                <span style="padding: 0 8px;">Mach ${n}</span> |
                <span style="padding: 0 8px;">GS ${e}</span> |
                <span style="padding: 0 8px;">ALT ${t}</span> |
                <span style="padding: 0 8px;">AGL ${l}</span> |
                <span style="padding: 0 8px;">HDG ${s}</span> |
                <span style="padding: 0 8px;">V/S ${o}</span> |
                <span style="padding: 0 8px;">THR ${d}</span>
            `}}},100);
};

function stats () {
setTimeout(function(){"use strict";window.closeTimer=!0,window.closeSeconds=10,window.refreshRate=20,window.counter=0,window.isLoaded=!1,window.justLanded=!1,window.vertSpeed=0,window.oldAGL=0,window.newAGL=0,window.calVertS=0,window.groundSpeed=0,window.ktias=0,window.kTrue=0,window.bounces=0,window.statsOpen=!1,window.isGrounded=!0,window.isInTDZ=!1,window.softLanding=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/soft_landing.wav"),window.hardLanding=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/hard_landing.wav"),window.crashLanding=new Audio("https://tylerbmusic.github.io/GPWS-files_geofs/crash_landing.wav"),window.statsDiv=document.createElement("div"),window.statsDiv.style.width="fit-content",window.statsDiv.style.height="fit-content",window.statsDiv.style.background="linear-gradient(to bottom right, rgb(29, 52, 87), rgb(20, 40, 70))",window.statsDiv.style.zIndex="100000",window.statsDiv.style.margin="30px",window.statsDiv.style.padding="15px",window.statsDiv.style.fontFamily="Arial, sans-serif",window.statsDiv.style.boxShadow="0 8px 24px rgba(0,0,0,0.3), 0 4px 12px rgba(0,0,0,0.2)",window.statsDiv.style.color="white",window.statsDiv.style.position="fixed",window.statsDiv.style.borderRadius="12px",window.statsDiv.style.left="-50%",window.statsDiv.style.transition="0.4s ease",window.statsDiv.style.border="1px solid rgba(255,255,255,0.1)",document.body.appendChild(window.statsDiv),setInterval(function t(){if(!1==window.geofs.cautiousWithTerrain&&!window.geofs.isPaused()){if((void 0!==window.geofs.animation.values.altitude&&void 0!==window.geofs.animation.values.groundElevationFeet?window.geofs.animation.values.altitude-window.geofs.animation.values.groundElevationFeet+3.2808399*window.geofs.aircraft.instance.collisionPoints[window.geofs.aircraft.instance.collisionPoints.length-2].worldPosition[2]:"N/A")<500){if(window.justLanded=window.geofs.animation.values.groundContact&&!window.isGrounded,window.justLanded&&!window.statsOpen){if(window.closeTimer&&setTimeout(window.closeLndgStats,1e3*window.closeSeconds),window.statsOpen=!0,window.statsDiv.innerHTML=`
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
                        <span>G-Forces: ${(window.geofs.animation.values.accZ/9.80665).toFixed(2)}G</span>
                        <span>Terrain-calibrated V/S: ${window.calVertS.toFixed(1)}</span>
                        <span>True airspeed: ${window.kTrue} kts</span>
                        <span>Ground speed: ${window.groundSpeed.toFixed(1)} kts</span>
                        <span>Indicated speed: ${window.ktias} kts</span>
                        <span>Roll: ${window.geofs.animation.values.aroll.toFixed(1)} degrees</span>
                        <span>Tilt: ${window.geofs.animation.values.atilt.toFixed(1)} degrees</span>
                        <span id="bounces">Bounces: 0</span>
                    </div>
                `,window.statsDiv.style.left="0px",window.geofs.nav.units.NAV1.inRange&&(window.statsDiv.innerHTML+=`
                        <div style="margin-top: 10px; font-size: 14px;">
                            <span>Landed in TDZ? ${window.isInTDZ} | </span>
                            <span>Deviation from center: ${window.geofs.nav.units.NAV1.courseDeviation.toFixed(1)}</span>
                        </div>`),0>Number(window.vertSpeed)){let e="",i="";Number(window.vertSpeed)>=-50?(e="landing-quality",i="SUPER BUTTER!",window.statsDiv.innerHTML+=`
                                <div class="${e}" style="background-color: green; color: white;">
                                    ${i}
                                </div>`,window.softLanding.play()):Number(window.vertSpeed)>=-200?(e="landing-quality",i="BUTTER",window.statsDiv.innerHTML+=`
                                <div class="${e}" style="background-color: green; color: white;">
                                    ${i}
                                </div>`,window.softLanding.play()):Number(window.vertSpeed)>=-500&&-200>Number(window.vertSpeed)?(window.hardLanding.play(),window.statsDiv.innerHTML+=`
                                <div class="${e}" style="background-color: yellow; color: black;">
                                    ACCEPTABLE
                                </div>`):Number(window.vertSpeed)>=-1e3&&-500>Number(window.vertSpeed)&&(window.hardLanding.play(),window.statsDiv.innerHTML+=`
                                <div class="${e}" style="background-color: red; color: white;">
                                    HARD LANDING
                                </div>`)}(-1e3>=Number(window.vertSpeed)||Number(window.vertSpeed>200))&&(window.crashLanding.play(),window.statsDiv.innerHTML+=`
                            <div class="landing-quality" style="background-color: crimson; color: white;">
                                u ded
                            </div>`)}else window.justLanded&&window.statsOpen&&(window.bounces++,document.getElementById("bounces").innerHTML=`Bounces: ${window.bounces}`,window.softLanding.pause());window.geofs.nav.units.NAV1.inRange&&(window.isInTDZ=window.geofs.nav.units.NAV1.distance*FEET_TO_METERS>.052902913939976676*window.geofs.runways.getNearestRunway([window.geofs.nav.units.NAV1.navaid.lat,window.geofs.nav.units.NAV1.navaid.lon,0]).lengthMeters&&window.geofs.nav.units.NAV1.distance*FEET_TO_METERS<.06136825053484974*window.geofs.runways.getNearestRunway([window.geofs.nav.units.NAV1.navaid.lat,window.geofs.nav.units.NAV1.navaid.lon,0]).lengthMeters?"Yes":"No"),window.groundSpeed=window.geofs.animation.values.groundSpeedKnt,window.ktias=window.geofs.animation.values.kias.toFixed(1),window.kTrue=window.geofs.aircraft.instance.trueAirSpeed.toFixed(1),window.vertSpeed=window.geofs.animation.values.verticalSpeed.toFixed(1),window.gForces=window.geofs.animation.values.accZ/9.80665,window.isGrounded=window.geofs.animation.values.groundContact,window.refreshRate=12}else window.refreshRate=60}},window.refreshRate),setInterval(function t(){void 0===window.geofs.animation.values||window.geofs.isPaused()||(void 0!==window.geofs.animation.values.altitude&&void 0!==window.geofs.animation.values.groundElevationFeet?window.geofs.animation.values.altitude-window.geofs.animation.values.groundElevationFeet+3.2808399*window.geofs.aircraft.instance.collisionPoints[window.geofs.aircraft.instance.collisionPoints.length-2].worldPosition[2]:"N/A")===window.oldAGL||(window.newAGL=void 0!==window.geofs.animation.values.altitude&&void 0!==window.geofs.animation.values.groundElevationFeet?window.geofs.animation.values.altitude-window.geofs.animation.values.groundElevationFeet+3.2808399*window.geofs.aircraft.instance.collisionPoints[window.geofs.aircraft.instance.collisionPoints.length-2].worldPosition[2]:"N/A",window.newTime=Date.now(),window.calVertS=(window.newAGL-window.oldAGL)*(6e4/(window.newTime-window.oldTime)),window.oldAGL=void 0!==window.geofs.animation.values.altitude&&void 0!==window.geofs.animation.values.groundElevationFeet?window.geofs.animation.values.altitude-window.geofs.animation.values.groundElevationFeet+3.2808399*window.geofs.aircraft.instance.collisionPoints[window.geofs.aircraft.instance.collisionPoints.length-2].worldPosition[2]:"N/A",window.oldTime=Date.now())},25),window.closeLndgStats=function(){window.statsDiv.style.left="-50%",setTimeout(function(){window.statsDiv.innerHTML="",window.statsOpen=!1,window.bounces=0},400)}},1e3);
};

function opengines () {
function toggleAircraftProperties(){let t=!1,r={thrust:{},zeroThrustAltitude:null,zeroRPMAltitude:null};document.addEventListener("keydown",function(e){"q"===e.key.toLowerCase()&&(t?(function t(){if(geofs&&window.geofs.aircraft&&window.geofs.aircraft.instance){let e=window.geofs.aircraft.instance;if(e.definition&&null!==r.zeroThrustAltitude&&(e.definition.zeroThrustAltitude=r.zeroThrustAltitude),e.definition&&null!==r.zeroRPMAltitude&&(e.definition.zeroRPMAltitude=r.zeroRPMAltitude),e.parts)for(let i in r.thrust){let o=e.parts[i];o&&void 0!==o.thrust&&(o.thrust=r.thrust[i].thrust,void 0!==o.afterBurnerThrust&&null!==r.thrust[i].afterBurnerThrust&&(o.afterBurnerThrust=r.thrust[i].afterBurnerThrust))}}}(),t=!1,console.log("Aircraft properties reset to normal."),ui.notification.show("Aircraft properties reset to normal.")):(function t(){if(geofs&&window.geofs.aircraft&&window.geofs.aircraft.instance){let e=window.geofs.aircraft.instance;if(null===r.zeroThrustAltitude&&e.definition&&void 0!==e.definition.zeroThrustAltitude&&(r.zeroThrustAltitude=e.definition.zeroThrustAltitude),null===r.zeroRPMAltitude&&e.definition&&void 0!==e.definition.zeroRPMAltitude&&(r.zeroRPMAltitude=e.definition.zeroRPMAltitude),e.definition&&(void 0!==e.definition.zeroThrustAltitude&&(e.definition.zeroThrustAltitude=3e5),void 0!==e.definition.zeroRPMAltitude&&(e.definition.zeroRPMAltitude=3e5)),e.parts)for(let i in e.parts){let o=e.parts[i];o&&void 0!==o.thrust&&(r.thrust[i]||(r.thrust[i]={thrust:o.thrust,afterBurnerThrust:o.afterBurnerThrust||null}),o.thrust=9e5,void 0!==o.afterBurnerThrust&&(o.afterBurnerThrust=9e5))}}}(),t=!0,console.log("Aircraft properties set to overpowered mode."),ui.notification.show("Aircraft properties set to overpowered mode.")))}),console.log("Press 'Q' to toggle aircraft properties between normal and overpowered.")}toggleAircraftProperties();
};

function pushback () {
!function($,x){let a=_0x5694,e=$();for(;;)try{let t=parseInt(a(299))/1*(parseInt(a(291))/2)+-parseInt(a(377))/3+-parseInt(a(365))/4+parseInt(a(328))/5+-parseInt(a(292))/6*(-parseInt(a(315))/7)+parseInt(a(372))/8*(-parseInt(a(364))/9)+-parseInt(a(346))/10*(-parseInt(a(295))/11);if(648459===t)break;e.push(e.shift())}catch(_){e.push(e.shift())}}(_0x1c81,648459);let itv=setInterval(function(){try{window.ui&&window.flight&&(main(),getData(),clearInterval(itv))}catch($){}},500),defaultFriction,pushbackInfo,pushbackModels;async function getData(){let $=_0x5694;await fetch("https://raw.githubusercontent.com/TotallyRealElonMusk/GeoFS-Pushback/main/pushback%20data/pushback.json")[$(375)](x=>x[$(316)]())[$(375)]($=>pushbackInfo=$);await fetch($(312))[$(375)]($=>$.json()).then($=>pushbackModels=$)}function _0x5694($,x){let a=_0x1c81();return(_0x5694=function($,x){return a[$-=291]})($,x)}function main(){let $=_0x5694;window[$(340)]={},pushback[$(370)]=0,pushback[$(349)]=0,pushback[$(368)]=function(x){let a=$;pushback[a(370)]=x,.5===x&&(x=1),-.5===x&&(x=-1),pushback[a(301)]&&clearInterval(pushback.lockInt),pushback.lockInt=setInterval(function(){pushback[a(308)](x)})},pushback.stopBack=function(){let x=$;clearInterval(pushback[x(301)]),pushback[x(370)]=0,pushback.pushBack(0),clearInterval(pushback[x(301)])},pushback[$(308)]=function(x){let a=$,e=Math.round(window.geofs.animation.values[a(311)]);geofs[a(355)].instance[a(363)].setLinearVelocity([x*Math[a(324)](e*Math.PI/180),x*Math[a(337)](e*Math.PI/180),0])},pushback[$(367)]=function(x){let a=$;pushback[a(349)]=x,geofs[a(298)].values[a(321)]=x};let x;pushback[$(332)]=!1,pushback.checkAircraft=function($){return!!pushbackInfo[$]},pushback[$(296)]=function(){let x=$;for(let a=0;a<geofs[x(355)].instance[x(354)][x(303)][x(330)];a++)if(geofs[x(355)][x(359)][x(354)][x(303)][a][x(306)])for(let e=0;e<geofs[x(355)][x(359)][x(354)][x(303)][a].animations[x(330)];e++)geofs[x(355)][x(359)][x(354)][x(303)][a][x(306)][e].value==x(349)&&(geofs[x(355)].instance.setup.parts[a][x(306)][e][x(342)]="yawPushback",geofs[x(355)][x(359)][x(354)][x(303)][a][x(335)]&&(pushback[x(334)]=geofs[x(355)][x(359)][x(354)].parts[a].animations[e].ratio))},pushback[$(373)]=function(){let x=$;clearInterval(pushback[x(301)]),window.geofs.aircraft[x(359)].setup.contactProperties[x(369)][x(376)]=defaultFriction;for(let a=0;a<geofs[x(355)][x(359)].setup.parts.length;a++)if(window.geofs.aircraft.instance.setup.parts[a].animations)for(let e=0;e<geofs[x(355)][x(359)][x(354)][x(303)][a].animations[x(330)];e++)window.geofs.aircraft[x(359)][x(354)][x(303)][a][x(306)][e][x(342)]==x(321)&&(window.geofs.aircraft.instance[x(354)][x(303)][a][x(306)][e][x(342)]=x(349))},pushback[$(317)]=function(){pushback.addPushBackTruck()},pushback[$(350)]=function(){let x=$;if(pushbackInfo[window.geofs.aircraft[x(359)].id]){let a={name:x(331),model:pushbackModels[pushbackInfo[window.geofs.aircraft[x(359)].id][x(339)]],position:pushbackInfo[geofs[x(355)][x(359)].id][x(319)],animations:[{type:x(351),axis:"Z",value:x(321),ratio:pushback.defaultYaw},{value:x(309),type:x(343),value:x(348)},{type:x(351),value:"atilt",axis:"X",ratio:-1}],rotation:[0,0,0]};geofs[x(355)][x(359)][x(323)]([a],x(336),1,x(366))}};let a=document.getElementsByClassName("geofs-autopilot-bar"),e=document[$(327)]($(320));e[$(341)].add($(356)),e.id=$(300),e.style[$(318)]=$(357),e[$(305)]=$(314),a[0][$(347)](e);document[$(362)]($(300))[$(293)]=function(){!function a(){let e=$;void 0!=x&&x[e(338)](),(x=window[e(352)]("",e(374),"toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no,width=780,height=300,top="+(screen[e(358)]-400)+e(307)+(screen[e(322)]-840)))[e(345)][e(326)][e(305)]=e(297);let t=x[e(345)][e(362)](e(349)),_=x.document[e(362)](e(370)),n=x[e(345)][e(362)](e(340)),i=x[e(345)][e(362)]("reset"),o=x[e(345)][e(362)](e(294)),s=x[e(345)].getElementById(e(361));_[e(333)]=function(){let $=e;!0==pushback[$(332)]&&(pushback[$(368)]((parseInt(this[$(342)])-40)/2),o[$(305)]=(parseInt(this.value)-40)/2)},t[e(333)]=function(){let $=e;!0==pushback[$(332)]&&(pushback[$(367)]((parseInt(this.value)-50)/50),s[$(305)]=(parseInt(this[$(342)])-50)/50)},n[e(333)]=async function(){let $=e;!1===pushback.pushBackState?!0===pushback[$(304)](geofs[$(355)][$(359)].id)&&!0==geofs[$(355)][$(359)][$(353)]&&geofs[$(298)][$(360)].rollingSpeed<.5&&(await pushback.setUpdate(),pushback[$(317)](),pushback[$(332)]=!0,geofs[$(298)][$(360)].pushBackTruck=1,defaultFriction=geofs[$(355)][$(359)].setup[$(310)][$(369)].lockSpeed,geofs[$(355)][$(359)].setup[$(310)][$(369)][$(376)]=.5):(pushback[$(332)]=!1,geofs[$(298)].values[$(348)]=0,window.geofs.aircraft[$(359)][$(303)].pushbackTruck[$(344)][$(313)](),pushback[$(373)](),pushback[$(325)](),i[$(293)]())},i.onclick=function(){let $=e;t[$(342)]="50",s[$(305)]="0",_[$(342)]="40",o[$(305)]="0",pushback[$(325)](),pushback[$(368)](0),pushback[$(325)](),pushback.startYaw(0)},x[e(371)]=function(){let $=e;pushback[$(332)]=!1,window.geofs.animation[$(360)].pushBackTruck=0,geofs[$(355)][$(359)][$(303)].pushbackTruck.object3d[$(313)](),pushback[$(373)](),pushback[$(325)](),i[$(293)]()},x[e(329)]("keydown",function($){let x=e;if(38===$[x(302)]&&pushback.speed<20){let a=pushback[x(370)]+.5;pushback.startBack(a),o.innerHTML=a,_[x(342)]=2*a+40}else if(40===$[x(302)]&&pushback[x(370)]>-20){let n=pushback[x(370)]-.5;pushback[x(368)](n),o[x(305)]=n,_[x(342)]=2*n+40}else if(39===$.keyCode&&pushback[x(349)]<1){let i=Math[x(378)]((pushback[x(349)]+.02)*100)/100;pushback[x(367)](i),s[x(305)]=i,t[x(342)]=50*i+50}else if(37===$[x(302)]&&pushback[x(349)]>-1){let c=Math[x(378)]((pushback[x(349)]-.02)*100)/100;pushback[x(367)](c),s[x(305)]=c,t[x(342)]=50*c+50}})}()}}function _0x1c81(){let $=["then","lockSpeed","1258782BnpTvr","round","6TtZgaV","12AvIPhZ","onclick","speedInfo","319TOOmos","setUpdate",'<style>\n.slidecontainer {\n  width: 100%;\n  /* Width of the outside container */\n}\n\n/* The slider itself */\n.slider {\n  -webkit-appearance: none;\n  /* Override default CSS styles */\n  appearance: none;\n  width: 50%;\n  /* Full-width */\n  height: 25px;\n  /* Specified height */\n  background: #d3d3d3;\n  /* Grey background */\n  outline: none;\n  /* Remove outline */\n  opacity: 0.7;\n  /* Set transparency (for mouse-over effects on hover) */\n  -webkit-transition: .2s;\n  /* 0.2 seconds transition on hover */\n  transition: opacity .2s;\n}\n\n/* Mouse-over effects */\n.slider:hover {\n  opacity: 1;\n  /* Fully shown on mouse-over */\n}\n\n/* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */\n.slider::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  /* Override default look */\n  appearance: none;\n  width: 25px;\n  /* Set a specific slider handle width */\n  height: 25px;\n  /* Slider handle height */\n  background: #04AA6D;\n  /* Green background */\n  cursor: pointer;\n  /* Cursor on hover */\n}\n\n.slider::-moz-range-thumb {\n  width: 25px;\n  /* Set a specific slider handle width */\n  height: 25px;\n  /* Slider handle height */\n  background: #04AA6D;\n  /* Green background */\n  cursor: pointer;\n  /* Cursor on hover */\n}\n\n.center {\n  font-family: verdana;\n  display: center;\n}\n</style>\n<input type="checkbox" id="pushback" name="pushback" value="pushback" class="center"></input>\n<labelfor="pushback" class="center"> Enable pushback </label></p> Yaw:\n<div id="yawInfo">0</div>\n<div class="slidecontainer">\n  <input type="range" min="0" max="100" value="50" class="slider" id="yaw">\n  </p> Speed: <div id="speedInfo">0</div>\n  <div class="slidecontainer">\n    <input type="range" min="0" max="80" value="40" class="slider" id="speed">\n    </p>\n    <button class="center" type="button" id="reset">Reset</button>\n    <br>\n  </div>',"animation","363367mttbUH","pushbackButtonMain","lockInt","keyCode","parts","checkAircraft","innerHTML","animations",",left=","pushBack","view","contactProperties","heading360","https://raw.githubusercontent.com/TotallyRealElonMusk/GeoFS-Pushback/main/pushback%20data/pushbackModel.json","destroy",'<div style="line-height: 27px;font-size: 12px !important;pointer-events: none;color: #FFF;text-align: center;">PUSHBACK</div>',"4303656PWCiJH","json","addPushBackTruckHandler","cssText","pos","div","yawPushback","width","addParts","sin","stopBack","body","createElement","1931860IqPriw","addEventListener","length","pushbackTruck","pushBackState","oninput","defaultYaw","collisionPoints","https://raw.githubusercontent.com/","cos","close","model","pushback","classList","value","show","object3d","document","75250HvkrXo","append","pushBackTruck","yaw","addPushBackTruck","rotate","open","groundContact","setup","aircraft","control-pad","width: 90px;height: 25px;margin: 0px 10px;border-radius: 15px;outline: none;","height","instance","values","yawInfo","getElementById","rigidBody","324036SVkzvQ","4544724bXaXlh","Zup","startYaw","startBack","wheel","speed","onbeforeunload","160yAxlOT","revertUpdate","Title"];return(_0x1c81=function(){return $})()}
};

function realism () {
javascript:(() => {var realismScript = document.createElement('script'); realismScript.src="https://raw.githack.com/geofs-pilot/realism-pack-modded/main/main.js";document.body.appendChild(realismScript);realismScript.onload = (function(){realismGo()});})()
};

function slew () {
 !function(){"use strict";function afterGMenu(){let e=new window.GMenu("Slew Mode","slew");e.addItem("Horizontal Speed (in degrees/frame): ","LatSpeed","number",0,"0.0001"),e.addItem("Vertical Speed (in feet/frame): ","VertSpeed","number",0,"2"),e.addItem("Rotate Amount (in degrees): ","RotAmount","number",0,"2"),e.addItem("Speed after slew disabled (higher values are lower speeds, no flaps): ","SpeedMultiplier","number",0,"1.96"),e.addItem("Speed after slew disabled (with flaps): ","SpeedMultiplierFlaps","number",0,"2.7"),e.addHeader(2,"Keybinds"),e.addKBShortcut("Toggle Slew Mode: ","Toggle",1,"y",function(){kb("Toggle")}),e.addKBShortcut("Forwards: ","Forward",1,"i",function(){kb("Forward")}),e.addKBShortcut("Backwards: ","Backwards",1,"k",function(){kb("Backwards")}),e.addKBShortcut("Left: ","Left",1,"j",function(){kb("Left")}),e.addKBShortcut("Right: ","Right",1,"l",function(){kb("Right")}),e.addKBShortcut("Up: ","Up",1,"u",function(){kb("Up")}),e.addKBShortcut("Down: ","Down",1,"Enter",function(){kb("Down")}),e.addHeader(3,"Rotation"),e.addKBShortcut("Tilt Up: ","RotTiltUp",2,"ArrowUp",function(){kb("TiltUp")}),e.addKBShortcut("Tilt Down: ","RotTiltDown",2,"ArrowDown",function(){kb("TiltDown")}),e.addKBShortcut("Roll Left: ","RotRLeft",2,"ArrowLeft",function(){kb("RLeft")}),e.addKBShortcut("Roll Right: ","RotRRight",2,"ArrowRight",function(){kb("RRight")}),e.addKBShortcut("Yaw Left: ","RotRYLeft",2,",",function(){kb("YLeft")}),e.addKBShortcut("Yaw Right: ","RotYRight",2,".",function(){kb("YRight")})}window.gmenu&&window.GMenu||fetch("https://raw.githubusercontent.com/tylerbmusic/GeoFS-Addon-Menu/refs/heads/main/addonMenu.js").then(e=>e.text()).then(script=>{eval(script)}).then(()=>{setTimeout(afterGMenu,100)});var isSlewing=!1,tilt=0,roll=0,speedF=0,sideways=0,speedV=0,slewA=0,slewB=0,slewAlt=0,headingRad=0;window.lastCam=0,window.lastGravity=[0,0,0],window.slewDiv=document.createElement("div"),window.slewDiv.style.width="fit-content",window.slewDiv.style.height="fit-content",window.slewDiv.style.color="red",window.slewDiv.style.position="fixed",window.slewDiv.style.margin="5px",document.body.appendChild(window.slewDiv);let lastFrameNumber=window.window.geofs.frameNumber;function checkFrameNumber(){isSlewing&&(window.window.geofs.frameNumber!==lastFrameNumber&&(lastFrameNumber=window.window.geofs.frameNumber,updateSlew()),requestAnimationFrame(checkFrameNumber))}function kb(e){localStorage.getItem("slewToggle"),localStorage.getItem("slewForward"),localStorage.getItem("slewLeft"),localStorage.getItem("slewBackwards"),localStorage.getItem("slewRight"),localStorage.getItem("slewUp"),localStorage.getItem("slewRotYRight"),localStorage.getItem("slewRotYLeft"),localStorage.getItem("slewRotTiltUp"),localStorage.getItem("slewRotTiltDown"),localStorage.getItem("slewRotRLeft"),localStorage.getItem("slewRotRRight"),localStorage.getItem("slewDown");let t=document.activeElement===document.getElementById("chatInput");if(!t&&"true"==localStorage.getItem("slewEnabled")){if("Toggle"==e){if(isSlewing=!isSlewing)window.slew();else if(window.window.geofs.camera.set(window.lastCam),speedF=0,sideways=0,speedV=0,tilt=0,roll=0,window.window.geofs.aircraft.instance.rigidBody.gravityForce=window.lastGravity,window.slewDiv.innerHTML="",!window.window.geofs.animation.values.groundContact){var o,i=window.window.geofs.aircraft.instance;o=0==window.window.geofs.animation.values.flapsTarget?i.definition.minimumSpeed/Number(localStorage.getItem("slewSpeedMultiplier"))*i.definition.mass:i.definition.minimumSpeed/Number(localStorage.getItem("slewSpeedMultiplierFlaps"))*i.definition.mass,i.rigidBody.applyCentralImpulse(window.V3.scale(i.object3d.getWorldFrame()[1],o))}}else"Forward"==e?speedF+=Number(localStorage.getItem("slewLatSpeed")):"Backwards"==e?speedF-=Number(localStorage.getItem("slewLatSpeed")):"Right"==e?sideways+=Number(localStorage.getItem("slewLatSpeed")):"Left"==e?sideways-=Number(localStorage.getItem("slewLatSpeed")):"Up"==e?speedV+=Number(localStorage.getItem("slewVertSpeed")):"Down"==e?speedV-=Number(localStorage.getItem("slewVertSpeed")):"YRight"==e?headingRad+=Number(localStorage.getItem("slewRotAmount"))*window.DEGREES_TO_RAD:"YLeft"==e?headingRad-=Number(localStorage.getItem("slewRotAmount"))*window.DEGREES_TO_RAD:"TiltUp"==e?tilt+=Number(localStorage.getItem("slewRotAmount"))*window.DEGREES_TO_RAD:"TiltDown"==e?tilt-=Number(localStorage.getItem("slewRotAmount"))*window.DEGREES_TO_RAD:"RLeft"==e?roll+=Number(localStorage.getItem("slewRotAmount"))*window.DEGREES_TO_RAD:"RRight"==e&&(roll-=Number(localStorage.getItem("slewRotAmount"))*window.DEGREES_TO_RAD)}}async function updateSlew(){headingRad%=360*window.DEGREES_TO_RAD,window.controls.setMode(window.pControl);var e=Math.cos(headingRad)*speedF-Math.sin(headingRad)*sideways,t=Math.sin(headingRad)*speedF+Math.cos(headingRad)*sideways;slewA+=e,slewB+=t,slewAlt=window.window.geofs.animation.values.groundContact&&speedV<0?slewAlt:slewAlt+speedV,window.window.geofs.aircraft.instance.llaLocation=[slewA,slewB,slewAlt],window.window.geofs.aircraft.instance.object3d.setInitialRotation([tilt,roll,headingRad]),window.window.geofs.aircraft.instance.rigidBody.v_linearVelocity=[0,0,0],window.window.geofs.aircraft.instance.rigidBody.v_acceleration=[0,0,0],window.window.geofs.aircraft.instance.rigidBody.v_angularVelocity=[0,0,0],window.window.geofs.aircraft.instance.rigidBody.v_angularAcceleration=[0,0,0],window.window.geofs.aircraft.instance.rigidBody.gravityForce=[0,0,0],window.slewDiv.innerHTML=`
        <p style="margin: 0px; font-weight: bold;">LAT: ${slewA.toFixed(4)} LON: ${slewB.toFixed(4)} ALT: ${(slewAlt*window.METERS_TO_FEET).toFixed(1)} FT MSL MAG ${(headingRad*window.RAD_TO_DEGREES).toFixed(0)} ${((Math.abs(speedF)+Math.abs(sideways))/Number(localStorage.getItem("slewLatSpeed"))).toFixed(0)} UNITS</p>
        `}window.slew=async function(){speedF=0,sideways=0,speedV=0,tilt=0,roll=0,window.lastGravity=window.window.geofs.aircraft.instance.rigidBody.gravityForce,window.lastCam=window.window.geofs.camera.currentMode,headingRad=window.window.geofs.animation.values.heading360*window.DEGREES_TO_RAD,window.pControl=window.window.geofs.preferences.controlMode,slewA=window.window.geofs.aircraft.instance.llaLocation[0],slewB=window.window.geofs.aircraft.instance.llaLocation[1],slewAlt=window.window.geofs.aircraft.instance.llaLocation[2],window.window.geofs.camera.set(5),requestAnimationFrame(checkFrameNumber)}}();
};

function twlights () {
function calculateBearing(e,t,a,n){let i=(a-e)*Math.PI/180,s=t*Math.PI/180,r=n*Math.PI/180,o=Math.sin(i)*Math.cos(r),l=Math.cos(s)*Math.sin(r)-Math.sin(s)*Math.cos(r)*Math.cos(i),u=180*Math.atan2(o,l)/Math.PI;return(u+360)%360}function calculateOffsetPoint(e,t,a,n){let i=6378137,s=(a+90)*Math.PI/180,r=n*Math.cos(s)/i,o=n*Math.sin(s)/(i*Math.cos(Math.PI*t/180));return{lonPlus:e+180*o/Math.PI,latPlus:t+180*r/Math.PI,lonMinus:e-180*o/Math.PI,latMinus:t-180*r/Math.PI}}function interpolatePoints(e,t,a){let[n,i]=e,[s,r]=t,o=Math.sqrt(Math.pow(s-n,2)+Math.pow(r-i,2)),l=Math.max(Math.floor(o/a),1),u=[];for(let $=0;$<=l;$++){let g=$/l,h=n+(s-n)*g,c=i+(r-i)*g;u.push([h,c,0])}return u}async function getTaxiwayData(e){let t="https://overpass-api.de/api/interpreter",a=`
        [out:json];
        (
            way["aeroway"="taxiway"]({{bbox}});
        );
        out body;
        >;
        out skel qt;
    `,n=e;try{let i=await fetch(`${t}?data=${encodeURIComponent(a.replace("{{bbox}}",n))}`),s=await i.json(),r=[],o={};return s.elements.forEach(e=>{"node"===e.type&&(o[e.id]=e)}),s.elements.forEach(e=>{if("way"===e.type){let t=e.nodes.map(e=>{let t=o[e];if(t)return[t.lon,t.lat,0]}).filter(Boolean);if(t.length>1){let a=[],n=2e-4+(Math.random()-.5)*5e-5;for(let i=0;i<t.length-1;i++){let s=interpolatePoints(t[i],t[i+1],n),l=calculateBearing(t[i][0],t[i][1],t[i+1][0],t[i+1][1]),u=10,$=s.map(([e,t,a])=>{let n=calculateOffsetPoint(e,t,l,u);return[[n.lonPlus,n.latPlus,a],[n.lonMinus,n.latMinus,a]]});a.push(...$)}r.push(a)}}}),r}catch(l){console.error("Error fetching taxiway data:",l)}}async function getTaxiwayDataEdgeless(e){let t="https://overpass-api.de/api/interpreter",a=`
        [out:json];
        (
            way["aeroway"="taxiway"]({{bbox}});
        );
        out body;
        >;
        out skel qt;
    `,n=e;try{let i=await fetch(`${t}?data=${encodeURIComponent(a.replace("{{bbox}}",n))}`),s=await i.json(),r=[],o={};return s.elements.forEach(e=>{"node"===e.type&&(o[e.id]=e)}),s.elements.forEach(e=>{if("way"===e.type){let t=e.nodes.map(e=>{let t=o[e];if(t)return[t.lon,t.lat,0]}).filter(Boolean);if(t.length>1){let a=7e-5+(Math.random()-.5)*2e-5;for(let n=0;n<t.length-1;n++){let i=interpolatePoints(t[n],t[n+1],a);r.push(...i)}}}}),r}catch(l){console.error("Error fetching taxiway data:",l)}}function checkProximityToRunway(e){if(!window.runwayThresholds)for(var t in window.runwayThresholds=[],window.window.geofs.runways.nearRunways){let a=window.window.geofs.runways.nearRunways[t],n=a.threshold1,i=a.threshold2;window.runwayThresholds.push(interpolatePoints([n[1],n[0]],[i[1],i[0]],5/111e3))}let s=(40/111e3)**2,r=e[0],o=e[1];for(var l in window.runwayThresholds)if(window.runwayThresholds[l].some(([e,t])=>{let a=e-r,n=t-o;return a**2+n**2<s}))return!0;return!1}!function(){"use strict";function afterGMenu(){let e=new window.GMenu("Taxiway Lights","twL");e.addItem("Render distance (degrees): ","RenderDist","number",0,"0.05"),e.addItem("Update Interval (seconds): ","UpdateInterval","number",0,"5"),e.addItem("Green/Yellow Light Size: ","GSize","number",0,"0.05"),e.addItem("Blue Light Size: ","BSize","number",0,"0.07"),console.log("TwL Enabled? "+localStorage.getItem("twLEnabled")),setTimeout(()=>{window.updateLights()},100*Number(localStorage.getItem("twLUpdateInterval")))}window.twLights=[],window.twPos=[],window.currLight,window.errs=0,window.gmenu&&window.GMenu||(console.log("Taxiway Lights getting GMenu"),fetch("https://raw.githubusercontent.com/tylerbmusic/GeoFS-Addon-Menu/refs/heads/main/addonMenu.js").then(e=>e.text()).then(script=>{eval(script)}).then(()=>{setTimeout(afterGMenu,100)}))}(),window.updateLights=async function(){if(!1==window.window.geofs.cautiousWithTerrain&&"true"==localStorage.getItem("twLEnabled")){var e=Number(localStorage.getItem("twLRenderDist")),t=Math.floor(window.window.geofs.aircraft.instance.llaLocation[0]/e)*e,a=Math.floor(window.window.geofs.aircraft.instance.llaLocation[1]/e)*e,n=t+", "+a+", "+(t+e)+", "+(a+e);if(!window.lastBounds||window.lastBounds!=n){for(let i=0;i<window.twLights.length;i++)window.window.geofs.api.viewer.entities.remove(window.twLights[i]);window.twLights=[],console.log("Lights removed, placing taxiway edge lights"),window.getTwD(n),console.log("Placing taxiway centerline lights"),window.getTwDE(n)}window.lastBounds=n}else if("true"!=localStorage.getItem("twLEnabled")){window.lastBounds="";for(let s=0;s<window.twLights.length;s++)window.window.geofs.api.viewer.entities.remove(window.twLights[s]);window.twLights=[]}setTimeout(()=>{window.updateLights()},1e3*Number(localStorage.getItem("twLUpdateInterval")))},window.getTwD=async function(e){getTaxiwayData(e).then(e=>{e.forEach(e=>{e.forEach(([e,t])=>{[e,t].forEach(e=>{let t=window.window.geofs.getGroundAltitude([e[1],e[0],e[2]]).location;t[2]+=.3556;let a=window.Cesium.Cartesian3.fromDegrees(t[1],t[0],t[2]);a[2]<0&&(window.errs++,a[2]=0-a[2]),window.twLights.push(window.window.geofs.api.viewer.entities.add({position:a,billboard:{image:"https://tylerbmusic.github.io/GPWS-files_geofs/bluelight.png",scale:Number(localStorage.getItem("twLBSize"))*(1/window.window.geofs.api.renderingSettings.resolutionScale),scaleByDistance:{near:1,nearValue:.5,far:1500,farValue:.15},translucencyByDistance:new window.Cesium.NearFarScalar(10,1,1e4,0)}}))})})})})},window.getTwDE=async function(e){getTaxiwayDataEdgeless(e).then(e=>{var t=0;e.forEach(e=>{t++;let a=window.window.geofs.getGroundAltitude([e[1],e[0],e[2]]).location;a[2]+=.3556;let n=window.Cesium.Cartesian3.fromDegrees(a[1],a[0],a[2]),i=checkProximityToRunway(e),s=t%2==0&&i?"https://tylerbmusic.github.io/GPWS-files_geofs/yellowlight.png":"https://tylerbmusic.github.io/GPWS-files_geofs/greenlight.png";n[2]<0&&(window.errs++,n[2]=0-n[2]),window.twPos.push([n,window.twLights.length]),window.twLights.push(window.window.geofs.api.viewer.entities.add({position:n,billboard:{image:s,scale:Number(localStorage.getItem("twLGSize"))*(1/window.window.geofs.api.renderingSettings.resolutionScale),scaleByDistance:{near:1,nearValue:1,far:2e3,farValue:.15},translucencyByDistance:new window.Cesium.NearFarScalar(10,1,1e4,0)}}))})})},window.removeCloseTwLights=function(){let e={},t=2,a=new Set,n=(e,a)=>`${Math.floor(e/t)}_${Math.floor(a/t)}`;for(let i=0;i<window.twPos.length;i++){let s=window.twPos[i][0],r=n(s.x,s.y);e[r]||(e[r]=[]),e[r].push(i)}for(let o in e){let[l,u]=o.split("_").map(Number),$=[`${l}_${u}`,`${l+1}_${u}`,`${l-1}_${u}`,`${l}_${u+1}`,`${l}_${u-1}`,`${l+1}_${u+1}`,`${l-1}_${u-1}`,`${l+1}_${u-1}`,`${l-1}_${u+1}`];for(let g of $)if(e[g])for(let h=0;h<e[o].length;h++){let c=e[o][h],f=window.twPos[c][0];for(let w of e[g]){if(c>=w||a.has(w))continue;let d=window.twPos[w][0];3>=Math.abs(f.x-d.x)&&3>=Math.abs(f.y-d.y)&&a.add(w)}}}let _=Array.from(a).sort((e,t)=>t-e);for(let p of _)window.window.geofs.api.viewer.entities.remove(window.twLights[p]),window.twPos.splice(p,1),window.twLights.splice(p,1);console.log(`${_.length} taxiway lights removed.`)};
};

function tweaks () {
const MOUSEWHEEL_TWEAKS=!0,POPOUT_CHAT=!0;!function e(){"use strict";if(!window.jQuery)return setTimeout(e,1e3);document.querySelector("input.geofs-autopilot-speed").onwheel=e=>geofs.autopilot.setSpeed(parseInt(e.target.value)+e.deltaY/(e.shiftKey?-100:-10)),document.querySelector("input.geofs-autopilot-course").onwheel=e=>geofs.autopilot.setCourse(parseInt(e.target.value)+e.deltaY/(e.shiftKey?-100:-10)),document.querySelector("input.geofs-autopilot-altitude").onwheel=e=>geofs.autopilot.setAltitude(parseInt(e.target.value)+e.deltaY/(e.shiftKey?-10:-1)),document.querySelector("input.geofs-autopilot-verticalSpeed").onwheel=e=>geofs.autopilot.setVerticalSpeed(parseInt(e.target.value)+e.deltaY/(e.shiftKey?-10:-1));{let t=$('<button class="mdl-button mdl-js-button mdl-button--icon" tabindex="0"><i class="material-icons">text_fields</i></button>')[0];document.querySelectorAll(".geofs-button-mute").forEach(e=>e.parentNode.appendChild(t));let o,l,a;t.onclick=function(){l=(a=document.querySelector(".geofs-chat-messages")).parentNode,(o=window.open("about:blank","_blank","height=580, width=680, popup=1")).document.body.append(a),o.document.head.append($("<title>GeoFS - Chat</title>")[0]),o.document.head.append($("<style>.geofs-chat-message{opacity:1!important;font-family:sans-serif;}</style>")[0]),o.onbeforeunload=()=>l.append(a)},window.onbeforeunload=()=>o&&o.close()}}();
}

adblock();
airspace();
autoland();
throttle();
fpv();
failures();
gpws();
stats();
opengines();
realism();
pushback();
slew();
twlights();
tweaks();
setTimeout(() => {
    info();
}, 10000)
}

menus();
addonExecution();


