window.onload = function() {
  // TAGS
  addTagsClickHandler()

  // PORTFOLIO TABS
  rendorPartfolioItem()
}

const addTagsClickHandler = () => {
  document.querySelector('.portfolio__tags-menu').addEventListener('click', (e) => {
    if( e.target.classList.contains('tag') ) {
      let clickedTag = e.target
      removeSelectedTags()
      addClickedTag(clickedTag)
      
      rendorRandomPartfolio()
    }
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

