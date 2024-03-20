document.addEventListener('click', function(event) {
if (event.target.getAttribute('sign_up') !== null) {
var signUpValue = event.target.getAttribute('sign_up');
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
