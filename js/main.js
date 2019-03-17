console.log("working")

html = {
	costam: function() {
		console.log(this.tagName);
	}
}
function koza() {
	return Object.assign(document.createElement('div'), html)
}
window.addEventListener('load', function() { koza().costam(); });
