function handleSearchInput(){
	let term = document.getElementById('search').value;
	if(UI.tempTree === false) UI.tempTree = UI.XMLDocument.cloneNode(true);
	
	consolelog('UI.temptree');
	consolelog(UI.tempTree);

	let workingTree = UI.tempTree.documentElement.cloneNode(true);
	consolelog('Before Tree');
	consolelog(workingTree);

	let filteredTree = filterTreeNodes(workingTree, term, 0);
	consolelog('Filtered Tree');
	consolelog(filteredTree);

	let tree = document.getElementById('tree');
	tree.innerHTML = '';
	tree.append(makeTreeNode(filteredTree));

	expandAll();
}

function clearSearchInput(){
	document.getElementById('search').value = '';
	consolelog(UI.tempTree);
	document.getElementById('tree').appendChild(UI.tempTree);
	UI.tempTree = false;
}

function filterTreeNodes(thisNode, term, level){
	consolelog(`level ${level} ${thisNode.nodeName}`);

	let thisRoot = createElem(thisNode.nodeName.replace(/#/g, ''));
	let node;
	let result;

	if(thisNode.childNodes.length){
		for(let n=0; n<thisNode.childNodes.length; n++){
			node = thisNode.childNodes[n];
			result = filterTreeNodes(node, term, level+1);
			if(result) {
				consolelog(`>>>APPENDING ${result}`);
				thisRoot.append(result);
			}
		}
	}

	let hit = false;

	/*
	if(thisNode.attributes){
		for(let a=0; a<thisNode.attributes.length; a++){
		}
	}
	*/

	if(thisNode.nodeName === '#text'){
		// consolelog(`checking text ${thisNode.nodeValue}`);
		if(thisNode.nodeValue.indexOf(term) > -1) {
			consolelog(`found in text ${thisNode.nodeValue}`);
			return thisNode.nodeValue;
		}
	} else if (thisNode.nodeName === '#comment'){
		// consolelog(`checking comment ${thisNode.nodeValue}`);
		if(thisNode.nodeValue.indexOf(term) > -1) {
			consolelog(`found in text ${thisNode.nodeValue}`);
			return thisNode.nodeValue;
		}
	}

	return thisRoot;
}