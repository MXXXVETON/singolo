const MENU = document.getElementById('menu');
const MENUPORTFOLIO = document.getElementById('menu-portfolio');


MENU.addEventListener('click', (event)=>{
  MENU.querySelectorAll('li>a').forEach(el => el.classList.remove('active'))

  event.target.classList.add('active')
});

MENUPORTFOLIO.addEventListener('click', (event)=>{
  MENUPORTFOLIO.querySelectorAll('li>a').forEach(el => el.classList.remove('active'))

  event.target.classList.add('active')
});

