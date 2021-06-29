const question = [
    {
        quest: '1) Which of the following is not a noun?',
        option1: 'Ada',
        option2: 'Bank',
        option3: 'He',
        option4: 'Emeka',
        answer: 'option3'
    },  
    {
       quest: '2) Which of the following is my Nickname?',
       option1: 'Ada',
       option2: 'Uche',
       option3: 'Hen',
       option4: 'Eagle',
       answer: 'option4'
   },
   {
    quest: '3) Where is the headquarters of the world bank situated?',
    option1: 'Washington DC',
    option2: 'Nigeria',
    option3: 'Hungray',
    option4: 'England',
    answer: 'option1'
}];

let startButton = document.getElementById('startBtn');
startButton.innerHTML = "Start";
let questionContainer = document.getElementById('questionContainer');
let nextButton = document.getElementById('nextBtn');
let prevButton = document.getElementById('PreviousBtn');

startButton.addEventListener('click', triggerStartButon);
//questionContainer.style.display = "none";

function triggerStartButon(){
    startButton.classList.add('hide');
    questionContainer.classList.remove('hide');
    prevButton.classList.add('hide');
    // if((question.length-1) == 0){
    //     loadQuestion();
    // }else{
    //     prevButton.classList.remove('hide');
    //     loadQuestion();
    // }
    
    //prevButton.classList.add('hide');
}
let index = -1;
let score = 0;
let resultInfo = document.getElementById('result');
function loadQuestion(){
    index ++;
    let questions = document.getElementById('questions');
    questions.innerHTML = `<h1>${question[index].quest}</h1>`;

    let Options = document.getElementById('answerContainer');
    Options.innerHTML = `
    <div>
    <div><input type="radio" name = "option" value="option1">${question[index].option1}</div>
    <div><input type="radio" name = "option" value="option2">${question[index].option2}</div>
    <div><input type="radio" name = "option" value="option3">${question[index].option3}</div>
    <div><input type="radio" name = "option" value="option3">${question[index].option4}</div>
    </div>`;
    nextButton.innerHTML = "Next";
    prevButton.innerHTML = "Previous";
    timing = setInterval(timer,500);
}
nextButton.addEventListener('click', triggerNextButon);
prevButton.addEventListener('click',triggerPrevButton);
function triggerNextButon(){
    answerCheck();
    if((question.length-1) ==index){
        prevButton.classList.add('hide');
        nextButton.innerHTML = "Submit";//This should show immediately I'm in the last question
        nextButton.addEventListener('click',outputScore);
    }
    else if ((question.length-1) !=index){
        
        loadQuestion();
    }
    else{
    }
}
function triggerPrevButton(){//I have to make it go back to the previous question
    index++
  if(index){
      index--
    loadQuestion();
    triggerNextButon();
  }
}
function answerCheck(){
    let toCheck = document.querySelector('input[type= "radio"]:checked');
    if(!toCheck){
        alert("Pick an option")
    }
    else{ 
        if((question[index].answer) == toCheck.value){
            score +=10;
            loadQuestion();
        }else{
            score += 0;
            loadQuestion();
        }
    }
}
function outputScore(){
    questionContainer.classList.add('hide');
    let grade = "";
    if(score >= 0 && score <= 10){
        grade = `F`;
    }
    if(score >= 10 && score <=20){
        grade = `D`;
    }
    else{
        grade = `A`;
    }
    resultInfo.innerHTML = `<h1>You scored ${score}, therefore you got a ${grade} </h1>`
}
let totalTime = 60*3;
let c_mins = parseInt(totalTime/60);
let c_secs = parseInt(totalTime%60);

function timer(){
    document.getElementById('demo').innerHTML = "Time Left:"+ c_mins + " minutes "+ c_secs+ " seconds";
    if(totalTime == 0 ){
        clearInterval(timing);
        outputScore();
    }else{
        totalTime--
        c_mins = parseInt(totalTime/60);
        c_secs = parseInt(totalTime%60);
    }

}