//Botão Abrir/Fechar Menu

const btnHamburguer = document.querySelector('#btn-hambuguer')
const menu = document.querySelector('.menu')
btnHamburguer.addEventListener('click', ()=> {
	menu.classList.toggle('active')
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
	if(pesquisa.classList.contains('active')) {
		pesquisa.classList.remove('active')
		pesquisaInput.value = ''
	} else {
		pesquisa.classList.add('active')
		pesquisaInput.focus()
	}
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

pesquisaInput.addEventListener('blur', (e) => {
	if(e.target.value.length === 0) pesquisa.classList.remove('active')
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

//debounce

const debounce = function(func, wait, immediate) {
		let timeout;
		return function(...args) {
		const context = this;
		const later = function () {
		  timeout = null;
		  if (!immediate) func.apply(context, args);
		};
		const callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

//Adicionando eventos no dropdown

let btnDrop = document.querySelectorAll('.menu .item')

const adicionarEventosDrop = () => {
	btnDrop.forEach((item, i) => {
		item.addEventListener('mouseenter', ()=> subMenu[i].classList.add('drop'))

		item.addEventListener('mouseleave', ()=> subMenu[i].classList.remove('drop'))
	})
}

//DropDown menu

const tamanhoTela = function() {
    let tamanhoTela = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
    if (tamanhoTela >= 998) {

    	//Dropdown menu

        adicionarEventosDrop()

        //Evento scroll

		function ativarScroll(){
			document.addEventListener('scroll', debounce(function(){
				animarElemento()
				btnIrTopo()
		}, 100))

			animarElemento()
			btnIrTopo()
		}

		ativarScroll()

		//Retirando transição do menu

		menu.classList.add('no-transition')

    } else {
    	menu.classList.remove('no-transition')
    }
}

//Entrada suave elementos

const elementosEntrada = document.querySelectorAll('[data-animacao]')

const animarElemento = ()=> {
	elementosEntrada.forEach(item => {
		const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);

		if(windowTop > item.offsetTop) {
			item.classList.add('animar')
		}
	})
}

//Botão ir ao topo

const btnAoTopo = document.querySelector('.btn-aoTopo')

const btnIrTopo = ()=> {
	let posicao = window.pageYOffset
	if(posicao > 100) {
		btnAoTopo.classList.add('visible')
	} else {
		btnAoTopo.classList.remove('visible')
	}
}

btnAoTopo.addEventListener('click', ()=> $('html, body').animate({scrollTop:0}, 'slow'))

//Ativando as funções

tamanhoTela()

window.addEventListener("resize",debounce(tamanhoTela, 100))