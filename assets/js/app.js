import IntroButton from "./introButton"
import AnimationSkills from "./animationSkills"
import Modal from "./modal"
import LazyLoad from "./lazyLoad"

class App {
	constructor() {
		new IntroButton()
    new AnimationSkills()
		new Modal()
		new LazyLoad()
	}

}

const app = new App()