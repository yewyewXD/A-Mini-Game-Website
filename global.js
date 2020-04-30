//GLOBAL SETTINGS
const overlay = document.getElementById('overlay');
const closebtn = document.getElementById('closebtn');
const overlist = document.getElementById('overlay-list');
const openbtn = document.getElementById('openbtn');
const tags = document.querySelectorAll('a');

//menu drop down
closebtn.addEventListener('click', () => {
  overlay.style.height = "0px";
  closebtn.style.display = 'none';
  overlist.style.display = 'none';
})

openbtn.addEventListener('click', () => {
  overlay.style.height = '200px';
  setTimeout(() => {
    closebtn.style.display = 'inline';
    overlist.style.display = 'block';
  }, 300)
});

//click and href
branding = document.getElementById('branding');
branding.addEventListener('click', () => {
  location.href = 'home.html';
})
