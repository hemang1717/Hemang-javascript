const a=[1,2,[3,4]];
// const b=a;
// b.push(5);
// console.log(a);
// console.log(b);


// for arrays
function deepCopy(val){
    if(["string","number","boolean"].includes(typeof (val))){
        return val;
    }
    else if(Array.isArray(val)){
        return val.map(el=>deepCopy(el));
    }
    else{
        return Object.keys(val).reduce((acc,key)=>{
            console.log(acc,key)
            acc[key]=deepCopy(val[key])
            return acc;
        },{})
    }
}
const b=deepCopy(a);
b[2].push(5);
console.log(a)
console.log(b)

// for objects

const obj1={
    a:{
        b:{
            c:{
                name:"hemang"
            }
        }
    }
}
// const obj2=obj1;
// obj2.a.b=null
// console.log(obj2)
// console.log(obj1)

const obj2=deepCopy(obj1)
obj2.a.b=null;
console.log(obj2);
console.log(obj1);