var GenerateFTRN = document.getElementById('generate_free_crypto_tax_report_now');
var pageUrl = window.location.href;
var pageName = pageUrl.substring(pageUrl.lastIndexOf('/') + 1);
// If pageName is empty (no characters after the last '/'), set it to 'Home'
if (pageName === '') {
pageName = 'Home';
}
GenerateFTRN.addEventListener('click', function() {
mixpanel.track('Generate Free Crypto Tax Report Now', {
'Page URL': pageUrl,
'Page Name': pageName
});
});
