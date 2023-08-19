class HideNav {
  constructor() {
    this.prevScrollPosition = 0;
    this.nav = document.querySelector('.nav');
    this.nav.classList.add('is-visible');
    this.scrollTimeout = null;
    this.stickyNav();
  }

  handleScrollUp = () => {
    
    

    this.nav.classList.remove('is-hidden') && this.nav.classList.add('is-visible')
 
    // console.log(this.scrollTimeout)
    // clears timeout if user scrolls up again before 150ms
    // clearTimeout(this.scrollTimeout);
    // this.scrollTimeout = setTimeout(this.handleScrollStop, 150);
  }

  handleScrollDown = () => {
    this.nav.classList.remove('is-visible');
    this.nav.classList.add('is-hidden');
    clearTimeout(this.scrollTimeout);
  }

  // handleScrollStop = () => {
  // }

  onScroll = () => {
    const scrollTop = window.scrollY;
  
    if (scrollTop > this.prevScrollPosition && scrollTop > 0) {
      this.handleScrollDown();
    } else {
      this.handleScrollUp();
    }
  
    this.prevScrollPosition = scrollTop;
  };
  

  stickyNav = () => {
    window.addEventListener('scroll', this.onScroll);
  };
}

export default HideNav;
