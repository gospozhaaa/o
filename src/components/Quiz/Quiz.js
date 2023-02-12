import './Quiz.css';
import React from 'react';
import { useState} from 'react';
var flag = Boolean(false)
 
export const Quiz = () =>{
    const [currentQuestion, setCurrentQustion]= useState (0)
    const [score, setScore] = useState(0)
   
    const handleAnswerOptionClick = (isCorrect) =>{
        if ((isCorrect)&&(currentQuestion == questions.length -1)&&(flag == false)){
            setScore(score+1)
            flag = true
        }
        else if ((isCorrect)&&(currentQuestion == questions.length-1)&&(flag == true)){
            setScore(score)
        }
        else
        if (isCorrect){
            setScore(score+1)
        }
        
        const nextQuestion = currentQuestion +1
        if (nextQuestion <questions.length){
            setCurrentQustion(nextQuestion)
        }
    }   
    const questions =[
         
        {
        questionText:'Кто такие арабы?',//0
        answerOptions: [
            {answerText: "Груп#@$%^&дов слемитсSSSкой этн!@#$%^7^%вой гру)(*&^*ппы, населяющих государRRRства Севе%%?*())рной АфFFFрики и ближнегно Востока", isCorrect: false},
            {answerText: "Это всё из-за вашего КоМпУкТеРа", isCorrect: false},
            {answerText: "я люблю когдффф000....", isCorrect: false},
            {answerText: "А5%аааА", isCorrect: false},
            {answerText: "1000-7И", isCorrect: false},
            {answerText: "Ты туп0й тут нет правильн0г0 0твета", isCorrect: true}
        ]
        },
        
        {
                questionText:'Ты любuuuuuшь арабоuugfry te%в?',//0
                answerOptions: [
                    {answerText: "Я люблю т0льк0 неgggров", isCorrect: false},
                    {answerText: "ЭдвардD л0х", isCorrect: true},
                    {answerText: "Конечн0, оч$нь сиlьно", isCorrect: true},
                    {answerText: "net, не люbлK", isCorrect: false}
                ]
            },
            {
                questionText:'Как тебя зовут??',//0
                answerOptions: [
                    {answerText: "Я nаст0ящий араб", isCorrect: true},
                    {answerText: "Бебр@", isCorrect: true},
                    {answerText: "А меня неt", isCorrect: true},
                    {answerText: "........", isCorrect: true},
                    {answerText: "Во всём вiнов@т Sерgей!", isCorrect: true}
                ]
            },
            {
                questionText:'твой любимый мульт?',//0
                answerOptions: [
                    {answerText: "@нiме", isCorrect: false},
                    {answerText: "пр0 @р@б0в", isCorrect: true},
                    {answerText: "Бр@вL ст@рс", isCorrect: false},
                    {answerText: "Д@ш@-путешEствеnниц@!....", isCorrect: false},
                    {answerText: "лiшь м0нiк@", isCorrect: true}
                ]
            },
            {
            questionText:'Ты у меня в заложниках?',//0
            answerOptions: [
                {answerText: "Нет", isCorrect: false},
                {answerText: "Да", isCorrect: true}
            ]
            }
        ]
    return(
        <div>
        <div className = "quiz" >
        <div className = 'question_section'>
            <div className = "question_count">
                    <span>Вопрос {currentQuestion +1}</span>/{questions.length}
        </div>
            <div className='question_text'>{questions[currentQuestion].questionText}</div>
    </div>
    <div className="answer_section"> </div>
         {questions[currentQuestion].answerOptions.map(
            item =>(<button className= "answer_button" onClick=
            {() => handleAnswerOptionClick(item.isCorrect)}>
                {item.answerText}
            </button>
         ))}
         <div className= "score_section">
    Правильных ответов {score} из {questions.length}
</div>
    </div>
</div>

 

 

   
    )
}