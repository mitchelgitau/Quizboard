$(document).ready(function(){
  $("form").click(function(event){
    event.preventDefault();
    var question1 = parseInt($("input:radio[name = 1]:checked").val());
    var question2 = parseInt($("input:radio[name = 2]:checked").val());
    var question3 = parseInt($("input:radio[name = 3]:checked").val());
    var question4 = parseInt($("input:radio[name = 4]:checked").val());
    var question5 = parseInt($("input:radio[name = 5]:checked").val());

    var total =1 + 2 + 3 + 4 + 5;
    document.getElementById("results").innerHTML= "your score is" + answer;
  });
});
