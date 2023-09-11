import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

class AnimationProjects {
  constructor() {
    this.headline = document.querySelector('.recent-projects h2')
    // this.webdevSkills = document.querySelector('.current-tech__skills')
    this.projectsArray = Array.from(document.querySelectorAll('.recent-projects__project'))
    this.recentProjects = document.querySelector('.recent-projects__container')
    if (!this.isMobileView()) {
      this.projectsAnimation()
    }
    
  }

  isMobileView() {
    return window.innerWidth < 768
  }

  projectsAnimation() {
    this.projectsArray.sort(() => Math.random() - 0.2)
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: this.recentProjects,
        start: 'top 80%',
        end: 'bottom-=200px 80%',
        scrub: 1,
        // markers: true
      }
    })
    tl.from(this.headline, { opacity: 0, y: 20 })
    this.projectsArray.forEach( project => tl.from(project, { opacity: 0, y: 10 }, '-=0.25') )
  }
}

export default AnimationProjects