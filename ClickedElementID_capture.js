document.addEventListener('DOMContentLoaded', function() {
console.log("before event is triggered Datatracker ClickedElement ID");
document.addEventListener('click', function(event) {
console.log("event is triger",event);
var clickedElements = localStorage.getItem('clickedKey');
console.log("clickedKey",clickedElements);
if(clickedElements==='' || clickedElements==null || clickedElements==undefined){
clickedElements=[];
}else{
clickedElements=JSON.parse(clickedElements);
}
var clickedElementId = event.target.id;
if (clickedElementId) {
if(clickedElementId!=='search' && clickedElementId!=='name' && clickedElementId!=='radio' && clickedElementId!=='marketing-2' && clickedElementId!=='analytics-2' && clickedElementId!=='personalization-2' && clickedElementId!=='w-dropdown-toggle-0')
clickedElements.push(clickedElementId);
localStorage.setItem('clickedKey', JSON.stringify(clickedElements));
}
});
});
