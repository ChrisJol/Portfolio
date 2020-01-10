let projects = [
    {
        title : "State Exchange",
        description : "State Exchange is the result of an international collaboration with students from Fulda University in Germany. The product is an e-commerce platform that allows students to exchange goods within a university environment. Students can make an account, upload items to sell, and contact other sellers through a simple messaging service",
        img : "images/state.png",
        tech: "HTML, CSS, Javascript, Vue, MySQL, Node, Express",
        url : ""
    },
    {
        title : "Uno",
        description : "This card game application is the result of a 10 week, 4 student collaboration to build a real-time, multiplayer, online game that integrates front-end design and layout principles, back-end routing and serving of data, and a database to persist user data, game states, and to allow for live chat capabilities.",
        img: "images/uno.gif",
        tech: "HTML, CSS, Javascript, Heroku, Node, Express, Postgres",
        url : "https://uno-667-02.herokuapp.com"
    },
    {
        title: "Eating For Free",
        description: "Eating For Free is a Bay Area based investigative podcast. The two hosts, Matthew Lawson and Joan Summers, contracted me to design and build their website to help grow their business",
        img: "images/e4f.png",
        tech: "HTML, CSS, Javascript",
        url: "https://eatingforfree.com"
    },
    {
        title: "Lawson Chriopractics",
        description: "Lawson Chiropractics is a redesign of an out-dated website for a San Diego based chiropractor. The website was never deployed, but the design remains as a demonstration of modern design practices",
        img: "images/lawson_chiro.png",
        tech: "HTML, CSS, Javascript",
        url: "https://chrisjol.github.io/Lawson-Chiro/"
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