javascript:(function() {
	var p = prompt("Enter darkening percentage (0-100):", "50");
	if (p !== null) {
		p = p.replace(/\D/g, "");
		document.body.style.filter = `brightness(${100 - p}%)`;
	}
})();