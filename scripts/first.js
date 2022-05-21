let sign = 1

// When the document is fully loaded
$(document).ready(function() {
    // When the mouse moves (and is over .first div) call the following function
    $(".first").mousemove(function(data){
        // Get mouse coordinates
        let mouseX = data.pageX
        // Moving the background position
        $(this).css("background-position", mouseX * 0.2 * sign)
    })
    $(document).keypress(function(data) {
        if(data.which === 49){
            $(location).attr('href', '#first');
        }else if(data.which == 50){
            $(location).attr('href', '#second');
        }else if(data.which == 51){
            $(location).attr('href', '#third');
        }
    })
  })


  function toggleAxes() {
    sign *= -1
  }