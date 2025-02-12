let age= 65;

if(age>=60){
    console.log("the ticket price is $8");
}
else if(age>=18 || age>=59){
    console.log("the ticket price is $15");
}
else if(age>=5 || age>=17){
    console.log("the ticket price is $10");
}
else{
    console.log("the ticket price will be free");
}

//types of array
//index array or 1D array

let marks= [56,54,78,90,45,120];
console.log(marks[5]);

let sum=(marks[3]+marks[5]);
console.log(sum);

//Accosiative array

let man={name: "rahim", age: 18, blood: "o+", phone: "+88012345677", address:"dhaka,uttara"}

console.log(man.phone);
console.log(man.address);

//2D array

let twoDimensonArray=[
    [4,3,40,23],
    [10,20,56,54],
    [200,100,78,90],
];

console.log(twoDimensonArray[0][0]);
console.log(twoDimensonArray[0][1]);
console.log(twoDimensonArray[0][2]);
console.log(twoDimensonArray[0][3]);

console.log(twoDimensonArray[1][0]);
console.log(twoDimensonArray[1][1]);
console.log(twoDimensonArray[1][2]);
console.log(twoDimensonArray[1][3]);

console.log(twoDimensonArray[2][0]);
console.log(twoDimensonArray[2][1]);
console.log(twoDimensonArray[2][2]);
console.log(twoDimensonArray[2][3]);

