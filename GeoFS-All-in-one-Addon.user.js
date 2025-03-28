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
let isTabActive = true; // Track tab visibility

// Mutation Observer
const observer = new MutationObserver(() => {
    if (!isTabActive) return; // Don't run if the tab is inactive

    clearTimeout(debounceTimer);

    debounceTimer = setTimeout(() => {
        console.log("No more changes detected, running script...");
        observer.disconnect(); // Stop further execution
        (() => {var addonScript = document.createElement('script'); addonScript.src="https://raw.githack.com/geofs-pilot/GeoFS-All-in-one-Addon/main/main.js";document.body.appendChild(addonScript);})() //Run the script
    }, 1200);
});

// Observe mutations in the body
observer.observe(document.body, { childList: true, subtree: true });

// Detect tab visibility changes
document.addEventListener("visibilitychange", () => {
    isTabActive = !document.hidden;
    if (isTabActive) {
        console.log("Tab is active again. Resuming observer.");
    }
});
