const burger=document.querySelector('.burger')
const navbar=document.querySelector('.nav')
const head=document.querySelector('.head')
const mid=document.querySelector('.middle')
burger.addEventListener('click',()=>{
 navbar.classList.toggle('v-class')
head.classList.toggle('h-nav')
mid.classList.toggle('v-class')
})



