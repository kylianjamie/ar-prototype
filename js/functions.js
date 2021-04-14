// info overlay show and hide functions
const popupOverlay = document.getElementById('popup-overlay');
const popupContainer = document.getElementById('popup-container');
const popupBlock = document.getElementById('popup-overlay-block');
const infoContainer = document.getElementById('info-container');
const cartContainer = document.getElementById('cart-container');
const hammerOverlay = new Hammer(popupOverlay);
const hammerBlock = new Hammer(popupBlock);

let overlayStatus = 'hidden';

hammerOverlay.get('swipe').set({ direction: Hammer.DIRECTION_DOWN });
hammerBlock.get('swipe').set({ direction: Hammer.DIRECTION_HORIZONTAL });

document.getElementById('info-button').addEventListener("click", function() {
    infoContainer.classList.remove('hidden');
    openOverlay();
});

document.getElementById('cart-button').addEventListener("click", function() {
    cartContainer.classList.remove('hidden');
    openOverlay();
});

function openOverlay() {
    popupContainer.classList.add("animate__slideInUp");
    popupOverlay.classList.remove("hidden");
    overlayStatus = 'visible';
}

hammerOverlay.on('swipedown', closeOverlay);
hammerBlock.on('swipe tap', closeOverlay);
document.getElementById('container-bar').addEventListener("click", closeOverlay);

function closeOverlay() {
    console.log('close overlay');
    hammerOverlay.get('swipe').set({ enable: false });
    hammerBlock.get('swipe').set({ enable: false });
    hammerBlock.get('tap').set({ enable: false });
    popupContainer.classList.add("animate__faster");
    popupContainer.classList.add("animate__slideOutDown");
    overlayStatus = 'hidden';
}

popupContainer.addEventListener('animationend', () => {
    if (overlayStatus === 'visible'){
        popupContainer.classList.remove("animate__slideInUp");
    }

    if (overlayStatus === 'hidden'){
        popupOverlay.classList.add("hidden");
        popupContainer.classList.remove("animate__slideOutDown");
        popupContainer.classList.remove("animate__faster");  
        if(!infoContainer.classList.contains('hidden')){
            infoContainer.classList.add('hidden');
        } else if (!cartContainer.classList.contains('hidden')){
            cartContainer.classList.add('hidden');
        }
    }

    setTimeout(function() {
        hammerOverlay.get('swipe').set({ enable: true });
        hammerBlock.get('swipe').set({ enable: true });
        hammerBlock.get('tap').set({ enable: true });
      }, 100);
  });
