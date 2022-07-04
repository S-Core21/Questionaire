let questions = ['What name do you always call your boyfriend?', 'How long have you two been together?', 'Is he your boyfriend or your everything?', 'What is his favourite carbohydrate protein mixture', 'What did he save your Whatsapp number as?', 'How much do you think he loves you on a scale of 1-100', "What's his fav Color?", 'What is his Surname?', 'is he terrible at Singing, Yes/No?', 'This is silly, Which do you think he prefers Ass or Boobs  😂 ', 'Do you think he is making enough effort to keep you forever, Yes/No', "What's his fav snack", 'Do you believe your the best thing thats happened to him, Yes/No', 'Whats that one meal you love that he does not', 'Lastly, Do you love him Yes/Yes']
let random = Math.floor(Math.random() * 5)
let randomQuestions = questions[random]
let randomAnswers =  Math.floor(Math.random() * 2)
let question = document.querySelector('#ques');
console.log(randomQuestions)
let quesData = []
let inp = document.querySelector('#ans')
let correct = document.querySelector('#correct')


// let answerPool1= ['Babe', 'My Babe']



function start (){
    document.querySelector('span').style.display = 'block'
    document.querySelector('#sub').style.display = 'block'
    question.textContent = questions[0]
}
function questionaire (){
    quesData.push(inp.value)
    console.log(quesData)
    correct.textContent = ' '
    if(question.textContent == questions[0] && inp.value == 'Babe'){
        correct.textContent = 'Correct'
       inp.value = ''
        
    }else if(question.textContent == questions[0] && inp.value !== 'Babe'){
        correct.textContent = 'Wrong'
       inp.value = ''   
    }
    
    // 
    if(question.textContent == questions[1] && inp.value == 'Six months'){
        correct.textContent = 'Correct'
       inp.value = ''
        
    }else  if(question.textContent == questions[1] && inp.value !== 'Six months'){
        correct.textContent = 'Try again my Love'
       inp.value = ''
        
    }
    // 
    if(question.textContent == questions[2] && inp.value == 'My Everything'){
        correct.textContent = 'Correct'
       inp.value = ''
        
    }else if(question.textContent == questions[2] && inp.value !== 'My Everything'){
        correct.textContent = 'My queen you can do this'
       inp.value = ''
    }
    // 
    if(question.textContent == questions[3] && inp.value == 'Yam and Beans'){
        correct.textContent = 'Correct'
       inp.value = ''
        
    }else if(question.textContent == questions[3] && inp.value !== 'Yam and Beans'){
        correct.textContent = 'Babe you know it common'
       inp.value = ''
        
    }
    
    // 
    if(question.textContent == questions[4] && inp.value == 'My Queen'){
        correct.textContent = 'Correct'
       inp.value = ''
        
    }else if(question.textContent == questions[4] && inp.value !== 'My Queen'){
        correct.textContent = 'Your a Fish'
       inp.value = ''
        
    }
   
    // 
    if(question.textContent == questions[5] && inp.value == '100'){
        correct.textContent = 'Correct'
       inp.value = ''
        
    } else  if(question.textContent == questions[5] && inp.value == '100'){
        correct.textContent = 'Try again my Love'
       inp.value = ''
        
    }
    
    // 
    if(question.textContent == questions[6] && inp.value == 'Black'){
        correct.textContent = 'Correct'
       inp.value = ''
        
    }else if(question.textContent == questions[6] && inp.value !== 'Black'){
        correct.textContent = 'Dont be a fish'
       inp.value = ''
        
    }
    
    // 
    if(question.textContent == questions[7] && inp.value == 'Ogbonna'){
        correct.textContent = 'Correct'
       inp.value = ''
    }else if(question.textContent == questions[7] && inp.value !== 'Ogbonna'){
        correct.textContent = 'Do you want to gimme Okeaka'
       inp.value = ''
    }
   
    // 
    if(question.textContent == questions[8] && inp.value == 'Yes'){
        correct.textContent = 'Correct'
       inp.value = ''
        
    }else if(question.textContent == questions[8] && inp.value !== 'Yes'){
        correct.textContent = 'i will flog you o'
       inp.value = ''
        
    }
    
    // 
    if(question.textContent == questions[9] && inp.value == 'Both'){
        correct.textContent = 'Correct'
       inp.value = ''
        
    } else  if(question.textContent == questions[9] && inp.value !== 'Both'){
        correct.textContent = 'Try again babe'
       inp.value = ''
        
    }
    
    // 
    if(question.textContent == questions[10] && inp.value == 'Yes'){
        correct.textContent = 'Correct'
       inp.value = ''
        
    }
   
    // 
    if(question.textContent == questions[11] && inp.value == 'Meatpie'){
        correct.textContent = 'Correct'
       inp.value = ''
        
    } else if(question.textContent == questions[11] && inp.value !== 'Meatpie'){
        correct.textContent = 'Your my favsnack'
       inp.value = ''
        
    }
   
    // 
    if(question.textContent == questions[12] && inp.value == 'Yes'){
        correct.textContent = 'Correct'
       inp.value = ''
        
    }
    
    // 
    if(question.textContent == questions[13] && inp.value == 'Okra'){
        correct.textContent = 'Correct'
       inp.value = ''
        
    } else if (question.textContent == questions[13] && inp.value !== 'Okra'){
        correct.textContent = 'Try again baby'
       inp.value = ''
        
    }
    
    // 
    if(question.textContent == questions[14] && inp.value == 'Yes'){
        correct.textContent = 'I Love you more'
       inp.value = ''
        
    }else if(question.textContent == questions[14] && inp.value !== 'Yes'){
        correct.textContent = 'I Love you more'
       inp.value = ''   
    }
}
function a(a){
   correct.textContent = ' '
    question.textContent = questions[a]
}
console.log(questions[14])