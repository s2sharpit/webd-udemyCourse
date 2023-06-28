$("h1").addClass("big-title margin-50");

$("h1").text("Hello");

$(".b1").text("Don't click me");

$(".b2").html("<em>HEY</em>");

$("a").attr("href", "https://www.yahoo.com");

$("h1").click(function () {
    $("h1").css("color", "purple");
})

$("button").click(function () {
    $("h1").css("color", "purple");
})

$(document).keydown(function (event) {
    $("h1").text(event.key);
})

$("h1").on("mouseover",function () {
    $("h1").css("color", "purple");
})

$("h1").on("mouseout",function () {
    $("h1").css("color", "yellow");
})