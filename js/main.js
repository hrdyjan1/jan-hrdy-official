// elements
const page = document.getElementsByClassName('page')[0];
const menu_toggle = document.getElementsByClassName('menu_toggle')[0];
const content = document.getElementsByClassName('content')[0];
const inputs = document.querySelectorAll('.input');

menu_toggle.addEventListener('click', function() {
  page.classList.toggle('shazam');
});
content.addEventListener('click', function() {
  page.classList.remove('shazam');
});

function addcl() {
  let parent = this.parentNode.parentNode;
  parent.classList.add('focus');
}

function remcl() {
  let parent = this.parentNode.parentNode;
  if (this.value == '') {
    parent.classList.remove('focus');
  }
}

inputs.forEach(input => {
  input.addEventListener('focus', addcl);
  input.addEventListener('blur', remcl);
});
