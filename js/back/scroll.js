 $(function () {
     var ht = $(window).height();
     $(".section").height(ht);
     $(window).on("resize", function () {
         var ht = $(window).height();
         $(".section").height(ht);
     });
     
     $(".scroll").click(function (event) {
         event.preventDefault();
         $('html,body').animate({
             scrollTop: $(this.hash).offset().top
         }, 1000);         
     });    
     
 });
