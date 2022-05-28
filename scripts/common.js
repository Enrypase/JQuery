$(document).keypress(function(data) {
    if(data.which === 49){
        $(location).attr('href', '#first');
    }else if(data.which == 50){
        $(location).attr('href', '#second');
    }else if(data.which == 51){
        $(location).attr('href', '#third');
    }
})