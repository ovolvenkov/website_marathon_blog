'use strict'

let menu = document.querySelector('.menu_ul');
let arrorMenu = menu.nextElementSibling;
console.log(arrorMenu);

menu.addEventListener('click', function (e){

	this.classList.toggle('menu_open');
	

/*	this.style.overflow = 'visible';
	this.style.height = '100%';
	arrorMenu.style.transform = 'rotate(120deg)'*/
})