var one = document.getElementById('one')
var two = document.getElementById('two')
var three = document.getElementById('three')
var four = document.getElementById('four')
var five = document.getElementById('five')
var six = document.getElementById('six')
var seven = document.getElementById('seven')
var eight = document.getElementById('eight')
var nine = document.getElementById('nine')
var zero = document.getElementById('zero')
var add = document.getElementById('add')
var sub = document.getElementById('sub')
var multi = document.getElementById('multi')
var divi = document.getElementById('divi')
var clear = document.getElementById('clear')
var equal = document.getElementById('equal')



var calus=document.querySelector('.calus')
calus.addEventListener('click', display)
clear.addEventListener('click',clear)
equal.addEventListener('click', result)

var input= document.querySelector('.calus')
var finalresult=document.querySelector('#input')
result.finalresult=""
document.body.addEventListener('keypress',keypress)


function display(event){
    var span = document.querySelector('#span')
    if(event.target.value===undefined){
       span.innerHTML = span.innerHTML+ ""
    }else{
        span.innerHTML= span.innerHTML+event.target.value;
    }

}
function clear(){
    var span = document.querySelector("#span")
    var finalresult = document.querySelector("#input")
    span.innerHTML=""
    finalresult.value = '0'
}
function result(){
    var span = document.querySelector('#span'); 
    var finalresult = document.querySelector('#input')
    finalresult.value = eval(span.innerText);
}
function calculation(num1,operator,num2){
    if(operator === "+"){
        return[num1+num2]
    }else if(operator === "-"){
        return num1-num2    
    }else if(operator === "*"){
        return num1*num2
    }else if(operator === "/"){
        return num1/num2
    }
}

function keypress(event){
    var span = document.querySelector("#span");
    if((event.key<10 && event.key>=0) || event.key==="*" || event.key==="-" || event.key==="+" || event.key==="/" ){
        span.innerText += event.key
    }else if(event.key==="Enter"){
        result()
    }
}