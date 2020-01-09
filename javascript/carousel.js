let projects = [
    {
        title : "State Exchange",
        description : "State Exchange is the result of an international collaboration with students from Fulda University in Germany. The product is an e-commerce platform that allows students to exchange goods within a university environment. Students can make an account, upload items to sell, and contact other sellers through a simple messaging service",
        img : "images/state.png",
        tech: "HTML/CSS, Javascript, Vue, MySQL, Node, Express",
        url : ""
    },
    {
        title : "Uno",
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque felis pharetra arcu consequat commodo. Nulla facilisi. Nullam ut viverra turpis. Nam egestas enim mauris, in imperdiet risus aliquam eget. Aenean cursus congue nunc, ac scelerisque nunc sodales id. Nulla interdum pulvinar metus, eget euismod leo placerat nec. Phasellus nec mattis neque. Sed egestas fringilla libero, et ultricies eros egestas vitae. Aenean ac vulputate risus. Integer vehicula semper felis, at imperdiet purus. Fusce purus mauris, venenatis nec odio sed, blandit faucibus nisi.",
        img: "images/uno.gif",
        tech: "",
        url : "https://uno-667-02.herokuapp.com"
    }
]

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
    gsap.timeline({onComplete: updateData, defaults: {duration: .2}})
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

    gsap.timeline({defaults: {duration: .2}})
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