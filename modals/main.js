const modal = document.querySelector('.modal');
const modalBox = document.querySelector('.modal__box');

const btn = document.getElementById('fadeIn');
const btnClose = document.querySelector('.modal__close');
const btnFadeInScale = document.querySelector('#fadeInScale');
const btnSlideIn = document.querySelector('#slideIn');
const btnFullScreen = document.querySelector('#fullScreen');
const modalHeader = document.querySelector('.modal__header');

btn.addEventListener('click', fadeIn);
btnClose.addEventListener('click', close);
btnFadeInScale.addEventListener('click', fadeInScale);
btnSlideIn.addEventListener('click', slideIn)
btnFullScreen.addEventListener('click', fullScreen)

function fadeIn(){
    TweenMax.to(modal, .5, {
        autoAlpha : 1
    });
}
function close(){
    TweenMax.to(modal, .5, {
        autoAlpha : 0
    });
}
function fadeInScale(){
    TweenMax.set(modalBox, {
        scale : 0
    });

    TweenMax.to(modal, .5, {
        autoAlpha : 1
    });
    TweenMax.to(modalBox, .3, {
        scale : 1,
        // delay : .5,
        ease : Elastic.easeOut
    });
}
function slideIn(){
    TweenMax.to(modal, .5, {
        autoAlpha : 1
    });
    TweenMax.from(modalBox, .5, {
        autoAlpha : 0,
        top : -300
    });
}

