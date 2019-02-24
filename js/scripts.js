var answers=[]
var quizs=[1,2,3,4,5]
var scores=[]
var average=0
var output
$(document).ready(function(){
  $("#buttonAns").click(function(quiz){
    for(i=0;i<quizs.length;i++){
      var choice=parseInt($("form input[name='"+ i + "']:checked").val());
      if(isNaN(choice)){
        alert("Kindly Answer The Questions")
        break;
      }
      else {
        scores.push(choice)
      }
    }
    // this is the business logic
    if(answers[1]===A){
      scores.push(4)

       if(answers[2]===B){
        scores.push(4)

        if(answers[3]===C){
          scores.push(4)

          if(answers[4]===A){
            scores.push(4)

            if(answers[5]===B){
              scores.push(4)
            }
            else {
              scores.push(0)
            }
          }
          else {
            scores.push(0)
          }
        }
        else {
          scores.push(0)
        }

        }
        else {
          scores.push(0)
        }

      }
    else {
      scores.push(0)
    }

    average=scores.reduce((a,b)=>a+b,0)*12.5
      $("#scores").text("scores:"+average+"%")
        $(".form").show()
        $("#ins").hide()
        $("#result").show()
      $("#prev").click(function(){
          $("#result").hide()
          window.location.reload();
          $("#form").show()

    })

  })
  $("#begin").click(function(){
    $("#page").hide()
    $("#page1").show();
  });

  $("#next").click(function(){
    $("#page").hide()
    $("#page1").show();
  });

  $("#buttonAns").click(function(){
    $("#page").hide()
    $("#page1").hide();
    $("#result").show();
  });

  $("#prev").click(function(){
    $("#page").hide()
    $("#page1").hide();
    $("#result").hide();
    $("#five").show();
  });

})
