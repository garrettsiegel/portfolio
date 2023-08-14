import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

class gridScroll {
  constructor() {
    this.gridScroll()
  }

  gridScroll = () => {
    const wrapper = document.querySelector('.design-grid-wrapper');
    const grid = document.querySelector('.design-grid');
    const designSection = document.querySelector('.design');
    const maxScroll = grid.offsetWidth - wrapper.offsetWidth;
  
    gsap.to(grid, {
      x: -maxScroll,
      scrollTrigger: {
        trigger: designSection,
        scrub: true,
        end: () => `+=${maxScroll}`, // Make the end dynamic
        pin: wrapper, // Pin the wrapper instead
        // markers: true
      }
    });
  }
  
}
export default gridScroll