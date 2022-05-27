let dataFromApi = {
    user: "Enrico",
    items: Math.floor(Math.random() * 69),
    lastPage: "Index.html"
}
$(document).ready(function() {
    $(".secondGrid").append(`
        <div>
            <h1 id='title'>Personal section</h1>
            <div class='secondBody'>
                <h2>Hi there, <span class='fade' data-order='1' id='name'>${dataFromApi.user}</span></h2>
                <h3>You've got <span class='fade' data-order='2' id='nItems'>${dataFromApi.items}</span> items in your chart </h3>
                <p>Last page visited: <span class='fade link' data-order='3' id='lastPage'>${dataFromApi.lastPage}</span></p>
            </div>
        </div>
        <h3 class='secondFooter'>
            Footer of the webpage
        </h3>
    `)

    let toBeFaded = $(".fade")
    for(let i = 0; i < toBeFaded.length; i++){
        let element = toBeFaded[i]
        let order = $(`#${element.id}`).data("order") * 333
        $(`#${element.id}`)
        .css("color", "white")
        .fadeIn(order)
        setTimeout(function() {
            $(`#${element.id}`).css("color", "black")
        }, order)
    }
})