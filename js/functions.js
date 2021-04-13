const infoOverlay = document.getElementById('info-overlay');
const hammerInfo = new Hammer(infoOverlay);

hammerInfo.get('swipe').set({ direction: Hammer.DIRECTION_DOWN });

hammerInfo.on('swipedown', function() {
	console.log('swipe down');
});

hammerInfo.on('tap', function() {
	console.log('tap');
});