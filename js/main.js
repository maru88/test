function main(){(function(){'use strict';$('a.page-scroll').click(function(){if(location.pathname.replace(/^\//,'')==this.pathname.replace(/^\//,'')&&location.hostname==this.hostname){var target=$(this.hash);target=target.length?target:$('[name='+this.hash.slice(1)+']');if(target.length){$('html,body').animate({scrollTop:target.offset().top},900);return false;}}});$('body').scrollspy({target:'.navmenu',offset:80,});$(document).ready(function(){$("#testimonial").owlCarousel({navigation:false,slideSpeed:300,paginationSpeed:400,singleItem:true,autoHeight:true});});}());}main();

$(document).ready(function(){
    $('.popup .popup_close>h3').click(function(){
        $('.popup').hide();
    });
});