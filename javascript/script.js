let controller = new ScrollMagic.Controller()

//project page tween and scroll scene
let projectsTween = gsap.from('.view__projects--img', { x: 100, opacity: 0})
let projectScene = new ScrollMagic.Scene({
    triggerElement: '.view__projects',
    duration: "50%"
})
.setTween(projectsTween)
// .addIndicators()

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
    projectScene,
    skillScene
])

let navDots = document.querySelectorAll(".nav__dot")

navDots.forEach( dot => {
    dot.addEventListener("click", function(event){
        event.preventDefault()
        let location = `${event.target.hash}`

        gsap.to(window, {
            duration: 1.3,
            scrollTo: location,
            ease: "expo.out"
        })
    })
})

let animateDot = (selector) => {
    let selected = this.document.querySelector(".selected")

    selected.classList.remove("hover-effect")
    selected.classList.remove("selected")

    let dot = document.querySelector(selector)

    dot.classList.add("selected")
    dot.classList.add("hover-effect")

    setTimeout( function(){
        dot.classList.remove("hover-effect")
    }, 3000 )
}

let setScrollPosition = () => {
    let skills = document.querySelector(".view__skills").offsetTop
    let contact = document.querySelector(".view__contact").offsetTop
    let projects = document.querySelector(".view__projects").offsetTop
    let pageYOffset = this.window.pageYOffset + (this.window.innerHeight / 2)

    if( pageYOffset >= projects && pageYOffset < skills ){
        animateDot(".projects")
    }
    else if(pageYOffset >= skills && pageYOffset < contact){
        animateDot(".skills")
    }
    else if(pageYOffset >= contact){
        animateDot(".contact")
    }
    else{
        animateDot(".splash")
    }
}

setScrollPosition()

window.addEventListener("scroll", function(){
    setScrollPosition()
})


