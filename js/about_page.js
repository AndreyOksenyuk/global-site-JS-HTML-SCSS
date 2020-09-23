const scene = document.getElementById('scene')
const cirqle = document.getElementsByClassName('paralax__element--cirqle')[0]
const square = document.getElementsByClassName('paralax__element--square')[0]
const triangle = document.getElementsByClassName('paralax__element--triangle')[0]
const square2 = document.getElementsByClassName('paralax__element--square2')[0]
const pages__About = document.getElementsByClassName('pages__About')[0]


document.documentElement.onclick = () => {

   const isClassActive = pages__About.classList.contains('active')

   if (isClassActive) {
      scene.addEventListener('mousemove', paralaxEvent)
   } else {
      scene.removeEventListener('mousemove', paralaxEvent)
   }

}


function paralaxEvent(event) {
   const Y = event.pageY
   const X = event.pageX

   paralax(X, Y, cirqle, 180, 270, 20)
   paralax(X, Y, square, 420, 270, 80)
   paralax(X, Y, triangle, 70, 166, 50)
   paralax(X, Y, square2, 163, 420, 100)
}


function paralax(x, y, element, top, left, deph) {
   element.style.top = `${top + y / deph}px`
   element.style.left = `${left + x / deph}px`
}

