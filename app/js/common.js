$(document).ready(function () {
    if ($(".popup-item").height() >= $(".popup").height()) {
        $(".popup").css("justify-content","end");
    }
    $(".popup-close").click(function () {
        $(".popup").removeClass('active');
    });
    $(".btn-lodge").click(function (e) {
        e.preventDefault();
        $(".popup-request").addClass('active');
    });
    $(".third").click(function (e) {
        e.preventDefault();
        $(".popup-requlations").addClass('active');
    });
});
