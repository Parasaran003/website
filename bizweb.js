const scrollbutton = document.querySelector('.scrollbutton')
scrollbutton.addEventListener('click',()=> {
    document.body.scrollTop=0
    document.documentElement.scrollTop=0
})
const timeline = gsap.timeline({default:{duration:0.5,opacity:0,ease:'Bounce.easeOut'}})
 timeline.from('body',{
    opacity:0
 }).from('.navbar',{
     y: "-100%",
 }).from('.logo', {
    opacity: 0
}).from('.navbar .navLinks', {
        opacity: 0,
        stagger: 0.3
 })
   .from('.hero .title', {
        y: '50px',
        opacity: 0
}).from('.hero .text', {
        y: '50px',
        opacity: 0
 }).from('.hero .button', {
        y: '50px',
        opacity: 0
 }).to('.hero .button', {
        y: '50px',
        repeat: -1,
        yoyo: true
 })