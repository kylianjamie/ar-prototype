// info overlay show and hide functions
const infoOverlay = document.getElementById('info-overlay');
const hammerInfo = new Hammer(infoOverlay);

hammerInfo.get('swipe').set({ direction: Hammer.DIRECTION_DOWN });

hammerInfo.on('swipedown', function() {
	console.log('swipe down');
    infoOverlay.classList.remove("animate__slideInUp");
    infoOverlay.classList.add("animate__slideOutDown");

    infoOverlay.addEventListener('animationend', () => {
        infoOverlay.classList.add("hidden");
        infoOverlay.classList.remove("animate__animated", "animate__slideOutDown");
      });
});

document.getElementById('info-button').addEventListener("click", function() {
    infoOverlay.classList.add("animate__animated", "animate__slideInUp");
    infoOverlay.classList.remove("hidden");
});
