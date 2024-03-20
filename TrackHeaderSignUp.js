document.addEventListener('DOMContentLoaded', function() {
console.log("track header sign-up");
var signUpCTA = document.getElementById('header_sign_up');
var pageUrl = window.location.href;
console.log('track header sign up', pageUrl);
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
});
