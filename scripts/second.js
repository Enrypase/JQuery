// Last scroll position - It helps to understand if the user is scrolling down or up
let lastScrollY = 0
// Time To Fade - Fading time of the elements
const ttf = 1000
// Example of API
const dataFromApi = {
    user: "Enrico",
    items: genNumber(0, 70),
    lastPage: "Index.html",
    balance: 100
}
// When the document is ready, inject this html
$(document).ready(function() {
    $(".secondGrid").append(`
        <div>
            <h1 id='title'>Personal section</h1>
            <div class='secondBody'>
                <h2 name='name'>Hi there, <span class='fade' id='name'>${dataFromApi.user}</span></h2>
                <h3 name='nItems'>You've got <span class='fade' id='nItems'>${dataFromApi.items}</span> items in your chart </h3>
                <p name='lastPage'>Last page visited: <span class='fade link' id='lastPage'>${dataFromApi.lastPage}</span></p>

                <p name='balance'>Your updated bilance is: <span class='fade' id='balance'>${dataFromApi.balance}</span> $</p>
            </div>
        </div>
        <h3 class='secondFooter'>
            Footer of the webpage
        </h3>
    `)
    scrollFunction()
})
// When the user scrolls, call the scroll handling function
$(document).scroll(scrollFunction)
// Scroll handling function
function scrollFunction(){
    const fadeElements = $(".fade")
    for(let i = 0; i < fadeElements.length; i++){
        if(lastScrollY <= scrollY){ 
            const element = $(`#${fadeElements[i].id}`)
            const elementDistanceFromTop = document.getElementsByName(fadeElements[i].id)[0].getBoundingClientRect()
            if(elementDistanceFromTop.y <= ($(window).height() - element.height() / 2)){
                fadeElement(element)
            }
        }else{
            const elementDistanceFromTop = document.getElementsByName(fadeElements[i].id)[0].getBoundingClientRect()
            if(elementDistanceFromTop.y > $(window).height()){
                let jqueryElement = $(`#${fadeElements[i].id}`)
                jqueryElement.css("display", "none")
            }
        }
    }
    
    lastScrollY = scrollY
}
// Fades-in the element
function fadeElement(element){
    element.css("color", "white")
    element.fadeIn(ttf, "swing" ,function(){
        element.css("color", "black")
    })
}
// Get a radom number
function genNumber(lowerBound, upperBound){
    return Math.floor(Math.random() * upperBound) + lowerBound;
}