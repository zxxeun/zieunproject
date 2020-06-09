$(document).ready(function () {
    function modalOn() {
        $(".modal").addClass("back_on");
    }

    function modalOff() {
        $(".modal").removeClass("back_on");
    }
    
    $("a.pop").click(function () {
        $("#detail-1").show(500);
        modalOn();
    });

    $(".modal").click(function () {
        $(".detail").hide(500);
        modalOff();
    });
});
