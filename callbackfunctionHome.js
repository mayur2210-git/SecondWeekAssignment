// Global variable
let browser = "Chrome";

// Function that accepts a callback
function checkBrowserVersion(callback) {
    setTimeout(function () {
        callback(browser);
    }, 2000);
}

// Callback function
function showBrowserVersion(version) {
    console.log("Browser version using callback: " + version);
}
// Function call
checkBrowserVersion(showBrowserVersion);