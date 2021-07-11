const scrollbutton = document.querySelector('.scrollbutton')
scrollbutton.addEventListener('click',()=> {
    document.body.scrollTop=0
    document.documentElement.scrollTop=0
})
const timeline = gsap.timeline({default:{duration:0.5,opacity:0,ease:'Bounce.easeOut'}})
timeline.from('body',{
       opacity:0
}).from('.navbar',{
    y:'-100%'
}).from('.navbar .navlinks', {
    opacity: 0,
    stagger: 0.3,
    duration:0.7
}).from('.hero .heroimg',{
    opacity:0,
    y:'-100%'
}).from('.hero .herotitle',{
    opacity:0,
    y:'-100'
}).from('.hero .herobtns',{
    opacity:0,
    y:'-100%'
})
const tl = gsap.timeline({ defaults: { ease: 'back' } })

tl.from('.illus', {
    opacity: 0,
    duration: 3,
    delay: 1
}).to('#Rectangle-1', {
    x: '200px',
    repeat: -1,
    yoyo: true,
    duration: .8
}, '-=5').to('#Rectangle-2', {
    x: '150px',
    repeat: -1,
    yoyo: true,
    duration: .5
}, '-=5').to('#Rectangle-3', {
    x: '50px',
    repeat: -1,
    yoyo: true,
    duration: .6
}, '-=5').to('#Rectangle-4', {
    x: '100px',
    repeat: -1,
    yoyo: true,
    duration: .6
}, '-=5')

