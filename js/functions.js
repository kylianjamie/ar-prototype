// info overlay show and hide functions
const popupOverlay = document.getElementById('popup-overlay');
const popupContainer = document.getElementById('popup-container');
const popupBlock = document.getElementById('popup-overlay-block');
const infoContainer = document.getElementById('info-container');
const cartContainer = document.getElementById('cart-container');
const hammerOverlay = new Hammer(popupOverlay);
const hammerBlock = new Hammer(popupBlock);

let overlayStatus = 'hidden';

hammerOverlay.get('pan').set({ direction: Hammer.DIRECTION_DOWN });
hammerBlock.get('pan').set({ direction: Hammer.DIRECTION_HORIZONTAL });

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

hammerOverlay.on('panstart', closeOverlay);
hammerBlock.on('panstart tap', closeOverlay);
document.getElementById('container-bar').addEventListener("click", closeOverlay);

function closeOverlay() {
    console.log('close overlay');
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
  });



  // whoop

// hammerInfo.on('swipedown', closeInfoOverlay);
// document.getElementById('info-overlay-block').addEventListener("click", closeInfoOverlay);
// document.getElementById('container-bar').addEventListener("click", closeInfoOverlay);

// function closeInfoOverlay() {
//     infoContainer.classList.add("animate__faster");
//     infoContainer.classList.add("animate__slideOutDown");
//     infoOverlayStatus = 'hidden';
// }

// document.getElementById('info-button').addEventListener("click", function() {
//     infoContainer.classList.add("animate__slideInUp");
//     infoOverlay.classList.remove("hidden");
//     infoOverlayStatus = 'visible';
// });

// infoContainer.addEventListener('animationend', () => {
//     if (infoOverlayStatus === 'visible'){
//         infoContainer.classList.remove("animate__slideInUp");
//     }

//     if (infoOverlayStatus === 'hidden'){
//         infoOverlay.classList.add("hidden");
//         infoContainer.classList.remove("animate__slideOutDown");
//         infoContainer.classList.remove("animate__faster");  
//     }
//   });