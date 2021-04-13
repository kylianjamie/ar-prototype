const infoOverlay = document.getElementById('info-overlay');
const hammertime = new Hammer(infoOverlay);

hammertime.on('swipedown', function(ev) {
	console.log(ev);
});