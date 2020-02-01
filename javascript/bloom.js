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


let scripts = [
    "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.0.4/gsap.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.0.4/ScrollToPlugin.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/animation.gsap.min.js",
    // "https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/debug.addIndicators.min.js",
    "javascript/scroll.js",
    "javascript/tween.js",
    "javascript/carousel.js"
]

setVh()
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
