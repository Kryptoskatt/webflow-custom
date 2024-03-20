var signUpCTA = document.getElementById('header_sign_up');
var signInCTA = document.getElementById('header_sign_in');
var pageUrl = window.location.href;
var pageName = pageUrl.substring(pageUrl.lastIndexOf('/') + 1);
// If pageName is empty (no characters after the last '/'), set it to 'Home'
if (pageName === '') {
pageName = 'Home';
}
signUpCTA.addEventListener('click', function() {
mixpanel.track('Header Sign Up', {
'Page URL': pageUrl,
'Page Name': pageName
});
});
signInCTA.addEventListener('click', function() {
mixpanel.track('Header Sign In', {
'Page URL': pageUrl,
'Page Name': pageName
});
});


