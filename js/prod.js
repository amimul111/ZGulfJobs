$(window).scroll(function(){
    if($('#page-top').scrollTop()<$('.navbar-default').height()){
        $('#LogoImg').removeClass('logoZoomOut');
        $('#LogoImg').addClass('logoZoomIn');
    }
    else{
        $('#LogoImg').removeClass('logoZoomIn');
        $('#LogoImg').addClass('logoZoomOut');
    }

});
$(window).resize(function(){
   var width = $(window).width();
   if(width > 414 ){
       $('.Jobs').removeClass('col-xs-6').addClass('col-xs-3');
   }
   else{
       $('.Jobs').removeClass('col-xs-3').addClass('col-xs-6');
   }
})
.resize();