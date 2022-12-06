
// const btn = document.querySelector(".portfolio__btn-box")
// console.log(btn);
// btn.addEventListener("click", (e)=> {
// 	filterCard(e.target.dataset.btn)
// })

function openModal() {
	backDrop.classList.toggle("is-hidden");
	document.body.classList.toggle("modal-open");
	
}
const btnBurger = document.querySelector(".mobile-btn")
const munu = document.querySelector(".mobile-menu")

btnBurger.addEventListener("click", openMenu)

function openMenu (e) {
	munu.classList.toggle("is-open")
	btnBurger.classList.toggle("is-open")
}


const items = document.querySelectorAll('.portfolio__item')


const buttons = document.querySelectorAll('.portfolio__btn')

buttons.forEach(function(currentBtn){
  currentBtn.addEventListener('click', e => {
	filter(e);
	btnRemoveClass(e.target)
  })
})



function btnRemoveClass(e) {
	 buttons.forEach((btn)=>{
		btn.classList.remove("portfolio__btn--active")
		if(btn.dataset.btn == e.dataset.btn) {
			btn.classList.add("portfolio__btn--active")
		}
	 })
}

function filter(a) {
let e= a.target.dataset.btn;
	for (let i = 0; i < items.length; i++) {
		items[i].classList.add("is-hiden");
		 if(items[i].dataset.card === e || e== "all") {
			items[i].classList.remove("is-hiden")
			
		}
		
	}
}
