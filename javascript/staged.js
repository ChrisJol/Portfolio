let navDots = document.querySelectorAll(".nav__dot")
    controller = new ScrollMagic.Controller()
    scripts = [
        "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.0.4/gsap.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.0.4/ScrollToPlugin.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/animation.gsap.min.js",
        // "https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/debug.addIndicators.min.js",
        // "javascript/scroll.js",
        // "javascript/tween.js",
        // "javascript/carousel.js"
    ]

let loadScripts = (scripts) => {
    var deffered = $.Deferred();

    let loadScript = (i) => {
        if ( i < scripts.length ){
            $.getScript(scripts[i], () => {
                loadScript( i + 1)
            })
        } else {
            deffered.resolve()
        }
    }

    loadScript(0)

    return deffered
}

let setVh = () => {
    let vh = window.innerHeight
    document.documentElement.style.setProperty('--vh', `${vh}px`)
}

//setup
setScrollPosition()
window.addEventListener("scroll", function(){ setScrollPosition() })
setVh()
window.addEventListener('resize', setVh)
loadScripts(scripts)
.done( () => {
    gsap.from('.view__splash--letter', {
        duration: 2,
        ease: "power4.inOut",
        opacity: 0,
        y: "random(-100, 100)",
        stagger: {
            amount: 1,
            from: "center"
        }
    }, 0)
})

//function definitions
let animateDot = (selector) => {
    let selected = document.querySelector(".selected")
    let currentDot = document.querySelector(selector)

    if(currentDot !== selected){
        if(selected !== null){
            selected.classList.remove("hover-effect")
            selected.classList.remove("selected")
        }

        currentDot.classList.add("selected")
        currentDot.classList.add("hover-effect")

        setTimeout( function(){
            currentDot.classList.remove("hover-effect")
        }, 3000 )
    }
}

let setScrollPosition = () =>{
    let skills = document.querySelector(".view__skills").offsetTop
    let contact = document.querySelector(".view__contact").offsetTop
    let projects = document.querySelector(".view__projects").offsetTop
    let pageYOffset = this.window.pageYOffset + (this.window.innerHeight / 2)

    if(pageYOffset >= contact && pageYOffset < projects){
        animateDot(".contact")
    }
    else if( pageYOffset >= projects && pageYOffset < skills ){
        animateDot(".projects")
    }
    else if(pageYOffset >= skills){
        animateDot(".skills")
    }
    else{
        animateDot(".splash")
    }
}

//ABOUT page tween and scroll scene
let aboutTween = gsap.timeline()
    .from('.view__contact--name', {opacity: 0}, 0)
    .from('.view__contact--container', {opacity: 0}, 1)
let aboutScene = new ScrollMagic.Scene({
    triggerElement: '.view__contact',
    duration: "150px"
})
.setTween(aboutTween)

//PROJECTS page tween and scroll scene
let projectsTween = gsap.timeline()
    .from('.view__projects--img', { x: 100, opacity: 0}, 0)
    .from('.view__projects--info', {x: -100, opacity: 0}, 0)
let projectScene = new ScrollMagic.Scene({
    triggerElement: '.view__projects',
    duration: "50%"
})
.setTween(projectsTween)

//SKILLS page tween and scroll scene
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

//add event listeners to navigation
navDots.forEach( dot => {
    dot.addEventListener("click", function(event){
        event.preventDefault()
        let location = `${event.target.hash}`
        let offset = ( window.innerHeight - $(location).height() ) / 2

        gsap.to(window, {
            duration: 1.3,
            scrollTo: { y: location, offsetY: offset},
            ease: "expo.out"
        })
    })
})

//populate data from JSON file
$.getJSON("json/projects.json").done( (projects) => {
    let currentIndex = 0;

    let leftButton = document.querySelector(".carousel__button--left")
    let rightButton = document.querySelector(".carousel__button--right")

    let projectTitle = document.querySelector(".view__projects--title")
    let projectDesc = document.querySelector(".view__projects--desc")
    let projectImg = document.querySelector(".view__projects--img")
    let projectTech = document.querySelector(".view__projects--tech")
    let projectButton = document.querySelector(".view__projects--link")

    leftButton.addEventListener("click", function(){
        currentIndex = next("left")
        animateOut()
    })

    rightButton.addEventListener("click", function(){
        currentIndex = next("right")
        animateOut()
    })

    let preload = () => {
        projects.map( ({ img }) => {
            let image = new Image()
            image.src = img
        })
    }
    preload()

    let animateOut = () => {
        gsap.timeline({onComplete: updateData, defaults: {duration: .3}})
        .to('.view__projects--img', {
            x: 100,
            opacity: 0
        }, 0)
        .to('.view__projects--info-container', {
            opacity: 0,
        }, 0)
    }

    let updateData = () => {
        projectTitle.textContent = projects[currentIndex].title
        projectDesc.textContent = projects[currentIndex].description
        projectTech.textContent = projects[currentIndex].tech
        projectImg.src = projects[currentIndex].img
        projectButton.href = projects[currentIndex].url

        gsap.timeline({defaults: {duration: .3}})
        .to('.view__projects--img', {
            x: 0,
            opacity: 1
        }, 0)
        .to('.view__projects--info-container', {
            opacity: 1,
        }, 0)
    }

    let next = (direction) => {
        if(direction === "left"){
            if(currentIndex <= 0){
                return projects.length - 1
            }else {
                return currentIndex - 1
            }
        }else if(direction === "right") {
            if(currentIndex >= projects.length - 1){
                return 0
            }else {
                return currentIndex + 1
            }
        }
    }
})