import HideNav from "./hideNav"
import LazyLoad from "./lazyLoad"
import gridScroll from "./gridScroll"
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)

class App {
	constructor() {
		this.downButton = document.querySelector('.intro__button')
		new HideNav()
		new LazyLoad()
		this.events()
		this.skillsAnimation()
		new gridScroll()
	}

	events = () => {
    this.downButton.addEventListener('click', this.downButtonHandler)
  }

	downButtonHandler = () => {
    gsap.to(window, { duration: 1, scrollTo: { y: '.about' }, ease: 'power2.out' })
  }

	skillsAnimation = () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.webdev__skills',
        start: 'top 80%',
        end: 'bottom 55%',
        scrub: 1,
        // markers: true
      }
    });
    tl.from('.webdev__headline', { opacity: 0, y: 20 });

    const skillsArray = Array.from(document.querySelectorAll('.webdev__skill'));
    skillsArray.sort(() => Math.random() - 0.2);
    skillsArray.forEach((skill) => {
      tl.from(skill, { opacity: 0, scale: 0.75 }, '-=0.25');
    });
  };

}

const app = new App()