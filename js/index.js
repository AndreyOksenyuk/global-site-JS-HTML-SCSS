let isOpenMenu = false;
const btn__burger = document.querySelector('.btn__burger_wrapper')
const navLinks = document.querySelectorAll('[data-navLink]')
const btn = document.querySelector('[data-hireUs]')

changingPageImageInTheMenu()
toggleActiveMenu(btn__burger)
addActiveClassDots()


//btn "HIRE US" redirect to Page "Hire us"
btn.addEventListener('click', (e) => {
   const className = btn.getAttribute('data-hireUs')

   toggleActiveMenu(btn, 'linkMenu')
   removeActiveClassPage()
   addActiveClassPage(className)
   addActiveClassDots(className)
})


navLinks.forEach(link => {
   toggleActiveMenu(link)
});

//click on links in the menu
navLinks.forEach(link => {

   link.addEventListener('click', () => {
      const className = link.getAttribute('data-navLink')

      toggleActiveMenu(link, 'linkMenu')
      removeActiveClassPage()
      addActiveClassPage(className)
      addActiveClassDots(className)
   })
});


function changingPageImageInTheMenu() {
   const menuImg = document.querySelector('.menu__viewPage_img')
   const navLink = document.querySelectorAll('[data-pageImg]')

   navLink.forEach(element => {
      element.addEventListener('mouseenter', (e) => {
         const url = e.target.getAttribute('data-pageImg')
         menuImg.setAttribute('src', url)
      })
   })
}


function toggleActiveMenu(elementOnClick, key = null) {
   const btn = document.querySelector('.btn__burger')
   const menu = document.querySelector('.menu__wrapper').classList

   if (key === "linkMenu") {
      btn.classList.remove('active')
      isOpenMenu = false
      isOpenMenu ? menu.add('active') : menu.remove('active')
   }
   else {
      elementOnClick.addEventListener('click', () => {
         btn.classList.toggle('active')
         isOpenMenu = !isOpenMenu
         isOpenMenu ? menu.add('active') : menu.remove('active')
      })
   }
}


function addActiveClassDots(attr) {
   const circle = document.querySelectorAll('.circle__click')

   circle.forEach(element => {
      const parent = element.parentElement
      const className = element.getAttribute('data-className')

      function toggleClassActiveDotsNavigations() {
         circle.forEach(el => {
            el.parentElement.classList.remove('active')
         })
         parent.classList.add('active')
      }


      if (className === attr) {
         toggleClassActiveDotsNavigations()
      }

      element.addEventListener('click', () => {
         removeActiveClassPage()

         toggleClassActiveDotsNavigations()

         addActiveClassPage(className)
      })
   })
}


function addActiveClassPage(className) {
   const element = document.querySelector(`.${className}`)
   element.classList.remove('quit')
   element.classList.add('active')
}

function removeActiveClassPage() {
   const pages = document.querySelectorAll('.page')
   pages.forEach(e => {
      e.classList.remove('active')
      e.classList.add('quit')
   })
}







