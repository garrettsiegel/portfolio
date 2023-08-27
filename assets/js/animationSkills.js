import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

class AnimationSkills {
  constructor() {
    this.headline = document.querySelector('.current-tech__headline')
    this.webdevSkills = document.querySelector('.current-tech__skills')
    this.skillsArray = Array.from(document.querySelectorAll('.current-tech__skill'))
    this.skillsAnimation()
  }

  skillsAnimation() {
    this.skillsArray.sort(() => Math.random() - 0.2)
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: this.webdevSkills,
        start: 'top 80%',
        end: 'bottom 75%',
        scrub: 1,
        // markers: true
      }
    })
    tl.from(this.headline, { opacity: 0, y: 20 })
    this.skillsArray.forEach( skill => tl.from(skill, { opacity: 0, scale: 0.75 }, '-=0.25') )
  }
}

export default AnimationSkills