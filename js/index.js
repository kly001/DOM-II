// Your code goes here
const headLogo = document.querySelector('.logo-heading');
headLogo.addEventListener('mouseover', e =>{
    alert('This is the FunBus Heading')
})



const letsGo= document.querySelector('.content-section h2');
letsGo.addEventListener('dblclick', e => {
    letsGo.style.backgroundColor = 'magenta';
})

const funbusImage=document.querySelector('.intro img');
funbusImage.addEventListener('mouseenter',e =>{
    funbusImage.style.width="500px";
})