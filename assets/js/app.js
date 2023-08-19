import ToggleNav from "./toggleNav"
import IntroButton from "./introButton"
import AnimationSkills from "./animationSkills"

import LazyLoad from "./lazyLoad"
import gridScroll from "./gridScroll"

class App {
	constructor() {
		new ToggleNav()
		new IntroButton()
    new AnimationSkills()

		new LazyLoad()
		new gridScroll()
	}

}

const app = new App()