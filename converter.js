import { Canvg } from 'https://cdn.skypack.dev/canvg';
let v = null;
window.loadSvg = (svg)=>{
	const ctx = canvas.getContext('2d');
	v = Canvg.fromString(ctx, svg);
	v.start();
	var img = canvas.toDataURL("img/png");
	imgOutput.src=img
}
