// Sign of the movement used in the equation for getting the image position
let sign = 1
// Movement coefficient used in the equation for getting the image position and for scaling the image
let coeff
// DOM Elements
const image = $("#firstImg")
const container = $("#first")
const slider = document.getElementById("slider")
// Global Variables
let containerHeight = container.height()
let containerWidth = container.width()
let currentLeft = 0
let currentTop = 0
// When the document is fully loaded
$(document).ready(function() {
    coeff = slider.value
    // Adapt the image to the screen
    scaleHeight()
    // Render the image in the center of the screen
    renderCenter()
    // When the mouse moves (and is over #first div) call the following function
    container.mousemove(function(data){
        // Calculate the new X/Y - the distance is calculated from the center of the page
        let x = currentLeft + (containerWidth / 2 - data.pageX) * sign * coeff
        let y = currentTop + (containerHeight / 2 - data.pageY) * sign * coeff
        // Set the new coordinates
        image.css("left", `${x}px`)
        image.css("top", `${y}px`)
    })
    // When the dimension of the window changes, adapt the image
    $(window).resize(function(){
        scaleHeight()
        renderCenter()
    })   
  })
  // Invert the axes
  function invertAxes() {
    sign *= -1
  }
  // Renders any given image to the center of the screen saving it's left and top position
  function renderCenter(){    
    // Image height & width
    const elementHeight = image.height()
    const elementWidth = image.width()
    // Container height & width
    containerHeight = container.height()
    containerWidth = container.width()
    // Differences between container and element
    let diffX = (containerWidth - elementWidth)
    let diffY = (containerHeight - elementHeight)
    // We set a distance from top/left of the half of the difference of height/width from the container and the element. So it will remain centered
    currentTop = diffY / 2
    image.css("top", `${currentTop}px`)
    currentLeft = diffX / 2
    image.css("left", `${currentLeft}px`)  
  }
  // Adapt the image to the screen
  function scaleHeight(){
    // Image height & width
    const elementHeight = image.height()
    const elementWidth = image.width()
    // Container height & width
    containerHeight = container.height()
    containerWidth = container.width()
    // Getting the minimum height for covering the whole screen
    const rawHeight = containerHeight + containerHeight * coeff
    const minHeight = rawHeight + rawHeight * 0.05
    // Calculate the width needed to cover the page + possible movements
    const rawWidth = containerWidth + containerWidth * coeff
    const newWidth = rawWidth + rawWidth * 0.05
    // Getting the hight from the calculated width
    const calculatedHight = (elementHeight / elementWidth) * newWidth
    // If the calculated height is more than the minimum one use it, otherwise use the minimum height
    if(calculatedHight >= minHeight){
        image.css("height", `${calculatedHight}px`)
    }else{
        image.css("height", `${minHeight}px`)
    }   
  }
  // Slider handler
  function changeCoeff(value){
      coeff = value
      scaleHeight()
      renderCenter()
  }