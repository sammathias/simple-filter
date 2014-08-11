(function ( $ ) {
 
    $.fn.listFilter = function() {
        var $this = $(this);
        
        $this.addClass("filterstyle");
        
        $this.find("li > ul > li").addClass("filteritems");
        $this.children("li").addClass("headings");
        
        $this.prepend("<li class='filter'><input type='text' placeholder='Enter Search Text'/></li>");
        
        $this.find(".filter > input").on('keyup', function(e) {
            $this.find(".filteritems").each(function(k,v) {
                var text = $(v).text();
                if (text.toLowerCase().indexOf($this.find(".filter > input").val().toLowerCase()) >= 0) {
                    $(v).show();
                } else {
                    $(v).hide();
                }
            });
            $this.find('.headings').show();
            $this.find('.headings').each(function(k,v) {
                if ($(v).find('ul > li:visible').length < 1) {
                    $(v).hide();
                } else {
                    $(v).show();
                }
            });
        });
    };
 
}( jQuery ));