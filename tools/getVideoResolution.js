javascript:(function() {
	var video = document.querySelector("video");
	if (!video) {
		alert("No video element found on this page.");
		return;
	}
	video.onloadedmetadata = function() {
		alert(`Video resolution: ${video.videoWidth}x${video.videoHeight}`);
	};
	if (video.readyState >= 3) {
		alert(`Video resolution: ${video.videoWidth}x${video.videoHeight}`);
	}
})();