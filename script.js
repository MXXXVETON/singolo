window.onload = function() {
  // MENU NAV
  addNavClickHandler()

  //CAROUSEL
  carousel()
  tapOnPhone()

  // TAGS
  addTagsClickHandler()

  // PORTFOLIO rendor default content
  rendorPartfolioItem()
  addBorderByItem()

  // form
  formRequest()
}

// Main menu
const addNavClickHandler = () => {
  
  let menu = document.querySelector('#menu')

  menu.addEventListener('click', (e) => {
    menu.querySelectorAll('li>a').forEach((el) => {
      el.classList.remove('active')
    })

    e.target.classList.add('active')

  })

  burgermenu()
}

//  MENU HAMBURGER
const burgermenu = () => {
  let humburgerMenu = document.querySelector("body > div > div:nth-child(1) > div.content-wrapper > header > div.hamburger")
  let logo = document.querySelector("body > div > div:nth-child(1) > div.content-wrapper > header > section")
  let nav = document.querySelector("body > div > div:nth-child(1) > div.content-wrapper > header > nav")
  let overlayMenuNav = document.querySelector(".overlay-nav-menu")


  humburgerMenu.addEventListener('click', (e) => {
    humburgerMenu.classList.toggle('active')
    logo.classList.toggle('active')
    nav.classList.toggle('active')
    overlayMenuNav.classList.toggle('active')
  })
}

// CAROUSEL
const carousel = () => {
  const carousel = document.querySelector('.carousel');
  const slider = document.querySelector('.slider');
  const next = document.querySelector('.next');
  const prev = document.querySelector('.prev');
  let direction;

  next.addEventListener('click', function() {
    direction = -1;
    carousel.style.justifyContent = 'flex-start';
    slider.style.transform = 'translate(-50%)';
  });

  prev.addEventListener('click', function() {
    if (direction === -1) {
      direction = 1;
      slider.appendChild(slider.firstElementChild);
    }
    carousel.style.justifyContent = 'flex-end';    
    slider.style.transform = 'translate(50%)';  
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
}

// PARTFOLIO
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
    './assets/portfolio-works/Project.png',
    './assets/portfolio-works/Project-3.png',
    './assets/portfolio-works/Project-10.png',
    './assets/portfolio-works/Project-5.png',
    './assets/portfolio-works/Project-1.png',
    './assets/portfolio-works/Project-4.png',
    './assets/portfolio-works/Project-11.png',
    './assets/portfolio-works/Project-9.png',
    './assets/portfolio-works/Project-2.png',
    './assets/portfolio-works/Project-7.png',
    './assets/portfolio-works/Project-6.png',
    './assets/portfolio-works/Project-8.png'
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
    './assets/portfolio-works/Project.png',
    './assets/portfolio-works/Project-3.png',
    './assets/portfolio-works/Project-10.png',
    './assets/portfolio-works/Project-5.png',
    './assets/portfolio-works/Project-1.png',
    './assets/portfolio-works/Project-4.png',
    './assets/portfolio-works/Project-11.png',
    './assets/portfolio-works/Project-9.png',
    './assets/portfolio-works/Project-2.png',
    './assets/portfolio-works/Project-7.png',
    './assets/portfolio-works/Project-6.png',
    './assets/portfolio-works/Project-8.png'
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

// Form
const formRequest = () => {
  const form = document.getElementById('getQuote');
  // requaer
  let name = document.getElementById('name');
  let email = document.getElementById('email');

  form.onsubmit = submit;

  function submit(e) {
    e.preventDefault();

    openModalWindow()

    form.reset()
  };
}

const openModalWindow = () => {
  let overlay = document.querySelector('.overlay');
  let modal = document.querySelector('.modal');
  // check on value
  let subject = document.getElementById('subject').value;
  let describe = document.getElementById('describe').value;
  // 

  modal.style.visibility = 'visible';
  overlay.style.visibility = 'visible';

  while(modal.firstChild) {
    modal.removeChild(modal.firstChild);
  }

  if (subject === '') {
    subject = 'No subject'
  }

  if (describe === '') {
    describe = 'No description'
  }

  modal.insertAdjacentHTML("beforeend", `<p class="modal__aception">The letter was sent</p>`);
  modal.insertAdjacentHTML("beforeend", `<p class="modal__mail-title">${subject}</p>`);
  modal.insertAdjacentHTML("beforeend", `<p class="modal__mail-text">${describe}</p>`);
  modal.insertAdjacentHTML("beforeend", `<button id="modal__btn">OK</button>`);

  document.querySelector('#modal__btn').addEventListener('click', () => {
    document.querySelector('.overlay').style.visibility = 'hidden'
    document.querySelector('.modal').style.visibility = 'hidden'
    document.body.style.overflow = 'auto'
  })

  document.querySelector('.overlay').addEventListener('click', () => {
    document.querySelector('.overlay').style.visibility = 'hidden'
    document.querySelector('.modal').style.visibility = 'hidden'
    document.body.style.overflow = 'auto'
  })

  document.body.style.overflow = 'hidden'
};

const tapOnPhone = () => {
  let centralPhone =  document.querySelector("body > div > div.bg-pink.pt-1 > div.container > div.carousel > div > section.slide-2 > div > div.phone-center > img")
  let phoneVertical = document.querySelector("body > div > div.bg-pink.pt-1 > div.container > div.carousel > div > section.slide-1 > div.phone.phone-vert > img")
  let phoneHorizontal = document.querySelector("body > div > div.bg-pink.pt-1 > div.container > div.carousel > div > section.slide-1 > div.phone.phone-horiz > img")
  
  let centralPhoneOffScreen = document.querySelector("body > div > div.bg-pink.pt-1 > div.container > div.carousel > div > section.slide-2 > div > div.phone-center > div")
  let vertPhoneOffScreen = document.querySelector("body > div > div.bg-pink.pt-1 > div.container > div.carousel > div > section.slide-1 > div.phone.phone-vert > div")
  let horizontalPhoneOffScreen = document.querySelector("body > div > div.bg-pink.pt-1 > div.container > div.carousel > div > section.slide-1 > div.phone.phone-horiz > div")


  centralPhone.addEventListener('click', () => {
    centralPhoneOffScreen.classList.toggle("active")
  })

  phoneVertical.addEventListener('click', () => {
    vertPhoneOffScreen.classList.toggle("active")
  })

  phoneHorizontal.addEventListener('click', () => {
    horizontalPhoneOffScreen.classList.toggle("active")
  })
};


// const navByScrolling = () => {
//   document.addEventListener('scroll', onScroll)

//   function onScroll(e) {
//     let currPos = window.scrollY
//     let menuSection = document.querySelectorAll('div.main>section')
//     let menu = document.querySelectorAll('li a')
  
//     menuSection.forEach((item) => {
//       if (item.offsetTop <= currPos && (item.offsetTop + item.offsetHeight) > currPos)  {
//         menu.forEach((el) => {
//           el.classList.remove('active')
//           if(item.getAttribute('id') === el.getAttribute('href').substring(1)) {
//             el.classList.add('active')
//           }
//         })
//       }
//     })
//   }
// }