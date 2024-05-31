// In layperson's terms, it helps you replace the value of this inside a function with whatever value you want.
// call is a function that you use to change the value of this inside a 
// function and execute it with the arguments provided.
var name="global";
var obj={name:'Hemang',salary:"10000000"};
function prints(age,profession){
    console.log("this refers to: ",this.name)
    console.log("hello ",this.name," age is: ",age," worked as: ",profession);
}
prints.call(null,23,"SDE");

// Apply is very similar to the call function. 
// The only difference is that in apply you can pass an array as an argument list.
prints.apply(obj,[23,"SDE"])

// Bind is a function that helps you create another function that you can execute later 
// with the new context of this that is provided.
const fun=prints.bind();
console.log(fun);
fun(23,"SDE");


// const age=10;
// const person={
//     name:"Hemang",
//     age:"23",
//     printAge: function(){
//         return this.age;
//     }
// }
// const person2={age:25}
// console.log(person.printAge())
// console.log(person.printAge.call(person2))