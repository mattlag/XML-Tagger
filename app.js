var UI = {
	devmode: false,
	XMLDocument: '',
	documentName: 'test-xml-document.xml',
	startDepth: 2,
	indentChars: '  ',
	separator: ' = '
};


function main() {
	if(UI.devmode) {
		UI.XMLDocument = loadXMLDocument(testXML.trim());
		consolelog(UI.XMLDocument);
		loadTree();
	} else {
		showLoadFileDialog();
	}
}

function loadTree(){
	let destination = document.getElementById('wrapper');
	destination.innerHTML = '';

	let title = createElem('h1');
	title.innerText = UI.documentName;
	document.title = UI.documentName;

	destination.append(title);
	destination.append(makeNode(UI.XMLDocument.documentElement));
}

function makeNode(thisNode, depth = 0, hasNoSiblings = false) {
	// consolelog(`makeNode ${thisNode.nodeName}`);
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
				domNode.setAttribute('title', `Click to edit "${xmlAttribute.name}"`);
				domNode.append(`${xmlAttribute.name}${UI.separator}${xmlAttribute.value}`);
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
		kidNode = makeNode(kids[k], (depth+=1), isOnlyChild);
		if(kidNode.innerHTML) content.append(kidNode);
	}

	if(content.innerHTML) node.append(content);

	return node;
}

function showAttributeEditDialog(xmlAttribute, domNode){
	closeAllDialogs();

	let domNodePos = domNode.getBoundingClientRect();
	let dialog = createElem('div', {class: 'dialog'});
	dialog.style.top = `${domNodePos.top}px`;
	dialog.style.left = `${domNodePos.right-1}px`;
	dialog.style.borderRadius = "0px 4px 4px 4px";
	dialog.style.textAlign = "center";

	let lable = createElem('label');
	lable.append(xmlAttribute.name);

	let input = createElem('input', {type: 'text'});
	input.setAttribute('value', xmlAttribute.value);

	let confirm = createElem('button');
	confirm.append('save');
	confirm.onclick = function() {
		xmlAttribute.value = escape(input.value);
		domNode.innerHTML = '';
		domNode.append(`${xmlAttribute.name}${UI.separator}${xmlAttribute.value}`);
		closeAllDialogs();
	};

	let cancel = createElem('button');
	cancel.append('cancel');
	cancel.onclick = closeAllDialogs;

	let mask = createElem('div', {style: `
		background-color: white;
		border: 0;
		width:3px;
		height:${domNodePos.height-1}px;
		position:absolute;
		top:0px;
		left:-2px;
	`});

	dialog.append(lable);
	dialog.append(input);
	dialog.append(createElem('br'));
	dialog.append(confirm);
	dialog.append(cancel);
	dialog.append(mask);

	domNode.setAttribute('class', 'attributeContentActive');

	document.body.append(dialog);
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

function showLoadFileDialog() {
	closeAllDialogs();

	let dialog = createElem('div', {class: 'dialog'});

	dialog.style.width = '400px';
	dialog.style.height = '400px';
	dialog.style.left = "120px";
	dialog.style.top = "10px";

	dialog.innerHTML = `
		<h1>Load a XML file</h1>
		<p>Drag and drop a .xml or .svg file here to load it.</p>
	`;

	document.body.append(dialog);
}

function handleDrop(evt) {
	evt.stopPropagation();
	evt.preventDefault();

	let f = evt.dataTransfer || document.getElementById('filechooser');
	f = f.files[0];
	let fname = f.name.split('.');
	fname = fname[fname.length-1].toLowerCase();

	let reader = new FileReader();

	if (fname === 'xml' || fname === 'svg'){
		reader.onload = function() {
			UI.XMLDocument = loadXMLDocument(reader.result.trim());
			consolelog(UI.XMLDocument);
			loadTree();
		};

		reader.readAsText(f);

	} else {

	}
}

function closeAllDialogs(){
	let dialogs = document.querySelectorAll('.dialog');
	if(dialogs.length) dialogs.forEach((d) => d.parentElement.removeChild(d));
	
	let attrCons = document.querySelectorAll('.attributeContentActive');
	if(attrCons.length) attrCons.forEach((a) => a.setAttribute('class', 'attributeContent'));
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

function downloadFile() {
	let content = '<?xml version="1.0" encoding="UTF-8"?>\n';
	content += generateFormattedTextFromDOMNode(UI.XMLDocument.documentElement);

	let ftype = 'text/plain;charset=utf-8';
	let fblob = new Blob([content], {'type':ftype, 'endings':'native'});
	let fname = UI.documentName;

	let link = createElem('a');
	window.URL = window.URL || window.webkitURL;
	link.href = window.URL.createObjectURL(fblob);
	link.download = fname;

	let event = document.createEvent('MouseEvents');
	event.initEvent('click', true, false);
	link.dispatchEvent(event);

	return;
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

function generateFormattedTextFromDOMNode(node, level = 0){
	// consolelog(`Node ${node.tagName} level ${level} has ${node.childNodes.length} children`);
	let content = '';
	let indent = '';
	let text = '';

	for(let i=0; i<level; i++) indent += UI.indentChars;
	level += 1;

	if(node.nodeName === '#text'){
		text = node.nodeValue.trim();
		if(text) content += `${indent}${text}\n`;
		
	} else if (node.nodeName === '#comment'){
		text = node.nodeValue.trim();
		if(text) content += `${indent}<!--${text}-->\n`;

	} else {
		content = `${indent}<${node.tagName}`;

		if(node.attributes){
			for(let a=0; a<node.attributes.length; a++){
				content += ` ${node.attributes[a].name}="${node.attributes[a].value}"`;
			}
		}

		if(node.childNodes.length){
			content += '>\n';
			for(let n=0; n<node.childNodes.length; n++){
				content += generateFormattedTextFromDOMNode(node.childNodes[n], level);
			}
			content += `${indent}</${node.tagName}>\n`;
		} else {
			content += '/>\n';
		}
	}

	return content;
}

function consolelog(message){
	if(UI.devmode) console.log(message);
}