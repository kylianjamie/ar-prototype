// info overlay show and hide functions
const infoOverlay = document.getElementById('info-overlay');
const infoContainer = document.getElementById('info-container');
const hammerInfo = new Hammer(infoOverlay);

hammerInfo.get('swipe').set({ direction: Hammer.DIRECTION_DOWN });

hammerInfo.on('swipedown', function() {
	console.log('swipe down');
    infoContainer.classList.add("animate__slideOutDown");

    infoContainer.addEventListener('animationend', () => {
        infoOverlay.classList.add("hidden");
        infoContainer.classList.remove("animate__slideOutDown");
      });
});

document.getElementById('info-button').addEventListener("click", function() {
    infoContainer.classList.add("animate__slideInUp");
    infoOverlay.classList.remove("hidden");

    infoContainer.addEventListener('animationend', () => {
        infoContainer.classList.remove("animate__slideInUp");
      });
});
