const quiz=[{
    question:"what is full form of java",
    a:"java script",
    b:"java super",
    c:"super",
    d:"server side",
    ans:"ans1"
},{
    question:"what is full form of HTML",
    a:"super",
    b:"hyper text transfer protocol",
    c:"super",
    d:"server side",
    ans:"ans4"
},{
    question:"what is full form of web",
    a:"super",
    b:"hyper text transfer protocol",
    c:"world wide web",
    d:"server side",
    ans:"ans3"
},{
    question:"what is full form of bank",
    a:"super",
    b:"hyper text transfer protocol",
    c:"super",
    d:"borrow",
    ans:"ans4"
}
]

question= document.querySelector("#question")
 option1= document.querySelector("#option1")
 option2= document.querySelector("#option2")
 option3= document.querySelector("#option3")
 option4= document.querySelector("#option4")
 res=document.querySelector("#result")
 submit= document.querySelector("#btn")
  var result=0

 var questionNo=0

 
 const loadQuestion=()=>{
  question.innerHTML=  quiz[questionNo].question
   option1.innerHTML =quiz[questionNo].a
   option2.innerHTML =quiz[questionNo].b
   option3.innerHTML =quiz[questionNo].c
   option4.innerHTML =quiz[questionNo].d
 }


 loadQuestion()

 submit.addEventListener("click",function(){
 
 
   returnAnswer= getAnswer()
     //   console.log(returnAnswer)
    
    if(returnAnswer==quiz[questionNo].ans)
    {
       // alert("your ans is correct click ok for next one")
         result=result+1
         console.log(result)
         if(questionNo<3)
        {
                questionNo=questionNo+1
        }
        else
        {
          questionNo=0

          res.textContent=result
          if(result>=2)
          {
           alert("You are passed")
          }
          else
          {
            alert("You are failed")
          }
        } 

    }
    else if(returnAnswer!=quiz[questionNo].ans)
    {
       // alert("you submit wrong ans")
       if(questionNo<3)
        {
                questionNo=questionNo+1
        }
        else
        {
          questionNo=0

          res.textContent=result
          if(result>=2)
          {
           alert("You are passed")
          }
          else
          {
            alert("You are failed")
          }
        } 

    }

            loadQuestion()
            setAllRadio()
             document.getElementById("time").innerHTML=20
 })

 const getAnswer=function()
 {
    var correct=""
    
      answer= document.querySelectorAll(".ans")
    answer.forEach(function(ans){
          if(ans.checked==true)
          {
                correct=ans.id
          }
    })
    return correct
 }


 function setAllRadio()
 {
    answer= document.querySelectorAll(".ans")

    answer.forEach(function(ans){
        ans.checked=false
    })
 }
 
 function setTime()
 {
     x= document.getElementById("time").innerHTML
     
      x=parseInt(x)-1
      document.getElementById("time").innerHTML=x
     
      if(x==0)
     {
      if(questionNo<3)
      {
        questionNo=questionNo+1
        loadQuestion()
         document.getElementById("time").innerHTML=20
      }
      else
      {
        questionNo=0
        loadQuestion()
        document.getElementById("time").innerHTML=20
      }
     }
     
 }
 setInterval(setTime,1000)
 
   
