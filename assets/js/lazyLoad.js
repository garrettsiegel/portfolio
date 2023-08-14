class LazyLoad {
  constructor() {
    this.lazyLoad()
  }
  
  lazyLoad = () => {
    const images = document.querySelectorAll('img[data-src]')

    const config = {
      rootMargin: '0px 0px 50% 0px',
    }

    const observer = new IntersectionObserver((entries, self) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target
          img.src = img.dataset.src
          delete img.dataset.src
          self.unobserve(img)
        }
      })}, config)

    images.forEach(image => {
      observer.observe(image)
    })
  }
}

export default LazyLoad