# GeoFS-All-in-one-Addon
Born out of my obsession with having all the addons I could ever need in one place, this addon contains 25 addons, their instructions, and detailed flight procedures, compiled together. <br/>
 -Several of the addons have received some kind of modification/update to ensure full functionality, and to make sure they can run well together <br/>


![image](https://github.com/user-attachments/assets/e4aa8b4d-49cf-4909-b1b6-401c707fde65)

![image](https://github.com/user-attachments/assets/87f5e24a-64f7-48ae-a5cb-aaa0a3bc5efc)

![image](https://github.com/user-attachments/assets/0ad4a80d-df0e-414d-a7a2-68b45339de31)

## How to use:
Note: depending on the size of your screen, everything might not fit on the UI bar. If this happens, simply zoom out the site (ctrl-). Some of the scripts included need Tampermonkey, so I recommend using that method, but if you really don't want to, you can inject the script into the console. 
### Console
#### Bookmarklet
-Bookmark any page, left click on it, press Edit, and replace the URL with the contents of bookmarklet.js <br/>
-Once GeoFS is fully loaded, click on the bookmark to run the script. You will have to do this every time you open GeoFS. <br/>
-No need to update, automatically runs latest version <br/>
-Missing some functionality for tampermonkey-only addons. <br/>
#### Pasting into console
-Once GeoFS is fully loaded, press F12/Ctrl+shift+I/Ctrl+shift+J and go to the Console tab. <br/>
-Paste in the contents of main.js at the > symbol and hit Enter <br/>
-You will have to do this every time you go to GeoFS. <br/>
-Missing some functionality for tampermonkey-only addons. <br/>
### Tampermonkey - recommended
-If you use this method, you don't have to install anything other than the userscript, and you get full functionality with all the addons. Also, it runs on its own whenever you go to GeoFS. <br/>
-Install [Tampermonkey](https://www.tampermonkey.net/) <br/>
-Click [here](https://github.com/geofs-pilot/GeoFS-All-in-one-Addon/raw/main/GeoFS-All-in-one-Addon.user.js) to install the script <br/>
-No need to update, automatically runs latest version <br/>
-IMPORTANT: When you visit GeoFS for the first time after installing the userscript, you will be directed to a page requesting permission to access a cross-origin resource. This is simply because the charts addon needs an external resource to work. Click "Always allow" and you're all set! Also, you will be prompted to log in to Puter the first time you use AI ATC. Just click 'Create New Account' and create an account.
### Addons that need tampermonkey to work :
-[randomJobs](https://github.com/scitor/GeoFS/raw/master/randomJobs/randomJobs.user.js) <br/>
-[GeoFS-AI-ATC](https://github.com/avramovic/geofs-ai-atc/raw/master/GeoFS-AI-ATC.user.js) <br/>
-[AI ATC with PTT key (modified version of GeoFS-AI-ATC)](https://github.com/geofs-pilot/AI-ATC-PTT-modification/raw/main/PTT_AI_ATC.user.js) <br/>
-[Better-GeoFS-NAV-map](https://github.com/RadioactivePotato/Better-GeoFS-NAV-Map/tree/main)
## Addons included:
Option menu with flight procedures <br/>
GeoFS-AI-ATC <br/>
GeoFS-Ad-Remover <br/>
Autoland++ <br/>
geofs-autothrottle <br/>
Better-GeoFS-NAV-Map <br/>
GeoFS-Camera-cycling <br/>
geofs-cockpit-volume <br/>
geofs-charts <br/>
GeoFS-Extra-Vehicles <br/>
GeoFS-Failures <br/>
GeoFS-Flight-Path-Vector <br/>
GeoFS-Fuel <br/>
GeoFS-GPWS-Callouts <br/>
GeoFS-Information-Display <br/>
Geofs-Jetbridge <br/>
GeoFS-Landing-Stats <br/>
geofs-overpowered-engines <br/>
GeoFS-Pushback <br/>
randomJobs <br/>
Realism-pack. <br/>
GeoFS-Sky-Dolly <br/>
GeoFS-Slew-Mode <br/>
GeoFS-Taxiway-Lights <br/>
GeoFS-Taxiway-Signs <br/>
uiTweaks <br/>
## Other things to check out
-[Extra Maritime Structures](https://github.com/TotallyRealElonMusk/GeoFS-Extra-Maritime-Structures/blob/main/main.js) <br/>
-[FMC route collection](http://sites.google.com/view/gpg-2-0/home?authuser=0) <br/>
-https://skyvector.com/<br/>
-[Simbrief](https://dispatch.simbrief.com/home) <br/>
-https://opennav.com/ <br/>
-https://www.openaip.net/ <br/>
-https://www.helisimmer.com/how-to-fly-helicopters
## Credits
Some procedures were written with the help of ChatGPT. <br/>
https://sites.google.com/view/geofs-flights-channel/flight-procedures <br/>
https://github.com/avramovic/GeoFS-AI-ATC/tree/master <br/>
https://github.com/RadioactivePotato/GeoFS-Ad-Remover/tree/main <br/>
https://github.com/jtpotato/geofs-scripts/tree/main/Autoland%2B%2B <br/>
https://github.com/meatbroc/geofs-autothrottle/tree/main <br/>
https://github.com/RadioactivePotato/Better-GeoFS-NAV-Map/tree/main <br/>
https://github.com/geofs-pilot/GeoFS-Camera-cycling/tree/main <br/>
https://github.com/mansoorbarri/geofs-charts/tree/main <br/>
https://github.com/geofs-pilot/geofs-cockpit-volume/tree/main <br/>
https://github.com/af267/GeoFS-Extra-Vehicles/tree/main <br/>
https://github.com/tylerbmusic/GeoFS-Failures <br/>
https://github.com/tylerbmusic/GeoFS-Flight-Path-Vector <br/>
https://github.com/geofs-pilot/GeoFS-Fuel <br/>
https://github.com/tylerbmusic/GeoFS-GPWS-Callouts <br/>
https://github.com/RadioactivePotato/GeoFS-Information-Display <br/>
https://github.com/Spice9/Geofs-Jetbridge/tree/main <br/>
https://github.com/scitor/GeoFS/tree/master/randomJobs <br/>
https://github.com/tylerbmusic/GeoFS-Landing-Stats <br/>
https://github.com/geofs-pilot/geofs-overpowered-engines/tree/main <br/>
https://github.com/TotallyRealElonMusk/GeoFS-Pushback <br/>
https://github.com/NVB9ALT/Realism-pack./tree/main <br/>
https://github.com/tylerbmusic/GeoFS-Sky-Dolly <br/>
https://github.com/tylerbmusic/GeoFS-Slew-Mode <br/>
https://github.com/tylerbmusic/GeoFS-Taxiway-Lights <br/>
https://github.com/tylerbmusic/GeoFS-Taxiway-Signs/tree/main <br/>
https://github.com/scitor/GeoFS/tree/master/uiTweaks <br/>
