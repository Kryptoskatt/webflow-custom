// Get the current page slug
var pageSlug = window.location.pathname.split('/').filter(Boolean).pop(); // Extracting "integrations" from URL

// If no slug is found, set it to 'home'
if (!pageSlug) {
pageSlug = 'home';
}

// Get all elements with data-tracker attribute
var elements = document.querySelectorAll('[data-tracker]');

// Iterate through each element
elements.forEach(function(element) {
// Get the original value of the data-tracker attribute
var originalValue = element.getAttribute('data-tracker');

// Split the original value by the "|" symbol
var parts = originalValue.split('|');

// Add the page slug after the "|" symbol, except for the 'home' case
var modifiedValue;
if (pageSlug.toLowerCase() === 'home') {
modifiedValue = parts[0] + '_' + pageSlug + '|' + parts[1];
} else {
modifiedValue = parts[0] + '_' + pageSlug + '|' + pageSlug;
}

// Update the data-tracker attribute with the modified value
element.setAttribute('data-tracker', modifiedValue);
});

