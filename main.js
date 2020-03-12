//menu turn-off links or btn
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

// SLIDER
const couruselOffsets = document.querySelector('.corusel-container').offsetWidth;
const coruselLine = document.querySelector('.corusel-slide');
const coruselItem = document.querySelectorAll('.item');

// btn
const BACKARROW = document.querySelector('.arrow-back')
const NEXTARROW =document.querySelector('.arrow-next')
const HOME = document.querySelector('#home')
const HOME_HORIZONTAL = document.querySelector('#home_horizontal')
const BLACKSCREEN = document.querySelector('.blackscreen')
const BLACKSCREEN_H = document.querySelector('.blackscreen_h')
const HOME_BTN = document.querySelector('#home-btn')
const BLACKSCREEN_H2 = document.querySelector('.blackscreen_blue-h')

HOME.addEventListener('click', (e)=> {
  BLACKSCREEN.classList.toggle('active')
})

HOME_HORIZONTAL.addEventListener('click', (e)=> {
  BLACKSCREEN_H.classList.toggle('active')
})

HOME_BTN.addEventListener('click', (e)=> {
  BLACKSCREEN_H2.classList.toggle('active')
})

// counter
let widthArr = [0]; 
let lineWidth = 0; 
for(let i = 0; i < coruselItem.length; i++){
  widthArr.push(coruselItem[i].offsetWidth)
  lineWidth+=coruselItem[i].offsetWidth
} 


coruselLine.style.width = lineWidth+'px'

let offset = 0;
let step = 0;
let ostatok = 0;

NEXTARROW.addEventListener('click', (e) => {
    ostatok = lineWidth-couruselOffsets - (offset + widthArr[step])

    if ( ostatok >= 0 ) {
      offset = offset+widthArr[step]
      coruselLine.style.left = -offset+'px'
    }
    else {
      offset = 0;
      step = 0
    }
    if(step +1 == coruselItem.length){
      step =0
      offset=0
    } else{step ++}
})

BACKARROW.addEventListener('click', (e) => {
  ostatok = lineWidth-couruselOffsets + (offset - widthArr[step])

  if ( ostatok != 0 ) {
    offset = offset+widthArr[step]
    coruselLine.style.left = offset+'px'
    step--
  }
})








