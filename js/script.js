$(window).on("load resize ", function () {
    var scrollWidth = $('.tbl-content').width() - $('.tbl-content table').width();
    $('.tbl-header').css({ 'padding-right': scrollWidth });
}).resize();

$(document).ready(function () {
    $("div.aide-tab-menu>div.list-group>a").click(function (e) {
        e.preventDefault();
        $(this).siblings('a.active').removeClass("active");
        $(this).addClass("active");
        var index = $(this).index();
        $("div.aide-tab>div.aide-tab-content").removeClass("active");
        $("div.aide-tab>div.aide-tab-content").eq(index).addClass("active");
    });
});