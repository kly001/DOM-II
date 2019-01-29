// Your code goes here
const headLogo = document.querySelector('.logo-heading');
headLogo.addEventListener('mouseover', e =>{
    alert('This is the FunBus Heading')
})

const letsGo= document.querySelector('.content-section h2');
letsGo.addEventListener('dblclick', e => {
    if(letsGo.style.backgroundColor='magenta');
})

const funbusImage=document.querySelector('.intro img');
funbusImage.addEventListener('mouseenter',e =>{
    funbusImage.style.width='500px';
})

 const welcome = document.querySelector('.intro h2');
 welcome.addEventListener('click', e => {
     welcome.style.fontSize ='10rem';
 })


const adventure = document.querySelector('.text-content p');
adventure.addEventListener('mouseleave', e => {
    adventure.style.color = 'purple';
    adventure.style.fontWeight = 'bold';
})
