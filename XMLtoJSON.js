function XMLtoJSON(XMLdoc){

	return {
		'name' : XMLdoc.documentElement.nodeName,
		'attributes' : tag_getAttributes(XMLdoc.documentElement.attributes),
		'content' : tag_getContent(XMLdoc.documentElement)
	};

	function tag_getContent(parent) {
		var kids = parent.childNodes;
		// log('\nTAG: ' + parent.nodeName + '\t' + parent.childNodes.length);

		if(kids.length === 0) return jsonTrim(parent.nodeValue);

		var result = [];
		var node, tagresult, tagcontent, tagattributes;

		for(var k=0; k<kids.length; k++){
			tagresult = {};
			node = kids[k];
			// log('\n\t>>START kid ' + k + ' ' + node.nodeName);
			if(node.nodeName === '#comment') break;

			tagcontent = tag_getContent(node);
			tagattributes = tag_getAttributes(node.attributes);

			if(node.nodeName === '#text' && JSON.stringify(tagattributes) === '{}'){
				tagresult = jsonTrim(tagcontent);
			} else {
				tagresult.name = node.nodeName;
				tagresult.attributes = tagattributes;
				tagresult.content = tagcontent;
			}

			if(tagresult !== '') result.push(tagresult);

			// log('\t>>END kid ' + k);
		}

		return result;
	}

	function tag_getAttributes(attributes) {
		if(!attributes || !attributes.length) return {};

		// log('\t\t tag_getAttributes:');
		// log(attributes);

		var result = {};
		var attr;

		for(var a=0; a<attributes.length; a++){
			attr = attributes[a];
			// log('\t\t'+attr.name+' : '+attr.value);
			result[attr.name] = jsonTrim(attr.value);
		}

		return result;
	}

	function jsonTrim(text) {
		try { 
			text = text.replace(/^\s+|\s+$/g, '');
			return text.replace(/(\r\n|\n|\r|\t)/gm,'');
		} catch(e) { return ''; }
	}
}
