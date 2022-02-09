'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');
const CloseModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');

}
const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

}
console.log(btnOpenModal);
for (let i = 0; i < btnOpenModal.length; i++) {
    btnOpenModal[i].addEventListener('click', openModal);
};
btnCloseModal.addEventListener('click', CloseModal);
overlay.addEventListener('click', CloseModal);
document.addEventListener('keydown', function (event) {
    console.log(event);
    if (event.key === 'Escape') {
        if (!modal.classList.contains('hidden')) {
            CloseModal();
        }
    }
});