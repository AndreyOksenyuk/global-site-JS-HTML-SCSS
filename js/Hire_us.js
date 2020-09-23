const input = document.querySelectorAll('.input__wrapper_input')

input.forEach(element => {
   element.addEventListener('change', (event) => {
      let value = element.value

      if (value.length > 0) {
         element.classList.add('notEmpty')
      } else {
         element.classList.remove('notEmpty')
      }
   })
})
