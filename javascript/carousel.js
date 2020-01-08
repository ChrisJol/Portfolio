let projects = [
    {
        title : "State Exchange",
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque felis pharetra arcu consequat commodo. Nulla facilisi. Nullam ut viverra turpis. Nam egestas enim mauris, in imperdiet risus aliquam eget. Aenean cursus congue nunc, ac scelerisque nunc sodales id. Nulla interdum pulvinar metus, eget euismod leo placerat nec. Phasellus nec mattis neque. Sed egestas fringilla libero, et ultricies eros egestas vitae. Aenean ac vulputate risus. Integer vehicula semper felis, at imperdiet purus. Fusce purus mauris, venenatis nec odio sed, blandit faucibus nisi.",
        img : "images/state.png",
        url : ""
    },
    {
        title : "Uno",
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque felis pharetra arcu consequat commodo. Nulla facilisi. Nullam ut viverra turpis. Nam egestas enim mauris, in imperdiet risus aliquam eget. Aenean cursus congue nunc, ac scelerisque nunc sodales id. Nulla interdum pulvinar metus, eget euismod leo placerat nec. Phasellus nec mattis neque. Sed egestas fringilla libero, et ultricies eros egestas vitae. Aenean ac vulputate risus. Integer vehicula semper felis, at imperdiet purus. Fusce purus mauris, venenatis nec odio sed, blandit faucibus nisi.",
        img: "images/uno.png",
        url : "https://uno-667-02.herokuapp.com"
    }
]

let currentIndex = 0;

let leftButton = document.querySelector(".carousel__button--left")
let rightButton = document.querySelector(".carousel__button--right")

let projectTitle = document.querySelector(".view__projects--title")
let projectDesc = document.querySelector(".view__projects--desc")
let projectImg = document.querySelector(".view__projects--img")

leftButton.addEventListener("click", function(){
    currentIndex = next("left")
    animateOut()
})

rightButton.addEventListener("click", function(){
    currentIndex = next("right")
    animateOut()
})

let animateOut = () => {
    gsap.timeline({onComplete: updateData, defaults: {duration: .2}})
    .to('.view__projects--img', {
        x: 100,
        opacity: 0
    }, 0)
    .to('.view__projects--title, .view__projects--desc', {
        opacity: 0,
    }, 0)
}

let updateData = () => {
    projectTitle.textContent = projects[currentIndex].title
    projectDesc.textContent = projects[currentIndex].description
    projectImg.src = projects[currentIndex].img

    gsap.timeline({defaults: {duration: .2}})
    .to('.view__projects--img', {
        x: 0,
        opacity: 1
    }, 0)
    .to('.view__projects--title, .view__projects--desc', {
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