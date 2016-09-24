// document.getElementById('body').style.backgroundImage="url(images/your_awesome.jpg)";


document.querySelector('.grid').addEventListener('click', function(e){
	var myImages = this.querySelectorAll('li');
	console.log(this);
if (e.target.tagName === 'IMG') {
var removeTarget = e.target.parentNode;
removeTarget.parentNode.removeChild(removeTarget);
}
}, false);