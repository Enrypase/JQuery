let lastScrollY = 0

// Time To Fade :D / milliseconds
const ttf = 1000

const dataFromApi = {
    user: "Enrico",
    items: genNumber(0, 70),
    lastPage: "Index.html",
    balance: 100
}
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

    $(document).scroll(scrollFunction)
})

function scrollFunction(){
    const fadeElements = $(".fade")
    for(let i = 0; i < fadeElements.length; i++){
        if(lastScrollY <= scrollY){ 
            const elementDistanceFromTop = document.getElementsByName(fadeElements[i].id)[0].getBoundingClientRect()
            if(elementDistanceFromTop.y <= $(window).height()){
                console.log("Distance of " + fadeElements[i].getAttribute("name") + " of " + elementDistanceFromTop.y + " window heigh " + $(window).height())
                fadeElement($(`#${fadeElements[i].id}`))
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

function fadeElement(element){
    element.css("color", "white")
    element.fadeIn(ttf, "swing" ,function(){
        element.css("color", "black")
    })
}

function genNumber(lowerBound, upperBound){
    return Math.floor(Math.random() * upperBound) + lowerBound;
}