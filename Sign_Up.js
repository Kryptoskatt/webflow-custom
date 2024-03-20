document.addEventListener('click', function(event) {
if (event.target.getAttribute('sign_up') !== null) {
console.log("sign up event triggered");
var signUpValue = event.target.getAttribute('sign_up');
console.log("sign up value", signUpValue);
var pageUrl = window.location.href;
var pageName = pageUrl.substring(pageUrl.lastIndexOf('/') + 1);
if (pageName === '') {
pageName = 'Home';
}
mixpanel.track('Sign Up', {
'CTA Name': signUpValue,
'Page URL': pageUrl,
'Page Name': pageName
});
}
});
