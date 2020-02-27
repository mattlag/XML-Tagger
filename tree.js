
function makeTreeNode(thisNode, depth = 1, hasNoSiblings = false, filterTerm = false) {
	// consolelog(`makeTreeNode ${thisNode.nodeName}`);
	let node = createElem('div', {class: 'nodeWrapper'});
	node.onclick = closeAllDialogs;

	let elem;
	let content;
	let toggler;
	let foundResult = false;
	let filterTermIndex;

	function highlight(content){
		let pre = content.substring(0, filterTermIndex);
		let post = content.substring(filterTermIndex+filterTerm.length);
		return `${pre}<span class="highlight">${filterTerm}</span>${post}`;
	}

	if(thisNode.nodeName === '#text'){
		// This node is text
		content = thisNode.nodeValue.trim();
		filterTermIndex = content.indexOf(filterTerm);

		if(filterTerm){
			if(filterTermIndex < 0) {
				// Search does not return this node
				return false;
			} else {
				// consolelog(`Term found in <${thisNode.parentNode.nodeName}>`);
			}
		}

		if(!content && hasNoSiblings) {
			// Leaf node with no content
			content = ' ';
		}

		if(content || content === ' ') {
			if(filterTermIndex >= 0) {
				UI.searchResults += 1;
				foundResult = true;
				content = highlight(content);
				// consolelog(`${content}`);
			}
			
			content = content.replace(/\n/g, '<br>');
			elem = createElem('div', {class: 'textContent'});
			elem.innerHTML = content;
			elem.onclick = function(event){ event.stopPropagation(); showEditDialog(thisNode, elem);};
			node.append(elem);
			node.setAttribute('class', 'textNode');
			return node;
		}
		
	} else if (thisNode.nodeName === '#comment'){
		// This node is a comment
		content = thisNode.nodeValue.trim();
		filterTermIndex = content.indexOf(filterTerm);

		if(filterTerm){
			if(filterTermIndex < 0) {
				// Search does not return this node
				return false;
			} else {
				// consolelog(`Term found in <${thisNode.parentNode.nodeName}>`);
			}
		}

		if(filterTermIndex >= 0) {
			UI.searchResults += 1;
			foundResult = true;
			content = highlight(content);
			// consolelog(`${content}`);
		}

		if(content) {
			content = content.replace(/\n/g, '<br>');
			elem = createElem('div', {class: 'commentContent'});
			elem.innerHTML = `&lt;!-- ${content} --&gt;`;
			elem.onclick = function(event){ event.stopPropagation(); showEditDialog(thisNode, elem);};
			node.append(elem);
			node.setAttribute('class', 'commentNode');
			return node;
		}

	} else {
		// This node is a parent node, possibly with children
		elem = createElem('div', {class: 'nodeHeader'});

		if(thisNode.childNodes.length){
			toggler = createElem('span', {class: 'togglerTitle'});
			if(depth < UI.startDepth || filterTerm) {
				toggler.append(`⯆ ${thisNode.nodeName}`);
				toggler.setAttribute('onclick', 'collapse(this)');
			} else {
				toggler.append(`⯈ ${thisNode.nodeName}`);
				toggler.setAttribute('onclick', 'expand(this)');
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
				domNode.onclick = function(event){ event.stopPropagation(); showEditDialog(xmlAttribute, domNode); };
				domNode.setAttribute('title', `Click to edit '${xmlAttribute.name}'`);

				let name = xmlAttribute.name;
				if(filterTerm){
					filterTermIndex = xmlAttribute.name.indexOf(filterTerm);
					if(filterTermIndex >= 0) {
						name = highlight(name);
						UI.searchResults += 1;
						foundResult = true;
					}
				}

				let value = xmlAttribute.value;
				if(filterTerm){
					filterTermIndex = xmlAttribute.value.indexOf(filterTerm);
					if(filterTermIndex >= 0) {
						value = highlight(value);
						UI.searchResults += 1;
						foundResult = true;
					}
				}

				domNode.innerHTML = `${name}${UI.separator}${value}`;
				elem.append(domNode);
			}
		}

		node.append(elem);
	}

	// Child nodes
	content = createElem('div', {class: 'nodeContent'});

	if(depth > UI.startDepth) content.setAttribute('style', 'display:none;');
	if(filterTerm) content.setAttribute('style', 'display:block;');

	let kids = thisNode.childNodes;
	let isOnlyChild = kids.length === 1;
	let kidNode;
	let kidNodeCount = 0;
	for(let k=0; k<kids.length; k++){
		kidNode = makeTreeNode(kids[k], (depth+1), isOnlyChild, filterTerm);
		if(kidNode && kidNode.innerHTML){
			content.append(kidNode);
			kidNodeCount++;
		}
	}

	if(filterTerm && kidNodeCount === 0 && !foundResult) return false;

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
