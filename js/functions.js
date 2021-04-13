// info overlay show and hide functions
const popupOverlay = document.getElementById('popup-overlay');
const infoContainer = document.getElementById('info-container');
const hammerInfo = new Hammer(popupOverlay);

let overlayStatus = 'hidden';

hammerInfo.get('swipe').set({ direction: Hammer.DIRECTION_DOWN });

document.getElementById('info-button').addEventListener("click", openOverlay(infoContainer));

function openOverlay(el) {
    el.classList.add("animate__slideInUp");
    popupOverlay.classList.remove("hidden");
    overlayStatus = 'visible';

    callback(el);
}

hammerInfo.on('swipedown', closeOverlay(infoContainer));
document.getElementById('popup-overlay-block').addEventListener("click", closeOverlay(infoContainer));
document.getElementById('container-bar').addEventListener("click", closeOverlay(infoContainer));

function closeOverlay(el) {
    el.classList.add("animate__faster");
    el.classList.add("animate__slideOutDown");
    overlayStatus = 'hidden';

    callback(el);
}

function callback (el) {
el.addEventListener('animationend', () => {
    if (overlayStatus === 'visible'){
        el.classList.remove("animate__slideInUp");
    }

    if (overlayStatus === 'hidden'){
        popupOverlay.classList.add("hidden");
        el.classList.remove("animate__slideOutDown");
        el.classList.remove("animate__faster");  
    }
  });
}


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