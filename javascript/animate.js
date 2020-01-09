let addSpin = () => {
    document.querySelector(".bloom").classList.add("spin")
}

gsap.timeline({defaults: {duration: 3, delay: .1, ease: "power4.inOut"}})
.from('.view__splash--letter', {
    opacity: 0,
    y: "random(-100, 100)",
    stagger: {
        amount: 1,
        from: "center"
    }
}, 0)
.from('.bloom', {
    rotation: 90
}, 0)
.from(".pedal", {
    // x: 0,
    // y: 0,
    scale: .5,
    opacity: 0
}, 0)