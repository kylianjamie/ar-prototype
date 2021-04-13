const infoOverlay = document.getElementById('info-overlay');
const hammerInfo = new Hammer(infoOverlay);

hammerInfo.on('swipedown', function() {
	console.log('huts');
});