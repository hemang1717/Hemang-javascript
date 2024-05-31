const a=[1,2,3,4];
const y=a.map((ele)=>ele*3)
console.log(y);

function cb(num){
    return num*3;
}
Array.prototype.myMap=function(cb){
    let res=[];
    for(let i=0;i<this.length;i++){
        res.push(cb(this[i]));
    }
    return res;
}
const b=a.myMap(cb);
console.log(b);