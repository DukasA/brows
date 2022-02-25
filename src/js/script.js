const modalTrigger = document.querySelectorAll('[data-modal]'),
      modal = document.querySelector('.modal'),
      closeModalBtn = document.querySelector('[data-close]');
 
function openModal() {
    modal.classList.toggle('show');
    document.body.style.overflow = 'hidden';
    clearInterval(modalTimerId);
}
      
modalTrigger.forEach(btn => {
    btn.addEventListener('click', openModal);
});

function closeModal() {
    modal.classList.toggle('show');
    document.body.style.overflow = '';  
}

closeModalBtn.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.code === "Escape" && modal.classList.toggle('show')) {
        closeModal();
    }
});

const modalTimerId = setTimeout(openModal,1000*120);






