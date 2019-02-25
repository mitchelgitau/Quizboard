$(document).ready(function(){
  $("button#btn").click(function number(event){
    event.preventDefault();
    var no1 = parseInt($("input:radio[name = No1]:checked").val());
    var no2 = parseInt($("input:radio[name = No2]:checked").val());
    var no3 = parseInt($("input:radio[name = No3]:checked").val());
    var no4 = parseInt($("input:radio[name = No4]:checked").val());
    var no5 = parseInt($("input:radio[name = No5]:checked").val());

    var total = no1 + no2 + no3 + no4 + no5;
    document.getElementById("results").innerHTML= "your score is" + total + "out of 25";
  });
});
