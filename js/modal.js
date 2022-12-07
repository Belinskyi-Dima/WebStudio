const closeBtn = document.querySelector('.modal__close-btn');
const backDrop = document.querySelector('.backdrop');
const opoenBackDrop = document.querySelector('.hero__btn');

opoenBackDrop.addEventListener("click", openModal);
closeBtn.addEventListener("click", openModal);

function openModal() {
	backDrop.classList.toggle("is-hidden");
	document.body.classList.toggle("modal-open");
	
}

const btnBurger = document.querySelector(".mobile-btn");
const btnBurgerCl = document.querySelector(".mobile-btn-cl");

const menu = document.querySelector(".mobile-menu")

btnBurger.addEventListener("click", openMenu)
btnBurgerCl.addEventListener("click", openMenu)


function openMenu () {
	menu.classList.toggle("is-open")
	btnBurger.classList.toggle("is-open")
	document.body.classList.toggle("modal-open");
}