$(function() {

    var newHash      = "",
        $mainContent = $(".main_container"),
        $pageWrap    = $(".wrapper"),
        baseHeight   = 0,
        $el;
        
    $pageWrap.height($pageWrap.height());
    baseHeight = $pageWrap.height() - $mainContent.height();
    
    $(".menu").delegate("a", "click", function() {
        window.location.hash = $(this).attr("href");
        return false;
    });
    
    $(window).bind('hashchange', function(){
    
        newHash = window.location.hash.substring(1);
        
        if (newHash) {
            $mainContent
                .find(".content")
                .fadeOut(200, function() {
                    $mainContent.hide().load(newHash + ".content", function() {
                        $mainContent.fadeIn(200, function() {
                            $pageWrap.animate({
                                height: baseHeight + $mainContent.height() + "px"
                            });
                        });
                        $(".menu").removeClass("current");
                        $(".menu a[href="+newHash+"]").addClass("current");
                    });
                });
        };
        
    });
    
    $(window).trigger('hashchange');

});