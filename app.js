var UI = {
	devmode: true,
	XMLHeader: '',
	XMLDocument: '',
	documentName: '',
	startDepth: 1,
	preserveWhitespace: false,
	tempTree: false,
	oneLinerLength: 100,
	indentChars: '	',
	separator: '&nbsp;=&nbsp;'
};


function main() {
	if(UI.devmode) {
		load(testXML, 'test-xml-document.xml');
	} else {
		showLoadFileDialog();
	}
}

function load(xml, fname){
	let loadXML = xml;

	if(!UI.preserveWhitespace){
		loadXML = loadXML.replace(/ +/g, ' ');
		loadXML = loadXML.replace(/\t+/g, '');
	}
	loadXML = loadXML.trim();
	
	UI.XMLDocument = loadXMLDocument(loadXML);
	consolelog(UI.XMLDocument);
	
	UI.documentName = fname;

	let firstTagName = `<${UI.XMLDocument.firstElementChild.tagName}`;
	let firstTagIndex = xml.indexOf(firstTagName);
	UI.XMLHeader = xml.substring(0, firstTagIndex);

	loadContent();
}

function loadContent(){
	closeAllDialogs();
	let header = document.getElementById('header');
	header.innerHTML = '';

	let title = createElem('h1', {id: 'documentName', class: 'saved'});
	title.innerText = UI.documentName;
	document.title = `XMLtagger: ${UI.documentName}`;

	let searchIcon = createElem('div', {class: 'searchIcon'});
	// searchIcon.append('🔎');
	searchIcon.append('⌕');

	let searchInput = createElem('input', {type: 'text', placeholder: 'Search', id: 'search'});
	searchInput.onkeyup = handleSearchInput;
	searchInput.onfocus = function(){ this.setAttribute('placeholder', ''); };
	searchInput.onblur = function(){ this.setAttribute('placeholder', 'Search'); };

	let searchClear = createElem('div', {class: 'searchClear'});
	searchClear.append('⨯');
	searchClear.onclick = clearSearchInput;
	
	let searchWrapper = createElem('div', {class: 'searchWrapper'});
	searchWrapper.append(searchIcon);
	searchWrapper.append(searchInput);
	searchWrapper.append(searchClear);

	header.append(title);
	header.append(searchWrapper);
	
	let tree = document.getElementById('tree');
	tree.innerHTML = '';
	tree.append(makeTreeNode(UI.XMLDocument.documentElement));
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