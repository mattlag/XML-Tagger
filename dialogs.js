function closeAllDialogs(){
	let dialogs = document.querySelectorAll('.dialog');
	if(dialogs.length) dialogs.forEach((d) => d.parentElement.removeChild(d));
	
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

	let lable = createElem('label');
	lable.append(xmlAttribute.name);

	let input = createElem('input', {type: 'text'});
	input.setAttribute('value', xmlAttribute.value);

	let confirm = createElem('button');
	confirm.append('save');
	confirm.onclick = function() {
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
