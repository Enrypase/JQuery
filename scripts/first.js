let sign = 1
const image = $(".firstImg")
const container = $(".first")
// Container height & width
let containerHeight = container.height()
let containerWidth = container.width()
// Current positioning
let currentLeft = 0
let currentTop = 0

// When the document is fully loaded
$(document).ready(function() {
    // Calculating initial scale/position
    scaleHeight()
    renderCenter()
    // When the mouse moves (and is over .first div) call the following function
    $(".first").mousemove(function(data){
        // Calculate the new X - the distance is calculated from the center of the page
        let x = currentLeft + (containerWidth / 2 - data.pageX) * sign
        // Same situation with the Y
        let y = currentTop + (containerHeight / 2 - data.pageY) * sign
        // Set the new coordinates
        $(".firstImg").css("left", `${x}px`)
        $(".firstImg").css("top", `${y}px`)
    })
    $(window).resize(function(){
        scaleHeight()
        renderCenter()
    })
  })
  // Invert axes
  function toggleAxes() {
    sign *= -1
  }
  // Renders any given image to the center of the screen
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
    // Calculate the width needed to cover the page + possible movements
    const newWidth = containerWidth * 2 + containerWidth * 2 * 0.05
    // oldHeight / oldWidth = newHeight / newWidth -> newHeight = oldHeight/oldWith * newWidth
    image.css("height", `${(elementHeight / elementWidth) * newWidth}px`)
  }