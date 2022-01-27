//Show or hide the quiz

function validateName() {
  var name = document.getElementById("fullname").value;
  if (name === ""){
    alert("Introduce your name");
    return false;
  } else {
    return true;
  }
}

function show_hide(){
  if (validateName()){
    if (document.getElementById("question").style.display == 'none'){
      document.getElementById("question").style.display = 'block';
      document.getElementById("button").style.display = 'none';
    }else{
      document.getElementById("question").style.display = 'none';
      document.getElementById("button").style.display = 'block';
    }
  }
}

function validateQ1(){
  var x = document.forms.Quiz.q1.value;
  if (x === ""){
    alert("You have to chose an answer in the question 1");
    return false;
  } else {
    return true;
  }
}

function validateQ2(){
  var x = document.forms.Quiz.q2.value;
  if (x === ""){
    alert("You have to chose an answer in the question 2");
    return false;
  } else {
    return true;
  }
}

function validateQ3(){
  var x = document.forms.Quiz.q3.value;
  if (x === ""){
    alert("You have to chose an answer in the question 3");
    return false;
  } else {
    return true;
  }
}

function validateQ4(){
  var x = document.forms.Quiz.q4.value;
  if (x === ""){
    alert("You have to chose an answer in the question 4");
    return false;
  } else {
    return true;
  }
}

function validateQuestions() {
  //if any of the validation functions return `false` indicate the data is not valid.
  if (validateQ1() && validateQ2() && validateQ3() && validateQ4()){
    return true;
  }else{
    return false;
  }
}

function showFeedback(score){
  document.forms.Quiz.style.display = "none";
  body = document.getElementById("form");
  var name = document.getElementById("fullname").value;
  if (score === 1){
    body.innerHTML = '<h2 id="form">You have to study ' + name + '!! Your score was... ' + score + ' out of 4</h2>';
  }else if (score == 2) {
    body.innerHTML = '<h2 id="form">Oof!! that was close '+ name + '. Your score was... ' + score + ' out of 4</h2>';
  } else if (score === 3) {
    body.innerHTML = '<h2 id="form">Nice done' + name + '!! Your score was... ' + score + ' out of 4!!</h2>';
  } else if (score === 4){
    body.innerHTML = '<h2 id="form">Incredible ' + name + '!! your score was ' + score + ' out of 4. Congratulations!!!</h2>';
  }
}

function checkAnswers(){
  quiz = document.forms.Quiz.elements;
  var score = 0;
  if (validateQuestions()){
    answer1 = quiz.q1.value;
    if (answer1 == "answer3"){
      score = score + 1;
    }
    answer2 = quiz.q2.value;
    if (answer2 == "answer3"){
      score = score + 1;
    }
    answer3 = quiz.q3.value;
    if (answer3 == "answer3"){
      score = score + 1;
    }
    answer4 = quiz.q4.value;
    if (answer4 == "answer2") {
      score = score + 1;
  }
  showFeedback(score);
}
}

/* Slider */

