import IntroButton from "./introButton"
import AnimationSkills from "./animationSkills"
import Modal from "./modal"
import LazyLoad from "./lazyLoad"

import Car from "./newClass"

class App {
	constructor() {
		new IntroButton()
    new AnimationSkills()
		new Modal()
		new LazyLoad()

		new Car()
	}

}

const app = new App()