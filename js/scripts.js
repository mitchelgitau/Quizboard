var questions = [1, 2, 3, 4, 5]
var scores = []
$(document).ready(function() {
            for (i = 0; i < questions.length; i++) {
              var choice = parseInt($("form input[name='" + i + "']:checked").val());
              if (isNaN(choice)) {
                alert("Can you be serious and fill all the questions")
                break;
              } else {
                scores.push(choice)
              }
            }
            // this is the business logic
            if (answers[0] === 1) {
              scores.push(4)

              if (answers[1] === 1) {
                scores.push(4)

                if (answers[2] === 3) {
                  scores.push(4)

                  if (answers[3] === 1) {
                    scores.push(4)

                    if (answers[4] === 2) {
                      scores.push(4)
                    } else {
                      scores.push(0)
                    }
                  } else {
                    scores.push(0)
                  }
                } else {
                  scores.push(0)
                }

              } else {
                scores.push(0)
              }

            } else {
              scores.push(0)
            }
        }
