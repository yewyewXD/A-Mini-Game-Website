//GLOBAL SETTINGS
const overlay = document.getElementById('overlay')
const closebtn = document.getElementById('closebtn')
const overlist = document.getElementById('overlay-list')
const openbtn = document.getElementById('openbtn')
const tags = document.querySelectorAll('a')
const contactForm = document.getElementById('contact-form')

//menu drop down
closebtn.addEventListener('click', () => {
  overlay.style.height = '0px'
  closebtn.style.display = 'none'
  overlist.style.display = 'none'
})

openbtn.addEventListener('click', () => {
  overlay.style.height = '200px'
  if (overlay.clientWidth >= 768) {
    overlay.style.height = '300px'
  } else if (overlay.clientWidth >= 360) {
    overlay.style.height = '200px'
  }
  setTimeout(() => {
    closebtn.style.display = 'inline'
    overlist.style.display = 'block'
  }, 300)
})

//click and href
branding = document.getElementById('branding')
branding.addEventListener('click', () => {
  location.href = 'home.html'
})

contactForm.addEventListener('submit', (e) => {
  e.preventDefault()
  contactForm.reset?.()
  alert(
    `It's a prank! This website can't submit a form. Please email me at hello@kangwei.dev instead.`
  )
})
