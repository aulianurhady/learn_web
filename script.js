$(document).ready(function(){
    activeSetup();
    $('.myicon').click(function(e){
        $('#navbar ul').toggleClass('sm-screen');
    })
    
    function activeSetup(){
        var urlPath = window.location.pathname;
        //console.log(urlPath);
        $('nav a').each(function(){
            //console.log($(this));
            
            var href = $(this).attr('href');
            //console.log(href);
            //console.log(urlPath.substring(26))
            if(urlPath.substring(26) == href){
                //console.log('match');
                $(this).closest('li').addClass('active')
            }

        })
    }
})