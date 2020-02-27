function closeAllDialogs(){
	let dialogs = document.querySelectorAll('.dialog');
	if(dialogs.length) dialogs.forEach((d) => removeElem(d));
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
			domNode.innerHTML = `&lt;!--${xmlNode.textContent}--&gt;`;
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

	let dialog = createElem('div', {class: 'dialog'});

	dialog.style.width = '400px';
	dialog.style.left = "118px";
	dialog.style.top = "10px";

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
	document.getElementById('saveButton').removeAttribute('disabled');
	if(document.title.charAt(0) !== '●') document.title = '● ' + document.title;
	
	if(!UI.devmode) {
		window.addEventListener('beforeunload', (e) => {
			e.preventDefault();
			e.returnValue = '';
		});
	}
}

function markProjectAsSaved(){
	document.getElementById('saveButton').setAttribute('disabled', 'disabled');
	document.title = `XMLtagger: ${UI.documentName}`;
	if(!UI.devmode) window.removeEventListener('beforeunload');
}
