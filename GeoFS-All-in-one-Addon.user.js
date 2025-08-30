// ==UserScript==
// @name         GeoFS-All-in-one-Addon
// @namespace    http://tampermonkey.net/
// @version      2.0.0
// @description  26 addons, their instructions, and detailed flight procedures, compiled together
// @author       geofspilot
// @match        https://www.geo-fs.com/geofs.php?v=*
// @match        https://*.geo-fs.com/geofs.php*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=geo-fs.com
// @grant        none
// ==/UserScript==

javascript:(() => {var addonScript = document.createElement('script'); addonScript.src="https://raw.githack.com/geofs-pilot/GeoFS-All-in-one-Addon/main/main.js";document.body.appendChild(addonScript);})()