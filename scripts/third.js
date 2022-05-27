let pageIndex = 0

let firstPage = `
    <h1>FIRST PAGE</h1>
    <h2>This is the first page</h2>
    <h3>Click on '>' to proceed to the next page</h3>

    <div id='thirdFooter' style='display:none'>${pageIndex}</div>
`
let secondPage = `
    <h1>SECOND PAGE</h1>
    <h2>Welcome to the second page!</h2>

    <div id='thirdFooter' style='display:none'>${pageIndex}</div>
`
let thirdPage = `
    <h1>THIRD PAGE</h1>
    <h2>Welcome to the third page!</h2>

    <div id='thirdFooter' style='display:none'>${pageIndex}</div>
`

$(document).ready(function() {
    renderPage()
})

function left(){
    if(pageIndex > 0){
        pageIndex--

        renderPage()
    }
}

function right(){
    if(pageIndex < 2){
        pageIndex++

        renderPage()
    }
}

function renderPage(){
    $("#textCenter").html("")
    $("#textCenter").css("display", "none")
    switch(pageIndex){
        case 0:
            $("#firstButton").css("display", "none")
            $("#third").css("background-image", "none")
            $("#textCenter").append(firstPage)

            break;
        case 1:
            document.getElementById("firstButton").style.removeProperty("display")
            document.getElementById("secondButton").style.removeProperty("display")

            $("#third").css("background-image", "url('../images/violet.png')")

            $("#third").css("color", "black")
            $("button").css("color", "black")
            $("button").css("border-color", "black")
            $("#textCenter").html(secondPage)

            break;
        case 2:
            $("#third").css("background-image", "url('../images/purple.png')")

            $("#secondButton").css("display", "none")
            $("#third").css("color", "white")
            $("button").css("color", "white")
            $("button").css("border-color", "white")
            $("#textCenter").html(thirdPage)

            break;
    }
    $("#textCenter").fadeIn("slow")
}