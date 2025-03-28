// ==UserScript==
// @name         GeoFS-All-in-one-Addon
// @namespace    http://tampermonkey.net/
// @version      2025-03-28
// @description  18 addons, their instructions, and detailed flight procedures, compiled together
// @author       geofspilot
// @match        https://www.geo-fs.com/geofs.php?v=*
// @match        https://*.geo-fs.com/geofs.php*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=geo-fs.com
// @grant        none
// ==/UserScript==

let debounceTimer;

const observer = new MutationObserver(() => {
    clearTimeout(debounceTimer); // Reset the timer

    debounceTimer = setTimeout(() => {
        console.log("No more changes detected, running script...");

        observer.disconnect(); // Stop observing further changes

        javascript:(() => {var addonScript = document.createElement('script'); addonScript.src="https://raw.githack.com/geofs-pilot/GeoFS-All-in-one-Addon/main/main.js";document.body.appendChild(addonScript);})()
    }, 1000);
});

// Start observing
observer.observe(document.body, { childList: true, subtree: true });
