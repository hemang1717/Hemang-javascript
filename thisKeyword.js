// const op="hello"
// const obj={
//     name:"hemang",
//     lastName:"popli",
//     printFullName:function(){
//         console.log(this)
//     }
// }
// obj.printFullName()
// console.log(this)

function f(...args){
    const [{name,lastName,middleName}]=args;
    console.log(name);
    console.log(middleName);
    console.log(lastName)
}
// args is the rest operator here
f({name:"ok",lastName:"bye",middleName:"hello"})

const [val1,val2,...args1]=[1,2,3,4,5,6];
console.log(args1)
// args1 is the rest operator