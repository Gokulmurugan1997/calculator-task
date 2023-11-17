let container=document.createElement("div");
container.setAttribute("class","container");
container.innerHTML="";
document.body.append(container);

let calculator=document.createElement("div");
calculator.setAttribute("class","calculator");
calculator.innerHTML="";
container.appendChild(calculator);

let form=document.createElement("form");
form.innerHTML="";
calculator.appendChild(form)

let display=document.createElement("div");
display.setAttribute("class","display");
display.innerHTML="";
form.appendChild(display);


let displayin=document.createElement("input");
displayin.setAttribute("type","text");
displayin.setAttribute("name","display");
displayin.innerHTML="";
displayin.setAttribute("class","display");
display.appendChild(displayin);

let row1=document.createElement("div");
row1.innerHTML="";
form.appendChild(row1);

let AC=document.createElement("input");
AC.setAttribute("type","button");
AC.setAttribute("value","AC");
AC.setAttribute("class","operator");
AC.addEventListener("click", function AC(event){
    display.innerText=" ";
})
row1.appendChild(AC);

let DE=document.createElement("input");
DE.setAttribute("type","button");
DE.setAttribute("value","DE");
DE.setAttribute("class","operator");
DE.addEventListener("click", function DE(event){
    display.innerText=" ";})
row1.appendChild(DE);

let dot=document.createElement("input");
dot.setAttribute("type","button");
dot.setAttribute("value",".");
dot.setAttribute("class","operator");
dot.addEventListener("click", function dot(event){
    display.innerText+=".";})
row1.appendChild(dot);

let divide=document.createElement("input");
divide.setAttribute("type","button");
divide.setAttribute("class","operator");
divide.setAttribute("value","/");
divide.addEventListener("click", function divide(event){
    display.innerText+="/";})
row1.appendChild(divide);

let row2=document.createElement("div");
row2.innerHTML="";
form.appendChild(row2);

let Seven=document.createElement("input");
Seven.setAttribute("type","button");
Seven.setAttribute("value","7");
Seven.addEventListener("click", function Seven(event){
    display.innerText+='7';})
row2.appendChild(Seven);

let Eight=document.createElement("input");
Eight.setAttribute("type","button");
Eight.setAttribute("value","8");
Eight.addEventListener("click", function Eight(event){
    display.innerText+="8";})
row2.appendChild(Eight);

let Nine=document.createElement("input");
Nine.setAttribute("type","button");
Nine.setAttribute("value","9");
Nine.addEventListener("click", function Nine(event){
    display.innerText+="9";})
row2.appendChild(Nine);

let star=document.createElement("input");
star.setAttribute("type","button");
star.setAttribute("value","*");
star.setAttribute("class","operator");
star.addEventListener("click", function star(event){
    display.innerText+="*";})
row2.appendChild(star);

let row3=document.createElement("div");
row3.innerHTML="";
form.appendChild(row3);

let four=document.createElement("input");
four.setAttribute("type","button");
four.setAttribute("value","4");
four.addEventListener("click", function four(event){
    display.innerText+="4";})
row3.appendChild(four);

let five=document.createElement("input");
five.setAttribute("type","button");
five.setAttribute("value","5");
five.addEventListener("click", function five(event){
    display.innerText+="5";})
row3.appendChild(five);

let six=document.createElement("input");
six.setAttribute("type","button");
six.setAttribute("value","6");
six.addEventListener("click", function six(event){
    display.innerText+="6";})
row3.appendChild(six);

let sub=document.createElement("input");
sub.setAttribute("type","button");
sub.setAttribute("value","-");
sub.setAttribute("class","operator");
sub.addEventListener("click", function sub(event){
    display.innerText+="-";})
row3.appendChild(sub);

let row4=document.createElement("div");
row4.innerHTML="";
form.appendChild(row4);

let one=document.createElement("input");
one.setAttribute("type","button");
one.setAttribute("value","1");
one.addEventListener("click", function one(event){
    display.innerText+="1";})
row4.appendChild(one);

let two=document.createElement("input");
two.setAttribute("type","button");
two.setAttribute("value","2");
two.addEventListener("click", function two(event){
    display.innerText+="2";})
row4.appendChild(two);

let three=document.createElement("input");
three.setAttribute("type","button");
three.setAttribute("value","3");
three.addEventListener("click", function three(event){
    display.innerText+="3";})
row4.appendChild(three);

let add=document.createElement("input");
add.setAttribute("type","button");
add.setAttribute("value","+");
add.setAttribute("class","operator");
add.addEventListener("click", function add(event){
    display.innerText+='+';})
row4.appendChild(add);

let row5=document.createElement("div");
row5.innerHTML="";
form.appendChild(row5);

let zero=document.createElement("input");
zero.setAttribute("type","button");
zero.setAttribute("value","00");
zero.addEventListener("click", function zero(event){
    display.innerText+="00";})
row5.appendChild(zero);

let zero1=document.createElement("input");
zero1.setAttribute("type","button");
zero1.setAttribute("value","0");
zero1.addEventListener("click", function zero1(event){
    display.innerText+="0";})
row5.appendChild(zero1);

let res=document.createElement("input");
res.setAttribute("type","button");
res.setAttribute("value","=");
res.setAttribute("class","equal operator");
res.addEventListener("click", function res(event){
    display.innerHTML=display.value=eval(display.value);})
row5.appendChild(res);