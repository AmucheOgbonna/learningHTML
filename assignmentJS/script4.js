//To calculate the area of a Trapezium
function calculateTrapezium(lenght, breadth, height){
    let half= 0.5;
    let [a,b,h] = [lenght, breadth, height];
    return (half*(a + b))* h;
}
let calTrapezium = calculateTrapezium(20,14,12);
console.log(calTrapezium);
document.write(`<h1>${calTrapezium}</h1>`);
//Task Completed

//Using the infomation in chapter 4 to complete the second task in chapter 6
function ageRange(age, name){
    let [ag,nam] = [age,name]
    let result;
    if(age >= 0 && age <= 12){
        result = `My ${nam} age is ${ag} and falls within the range
        0-12`;
    }
    if (age >= 13 && age <=19){
        result = `My ${nam} age is ${ag} and falls within the range
        13-19`;
    }
    if(age >= 20 && age <=29){
        result = `My ${nam} age is ${ag} and falls within the range
        20-29`;
    }
    if(age >= 30 && age <=45){
        result = `My ${nam} age is ${ag} and falls within the range
        30-45`;
    }
    if(age >= 46 && age <=55){
        result = `My ${nam} age is ${ag} and falls within the range
        46-55`;
    }
    if(age >= 56 && age <=70){
        result = `My ${nam} age is ${ag} and falls within the range
        56-70`;
    }
    if(age >= 71 && age <=90){
        result = `My ${nam} age is ${ag} and falls within the range
        71-90`;
    }
    if(age >= 90 && age <=110){
        result = `My ${nam} age is ${ag} and falls within the range
        90-100`;
    }
    else{
        result = `You are not qualified`;
    }
    return result;
}
let ageDetail = ageRange(111, 'President');
console.log(ageDetail);

//Task completed

//First let me try to create a multiplication table using a WHILE LOOP
// let i = 1;
// while (i < 10) {
//     let text;
//     text += "The number is " + i;
//     i++;
//     console.log(i);
// }
// var a = parseInt(prompt("Enter a number"));
// var b = 1;
// while (b<=12){
//     document.write(`${a*b} <br>`);
//     b++;
// }

//Making the multiplaication table with the for Loop
let multiple = "";
multiple += `<table border=1>`;

for (let b=1; b<=12; b++){
    multiple +=`<tr>`;
    for(let m=1; m<12; m++){
        multiple+=` <td>${b} X ${m}= ${b*m}</td>`;
    }
    multiple+= `</tr>`;
};

multiple +=`</table>`;
document.write(multiple);
// Reversing a string

// function reverseString(str){
//     let splitString = str.split("");
//     let reverseArray = splitString.reverse();
//     let joinArray = reverseArray.join("")
    
//     return joinArray;
// }
// let re = reverseString('hello');
// console.log(re);

function reverseString(str){
    return str.split("").reverse().join("");
}
let re = reverseString("ella");
console.log(re);

//Calling back a function
console.log(reverseString(ageRange()));