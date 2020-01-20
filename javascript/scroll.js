let navDots = document.querySelectorAll(".nav__dot")
let links = document.querySelectorAll(".link")
let skills, contact, projects, pageYOffset;

let addScrollListener = (element) => {
    element.addEventListener("click", function(event){
        event.preventDefault()
        let location = `${event.target.hash}`
        let offset = ( window.innerHeight - $(location).height() ) / 2

        gsap.to(window, {
            duration: 1.3,
            scrollTo: { y: location, offsetY: offset},
            ease: "expo.out"
        })
    })
}

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

let setScrollPosition = () => {
    skills = document.querySelector(".view__skills").offsetTop
    contact = document.querySelector(".view__contact").offsetTop
    projects = document.querySelector(".view__projects").offsetTop
    pageYOffset = this.window.pageYOffset + (this.window.innerHeight / 2)

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

setScrollPosition()
navDots.forEach( dot => { addScrollListener(dot) })
links.forEach( link => addScrollListener(link) )
window.addEventListener("scroll", () => { setScrollPosition() })