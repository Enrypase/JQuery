/*
    OTHER POSSIBLE SOLUTIONS:
    1) Block the animation until a specified amount of time is passed (using $.now()) - Used in here
    2) Using set/clear interval. CPU intensive
    3) Using request/cancel animation frame. More CPU friendly, stops animations when tab is not displayed - Used in the main file
*/
// Global Variables
let sign = 1
const first = $('#first')
const firstImage = $('#firstImg')
const animationTiming = 250
let centerPos = {top: 0,left: 0}
let lastTime = $.now()
// Invert Axes
function invertAxes(){
    sign *= -1;
}
// Call this function when the mouse moves inside the first element
first.mousemove(function(event){
    if($.now() > lastTime + animationTiming / 5){
        callAnimation(firstImage, centerPos.top - (first.height() / 2 - event.pageY) * sign, centerPos.left - (first.width() / 2 - event.pageX) * sign, animationTiming)
        lastTime = $.now()
    }
})
// Call this function when the mouse exits from the first element
first.mouseleave(function(){
    callAnimation(firstImage, centerPos.top, centerPos.left, animationTiming)
})
// General purpose function
function callAnimation(to, topP, leftP, t){
    to.stop()
    to.animate({
        top: topP,
        left: leftP
    }, t, 'linear')
}
// When the document is ready find out the center coordinates
$(document).ready(function(){
    updateCenter()
})
// When the window gets resized find out the center coordinates
$(window).resize(function(){
    updateCenter()
})
// Function that updates the center coordinates
function updateCenter(){
    centerPos.top = (first.height() - firstImage.height())/2
    centerPos.left = (first.width() - firstImage.width())/2
    firstImage.css("top", `${centerPos.top}px`)
    firstImage.css("left", `${centerPos.left}px`)
}