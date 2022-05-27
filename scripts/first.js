let sign = 1

// When the document is fully loaded
$(document).ready(function() {
    // When the mouse moves (and is over .first div) call the following function
    $(".first").mousemove(function(data){
        // The output is the same

        /*
        The following commented code doesn't fit for this situation:
        // Method 1
        $(".first").animate({
            'background-position-x': data.pageX * sign
        }, 1, 'linear')
        */

        // Method 2
        // Moving the background position
        $(this).css("background-position-x", 0 - data.pageX * 0.25 * sign)
        // Introduce una serie di complicazioni
        // $(this).css("background-position-y", 0 + data.pageY * 0.25 * sign)        
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