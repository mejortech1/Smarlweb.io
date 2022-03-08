const firstUl = document.getElementById('navlinks');
const secondUl = document.getElementById('ul2');
const menu = document.getElementById('menu');
const  closse = document.getElementById('close')

menu.onclick = () =>{
    firstUl.style.display = 'flex'
    closse.style.display = 'block'
    menu.style.display = 'none'
}

closse.onclick = () =>{
    firstUl.style.display = 'none'
    closse.style.display = 'none'
    menu.style.display = 'block'
}