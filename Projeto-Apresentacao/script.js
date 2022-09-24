
var dataAnime = Array.from(document.querySelectorAll('[data-anime]'))
console.log(dataAnime);  


function animaScrool(){

var alturaTela = window.pageYOffset + window.innerHeight * 0.5;

dataAnime.forEach(function(element, position){


    if(alturaTela > element.offsetTop){
        element.classList.add('boxAnimate');
        }else{element.classList.remove('boxAnimate')}    
    });
}

window.addEventListener("scroll", ()=>{
    animaScrool()
})

