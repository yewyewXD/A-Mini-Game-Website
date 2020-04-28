//global settings
overlay = document.getElementById('overlay');
closebtn = document.getElementById('closebtn');
overlist = document.getElementById('overlay-list');
openbtn = document.getElementById('openbtn');

closebtn.addEventListener('click', () => {
  overlay.style.height = "0px";
  closebtn.style.display = 'none';
  overlist.style.display = 'none';
})

openbtn.addEventListener('click', () => {
  overlay.style.height = '150px';
  setTimeout(() => {
    closebtn.style.display = 'inline';
    overlist.style.display = 'block';
  }, 300)
});

branding = document.getElementById('branding');
branding.addEventListener('click', () => {
  location.href = 'home.html';
})



