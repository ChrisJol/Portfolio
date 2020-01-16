let controller = new ScrollMagic.Controller()

let aboutTween = gsap.timeline()
    .from('.view__contact--name', {opacity: 0})
    .from('.view__contact--container', {opacity: 0})
let aboutScene = new ScrollMagic.Scene({
    triggerElement: '.view__contact',
    duration: "15%"
})
.setTween(aboutTween)

//project page tween and scroll scene
let projectsTween = gsap.timeline()
    .from('.view__projects--img', { x: 100, opacity: 0}, 0)
    .from('.view__projects--info', {x: -100, opacity: 0}, 0)
let projectScene = new ScrollMagic.Scene({
    triggerElement: '.view__projects',
    duration: "50%"
})
.setTween(projectsTween)

//skill page tween and scroll scene
let skillsTween = gsap.timeline()
    .from('.view__skills--header', { opacity: 0 }, 0)
    .from('.view__skills--container', { y: 100, opacity: 0, stagger: .2}, 0)
let skillScene = new ScrollMagic.Scene({
    triggerElement: '.view__skills',
    duration: "50%"
})
.setTween(skillsTween)

controller.addScene([
    aboutScene,
    projectScene,
    skillScene
])


