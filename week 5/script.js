/*console.log("hello world again");
let name ="jade";
console.log("my name is", name);
// this is a comment

/* multiple line comment
fdoighd
gdg 

prompt("what is your name?", name)

let myName = prompt("What is your name?");

let city = prompt ('where do you live?");
console.log(city);

const assignment1 = "20";
const assignment2 = "30";
const assignment3 = "20";


let total = assignent1 + assignment2 +assignment3;
console.log("my total", total);

let total = 
    parseInt(assignment1) + parseInt(assignment2) + parseInt(assignment3);
console.log("my total", total);

let total2 = add();
function add() {
    let a = 30;
    console.log(a);
}
console.log(a); */

const body = document.querySelector("body")
function checkWeather() {
let temperature = prompt("enter today's temperature");
if(temperature<20 && temperature>=10)
{
    console.log("it feels cold");
}
else if (temperature>=20 && temperature<30)
{
    console.log("it feels warm and sunny");
}
else if(temperature>30)
{
    console.log ("it is boiling");
}
else if (temperature < 10) {
    console.log("it is freezing");
}
}
