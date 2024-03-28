console.log("before event is triggered Sign Up");
document.addEventListener('click', function(event) {
console.log("click event is triggered", event);
var pageUrl = window.location.href;
var pageName = pageUrl.substring(pageUrl.lastIndexOf('/') + 1);

if (pageName === '') {
pageName = 'Home';
}

if (event.target.getAttribute('sign_up') !== null) {
var signUpValue = event.target.getAttribute('sign_up');
console.log("sign up event is triggered", signUpValue);

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
