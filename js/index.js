// Your code goes here

const navContainer = document.querySelector('.main-navigation');
navContainer.addEventListener('wheel', e => {
    navContainer.style.backgroundColor = 'lightgray';
})

const headLogo = document.querySelector('.logo-heading');
headLogo.addEventListener('mouseover', e =>{
    alert('This is the FunBus Heading')
})

const letsGo= document.querySelector('.content-section h2');
letsGo.addEventListener('dblclick', e => {
    letsGo.style.backgroundColor='magenta';
    letsGo.style.color='white';
    letsGo.style.fontWeight='bold';
})

const funbusImage=document.querySelector('.intro img');
funbusImage.addEventListener('mouseenter',e =>{
    funbusImage.style.width='500px';
})

 const welcome = document.querySelector('.intro h2');
 welcome.addEventListener('click', e => {
     welcome.style.fontSize ='10rem';
 })

const adventurePara = document.querySelector('.text-content p');
adventurePara.addEventListener('mouseleave', e => {
    adventurePara.style.color = 'purple';
    adventurePara.style.fontWeight = 'bold';
})


const destImage = document.querySelector('.content-destination img');
destImage.addEventListener('mousedown', e => {
    destImage.style.transform='rotate(180deg)';
    })



// --------------------------------------------------------------


const destination = document.querySelector('.content-destination h2');
destination.style.border = '3px double green';



const buttons = document.querySelectorAll('.destination .btn')
buttons[0].style.backgroundColor = 'maroon';
buttons[1].style.backgroundColor = 'navy';
buttons[2].style.backgroundColor = 'olive';