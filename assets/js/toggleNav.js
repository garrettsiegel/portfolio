class ToggleNav {
  constructor() {
    this.navScroll()
  }

  navScroll() {
    let timeoutId = null
    const nav = document.querySelector('.nav')
    let lastScrollY = window.scrollY

    window.addEventListener('scroll', () => {
      if (timeoutId !== null) {
        clearTimeout(timeoutId)
      }
      timeoutId = setTimeout(() => {
        if (window.scrollY > lastScrollY) {
          nav.classList.add('is-hidden')
          console.log('down')
        } else {
          nav.classList.remove('is-hidden')
          console.log('up')
        }
        lastScrollY = window.scrollY
      }
      , 100)
    })
  }
}

export default ToggleNav