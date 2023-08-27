import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

class GraphicScroll {
  constructor() {
    this.accordian()
    this.webAaccordian()
  }

  accordian() {
    const sections = document.querySelectorAll('.design__bottom-section')

    sections.forEach(section => {
      section.addEventListener('click', function() {
        this.classList.toggle('active')
        console.log(this, 'clicked')
      })
    })
  }

  webAaccordian() {
    const sections = document.querySelectorAll('.webdev__bottom-right-section')

    sections.forEach(section => {
      section.addEventListener('click', function() {
        this.classList.toggle('active')
        console.log(this, 'clicked')
      })
    })
  }
  
}
  

  

  

export default GraphicScroll