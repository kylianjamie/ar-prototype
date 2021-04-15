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
hammerBlock.get('pan').set({ threshold: 100 });

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
    if (overlayStatus != 'hidden'){
        overlayStatus = 'hidden';
        hammerOverlay.get('pan').set({ enable: false });
        hammerBlock.get('pan').set({ enable: false });
        hammerBlock.get('tap').set({ enable: false });
        popupContainer.classList.add("animate__faster");
        popupContainer.classList.add("animate__slideOutDown");
    }
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

        hammerOverlay.get('pan').set({ enable: true });
        hammerBlock.get('pan').set({ enable: true });
        hammerBlock.get('tap').set({ enable: true });

    }  
  });

const addCartBtn = document.getElementById('add-card-btn') 
let cartBtnClicked = false;
const checkSVG = '<svg xmlns="http://www.w3.org/2000/svg" id="check-svg" class="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>'

function addToCart() {
    if (!cartBtnClicked){
        cartBtnClicked = true;
        addCartBtn.classList.remove('text-white', 'bg-gray-600');
        addCartBtn.classList.add('text-gray-700', 'border', 'border-gray-600');
        addCartBtn.innerHTML = 'Toegevoegd ' + checkSVG;
    }
}

addCartBtn.addEventListener('click', addToCart);