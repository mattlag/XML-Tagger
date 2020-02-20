
function makeTreeNode(thisNode, depth = 1, hasNoSiblings = false) {
	// consolelog(`makeTreeNode ${thisNode.nodeName}`);
	let node = createElem('div', {class: 'nodeWrapper'});
	node.onclick = closeAllDialogs;

	// Node title, or just the content
	let elem;
	let content;
	let toggler;

	if(thisNode.nodeName === '#text'){
		// This node is text
		content = thisNode.nodeValue.trim();
		if(!content && hasNoSiblings) {
			// consolelog('Empty Leaf Node found!')
			content = ' ';
		}

		if(content || content === ' ') {
			content = content.replace(/\n/g, '<br>');
			elem = createElem('div', {class: 'textContent'});
			elem.innerHTML = content;
			elem.onclick = function(event){ event.stopPropagation(); showTextEditDialog(thisNode, elem);};
			node.append(elem);
			node.setAttribute('class', 'textNode');
		}
		
	} else if (thisNode.nodeName === '#comment'){
		// This node is a comment
		content = thisNode.nodeValue.trim();
		if(content) {
			elem = createElem('div', {class: 'commentContent'});
			elem.append(`<!-- ${content} -->`);
			node.append(elem);
			node.setAttribute('class', 'commentNode');
		}

	} else {
		// This node is a parent node, possibly with children
		elem = createElem('div', {class: 'nodeHeader'});

		if(thisNode.childNodes.length){
			toggler = createElem('span', {class: 'togglerTitle'});
			if(depth > UI.startDepth) {
				toggler.append(`⯈ ${thisNode.nodeName}`);
				toggler.setAttribute('onclick', 'expand(this)');
			} else {
				toggler.append(`⯆ ${thisNode.nodeName}`);
				toggler.setAttribute('onclick', 'collapse(this)');
			}

			elem.append(toggler);
		} else {
			content = createElem('span', {class: 'title'});
			content.append(thisNode.nodeName);
			elem.append(content);
		}
		
		
		// Attributes
		if(thisNode.attributes){
			for(let a=0; a<thisNode.attributes.length; a++){
				let domNode = createElem('span', {class: 'attributeContent'});
				let xmlAttribute = thisNode.attributes[a];
				domNode.onclick = function(event){ event.stopPropagation(); showAttributeEditDialog(xmlAttribute, domNode); };
				domNode.setAttribute('title', `Click to edit '${xmlAttribute.name}'`);
				domNode.innerHTML = `${xmlAttribute.name}${UI.separator}${xmlAttribute.value}`;
				elem.append(domNode);
			}
		}

		node.append(elem);
	}

	// Child nodes
	content = createElem('div', {class: 'nodeContent'});

	if(depth > UI.startDepth) content.setAttribute('style', 'display:none;');

	let kids = thisNode.childNodes;
	let isOnlyChild = kids.length === 1;
	let kidNode;
	for(let k=0; k<kids.length; k++){
		kidNode = makeTreeNode(kids[k], (depth+1), isOnlyChild);
		if(kidNode.innerHTML) content.append(kidNode);
	}

	if(content.innerHTML) node.append(content);
	// node.append(createElem('br'));

	return node;
}

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
