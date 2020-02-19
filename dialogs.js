function closeAllDialogs(){
	let dialogs = document.querySelectorAll('.dialog');
	if(dialogs.length) dialogs.forEach((d) => removeElem(d));
	
	let attrCons = document.querySelectorAll('.attributeContentActive');
	if(attrCons.length) attrCons.forEach((a) => a.setAttribute('class', 'attributeContent'));
}

function showAttributeEditDialog(xmlAttribute, domNode){
	closeAllDialogs();

	let domNodePos = domNode.getBoundingClientRect();
	let dialog = createElem('div', {class: 'dialog'});
	dialog.style.top = `${domNodePos.top}px`;
	dialog.style.left = `${domNodePos.right-1}px`;
	dialog.style.borderRadius = "0px 4px 4px 4px";
	dialog.style.textAlign = "center";
	
	let input = createElem('textarea');
	input.innerHTML = xmlAttribute.value;
	input.style.minWidth = `${domNodePos.width+40}px`;
	input.style.minHeight = `${domNodePos.height+10}px`;

	let confirm = createElem('button');
	confirm.append('save');
	confirm.onclick = function() {
		if(input.value !== xmlAttribute.value) markProjectAsUnsaved();
		xmlAttribute.value = escape(input.value);
		domNode.innerHTML = '';
		domNode.innerHTML = `${xmlAttribute.name}${UI.separator}${xmlAttribute.value}`;
		closeAllDialogs();
	};

	let cancel = createElem('button');
	cancel.append('cancel');
	cancel.onclick = closeAllDialogs;

	let mask = createElem('div', {style: `
		background-color: white;
		border: 0;
		width:3px;
		height:${domNodePos.height-2}px;
		position:absolute;
		top:0px;
		left:-2px;
	`});

	let footer = createElem('div', {class: 'buttonfooter'});
	footer.append(confirm);
	footer.append(cancel);

	dialog.append(input);
	dialog.append(footer);
	dialog.append(mask);

	domNode.setAttribute('class', 'attributeContentActive');

	document.body.append(dialog);
}

function showTextEditDialog(xmlAttribute, domNode){
	closeAllDialogs();

	let domNodePos = domNode.getBoundingClientRect();
	let dialog = createElem('div', {class: 'dialog'});
	dialog.style.top = `${domNodePos.top}px`;
	dialog.style.left = `${domNodePos.left}px`;
	dialog.style.borderRadius = "0px 0px 4px 4px";

	let input = createElem('textarea');
	input.innerHTML = xmlAttribute.data.trim();	
	input.style.minWidth = `${domNodePos.width+40}px`;
	input.style.minHeight = `${domNodePos.height+40}px`;

	
	let confirm = createElem('button');
	confirm.append('save');
	confirm.onclick = function() {
		if(input.value !== xmlAttribute.data) markProjectAsUnsaved();
		xmlAttribute.data = escape(input.value);
		domNode.innerHTML = xmlAttribute.data.replace(/\n/g, '<br>');
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
	document.title = '● ' + document.title;
}

function markProjectAsSaved(){
	document.getElementById('saveButton').setAttribute('disabled', 'disabled');
	document.title = `XMLtagger: ${UI.documentName}`;
}
