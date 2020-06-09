 $(document).ready(function () {
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



     $("ul li .flower a").hover(function () {
         $(this).children("img").stop().animate({
             top: '-353px'
         }, 3000);
     }, function () {
         $(this).children("img").stop().animate({
             top: '0px'
         }, 3000);
     });

     $("ul li .fashion a").hover(function () {
         $(this).children("img").stop().animate({
             top: '-703px'
         }, 3000);
     }, function () {
         $(this).children("img").stop().animate({
             top: '0px'
         }, 3000);
     });
     
     $("ul li .recipe a").hover(function () {
         $(this).children("img").stop().animate({
             top: '-66px'
         }, 1000);
     }, function () {
         $(this).children("img").stop().animate({
             top: '0px'
         }, 1000);
     });
     
     $("ul li .pctoon a").hover(function () {
         $(this).children("img").stop().animate({
             top: '-140px'
         }, 1000);
     }, function () {
         $(this).children("img").stop().animate({
             top: '0px'
         }, 1000);
     });
     
     $("ul li .motoon a").hover(function () {
         $(this).children("img").stop().animate({
             top: '-1294px'
         }, 4000);
     }, function () {
         $(this).children("img").stop().animate({
             top: '0px'
         }, 2000);
     });
     
     $("ul li .gom a").hover(function () {
         $(this).children("img").stop().animate({
             top: '-583px'
         }, 4000);
     }, function () {
         $(this).children("img").stop().animate({
             top: '0px'
         }, 2000);
     });
     
     
     


 });
