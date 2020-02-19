var UI = {
	devmode: true,
	XMLDocument: '',
	documentName: '',
	startDepth: 2,
	indentChars: '  ',
	separator: '&nbsp;=&nbsp;'
};


function main() {
	if(UI.devmode) {
		loadXML(testXML.trim(), 'test-xml-document.xml');
	} else {
		showLoadFileDialog();
	}
}

function loadXML(xml, fname){
	UI.XMLDocument = loadXMLDocument(xml, fname);
	consolelog(UI.XMLDocument);
	UI.documentName = fname;
	loadTree();
}

function loadXMLDocument(inputXML = ''){
	let XMLdoc;
	let XMLerror;

	if (typeof window.DOMParser !== 'undefined') {
		XMLdoc = (new window.DOMParser()).parseFromString(inputXML, 'text/xml');
	} else if (typeof window.ActiveXObject !== 'undefined' && new window.ActiveXObject('Microsoft.XMLDOM')) {
		XMLdoc = new window.ActiveXObject('Microsoft.XMLDOM');
		XMLdoc.async = 'false';
		XMLdoc.loadXML(inputXML);
	} else {
		console.warn('No XML document parser found.');
		XMLerror = new SyntaxError('No XML document parser found.');
		throw XMLerror;
	}

	let parserError = XMLdoc.getElementsByTagName('parsererror');
	if (parserError.length) {
		XMLerror = new SyntaxError(parserError[0].textContent);
		throw XMLerror;
	}

	return XMLdoc;
}

function loadTree(){
	closeAllDialogs();
	let destination = document.getElementById('wrapper');
	destination.innerHTML = '';

	let title = createElem('h1');
	title.innerText = UI.documentName;
	document.title = `XMLtagger: ${UI.documentName}`;

	destination.append(title);
	destination.append(makeTreeNode(UI.XMLDocument.documentElement));
}

function makeTreeNode(thisNode, depth = 0, hasNoSiblings = false) {
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
			node.append(elem);
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
		kidNode = makeTreeNode(kids[k], (depth+=1), isOnlyChild);
		if(kidNode.innerHTML) content.append(kidNode);
	}

	if(content.innerHTML) node.append(content);

	return node;
}

function escape(value = ''){
	value = value.replace(/&/g, '&amp;');
	value = value.replace(/"/g, '&quot;');
	value = value.replace(/</g, '&lt;');

	return value;
}

function unescape(value = ''){
	value = value.replace(/&quot;/g, '"');
	value = value.replace(/&lt;/g, '<');
	value = value.replace(/&amp;/g, '&');

	return value;
}

function createElem(nodeName = 'div', attributes = {}){
	let elem = document.createElement(nodeName);
	for(let a in attributes) {
		if(attributes.hasOwnProperty(a)){
			elem.setAttribute(a, attributes[a]);
		}
	}

	return elem;
}

function removeElem(elem) {
	if(elem) elem.parentElement.removeChild(elem);
}

function consolelog(message){
	if(UI.devmode) console.log(message);
}