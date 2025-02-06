// Free Drinks
// - Burger more than 500tk: free Coke
// - Else Coke: 30tk

// task no: 01;

let taka = 501;
let Burger = 500;

if(Burger === taka){
    console.log('free Coke');
}
else{
    console.log('coke 30tk')
}

// output ok
//-------------------------------------------------------------

// Grade Calculator
// Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:
//     A: 90-100
//     B: 80-89
//     C: 70-79
//     D: 60-69
//     F: 0-59

// task no: 03;

let mark = 70;
if(mark >=90){
    console.log('A')
}
else if(mark >=80 ){
    console.log('B')
}
else if(mark >=70 ){
    console.log('C')
}
else if(mark >=60){
    console.log('D')
}
else{
    console.log('F')
}

// output ok 
// -------------------------------------------------------------------

// if you get more then 80 then inside your friend score. 
//     If your friend get more than 80. then go for a lunch. 
//     if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
//     if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
//     if your friend get less than 40, block your friend
// if you get less than 80 go to home and sleep and act sad
// Note: 
// use nested if-else-if-else
// */

// task no : 04;

let friendScore = 80 ;

if(friendScore == 80){
    console.log('then go for a lunch');
   if(friendScore >= 60){
    console.log('good luck next time');
   }else{
    console.log("keep your friend's message unseen")
   }
 
   


}
else{
    console.log('block');
}

// vul ase program e 

// ----------------------------------------------------------------

// you have two numbers in two variables, called: num1, num2
// now declare a variable called result. 
// if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.
// write a simple if-else. 
// also, write it using ternary operator.
//  */

// task no: 05

let num1 = 50;
let num2 = 60;

if(num1 > num2){
    console.log("multi the result is:", num1*2)
}
else{
    console.log("sum the result:", num1+num2)
}

// output okay

// ----------------------------------------------------------------

// Ticket fare Calculator
//     - Children (age < 10): free
//     - Students get a 50% discount
//     - Senior citizens (age >= 60) gets a 15% Discount
//     - Otherwise Regular ticket fare 800 tk
// */

// task no: 06

let age = 9;
let tk = 800;

if(age >= 60){
    console.log(tk * 15 /100)
}
else if(age >= 11){
    console.log(tk * 50 /100)

}

else if(age < 10){
    console.log('free')
        
}

else{
    console.log(`Regular ticket fare ${800} tk`)
}

