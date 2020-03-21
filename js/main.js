// elements
const page = document.getElementsByClassName('page')[0]
const menu_toggle = document.getElementsByClassName('menu_toggle')[0]
const content = document.getElementsByClassName('content')[0]

menu_toggle.addEventListener('click', function(){
    page.classList.toggle("shazam");
});
content.addEventListener('click', function(){
    page.classList.remove('shazam')
});
