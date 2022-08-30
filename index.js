function convert(){
	let [file] = inpt.files;
	let reader = new FileReader();
	reader.addEventListener('load', function(e) {
		let text = e.target.result;
		
		if( (inpt_width.value != "") || (inpt_height.value != "") ){
			let parser = new DOMParser();
			let svg = parser.parseFromString(text, 'text/html').getElementsByTagName("svg")[0];
			svg.width["baseVal"].value = inpt_width.value || svg.width["baseVal"].value
			svg.height["baseVal"].value = inpt_height.value || svg.height["baseVal"].value
			text = svg.outerHTML
		}
		loadSvg(text)
	});
	reader.addEventListener('error', function() {
		alert('Error : Failed to read file');
	});
	reader.readAsText(file);
}
