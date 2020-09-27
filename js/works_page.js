const slider_wrapper = document.querySelector('.pages__Works_slider')
const slider__item = document.querySelectorAll('.slider__item')
const arrowPrev = document.querySelector('.slider__arrow_left')
const arrowNext = document.querySelector('.slider__arrow_rigth')


arrowNext.addEventListener('click', (evt) => {
   slider__item.forEach(element => {
      onNext(element)
   })
})
arrowPrev.addEventListener('click', (evt) => {
   slider__item.forEach(element => {
      onPrev(element)
   })
})


function onNext(element) {
   let className = element.classList[1]

   switch (className) {
      case 'active':
         element.classList.remove('active')
         element.classList.add('prev')
         break;
      case 'prev':
         element.classList.remove('prev')
         element.classList.add('hidden')   
         break;
      case 'next':
         element.classList.remove('next')
         element.classList.add('active')
         break;
      case 'hidden':
         element.classList.remove('hidden')
         element.classList.add('next')
         break;
      default:
         break;
   }

}

function onPrev(element) {
   let className = element.classList[1]

   switch (className) {
      case 'active':
         element.classList.remove('active')
         element.classList.add('next')
         break;
      case 'prev':
         element.classList.remove('prev')
         element.classList.add('active')
         break;
      case 'next':
         element.classList.remove('next')
         element.classList.add('hidden')
         break;
      case 'hidden':
         element.classList.remove('hidden')
         element.classList.add('prev')
         break;
      default:
         break;
   }

}






