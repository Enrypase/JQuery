// Global Variables
let sign = 1
const first = $('#first')
const firstImage = $('#firstImg')
const animationTiming = 250
let centerPos = {top: 0,left: 0}
let mousePos = {x: 0, y:0}
let animation
// Invert Axes
function invertAxes(){
    sign *= -1;
}
// When the mouse enters request the animation frame
first.mouseenter(function(){
    requestAnimationFrame(updateMouseAF)
})
// Call this function when the mouse moves inside the first element
first.mousemove(function(event){
    mousePos.x = event.pageX
    mousePos.y = event.pageY
})
// Call this function when the mouse exits from the first element
first.mouseleave(function(){
    firstImage.stop()
    cancelAnimationFrame(animation)
    firstImage.animate({
        top: centerPos.top,
        left: centerPos.left
    }, animationTiming, 'linear')
})
// Used By the animation frame
function updateMouseAF(){
    firstImage.stop()
    firstImage.animate({
        top: centerPos.top - (first.height() / 2 - mousePos.y) * sign,
        left: centerPos.left - (first.width() / 2 - mousePos.x) * sign
    }, animationTiming, 'linear')
    animation = requestAnimationFrame(updateMouseAF);
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