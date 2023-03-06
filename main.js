const toggleBtn = document.querySelector(".nav_togglBtn");
const menu = document.querySelector(".nav_menu");
const icon = document.querySelector(".nav_icon")

toggleBtn.addEventListener('click', (event)=>{
    event.preventDefault()
    menu.classList.toggle('active');
    icon.classList.toggle('active');
})