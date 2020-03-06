function closeAllDialogs(){
	let dialogs = document.querySelectorAll('.dialog');
	if(dialogs.length) dialogs.forEach((d) => removeElem(d));
	setBGOpacity(true);
}

function showEditDialog(xmlNode, domNode, newNodeValue){
	// consolelog(xmlNode);
	closeAllDialogs();

	let currentValue = xmlNode.value || xmlNode.nodeValue;

	let domNodePos = domNode.getBoundingClientRect();
	let dialog = createElem('div', {class: 'dialog'});
	dialog.style.top = `${domNodePos.top}px`;
	dialog.style.left = `${domNodePos.left}px`;
	
	let input = createElem('textarea', {id: 'editDialogInput'});
	input.innerHTML = currentValue;
	input.style.minWidth = `${domNodePos.width+40}px`;
	input.style.minHeight = `${domNodePos.height+10}px`;

	let confirm = createElem('button');
	confirm.append('save');
	confirm.onclick = function() {
		let input = document.getElementById('editDialogInput');
		if(input.value !== currentValue) markProjectAsUnsaved();

		if(xmlNode.nodeName === "#text") {
			// Text node
			xmlNode.data = escape(input.value);
			domNode.innerHTML = xmlNode.data.replace(/\n/g, '<br>');

		} else if (xmlNode.nodeType === 2){
			// Attribute value
			xmlNode.value = escape(input.value);
			domNode.innerHTML = `${xmlNode.name}${UI.separator}${xmlNode.value}`;
		
		} else if (xmlNode.nodeName === '#comment') {
			// Comment
			xmlNode.textContent = escape(input.value);
			domNode.innerHTML = `&lt;!--${xmlNode.textContent.replace(/\n/g, '<br>')}--&gt;`;
		}
		
		closeAllDialogs();
	};

	let cancel = createElem('button');
	cancel.append('cancel');
	cancel.onclick = closeAllDialogs;

	let footer = createElem('div', {class: 'buttonfooter'});
	footer.append(confirm);
	footer.append(cancel);

	dialog.append(input);
	dialog.append(footer);
	document.body.append(dialog);
}

function showLoadFileDialog() {
	closeAllDialogs();
	setBGOpacity(false);

	let dialog = createElem('div', {class: 'dialog'});
	let bodyRect = document.body.getClientRects()[0];
	let width = 500;
	let height = 300;

	dialog.style.width = `${width}px`;
	dialog.style.height = `${height}px`;
	dialog.style.left = `${(bodyRect.width / 2) - (width / 2)}px`;
	dialog.style.top = `${(bodyRect.height / 2) - (height / 2)}px`;

	let wrapper = createElem('div', {class: 'content'});
	wrapper.innerHTML = `
		<h1>Load a XML file</h1>
		<p>Drag and drop a .xml or .svg file here to load it.</p>
		<div id="dropTarget" ondrop="handleDrop(event);" ondragover="handleDragOver(event);" ondragleave="handleDragLeave(event);">drop a file here</div>
	`;

	let footer = createElem('div', {class: 'buttonfooter'});
	footer.innerHTML = `
		<button onclick="launchOSFileChooser();">browse for a file</button>
		<button onclick="closeAllDialogs();">cancel</button>
	`;

	dialog.append(wrapper);
	dialog.append(footer);

	document.body.append(dialog);
}

function markProjectAsUnsaved(){
	document.getElementById('saveXMLButton').removeAttribute('disabled');
	if(document.title.charAt(0) !== '●') document.title = '● ' + document.title;
	
	if(!UI.devmode) window.addEventListener('beforeunload', handleBeforeUnload, true);
}

function handleBeforeUnload(event) {
	event.preventDefault();
	event.returnValue = '';
}

function markProjectAsSaved(){
	document.getElementById('saveXMLButton').setAttribute('disabled', 'disabled');
	document.title = `XMLtagger: ${UI.documentName}`;
	if(!UI.devmode) window.removeEventListener('beforeunload', handleBeforeUnload, true);
}

function setBGOpacity(opacity = false) {
	document.getElementById('appBar').style.opacity = opacity? '1.0' : '0.2';
	document.getElementById('wrapper').style.opacity = opacity? '1.0' : '0.3';
}
