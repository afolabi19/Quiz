questionIdCounter = 0

var questionObj = [
{ 
    question: "Question 1 2+2?",
    option: [ "1",  "2",  "4", "5" ],
    answers: "4"
            },


{ 
    question: "Question 2 2/2?",
    option: [ "3",  "2",  "4", "1"  ],
    answers: "1"
        },

{ 
    question: "Question 3 2-2?",
    option: [ "0",  "2",  "4", "5"  ],
    answers: "0"
        },

{ 
    question: "Question 4 2*2?",
    option: [ "1232",  "2",  "4", "42" ],
    answers: "4"
        },
]


var optionSection = document.querySelector(".option")
var timeSection = document.querySelector(".time")
var modalHeader = document.querySelector(".modal-header")
var modalfooter = document.querySelector(".modal-footer")
var optionSectionOl = document.querySelector("ol")





var loadTimer = function(){



    var timeleft = 60*2

    var timeCountdown = setInterval(function(){

        if (timeleft > 0){
            
        timeSection.textContent = "Time:" + timeleft;
        timeleft-- 
    } else {

        var questiontext = document.createElement("p");
        questiontext.textContent = "Quiz Over"

        questionSection.appendChild(questiontext)

        clearInterval(timeCountdown);


    }

}, 1000);
    
}

var loadquestions = function(){

    console.log(questionIdCounter)

    for ( var i = 0; i < questionObj[questionIdCounter].question.length; i++){ 


        
        modalHeader.textContent = questionObj[questionIdCounter].question;}

}

var loadOptions = function () {

    for ( var i=0; i < questionObj[questionIdCounter].option.length; i++){

    
        var optionSectionElli = document.createElement("li");
        var optionSectionElBtn = document.createElement("button");
        

    
            optionSectionElBtn.textContent = questionObj[questionIdCounter].option[i]; ;

 
            optionSectionElBtn.className = "btn btn-primary modal-footer"

            optionSectionElBtn.value = optionSectionElBtn.textContent

            optionSectionElBtn.id = optionSectionElBtn.value
            
            optionSectionElli.appendChild(optionSectionElBtn)

            optionSectionOl.appendChild(optionSectionElli)

            optionSection.appendChild(optionSectionOl)

            $(".modal-footer").on("click", handler_nextquestion)

 
            
         console.log(optionSection)

    }
}

var loadQuestionresult = function (){


    modalfooter.textContent = questionObj[questionIdCounter].answers;

   



// }
//     for ( var i=0; i < questionObj[questionIdCounter].answers.length; i++){

//         console.log(questionObj[questionIdCounter].answers[i])

//         console.log(selectedButton)

//         var a = selectedButton

//         var b = questionObj[questionIdCounter].answers[i].textContent

//         console.log(b)

//     if (selectedButton.textContent === questionObj[questionIdCounter].answers[i].textContent) {

        

//         modalfooter.textContent = "Previous answer was right"
//     } else {

//         modalfooter.textContent = "Previous answer was wrong"
//     }

//     }
}

var handler_start = function(){ 

    $(".modal-footer").empty()
    $(".option").empty()
    
    loadTimer()
    loadquestions ()
    loadOptions ()

    console.log(modalfooter)

}

var startquiz = function() {

    modalHeader.textContent = "Coding Quiz Challenge";

    optionSection.textContent = "Quiz time, try to answer the question within the given time frame"

    var startButtonEl = document.createElement("button");
    startButtonEl.textContent = "Start";
    startButtonEl.className = "btn btn-primary start";

    modalfooter.appendChild(startButtonEl);

    $(".modal-footer").on("click", handler_start)

}


var handler_nextquestion = function()

{
  
    loadQuestionresult()

    $("li").remove()

    questionIdCounter++;

    console.log(questionIdCounter)

    loadquestions ()
    loadOptions ()

}


//load the page with a start button availabe
startquiz()

