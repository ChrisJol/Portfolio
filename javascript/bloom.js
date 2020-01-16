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

loadScripts(scripts)
.done( () => {

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
    // .to(window, {
    //     duration: 2,
    //     scrollTo: { y: '#contact', offsetY: offset},
    //     ease: "expo.inOut",
    //     delay: 4
    // }, 1)
})
