javascript:(function() {
	var style = document.createElement("style");
	style.innerHTML = "@keyframes elemBounce {from {transform:translateY(0);} to{transform:translateY(-10px);}}";
	var elements = document.querySelectorAll("div, img, p, span, h1, h2, h3, h4, h5, h6, li, a, td, th");
	elements.forEach(function(element) {
		var delay = `${(Math.random() * 2)}s`;
		var duration = `${(Math.random() * .2 + .2)}s`;
		element.style.animation = `elemBounce ${duration} ${delay} infinite alternate`;
	});
	document.head.appendChild(style);
})();