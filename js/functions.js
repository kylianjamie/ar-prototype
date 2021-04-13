// info overlay show and hide functions
const popupOverlay = document.getElementById('popup-overlay');
const popupContainer = document.getElementById('popup-container');
const hammerInfo = new Hammer(popupOverlay);

let overlayStatus = 'hidden';

hammerInfo.get('swipe').set({ direction: Hammer.DIRECTION_DOWN });

document.getElementById('info-button').addEventListener("click", openOverlay);

function openOverlay() {
    popupContainer.classList.add("animate__slideInUp");
    popupOverlay.classList.remove("hidden");
    overlayStatus = 'visible';
}

hammerInfo.on('swipedown', closeOverlay);
document.getElementById('popup-overlay-block').addEventListener("click", closeOverlay);
document.getElementById('container-bar').addEventListener("click", closeOverlay);

function closeOverlay() {
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