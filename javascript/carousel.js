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