function generateRandomHex(length) {
    var array = new Uint8Array(length / 2);
    window.crypto.getRandomValues(array);
    return Array.from(array, function(byte) {
        return ('0' + byte.toString(16)).slice(-2);
    }).join('');
}

// Add event listener to all elements with the custom attribute 'sign_up'
document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('click', function(event) {
        // Check if the clicked element has the custom attribute 'sign_up'
        if (event.target.getAttribute('sign_up') !== null) {
            // Generate random hex
            var randomHex = generateRandomHex(6);
            // Append random hex as a query parameter to the URL
            var urlWithQueryParam = window.location.href + (window.location.href.indexOf('?') === -1 ? '?' : '&') + 'fid=' + randomHex;
            // Redirect to the new URL with the query parameter
            window.location.href = urlWithQueryParam;
        }
    });
});