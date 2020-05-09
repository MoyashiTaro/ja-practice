$(function () {
    var bg1_top = $(".bg_1").offset().top;
    var bg2_top = $(".bg_2").offset().top;
    var bg3_top = $(".bg_3").offset().top;

    var win_h = $(window).height();
    var start_bg1 = bg1_top - win_h;
    var start_bg2 = bg2_top - win_h;
    var start_bg3 = bg3_top - win_h;

    $("#bg1_int span.ans1").text(start_bg1);
    $("#bg2_int span.ans1").text(start_bg2);
    $("#bg3_int span.ans1").text(start_bg3);
    $("#w_h span.ans1").text(win_h);


    $(window).scroll(function () {
        var y = $(this).scrollTop();

        //チェック用
        $("#scroll span").text(y);

        if (y >= start_bg1) {
            $("#bg1_int span.ans2").text("動いた");
            $('.bg_1').css('background-position-y', -(y - bg1_top) * 0.5 + 'px');
        } else {
            $("#bg1_int span.ans2").text("元の位置");
        }
        if (y > start_bg2) {
            $("#bg2_int span.ans2").text("動いた");
            $('.bg_2').css('background-position-y', - (y - bg2_top) * 0.5 + 'px');
        } else {
            $("#bg2_int span.ans2").text("ウィンドウより下");
        }
        if (y > start_bg3) {
            $("#bg3_int span.ans2").text("動いた");
            $('.bg_3').css('background-position-y', - (y - bg3_top) * 0.5 + 'px');

        } else {
            $("#bg3_int span.ans2").text("ウィンドウより下");
        }

    });
});