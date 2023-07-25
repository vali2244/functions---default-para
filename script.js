// / Heap- Memory are in Non-primitve Data Types
let a  ={
    name :"vali"
}
let b = a

a.name="subahan"

console.log(a,b)

// / Stack- Memory are in primitve Data Types
let A = 100
let B = A

A=200
console.log(A,B)

// global scope

function callMe(){

    // local scope
    Callme2()
    console.log('hello')
    console.log('world')
    console.log('vali')
    console.log('subahan')

}

function Callme2(){
    console.log(1+2)
}

callMe()

function not(){
    console.log("king")
}
not()

const MyName1 ="vali"

function myName ()
{
 const MyName1 ="vishal"
    console.log(MyName1)
}

function MyNAme2(){
    const MyName1 ="hussain"
    console.log(MyName1)
}

MyNAme2()
myName()

function hello (){
    console.log('hello')
}

hello();

const MyFnc=()=>{

}

function Hrllo(){

}

const Hello =()=>{

}

// call back
const Name  ="hussain"

const CalltheNAme =(para)=>{
console.log(para)
}

const MYName  =()=>{
    CalltheNAme(Name)
}

MYName

// Closures  --- Lexical Scoping

function hello (){

const newName ="vali"
function CallName (){
console.log(newName)
}
return CallName
}

const ty  = hello()
ty()

function Hello() {
  const MyValue = document.getElementById("myInp").value;
  const MyNewNUmber = Number(MyValue);
  if (MyNewNUmber <= 20) {
  alert("we have  a prodduct of pen of 20 rupees");
  } else if (MyNewNUmber <= 40) {
    alert("we have  a prodduct of Book of 40 rupees");
  } else if (MyNewNUmber <= 100) {
    alert("we have  a prodduct of Geometry Box of 100 rupees");
  } else {
    alert("we dont have any product on this price");
  }
}


function add(a,b){
    console.log(a+b)
    
}
add(200,300)
 
sum=function add(b,a){
    console.log(b+a)
}
sum(200,100)

function mul(a,b){
    console.log(a*b)
}
mul(59,70)


 div=function(a,b){
console.log(a/b)
}
div(10,5)
(
 function product(d,e){
console.log(d+e)
 }
 )(50,20)




product=(a,b)=>{
    console.log(a+b)
}
product(200,600)


product=(a,b)=>a*b
console.log(product(20,30))
product=a=>a*a*a
console.log(product(8))
function callyou (){
callmy()
    console.log("mahi")
}

function callmy(){
    console.log(4+8)
}
callyou()

// default paramters

function sub(a,b=1){
    console.log(a,b,a-b)
}
sub(10)


function add(a,b=1){
    console.log(a,b,a+b)
}
add(10)
function add(a=5,b=8){
    console.log(a,b,a+b)
}
add()

// rest parameters

