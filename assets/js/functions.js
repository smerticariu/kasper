
setInterval(function(){
    var $icon = $("#nav-search i");
    var $input = $("#nav-search input");

    if($input.is(":hover")) {
       $input.css("width", "80%");
       $input.css("background-color", "#fff");
       $icon.css("color", "#000");
    }
    else {
       $input.css("width", "50%");
    }
}, 200);







setTimeout(function(){

    $('.progress-percentage .bar').each(function() {
        var me = $(this);
        var perc = me.attr("data-percentage");

        //TODO: left and right text handling

        var current_perc = 0;

        var progress = setInterval(function() {
            if (current_perc>=perc) {
                clearInterval(progress);
            } else {
                current_perc +=1;
                me.css('width', (current_perc)+'%');
            }

            me.html('<div class="percentage">' + (current_perc) + '%</div>');

        }, 50);

    });

},300);

  


 
		
