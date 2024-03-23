// Function to generate a cryptographically secure random hexadecimal string
function generateRandomHex(length) {
var array = new Uint8Array(length / 2);
window.crypto.getRandomValues(array);
return Array.from(array, function(byte) {
return ('0' + byte.toString(16)).slice(-2);
}).join('');
}

// Add event listener to all elements with the custom attribute 'sign_up'

document.addEventListener('click', function(event) {
// Check if the clicked element has the custom attribute 'sign_up'
var signUpTarget = event.target.getAttribute('sign_up');
if (signUpTarget !== null) {
    console.log("signUpTarget found", signUpTarget);
    // Retrieve the target URL from the href attribute of the clicked <a> tag
    var targetUrl = event.target.getAttribute('href');
    console.log("targetUrl found", targetUrl);
    // Generate random hex
    var randomHex = generateRandomHex(6);
    // Append random hex as a query parameter to the target URL
    var targetUrlWithQueryParam = targetUrl + (targetUrl.indexOf('?') === -1 ? '?' : '&') + 'fid=' + randomHex;
    // Redirect to the target URL with the query parameter
    window.location.href = targetUrlWithQueryParam;
}
});

