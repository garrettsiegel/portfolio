import IntroButton from "./introButton"
import AnimationSkills from "./animationSkills"
import AnimationProjects from "./animationProjects"
import Modal from "./modal"
import LazyLoad from "./lazyLoad"

class App {
	constructor() {
		new IntroButton()
    new AnimationSkills()
		new AnimationProjects()
		new Modal()
		new LazyLoad()
	}

}

const app = new App()