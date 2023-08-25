var present = [];
var absent = [];
var toutvoir = [];

function presentList() {
  var value = $("#enter").val();
  present.push(value);
  $("#present-list li").remove();
  present.forEach(function (e) {
    $("#present-list").append("<li>" + e + "</li>");
    document.getElementById("enter").value = "";
  });
}

function absentList() {
  var values = $("#enter").val();
  absent.push(values);
  $("#absent-list li").remove();
  absent.forEach(function (e) {
    $("#absent-list").append("<li>" + e + "</li>");
    document.getElementById("enter").value = "";
  });
}

function toutList() {
  $("#present-list").toggleClass("hidden");
  $("#absent-list").toggleClass("hidden");
}

$(document).ready(function () {
  $("#present").on("click", presentList);
  $("#absent").on("click", absentList);
  $("#tout").on("click", toutList);
});
