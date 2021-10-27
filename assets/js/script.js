questionIdCounter = 0

var questionObj = [
    { 
        question: "2+2?",
        opton1 : "1",
        opton2 : "2", 
        opton3 : "4",
        opton4 : "3"
        },
    
    

{ 
    question: "2/2?",
    answers: [
    {option1: "1", correct: true},    
    {option2: "2", correct: false},
    {option3: "4", correct: false},
    {option4: "3", correct: false},
    ]

},

{ 
    question: "2-2?",
    answers: [
    {option1: "1", correct: false},
    {option2: "0", correct: true},
    {option3: "4", correct: false},
    {option4: "3", correct: false},
    ]

},

{ 
    question: "2*2?",
    answers: [
    {option1: "1", correct: false},
    {option2: "2", correct: false},
    {option3: "4", correct: true},    
    {option4: "3", correct: false},
    ]
}

]

questionObj.id = questionIdCounter;

questionIdCounter++;


var optionSection = document.querySelector(".option")
var timeSection = document.querySelector(".time")
var modalHeader = document.querySelector(".modal-header")
var modalfooter = document.querySelector(".modal-footer")

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

    for ( var i=0; i < questionObj.length; i++){

        console.log(questionObj[i].question)
        
        // questiions

       
        modalHeader.textContent = questionObj[i].question;

   

        

    }

    // return questionSection
}

var loadOptions = function () {

    for ( var i=0; i < questionObj.length; i++){

        // Options

        console.log(JSON.parse(questionObj[i].answers))
      
        var optionSectionEol = document.createElement("ol");
        var optionSectionElli = document.createElement("li");
        var optionSectionElBtn = document.createElement("button");

        optionbuttonList = optionSectionElli.appendChild(optionSectionElBtn)
        optionSelection = optionSectionEol.appendChild(optionbuttonList)
        optionSelection.className ="btn btn-primary";
        
        optionSelection.setAttribute("value", questionObj[i].answers)
        optionSelection.textContent = questionObj[i].answers

        optionSection.appendChild(optionSelection)
        
         console.log(optionSection)

    }
}

var loadQuestionresult = function (){}

$(".modal-footer").on("click", function()

{ 
    $(".modal-footer").empty()
    $(".option").empty()
    
    loadTimer()
    loadquestions ()
    loadOptions ()
    

    console.log(modalfooter)

})


var startquiz = function() {

    modalHeader.textContent = "Coding Quiz Challenge";

    optionSection.textContent = "Quiz time, try to answer the question within the given time frame"

    var startButtonEl = document.createElement("button");
    startButtonEl.textContent = "Start";
    startButtonEl.className = "btn btn-primary";

    modalfooter.appendChild(startButtonEl);

}


//when the button the start button is clicked 
// questionSection.addEventListener("click", loadquestions);

//load the page with a start button availabe
startquiz()

