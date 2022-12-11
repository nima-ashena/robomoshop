
const menu = document.querySelector('.menu');
const menuClose = document.querySelector('.close-icon-con');
const menuSidebar = document.querySelector('.header-top-right');


menu.addEventListener('click', function(){
    menuSidebar.classList.toggle('show')
})

menuClose.addEventListener('click', function(){
    menuSidebar.classList.toggle('show')
})

