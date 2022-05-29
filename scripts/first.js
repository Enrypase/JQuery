let sign = 1
let coeff

const mouseEnterTime = 100
const renderCenterTime = 250

const image = $("#firstImg")
const container = $("#first")
const slider = document.getElementById("slider")

let containerHeight = container.height()
let containerWidth = container.width()
let currentLeft = 0
let currentTop = 0

let currentExecutingAnimation

$(document).ready(function() {
    coeff = slider.value

    scaleHeight()
    renderCenter()
    
    container.mouseenter(function(data){
        moveMouse(data.pageX, data.pageY, mouseEnterTime, "linear")
    })
    container.mousemove(function(data){
        moveMouse(data.pageX, data.pageY, 0)
    })
    container.mouseleave(function(){
        renderCenter()
    })
    
    $(window).resize(function(){
        scaleHeight()
        renderCenter()
    })   
  })

  function invertAxes() {
    sign *= -1
  }

  function renderCenter(){  
      
    if(currentExecutingAnimation != null){
        currentExecutingAnimation.stop()
    }

    const elementHeight = image.height()
    const elementWidth = image.width()
    containerHeight = container.height()
    containerWidth = container.width()

    let diffX = (containerWidth - elementWidth)
    let diffY = (containerHeight - elementHeight)

    currentTop = diffY / 2
    currentLeft = diffX / 2
    currentExecutingAnimation = image.animate({
        top: `${currentTop}px`,
        left: `${currentLeft}px`
    }, renderCenterTime, "linear")
  }

  function scaleHeight(){
    const elementHeight = image.height()
    const elementWidth = image.width()
    containerHeight = container.height()
    containerWidth = container.width()

    const rawHeight = containerHeight + containerHeight * coeff
    const minHeight = rawHeight + rawHeight * 0.05

    const rawWidth = containerWidth + containerWidth * coeff
    const newWidth = rawWidth + rawWidth * 0.05

    const calculatedHight = (elementHeight / elementWidth) * newWidth

    if(calculatedHight >= minHeight){
        image.css("height", `${calculatedHight}px`)
    }else{
        image.css("height", `${minHeight}px`)
    }   
  }

  function changeCoeff(value){
      coeff = value
      scaleHeight()
      renderCenter()
  }
  function moveMouse(pageX, pageY, delay, animationType){

    if(currentExecutingAnimation != null && delay != 0){
        currentExecutingAnimation.stop()
    }

    let x = currentLeft + (containerWidth / 2 - pageX) * sign * coeff
    let y = currentTop + (containerHeight / 2 - pageY) * sign * coeff

    currentExecutingAnimation = image.animate({
        top: `${y}px`,
        left: `${x}px`
    }, delay, animationType)
  }
      