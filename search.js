function handleSearchInput(){
	UI.searchResults = 0;
	let term = document.getElementById('search').value;
	
	let tree = document.getElementById('tree');
	tree.innerHTML = '';
	let filteredTree = makeTreeNode(UI.XMLDocument.documentElement, 1, false, term);
	consolelog(`Search found ${UI.searchResults} results`);

	if(filteredTree) {
		let resultCount = document.getElementById('searchResultCount');
		resultCount.innerHTML = UI.searchResults;
		resultCount.innerHTML += UI.searchResults === 1? '&nbsp;result' : '&nbsp;results';
		tree.append(filteredTree);
	} else {
		let message = createElem('div', {class: 'searchNote'});
		message.append('No results');
		tree.append(message);
	}
}

function clearSearchInput(){
	document.getElementById('search').value = '';
	UI.searchResults = 0;
	document.getElementById('searchResultCount').innerHTML = '';
	let tree = document.getElementById('tree');
	tree.innerHTML = '';
	tree.append(makeTreeNode(UI.XMLDocument.documentElement));
}
