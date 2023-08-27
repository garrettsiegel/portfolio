import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
gsap.registerPlugin(ScrollToPlugin)

class IntroButton {
  constructor() {
    this.introButton = document.querySelector('.intro__button')
    this.introButtonHandler()
  }
  
  introButtonHandler() {
    this.introButton.addEventListener('click', function() {
      gsap.to(window, { duration: 1, scrollTo: { y: '.about' }, ease: 'power2.out' })
    })
  }
  
}

export default IntroButton