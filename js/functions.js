// info overlay show and hide functions
const infoOverlay = document.getElementById('info-overlay');
const hammerInfo = new Hammer(infoOverlay);

hammerInfo.get('swipe').set({ direction: Hammer.DIRECTION_DOWN });

hammerInfo.on('swipedown', function() {
	console.log('swipe down');
});

document.getElementById('info-button').addEventListener("click", function() {
    document.getElementById('info-overlay').classList.remove("hidden");
});
