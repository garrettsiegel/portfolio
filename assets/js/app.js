class App {
	constructor() {
		this.init();
	}

	init() {
		console.log("Hello from app.js");
		// this.scrollyTelly();
	}

	scrollyTelly = () => {
		const details = gsap.utils.toArray(".desktopContentSection:not(:first-child)");

		const photos = gsap.utils.toArray(".desktopPhoto:not(:first-child)");

		gsap.set(photos, {autoAlpha: 0});

		const animation = gsap.to(photos, {autoAlpha: 1, stagger: 0.5});

		ScrollTrigger.create({
			trigger:".gallery",
			strart:"top top",
			end:"bottom bottom",
			pin:".right",
			animation:animation,
			scrub:true,
		})

		details.forEach((detail, i) => {
			ScrollTrigger.create({
				trigger:detail,
				start:"center top",
				end:"center center",
				animation: gsap.to(photos[i], {autoAlpha: 1}),
				scrub:true,
				markers: true
			})
		})
	};

}

const app = new App();