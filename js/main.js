console.log('yes');

// Funcionalidad de desplazamiento
const flechaArriba =document.querySelector('#desplazarse-hacia-arriba');

flechaArriba.addEventListener('click',()=>{
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    }
    )
})



//Menu hamburguesa

const hamb = document.querySelector('#menu-hamburguesa');
const navElem = document.querySelector('nav ul');

console.log(navElem)

hamb.addEventListener('click',()=>{
    navElem.classList.toggle("show");
})


const navLinks = document.querySelectorAll('.nav-link');


navLinks.forEach(link=>{
    link.addEventListener('click',()=>{
        navElem.classList.remove('show');
    })
})