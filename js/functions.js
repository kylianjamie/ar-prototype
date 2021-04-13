const infoOverlay = document.getElementById('info-overlay');
const hammerInfo = new Hammer(infoOverlay);

hammerInfo.on('pandown', function() {
	console.log('pan down');
});

hammerInfo.on('tap', function() {
	console.log('tap');
});

hammerInfo.on('swipe', function() {
	console.log('swipe');
});