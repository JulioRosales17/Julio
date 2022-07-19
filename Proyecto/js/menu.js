const hamburguer = document.querySelector('.menu');
const caca = document.querySelector('.menu-navegacion');
// console.log(caca)
// console.log(hamburguer)


hamburguer.addEventListener('click', ()=>{
    caca.classList.toggle("spread")
})
window.addEventListener('click', e=>{
    if(caca.classList.contains('spread') && e.target != caca && e.target != hamburguer){
        caca.classList.toggle("spread")
    }
})