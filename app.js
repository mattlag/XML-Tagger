var UI = {
	XMLDocument: '',
	startDepth: 1
};


function load() {
	UI.XMLDocument = loadXMLDocument(trim(testXML));
	console.log(UI.XMLDocument);
	let destination = document.getElementById('wrapper');

	destination.append(makeNode(UI.XMLDocument.documentElement));

}

function makeNode(thisNode, depth = 0) {
	// console.log(`makeNode ${thisNode.nodeName}`);
	let node = document.createElement('div');
	node.setAttribute('class', 'nodeWrapper');

	// Node title, or just the content
	let elem;
	let content;
	let toggler;

	if(thisNode.nodeName === '#text'){
		content = trim(thisNode.nodeValue);
		if(content) {
			elem = document.createElement('div');
			elem.setAttribute('class', 'textContent');
			elem.append(content);
			node.append(elem);
		}
		
	} else if (thisNode.nodeName === '#comment'){
		content = trim(thisNode.nodeValue);
		if(content) {
			elem = document.createElement('div');
			elem.setAttribute('class', 'commentContent');
			elem.append(`<!-- ${content} -->`);
			node.append(elem);
			node.setAttribute('class', 'commentNode');
		}

	} else {
		elem = document.createElement('div');
		elem.setAttribute('class', 'nodeHeader');

		if(thisNode.childNodes.length){
			toggler = document.createElement('div');
			toggler.setAttribute('class', 'toggler');
			if(depth > UI.startDepth) {
				// toggler.append('⯈');
				toggler.append(arrow('right'));
				toggler.setAttribute('onclick', 'expand(this)');
			} else {
				// toggler.append('⯆');
				toggler.append(arrow('down'));
				toggler.setAttribute('onclick', 'collapse(this)');
			}

			elem.append(toggler);
		}
		
		elem.append(thisNode.nodeName);
		
		// Attributes
		if(thisNode.attributes){
			let attr;
			for(let a=0; a<thisNode.attributes.length; a++){
				attr = document.createElement('span');
				attr.setAttribute('class', 'attributeContent');
				attr.append(`${thisNode.attributes[a].name} = ${thisNode.attributes[a].value}`);
				elem.append(attr);
			}
		}

		node.append(elem);
	}

	// Child nodes
	content = document.createElement('div');
	content.setAttribute('class', 'nodeContent');

	if(depth > UI.startDepth) content.setAttribute('style', 'display:none;');

	let kids = thisNode.childNodes;
	let kidNode;
	for(let k=0; k<kids.length; k++){
		kidNode = makeNode(kids[k], (depth+=1));
		if(kidNode.innerHTML) content.append(kidNode);
	}

	if(content.innerHTML) node.append(content);

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

function expand(node){
	node.parentNode.parentNode.childNodes[1].style.display = 'block';
	node.innerHTML = '';
	node.append(arrow('down'));
	node.setAttribute('onclick', 'collapse(this)');
}

function collapse(node){
	node.parentNode.parentNode.childNodes[1].style.display = 'none';
	node.innerHTML = '';
	node.append(arrow('right'));
	node.setAttribute('onclick', 'expand(this)');
}

function arrow(direction){
	let svg = document.createElement('svg');
	svg.setAttribute('xmlns','http://www.w3.org/2000/svg');
	svg.setAttribute('viewBox', '0 0 12 12');
	svg.setAttribute('width', '12');
	svg.setAttribute('height', '12');
	
	let shape = document.createElement('use');

	if(direction === 'down') shape.setAttribute('xlink:href', '#downArrow');
	else if (direction === 'right') shape.setAttribute('xlink:href', '#rightArrow');
	
	svg.append(shape);

	return svg;
}