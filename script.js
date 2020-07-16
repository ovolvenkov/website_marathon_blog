'use strict'

function brightnessImage(){
	document.addEventListener('mouseover', e => {
					if (e.target.matches('a>img')){
						e.target.style.filter = 'brightness(50%)';
					}
				})

	document.addEventListener('mouseout', (e)=>{
					if(e.target.matches('a>img')){
						e.target.style.filter = 'brightness(100%)';
					}
				})
}

brightnessImage()