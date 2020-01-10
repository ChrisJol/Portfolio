let addSpin = () => {
    document.querySelector(".bloom").classList.add("spin")
}

gsap.timeline({defaults: {duration: 4, delay: .1, ease: "power4.inOut"}})
.from('.view__splash--letter', {
    opacity: 0,
    y: "random(-100, 100)",
    stagger: {
        amount: 1,
        from: "center"
    }
}, 0)
.to('.one', { xPercent: -100, scale: 2, opacity: .5 }, 0)
.to('.two', { xPercent: -70, yPercent: -70, scale: 2, opacity: .5 }, 0)
.to('.three', { yPercent: -100, scale: 2, opacity: .5 }, 0)
.to('.four', { xPercent: 70, yPercent: -70, scale: 2, opacity: .5}, 0)
.to('.five', { xPercent: 100, scale: 2, opacity: .5 }, 0)
.to('.six', { xPercent: 70, yPercent: 70, scale: 2, opacity: .5 }, 0)
.to('.seven', { yPercent: 100, scale: 2, opacity: .5 }, 0)
.to('.eight', { xPercent: -70, yPercent: 70, scale: 2, opacity: .5 }, 0)