javascript:(function() {
	var style = document.createElement("style");
	style.innerHTML = `
		@keyframes spin {
			from {transform:rotateY(0deg);}
			25% {transform:rotateY(90deg);}
			50% {transform:rotateY(180deg);}
			75% {transform:rotateY(270deg);}
			to {transform:rotateY(360deg);}
		}
	`;
	document.head.appendChild(style);
	var elements = document.querySelectorAll("*");
	elements.forEach(function(element) {
		var randomDuration = `${(Math.random() * 10 + 5).toFixed(2)}s`;
		element.style.animation = `spin ${randomDuration} infinite linear`;
		element.style.transformStyle = "preserve-3d";
	});
})();