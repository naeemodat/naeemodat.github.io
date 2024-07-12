$(function () {
  $(".schedule").click(function () {
    $("#content").load("schedule.html");
  });
  $("#home").click(function () {
    $("#content").load("home.html");
  });
  $(".cpre").click(function () {
    $("#content").load("cpre.html");
  });
});
