import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

class gridScroll {
  constructor() {
    // this.gridScrollWebDev()
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

  gridScrollWebDev = () => {
    const webdevGrid = document.querySelector('.webdev__grid');
    const webdevGridContainer = document.querySelector('.webdev__grid-container');
    const maxScroll = webdevGrid.offsetWidth - webdevGridContainer.offsetWidth;

    gsap.to(webdevGrid, {
      x: -maxScroll,
      scrollTrigger: {
        trigger: webdevGridContainer,
        scrub: 1,

        // start: 'top center',
        end: () => `+=${maxScroll}`, // Make the end dynamic
        pin: webdevGrid, // Pin the wrapper instead
        // markers: true
      }
    });
  }
  
}
export default gridScroll