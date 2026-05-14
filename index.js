// command | variable_name| assignment_operator| data(string|number|boolean|array|object)
    let         a                   =           "Text 1";
    // Or
    var         b                   =               8;
    // or
    const       c                   =           [4,"text"];
    // or
                d                   =           "Text 4";

// This is an object
const Student1 = {
    // Objects are written in key:value pair
    // properties explain what the object has
    firstname: "Andrew",
    lastname: "Uche",
    complextion: "Melanin",
    Age: 54,
    class: "front-end web development",
    familyMembers: ["John", "Mary", "Faith"]

    // methods explain what the object can do
    // eat
    // drink
    // jump
}

// This is how to access the property of an object
// console.log(Student1.firstname);

// Array
let andrew = [40,60,50]

// Object
// const andrew = {
//     physics: 40,
//     biology: 60,
//     maths: 50
// }

// How to fetch a HTML Element in javascript
// let headingElement = document.getElementById("text")
    // OR
let headingElement = document.querySelector("#text")

// How to write a function
//command  function_name(parameter)
function   greet()       
{
    // block of code
    let student = "Uche"; //function scope can be accessible only within the function they were defined
        // How to change the content of HTML elements
    // headingElement.innerHTML = `<p> Uche </p>`;
        // OR
    headingElement.innerText = student;
    return student; //return statement is used to make the student variable useable outside the function
}

// This is how to access the variable after using a return statement
student = greet();

// How to write an conditional statement
// if (condition)
// {
//     block of code for true
// }else{
//     block of code for false
// }


// Example of conditional statment using Grading System
let score = 55;

// Grading Rule
// A = 100 to 91
// B = 90 -71
// C = 70 - 51
// D = 50 - 36
// F = 35 - 0
// Invalid  e.g -4, 500

// Grading System                     
if (score <= 100 && score > 90)
{
    window.alert("A");
}
else if (score <= 90 && score > 70)
{
    window.alert("B");
}
else if (score <= 70 && score > 50)
{
    window.alert("C");
}
else if (score <= 50 && score > 35)
{
    window.alert("D");
}
else if (score <= 35 && score > 0)
{
    window.alert("F");
}
else
{
    window.alert("Invalid score");
}


// Loops
// Task: fetch the container holding the image from HTMl and display image 10 times
let imageContainer = document.getElementById("image_container");

// using for loop
//  1       2       4
// for(i=1; i <= 10; i++){
// //      3
//     imageContainer.innerHTML += `<img src="./images/hero_img_1.png" alt="">`
// }

// using while loop
// let i = 1;

// while(i <= 10){
//     imageContainer.innerHTML += `<img src="./images/hero_img_1.png" alt="">`
//     i++
// }

// using do while loop
let i = 1
do {
    imageContainer.innerHTML += `<img src="./images/hero_img_1.png" alt="">`
    i++
}
while (i <= 10)


// Array methods (pop, push, length, shift, unshift)
//index             0          1        2       3
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Pineapple");
// console.log(fruits);
// console.log(fruits[2])

// Object with properties and methods
const Car = {
    // Properties
    name:"Fiat",
    model: 500,
    weight: "850kg",
    color: "White",

    // Methods
    start: function(){
        window.alert("The car has started");
    },

    drive: function(){
        Window.alert("The car is driving");
    },

    break: function(){
        window.alert("The car is slowing down");
    },

    stop: function(){
        window.alert("The car has stopped");
    }
}

// How to call a method of an object
// console.log(Car.break());

// API
// Real life example of getting data from an server and displaying it in frontend

// Step1: Fetch elements and store them in a variable
let NameElement = document.getElementById('name');
let UsernameElement = document.getElementById('username');
let PhoneElement = document.getElementById('phone');
let EmailElement = document.getElementById('email');
let WebsiteElement = document.getElementById('web');
let CityElement = document.getElementById('city');
let StreetElement = document.getElementById('street');
let CodeElement = document.getElementById('code');

// step 2: send API request and display the data
// API request using Jquery
$.ajax({
    // server to make request to
    url:"https://jsonplaceholder.typicode.com/users",
    // kind of request to send
    method: "GET",
    // what should happen if there is a response
    success: function(data){
        // display the data on console
        console.log(data);
        // console.log(data[4]);
        // modify the HTML element and display the name property of the data[index] object
        NameElement.innerText = data[6].name;
        UsernameElement.innerText = data[6].username;
    },
    // what should happen if there is an error
    error: function(error){
        console.lof(error);
    }
})