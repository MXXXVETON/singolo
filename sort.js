window.onload = function() {
  // TAGS
  addTagsClickHandler()

  // PORTFOLIO TABS
  rendorPartfolioItem()
}

// potfolio, portfolio TAGS, portfolio item...
const addTagsClickHandler = () => {
  document.querySelector('.portfolio__tags-menu').addEventListener('click', (e) => {
    if( e.target.classList.contains('tag') ) {
      let clickedTag = e.target
      removeSelectedTags()
      addClickedTag(clickedTag)
      rendorRandomPartfolio()
    }
  })

// MODAL
  document.querySelector('.submit-btn').addEventListener('click', (e) => {
    e.preventDefault()
    onSubmitGetValue()
  })
}

const removeSelectedTags = () => {
  let tags = document.querySelectorAll('.portfolio__tags-menu .tag');
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

  const counter = 0
 
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

const rendorRandomPartfolio = () => {
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

// form , modal window
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

  modal.insertAdjacentHTML("beforeend", `<p class="modal__aception">Письмо отправлено</p> <br>`)
  modal.insertAdjacentHTML("beforeend", `<p class="modal__mail-title">Тема: ${formDataSubject}</p>`)
  modal.insertAdjacentHTML("beforeend", `<p class="modal__mail-text">Описание: ${formDataText}</p>`)
  modal.insertAdjacentHTML("beforeend", `<button id="modal__btn">OK</button>`)


  document.querySelector('.overlay').style.visibility = 'visible'
  

  document.querySelector('#modal__btn').addEventListener('click', () => {
    document.querySelector('.overlay').style.visibility = 'hidden'
    document.body.style.overflow = 'auto'
  })

  document.body.style.overflow = 'hidden'
}
