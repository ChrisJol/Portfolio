import { gsap } from "gsap"

let setVh = () => {
    let vh = window.innerHeight
    document.documentElement.style.setProperty('--vh', `${vh}px`)
}

let bloom = () => {
    let offset = ( window.innerHeight - $('#contact').height() ) / 2

    let bloom = () => {
        gsap.timeline({ defaults: {opacity: .5, scale: 2, duration: 4, ease: "power4.inOut"}})
            .to('.one', { xPercent: -100 }, 0)
            .to('.two', { xPercent: -70, yPercent: -70 }, 0)
            .to('.three', { yPercent: -100 }, 0)
            .to('.four', { xPercent: 70, yPercent: -70 }, 0)
            .to('.five', { xPercent: 100 }, 0)
            .to('.six', { xPercent: 70, yPercent: 70 }, 0)
            .to('.seven', { yPercent: 100 }, 0)
            .to('.eight', { xPercent: -70, yPercent: 70 }, 0)
    }

    gsap.timeline({defaults: {duration: 4, ease: "power4.inOut"}})
    .from('.view__splash--letter', {
        opacity: 0,
        y: "random(-100, 100)",
        stagger: {
            amount: 1,
            from: "center"
        }
    }, 0)
    .add(bloom(), 0)
}

module.exports = {
    setVh,
    bloom
}
