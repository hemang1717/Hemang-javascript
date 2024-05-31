let a=[1,2,3,4]
let b=a.filter((val)=>val>2);
console.log(b)

function cb(val){
    return val>2;
}
Array.prototype.myFilter=function(cb){
    let res=[];
    for(var i=0;i<this.length;i++){
        if(cb(this[i])){
            res.push(this[i]);
        }
    }
    return res;
}
console.log(a.myFilter(cb))
