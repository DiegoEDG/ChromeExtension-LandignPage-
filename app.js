let menu=document.getElementById('menu')
let btn_menu=document.getElementById('button-menu')
let btn_close=document.getElementById('button-close')
let logo=document.getElementById('logo')
let question_button1=document.getElementById('question-button-1')
let question_button2=document.getElementById('question-button-2')
let question_button3=document.getElementById('question-button-3')
let question_button4=document.getElementById('question-button-4')
let answer1=document.getElementById('answer-1')
let answer2=document.getElementById('answer-2')
let answer3=document.getElementById('answer-3')
let answer4=document.getElementById('answer-4')

btn_menu.addEventListener("click",function() {
  menu.classList.toggle("hide")
  logo.classList.toggle("hide")
  btn_menu.classList.toggle("hide")
})
btn_close.addEventListener("click",function() {
  menu.classList.toggle("hide")
  logo.classList.toggle("hide")
  btn_menu.classList.toggle("hide")
})
question_button1.addEventListener("click",function() {
  answer1.classList.toggle("hide")
})
question_button2.addEventListener("click",function() {
  answer2.classList.toggle("hide")
})
question_button3.addEventListener("click",function() {
  answer3.classList.toggle("hide")
})
question_button4.addEventListener("click",function() {
  answer4.classList.toggle("hide")
})