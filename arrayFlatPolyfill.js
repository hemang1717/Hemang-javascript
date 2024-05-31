// let a=[1,2,3,4];
// a.forEach(ele=>console.log(ele));

// Array.prototype.myForEach=function(){
//     for(let i=0;i<this.length;i++){
//         console.log(this[i]);
//     }
// }
// a.myForEach();

let a=[1,[2,3],[4,[5,6]]];
// console.log(a.flat(2))

Array.prototype.myFlat=function(depth){
    if(!Array.isArray(this)){
        console.log("please attach an array to call this method");
        return;
    }
    let temp=[];

    for(var i=0;i<this.length;i++){
        if(Array.isArray(this[i]) && depth>0){
            // console.log(this[i]);
            temp.push(...this[i].myFlat(depth-1));
        }
        else{
            temp.push(this[i]);
        }
    }
    return temp;
}
let val=a.myFlat(2)
console.log("val: ",val)