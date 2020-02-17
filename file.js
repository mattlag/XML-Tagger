
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