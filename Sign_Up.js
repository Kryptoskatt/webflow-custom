document.addEventListener('click', function(event) {

var pageUrl = window.location.href;
var queryIndex = pageUrl.indexOf('?');
var croppedPageUrl = queryIndex !== -1 ? pageUrl.substring(0, queryIndex) : pageUrl;
var pageName = croppedPageUrl.substring(croppedPageUrl.lastIndexOf('/') + 1);

if (pageName === '') {
pageName = 'Home';
}

if (event.target.getAttribute('sign_up') !== null) {
var signUpValue = event.target.getAttribute('sign_up');

mixpanel.track('Sign Up', {
'CTA Name': signUpValue,
'Page URL': pageUrl,
'Page Name': pageName
});
}

if (event.target.getAttribute('sign_in') !== null) {
var signInValue = event.target.getAttribute('sign_in');
mixpanel.track('Sign In', {
'CTA Name': signInValue,
'Page URL': pageUrl,
'Page Name': pageName
});
}
});

