const scrollbutton = document.querySelector('.scrollbutton')
scrollbutton.addEventListener('click',()=> {
    document.body.scrollTop=0
    document.documentElement.scrollTop=0
})
const timeline = gsap.timeline({default:{duration:1,opacity:0,ease:'Bounce.easeOut'}})
 timeline.from('body',{
    opacity:0,
    duration:1
 }).from('.navbar',{
     y: "-100%",
     duration:1
 }).from('.mainline .title',{
      y:'50px',
      opacity:0
 }).from('.mainline .text',{
    y:'50px',
    opacity:0
 }).from('.mainline .button',{
    y:'50px',
    opacity:0 
})