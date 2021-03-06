const navButton = document.querySelector('.nav-button');
const navOpen = document.querySelector('.nav-opened');

const t1 = new TimelineLite({paused: true, reversed: true});

t1.to('.cover', 1, {
    width : '60%',
    ease :  Power2.easeOut
})
.to('nav',1,{
    height: '100%',
    ease: Power2.easeOut
}, '-=0.5')
.fromTo('.nav-opened', 0.5 ,{
    opacity : 0,
    x : 50,
    ease: Power2.easeOut
},{
    opacity : 1,
    x : 0,
    onComplete : function(){
        navOpen.style.pointerEvents = 'auto';
        console.log('done');
    }
});

navButton.addEventListener('click', () => {
toggleTween(t1);
});


function toggleTween(tween){
    tween.reversed() ? tween.play() : tween.reverse();
}