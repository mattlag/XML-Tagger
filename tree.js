
function expand(node){
	closeAllDialogs();
	try {
		node.innerHTML = "⯆" + node.innerHTML.substring(1);
		node.parentNode.parentNode.childNodes[1].style.display = 'block';
		node.setAttribute('onclick', 'collapse(this)');
	} catch(err) {
		console.warn(err);
	}
}

function collapse(node){
	closeAllDialogs();
	try {
		node.innerHTML = "⯈" + node.innerHTML.substring(1);
		node.parentNode.parentNode.childNodes[1].style.display = 'none';
		node.setAttribute('onclick', 'expand(this)');
	} catch(err) {
		console.warn(err);
	}
}

function expandAll() {
	closeAllDialogs();
	document.querySelectorAll('.togglerTitle').forEach((node) => expand(node));
}

function collapseAll() {
	closeAllDialogs();
	document.querySelectorAll('.togglerTitle').forEach((node) => collapse(node));
}
