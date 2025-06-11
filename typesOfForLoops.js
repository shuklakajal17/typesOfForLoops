// TYPES OF FOR LOOPS

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//for let
for(let i = 0; i <arr.length; i++){
    console.log(arr[i]);
}




//for of
for(let value of arr){
    console.log(value);
}




//for in 
let person = {
    id : 1,
    name : "raju",
    age : 19
}




//to get keys
for (let key in person){
    console.log(key)
}



//to get values
for (let key in person) {
    console.log(person[key]);
}
