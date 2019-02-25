$(document).ready(function(){
  $("input[type='button']").click(function(event){
    event.preventDefault();
    var question1 = parseInt($("input:radio[name = 1]:checked").val());
    var question2 = parseInt($("input:radio[name = 2]:checked").val());
    var question3 = parseInt($("input:radio[name = 3]:checked").val());
    var question4 = parseInt($("input:radio[name = 4]:checked").val());
    var question5 = parseInt($("input:radio[name = 5]:checked").val());

    var total =1 + 2 + 3 + 4 + 5;
    $("form").hide();
    $("button").hide();
    $("#result").text("Your score is" + result +"out of 30");
