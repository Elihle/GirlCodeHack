// // var obesity = document.getElementById('obesity');
// // var depression = document.getElementById('depression');
// var some = document.getElementById('some').value;
// var most = document.getElementById('most').value;
// var never = document.getElementById('never').value;
var showResults = document.getElementById("showresults");
// var showResults1 = document.getElementById("showresults1");


// var firstQuiz = document.getElementById("firstQuiz");
// var secondQuiz = document.getElementById("secondQuiz");
// var thirdQuiz = document.getElementById("thirdQuiz");
// var fourthQuiz = document.getElementById("fourthQuiz");
// //var fifthQuiz = document.getElementById("fifthQuiz");
// var fifthQuiz = document.querySelector("input[name='fifthQuiz']:checked");


 

// document.getElementById("depression").addEventListener("click", displayQuestion);
function displayQuestion() {
window.location.href = 'questions.html';
    }



// //     document.getElementById("getResults").addEventListener("click", getResults);

// //     function myFunction() {
// //         document.getElementById("demo").innerHTML = "Hello World";
// //       }

//     function getResults(){
//         //     alert("cgvhj÷/knfhgjkhjs")
//         console.log(some.value);
        

//             if ( fifthQuiz.value == 'most')  {
//                     showResults.innerHTML = "you should consult a doc";
//             }else if ( fifthQuiz.value == 'some') {
//                 showResults.innerHTML = "you seem fine"
//         }else if ( fifthQuiz.value == 'never') {
//                 showResults.innerHTML = "random text"
                
//         }
//     }


window.addEventListener('DOMContentLoaded', function(){
        
        var btnSubmit = document.querySelector('#getResults');

        btnSubmit.addEventListener('click', function(){
                var answers = [];
                var answer1 = document.querySelector("input[name='firstRadio']:checked").value
                var answer2  =document.querySelector('input[name="secondRadio"]:checked').value
                var answer3 = document.querySelector('input[name="thirdRadio"]:checked').value
                var answer4 = document.querySelector('input[name="fourthRadio"]:checked').value
                var answer5 = document.querySelector('input[name="fifthRadio"]:checked').value
                answers.push(answer1);
                answers.push(answer2);
                answers.push(answer3);
                answers.push(answer4);
                answers.push(answer5);

                if (answer1 === "some" && answer2 === "some" && answer3 === "some" && answer4 ==="some" && answer5 === "some")  {
                        showResults.innerHTML = "You are not bad, you should keep it up"
                }else if(answer1 === "never" && answer2 == "never" & answer3 == "never" & answer4 == "never" & answer5 == "never"){
                        showResults.innerHTML = "Looks like you fine there are no symptoms of depression yet";
                }else if (answer1 === "most" && answer2 == "most" & answer3 == "most" & answer4 == "most" & answer5 == "most") {
                        showResults.innerHTML = "maybe you should contact some doctors. It seems like you have symptoms of Depression";
                }else if (answer1 === "most" && answer2 =="some" && answer3 === "never" && answer4 === "some" && answer5 ==="most") {
                        showResults.innerHTML = "Looks like you have no symptomps of depression";
                }else if (answer1 === "some" && answer2 =="never" && answer3 === "never" && answer4 === "some" && answer5 ==="most") {
                        showResults.innerHTML = "google";

                }
                


                console.log(answers);
        })
})

