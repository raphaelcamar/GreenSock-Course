const sliderItems = document.querySelectorAll('.slider__item');
const btnNext = document.querySelector('.slider__arrows--right');
const btnPrev = document.querySelector('.slider__arrows--left');



const texts = sliderItems[0].querySelectorAll('p')

const slider = {

    currentItem : 0,

    init : () =>{
        slider.in(slider.currentItem);
    },
    
    in : (index) =>{
        const timeline = new TimelineMax();
        const item = sliderItems[index];

        TweenMax.set(item, {
            scale : .9
        });
        TweenMax.set(item, {
            left : '-100vw'
        });
        timeline.to(item, .5, {
            left : 0,
            delay : 1
        })
        .to(item, .5, {
            scale : 1,
        })
        .staggerFrom(texts, .5, {
            y : 300,
            autoAlpha : 0,
            ease : Back.easeOut
        }, 0.2)
    },
    out : (index, nextIndex) =>{
        const timeline = new TimelineMax();
        const item = sliderItems[index];
        timeline.staggerTo(texts, .5,{
            y : 300,
            autoAlpha : 0, 
            ease : Back.easeIn
        }, '-0.5')
        .to(item, .5, {
            scale : .9
        })
        .to(item, .5, {
            left : .9
        })
        .to(item, .5 ,{
            left : '100vw'
        })
        .call(slider.in, [nextIndex], this, '-=1.5')
        .set(texts, {
            clearProps : 'all'
        })
    },
    next : () =>{
        const next = slider.currentItem !== sliderItems.length - 1 ? slider.currentItem + 1 : 0;
        slider.out(slider.currentItem, next)
        slider.currentItem = next
    },

    prev : () =>{
        const prev = slider.currentItem > 0  ? slider.currentItem -1 : slider.currentItem + 1 ;
        slider.out(slider.currentItem, prev)
        slider.currentItem = prev
    }
}

btnNext.addEventListener('click', slider.next)
btnPrev.addEventListener('click', slider.prev)
slider.init();
