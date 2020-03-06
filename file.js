
function handleDragOver(evt){
	evt.preventDefault();

	let target = document.getElementById('dropTarget');
	target.innerHTML = 'drop it!';
}

function handleDragLeave(evt){
	evt.preventDefault();

	let target = document.getElementById('dropTarget');
	target.innerHTML = 'drop a file here';
}

function handleDrop(evt) {
	consolelog(`handleDrop - start`);
	consolelog(evt);

	evt.preventDefault();

	let f = evt.dataTransfer || document.getElementById('fileChooser');
	f = f.files[0];

	consolelog(`handleDrop for ${f.name}`);

	removeElem(document.getElementById('fileChooser'));
	let fname = f.name.split('.');
	fname = fname[fname.length-1].toLowerCase();
	let target = document.getElementById('dropTarget');

	let reader = new FileReader();

	if (fname === 'xml' || fname === 'svg'){
		reader.onload = function() {
			load(reader.result.trim(), f.name);
			setBGOpacity(true);
			enableDocButtons();
		};
		reader.readAsText(f);
		target.innerHTML = 'loading...';
	} else {
		target.innerHTML = '<span class="warn">please drop a .xml or .svg file!</span>';
		window.setTimeout(() => {
			target.innerHTML = 'drop a file here';
		}, 3000);
	}
}

function disableDrop(event){
	event.preventDefault();
	event.stopPropagation();
}

function enableDocButtons(){
	document.getElementById('expandButton').removeAttribute('disabled');
	document.getElementById('collapseButton').removeAttribute('disabled');
	document.getElementById('exportJSONButton').removeAttribute('disabled');
}

function launchOSFileChooser(){
	let fileChooser = createElem('input', {type: 'file', id: 'fileChooser', style: 'display:none;'});
	fileChooser.setAttribute('onchange', 'handleDrop(event);');
	document.body.append(fileChooser);
	fileChooser.click();
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
		text = text.replace(/\n/g, `\n${indent}`);
		if(text) {
			if(text.length > UI.oneLinerLength) {
				content += `\n${indent}${text}\n`;
			} else {
				content += text;
			}
		}
		
	} else if (node.nodeName === '#comment'){
		text = node.nodeValue.trim();
		text = text.replace(/\n/g, `\n${indent}`);
		if(text) content += `${indent}<!--${text}-->\n`;

	} else {
		content = `${indent}<${node.tagName}`;

		if(node.attributes){
			for(let a=0; a<node.attributes.length; a++){
				content += ` ${node.attributes[a].name}="${node.attributes[a].value}"`;
			}
		}

		if(node.childNodes.length === 1){
			content += '>';
			content += generateFormattedTextFromDOMNode(node.childNodes[0], level);
			if(node.childNodes[0].nodeName === '#text' && node.childNodes[0].nodeValue.trim().length < UI.oneLinerLength) {
				content += `</${node.tagName}>\n`;
			} else {
				content += `${indent}</${node.tagName}>\n`;
			}
		
		} else if (node.childNodes.length > 1){
			content += '>';
			if(node.childNodes.length > 1) content += '\n';
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

function downloadXMLFile() {
	let content = UI.XMLHeader || '<?xml version="1.0" encoding="UTF-8"?>\n';
	content += generateFormattedTextFromDOMNode(UI.XMLDocument.documentElement);

	saveFile(content);
	markProjectAsSaved();
}

function exportJSONFile() {
	let jsonResult = XMLtoJSON(UI.XMLDocument);
	jsonResult = JSON.stringify(jsonResult, null, UI.indentChars);

	saveFile(jsonResult, true);
}

function saveFile(content, isJSON = false){
	let ftype = 'text/plain;charset=utf-8';
	let fblob = new Blob([content], {'type':ftype, 'endings':'native'});
	let fname = UI.documentName;

	if(isJSON) fname = `${fname}.json`;

	let link = createElem('a');
	window.URL = window.URL || window.webkitURL;
	link.href = window.URL.createObjectURL(fblob);
	link.download = fname;

	let event = document.createEvent('MouseEvents');
	event.initEvent('click', true, false);
	link.dispatchEvent(event);

	return;
}
