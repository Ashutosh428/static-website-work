const burger=document.querySelector('.burger')
const navbar=document.querySelector('.nav')
const head=document.querySelector('.head')
const mid=document.querySelector('.middle')
burger.addEventListener('click',()=>{
 navbar.classList.toggle('v-class')
head.classList.toggle('h-nav')
mid.classList.toggle('v-class')
})

 const abc=document.querySelector(".box1");
const para=document.querySelector(".p1");

 
 
abc.addEventListener('click',()=>{
para.classList.toggle('g-class');

})

