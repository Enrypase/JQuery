// Variables
let leftElement = 0
let currentLeft = 0
let elements 
// When the document is ready initialize elements and check the buttons
$(document).ready(function(){
    elements = $(".sliderElement")
    checkBtns()
})
// Hides the side buttons
function checkBtns(){
    if(leftElement == elements.length - 1){
        $("#leftBtn").css("visibility", "hidden")
    }else{
        $("#leftBtn").css("visibility", "")
    }

    if(leftElement == 0){
        $("#rightBtn").css("visibility", "hidden")
    }else{
        $("#rightBtn").css("visibility", "")
    }
}
// Slides left or right given a parameter
function slide(left){
    const element = $(`#${elements[leftElement].id}`)
    if(left){
        currentLeft -= element.width()
        leftElement++
    }else{
        currentLeft += element.width()
        leftElement--
    }
    elements.animate({
        left: currentLeft
    }, 500, 'linear')

    checkBtns()
}