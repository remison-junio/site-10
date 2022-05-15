//Botão Abrir/Fechar Menu

const btnHamburguer = document.querySelector('#btn-hambuguer')
btnHamburguer.addEventListener('click', ()=> {
	document.querySelector('.menu').classList.toggle('active')
})

//Sub Menu

const subMenu = document.querySelectorAll('.sub-menu')
const btnAbrirSubMenu = document.querySelectorAll('.btn-sub')

btnAbrirSubMenu.forEach((e, i) => {
	e.addEventListener('click', (e)=> {
		e.preventDefault()
		subMenu[i].classList.toggle('active')
	})
})

//Pesquisa 

const btnPesquisa = document.querySelector('#btn-pesquisa')
const pesquisa = document.querySelector('#pesquisa')
const pesquisaInput = document.querySelector('#pesquisa-input')
const pesquisaClose = document.querySelector('#pesquisa-close')


btnPesquisa.addEventListener('click', ()=> {
	pesquisa.classList.toggle('active')
	pesquisaInput.focus()
})

pesquisaInput.addEventListener('keyup', (e)=> {
	if(e.target.value.length > 0){
		pesquisaClose.classList.add('active')
	} else {
		pesquisaClose.classList.remove('active')
	}
})

pesquisaClose.addEventListener('click', (e)=> {
	pesquisaClose.classList.remove('active')
	pesquisaInput.value = ''
	pesquisaInput.focus()
	
})

//Carousel

const owl = $('.owl-carousel');

$(document).ready(()=>{
	owl.owlCarousel({
	    loop:true,
	    margin:10,
	    nav:false,
	    responsive:{
	        0:{
	            items:1
	        }
	    }
	})

	$('#btn-right').on('click', ()=>{
		owl.trigger('next.owl.carousel')
	})

	$('#btn-left').on('click', ()=>{
		owl.trigger('prev.owl.carousel')
	})
})

//DropDown menu

const ativarDropdown = function() {
    let tamanhoTela = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
    if (tamanhoTela >= 998) {

        let btnDrop = document.querySelectorAll('.menu .item')
        btnDrop.forEach((item, i) => {
        	item.addEventListener('mouseenter', ()=>{
        		subMenu[i].classList.add('drop')
        	})

        	item.addEventListener('mouseleave', ()=> {
        		subMenu[i].classList.remove('drop')
        	})
        })
    }
}

ativarDropdown()

window.onresize = ativarDropdown

//Botão ir ao topo 

const btnAoTopo = document.querySelector('.btn-aoTopo')

document.addEventListener('scroll', (e)=> {
	let posicao = window.pageYOffset
	if(posicao > 100) {
		btnAoTopo.classList.add('visible')
	} else {
		btnAoTopo.classList.remove('visible')
	}
})

btnAoTopo.addEventListener('click', ()=> $('html, body').animate({scrollTop:0}, 'slow'))