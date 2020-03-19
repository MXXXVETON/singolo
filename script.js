window.onload = function() {
  // Main menu
  navByScrolling()
  addNavClickHandler()

  // // Courusel
  // addCourusel()

  // TAGS
  addTagsClickHandler()

  // PORTFOLIO rendor content 0
  rendorPartfolioItem()

  addBorderByItem()

}

// Main menu
const addNavClickHandler = () => {
  let menu = document.querySelector('#menu')

  menu.addEventListener('click', (e) => {
    menu.querySelectorAll('li>a').forEach(el => el.classList.remove('active'))
    e.target.classList.add('active')
  })
}

const navByScrolling = () => {
  document.addEventListener('scroll', onScroll)

  function onScroll(e) {
    let currPos = window.scrollY
    let menuSection = document.querySelectorAll('div.main>section')
    let menu = document.querySelectorAll('li a')
  
    menuSection.forEach((item) => {
      if (item.offsetTop <= currPos && (item.offsetTop + item.offsetHeight) > currPos)  {
        menu.forEach((el) => {
          el.classList.remove('active')
          if(item.getAttribute('id') === el.getAttribute('href').substring(1)) {
            el.classList.add('active')
          }
        })
      }
    })
  }
}

// // Courusel


// potfolio, portfolio TAGS, portfolio item...
const addTagsClickHandler = () => {
  document.querySelector('.portfolio__tags-menu').addEventListener('click', (e) => {
    if( e.target.classList.contains('tag') ) {
      let clickedTag = e.target
      removeSelectedTags()
      addClickedTag(clickedTag)
      rendorRandomItem()
    }
  })
}

const removeSelectedTags = () => {
  let tags = document.querySelectorAll('.portfolio__tags-menu .tag')
  tags.forEach(tag => {
    tag.classList.remove('active')
  })
}

const addClickedTag = (clickedTag) => {
  clickedTag.classList.add('active')
}

const rendorPartfolioItem = () => {
  const arrImages =  [
    './asets/portfolio-works/Project.png',
    './asets/portfolio-works/Project-3.png',
    './asets/portfolio-works/Project-10.png',
    './asets/portfolio-works/Project-5.png',
    './asets/portfolio-works/Project-1.png',
    './asets/portfolio-works/Project-4.png',
    './asets/portfolio-works/Project-11.png',
    './asets/portfolio-works/Project-9.png',
    './asets/portfolio-works/Project-2.png',
    './asets/portfolio-works/Project-7.png',
    './asets/portfolio-works/Project-6.png',
    './asets/portfolio-works/Project-8.png'
  ];
 
  function addNewWorkList (arrayWithImagePath) {
    const containerByWorks = document.querySelector('.portfolio__work')

    while(containerByWorks.firstChild) {
      containerByWorks.removeChild(containerByWorks.firstChild);
    }

    arrayWithImagePath.forEach((src) => {
      const div = document.createElement('div')
      const img = document.createElement('img')
      div.className = 'work-item'
      img.src = src
      div.appendChild(img)
      containerByWorks.appendChild(div)
    })
  }

  addNewWorkList(arrImages)
}

const rendorRandomItem = () => {
  const arrImages =  [
    './asets/portfolio-works/Project.png',
    './asets/portfolio-works/Project-3.png',
    './asets/portfolio-works/Project-10.png',
    './asets/portfolio-works/Project-5.png',
    './asets/portfolio-works/Project-1.png',
    './asets/portfolio-works/Project-4.png',
    './asets/portfolio-works/Project-11.png',
    './asets/portfolio-works/Project-9.png',
    './asets/portfolio-works/Project-2.png',
    './asets/portfolio-works/Project-7.png',
    './asets/portfolio-works/Project-6.png',
    './asets/portfolio-works/Project-8.png'
  ];

  let newArr = arrImages.sort(function() {
    return Math.random() - 0.5;
  })

  addNewWorkList(newArr)
} 

const addNewWorkList =  (arrayWithImagePath) => {
  const containerByWorks = document.querySelector('.portfolio__work')

  while(containerByWorks.firstChild) {
    containerByWorks.removeChild(containerByWorks.firstChild);
  }

  arrayWithImagePath.forEach((src) => {
    const div = document.createElement('div')
    const img = document.createElement('img')
    div.className = 'work-item'
    img.src = src
    div.appendChild(img)
    containerByWorks.appendChild(div)
  })
}

const addBorderByItem = ()=>{
  let MENU = document.querySelector('.portfolio__work')

  MENU.addEventListener('click', (e) => {
    MENU.querySelectorAll('img').forEach(el => el.classList.remove('active'))
    e.target.classList.add('active')
  })
}

// Form return MODALwindow
document.querySelector('.submit-btn').addEventListener('click', (e) => {
  e.preventDefault()
  onSubmitGetValue()
})

// Modal content
const onSubmitGetValue = () => {
  let formDataSubject = document.querySelector("#subject").value
  let formDataText = document.querySelector("#describe").value
  let modal = document.querySelector('.modal')

  while(modal.firstChild) {
    modal.removeChild(modal.firstChild);
  }

  if (formDataSubject === '') {
    formDataSubject = 'Без темы'
  } else {formDataSubject}

  if (formDataText === '') {
    formDataText = 'Без описания'
  } else {formDataText}

  modal.insertAdjacentHTML("beforeend", `<p lang="ru-en class="modal__aception">Письмо отправлено</p> <br>`)
  modal.insertAdjacentHTML("beforeend", `<p lang="ru-en" class="modal__mail-title">Тема: ${formDataSubject}</p>`)
  modal.insertAdjacentHTML("beforeend", `<p lang="ru-en class="modal__mail-text">Описание: ${formDataText}</p>`)
  modal.insertAdjacentHTML("beforeend", `<button id="modal__btn">OK</button>`)


  document.querySelector('.overlay').style.visibility = 'visible'
  

  document.querySelector('#modal__btn').addEventListener('click', () => {
    document.querySelector('.overlay').style.visibility = 'hidden'
    document.body.style.overflow = 'auto'
  })

  document.body.style.overflow = 'hidden'
}

// Scroll window
















const carousel = document.querySelector('.carousel');
const slider = document.querySelector('.slider');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
let direction;

next.addEventListener('click', function() {
  direction = -1;
  carousel.style.justifyContent = 'flex-start';
  slider.style.transform = 'translate(-33.3%)';  
});

prev.addEventListener('click', function() {
  if (direction === -1) {
    direction = 1;
    slider.appendChild(slider.firstElementChild);
  }
  carousel.style.justifyContent = 'flex-end';    
  slider.style.transform = 'translate(33.3%)';  
});

slider.addEventListener('transitionend', function() {
  if (direction === 1) {
    slider.prepend(slider.lastElementChild);
  } else {
    slider.appendChild(slider.firstElementChild);
  }
  
  slider.style.transition = 'none';
  slider.style.transform = 'translate(0)';
  setTimeout(() => {
    slider.style.transition = 'all .7s';
  })
}, false);























