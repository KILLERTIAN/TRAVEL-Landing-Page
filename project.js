const menuToggle = document.querySelector('.toggle');
const section =document.querySelector('.section');

menuToggle.addEventListener('click',() => {
    menuToggle.classList.toggle('active');
    section.classList.toggle('active');
})