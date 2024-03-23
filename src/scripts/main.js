document.addEventListener('DOMContentLoaded', function() {
  const heroHeight = document.querySelector('.hero').clientHeight


  window.addEventListener('scroll', function() {
    const actualPosition = window.scrollY
  
    if (actualPosition > heroHeight-100) {
      hideHeaderElements()
    } else {
      showHeaderElements()
    }
  })
  
})

function hideHeaderElements() {
  const header = document.querySelector('header')
  header.classList.add('header--is-hidden')
}

function showHeaderElements() {
  const header = document.querySelector('header')
  header.classList.remove('header--is-hidden')
}
