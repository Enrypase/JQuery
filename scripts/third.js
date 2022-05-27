let pageIndex = 0                                                           // Page the user is looking at

// First page content
let firstPage = `
    <h1>FIRST PAGE</h1>
    <h2>This is the first page</h2>
    <h3>Click on '>' to proceed to the next page</h3>

    <div id='thirdFooter' style='display:none'>${pageIndex}</div>
`
// Second page content
let secondPage = `
    <h1>SECOND PAGE</h1>
    <h2>Welcome to the second page!</h2>

    <div id='thirdFooter' style='display:none'>${pageIndex}</div>
`
// Third page content
let thirdPage = `
    <h1>THIRD PAGE</h1>
    <h2>Welcome to the third page!</h2>

    <div id='thirdFooter' style='display:none'>${pageIndex}</div>
`

$(document).ready(function() {                                              // Render the zero page
    renderPage()
})

// Move to the left page
function left(){
    if(pageIndex > 0){
        pageIndex--

        renderPage()
    }
}
// Move to the right page
function right(){
    if(pageIndex < 2){
        pageIndex++

        renderPage()
    }
}
// Render logic
function renderPage(){
    $("#textCenter").html("")                                                                           // Remove the old code
    $("#textCenter").css("display", "none")
    switch(pageIndex){
        case 0:                                                                                         // Display the zero page
            $("#firstButton").css("display", "none")
            $("#third").css("background-image", "none")
            $("#textCenter").append(firstPage)

            break;
        case 1:                                                                                         // Display the first page
            document.getElementById("firstButton").style.removeProperty("display")
            document.getElementById("secondButton").style.removeProperty("display")

            $("#third").css("background-image", "url('../images/violet.png')")

            $("#third").css("color", "black")
            $(".thirdButtons").css("color", "black")
            $(".thirdButtons").css("border-color", "black")
            $("#textCenter").html(secondPage)

            break;
        case 2:                                                                                         // Display the second page
            $("#third").css("background-image", "url('../images/purple.png')")

            $("#secondButton").css("display", "none")
            $("#third").css("color", "white")
            $(".thirdButtons").css("color", "white")
            $(".thirdButtons").css("border-color", "white")
            $("#textCenter").html(thirdPage)

            break;
    }
    $("#textCenter").fadeIn("slow")                                                                     // Show the content (remove display: none)
}