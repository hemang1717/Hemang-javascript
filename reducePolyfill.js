let a=[1,2,3,4]
let initialValue=0;
// let b=a.reduce((acc,prev)=>acc+prev,initialValue);
// console.log(b)

function cb(acc,prev){
    return acc+prev
}
Array.prototype.myReduce=function(cb,initialValue){
    for(var i=0;i<this.length;i++){
        initialValue=initialValue?cb(this[i],initialValue):this[i];
    }
    return initialValue;
}
console.log(a.myReduce(cb,initialValue))
