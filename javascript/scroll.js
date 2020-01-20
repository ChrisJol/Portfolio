let navDots = document.querySelectorAll(".nav__dot")

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

let links = document.querySelectorAll(".link")
links.forEach( link =>
    link.addEventListener('click', (event => {
        event.preventDefault()
            let location = `${event.target.hash}`
            let offset = ( window.innerHeight - $(location).height() ) / 2

            gsap.to(window, {
                duration: 1.3,
                scrollTo: { y: location, offsetY: offset},
                ease: "expo.out"
            })
    }))
)

function animateDot(selector) {
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

function setScrollPosition(){
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

setScrollPosition()

window.addEventListener("scroll", function(){
    setScrollPosition()
})