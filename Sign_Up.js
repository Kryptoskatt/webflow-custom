document.addEventListener('click', function(event) {
var pageUrl = window.location.href;
var pageName = pageUrl.substring(pageUrl.lastIndexOf('/') + 1);

if (pageName === '') {
pageName = 'Home';
}

if (event.target.getAttribute('sign_up') !== null) {
console.log("sign up event triggered");
var signUpValue = event.target.getAttribute('sign_up');
console.log("sign up value", signUpValue);

mixpanel.track('Sign Up', {
'CTA Name': signUpValue,
'Page URL': pageUrl,
'Page Name': pageName
});
}

if (event.target.getAttribute('sign_in') !== null) {
console.log("sign in event triggered");
var signInValue = event.target.getAttribute('sign_in');
console.log("sign in value", signUpValue);
mixpanel.track('Sign In', {
'CTA Name': signInValue,
'Page URL': pageUrl,
'Page Name': pageName
});
}
});
