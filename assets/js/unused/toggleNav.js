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
        } else {
          nav.classList.remove('is-hidden')
        }
        lastScrollY = window.scrollY
      }
      , 50)
    })
  }
}

export default ToggleNav