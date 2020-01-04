let skills = document.querySelector(".view__skills").offsetTop
let contact = document.querySelector(".view__contact").offsetTop
let projects = document.querySelector(".view__projects").offsetTop
let timeout = 1000;

let navDots = document.querySelectorAll(".nav__dot")
navDots.forEach( dot => {
    dot.classList.add("hover-effect")
    setTimeout( _ => {
        dot.classList.remove("hover-effect")
    }, timeout)
})

window.addEventListener("scroll", function(){
    let pageYOffset = this.window.pageYOffset + (this.window.innerHeight / 2)
    let selected = this.document.querySelector(".selected")

    if( pageYOffset >= projects && pageYOffset < skills ){
        selected.classList.remove("hover-effect")
        selected.classList.remove("selected")
        let projectsDot = this.document.querySelector(".projects")

        projectsDot.classList.add("selected")
        projectsDot.classList.add("hover-effect")

        this.setTimeout( _ => {
            projectsDot.classList.remove("hover-effect")
        }, timeout)
    }
    else if(pageYOffset >= skills && pageYOffset < contact){
        selected.classList.remove("hover-effect")
        selected.classList.remove("selected")
        let skillsDot = this.document.querySelector(".skills")

        skillsDot.classList.add("selected")
        skillsDot.classList.add("hover-effect")

        this.setTimeout( _ => {
            skillsDot.classList.remove("hover-effect")
        }, timeout)
    }
    else if(pageYOffset >= contact){
        selected.classList.remove("hover-effect")
        selected.classList.remove("selected")
        let contactDot = this.document.querySelector(".contact")

        contactDot.classList.add("selected")
        contactDot.classList.add("hover-effect")

        this.setTimeout( _ => {
            contactDot.classList.remove("hover-effect")
        }, timeout)
    }
    else{
        selected.classList.remove("hover-effect")
        selected.classList.remove("selected")
        let splashDot = this.document.querySelector(".splash")

        splashDot.classList.add("selected")
        splashDot.classList.add("hover-effect")

        this.setTimeout( _ => {
            splashDot.classList.remove("hover-effect")
        }, timeout)
    }
})


const callback = function(entries){
    entries.forEach(entry => {
        setTimeout( _ => {
            entry.target.classList.add("slide-in")
        }, 150)
    })
}

const observer = new IntersectionObserver(callback)
const target = document.querySelector(".projects__state--img")

observer.observe(target);


