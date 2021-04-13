const infoOverlay = document.getElementById('info-overlay');
const hammerInfo = new Hammer(infoOverlay);

hammerInfo.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });

// hammerInfo.get('pan').set({ direction: Hammer.DIRECTION_ALL });

hammerInfo.on('swipedown', function() {
	console.log('swipe down');
});

hammerInfo.on('tap', function() {
	console.log('tap');
});

// hammerInfo.on('swipe', function() {
// 	console.log('swipe');
// });