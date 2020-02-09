var XMLDocument;

function load() {
	XMLDocument = loadXMLDocument(trim(testXML));
	console.log(XMLDocument);
	let destination = document.getElementById('wrapper');

	destination.append(makeNode(XMLDocument.documentElement));

}

function makeNode(thisNode) {
	// console.log(`makeNode ${thisNode.nodeName}`);
	let node = document.createElement('div');
	node.setAttribute('class', 'node');

	// Node title, or just the content
	let top;
	let text;

	if(thisNode.nodeName === '#text'){
		text = trim(thisNode.nodeValue);
		if(text) {
			top = document.createElement('div');
			top.setAttribute('class', 'textContent');
			top.append(text);
			node.append(top);
		}
		
	} else if (thisNode.nodeName === '#comment'){
		text = trim(thisNode.nodeValue);
		if(text) {
			top = document.createElement('div');
			top.setAttribute('class', 'commentContent');
			top.append(`<!-- ${text} -->`);
			node.append(top);
			node.setAttribute('class', 'commentNode');
		}

	} else {
		top = document.createElement('h1');
		top.append(thisNode.nodeName);
		node.append(top);
	}

	// Attributes
	if(thisNode.attributes){
		let attr;
		for(let a=0; a<thisNode.attributes.length; a++){
			attr = document.createElement('span');
			attr.setAttribute('class', 'attributeContent');
			attr.append(`${thisNode.attributes[a].name} = ${thisNode.attributes[a].value}`);
			node.append(attr);
		}
	}
	
	let kids = thisNode.childNodes;
	let kidNode;
	for(let k=0; k<kids.length; k++){
		kidNode = makeNode(kids[k]);
		if(kidNode.innerHTML){
			node.append(kidNode);
		}
	}

	return node;
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

function trim(text) {
	try { 
		text = text.replace(/^\s+|\s+$/g, '');
		return text.replace(/(\r\n|\n|\r|\t)/gm,'');
	} catch(e) { return ''; }
}