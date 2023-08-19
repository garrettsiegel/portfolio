import ToggleNav from "./toggleNav"
import IntroButton from "./introButton"
import LazyLoad from "./lazyLoad"
import gridScroll from "./gridScroll"

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

class App {
	constructor() {
		new ToggleNav()
		new IntroButton()

		new LazyLoad()
		this.skillsAnimation()
		new gridScroll()
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