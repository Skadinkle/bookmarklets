javascript:(function() {
	document.body.style.transition = "transform 2s";
	document.body.style.transform = "rotate(10deg)";
	var elements = document.querySelectorAll("img, p, h1, h2, h3, h4, h5, h6, span, a, li, td");
	for (var i = 0; i < elements.length; i++) {
		rando = Math.floor(Math.random() * (10 - 9.5 + 1) + 9.5);
		elements[i].style.transition = `transform ${rando}s ease-in, opacity ${rando / 2}s ease-out`;
		elements[i].style.transform = "translateX(5000%)";
		elements[i].style.opacity = "0%";
		elements[i].addEventListener("transitionend", removeElement);
	}
	function removeElement(event) {
		event.target.removeEventListener("transitionend", removeElement);
		event.target.remove();
	}
})();