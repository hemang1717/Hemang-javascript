let obj={
    name:"Hemang",
    age:"23"
}
function getDetails(role)
{
    console.log("Name: ",this.name," Age: ",this.age," Role: ",role);
}
// let newFun=getDetails.bind(obj,"SDE-2");
// newFun("SDE-1")

Function.prototype.myBind=function(obj,...args){

    if(typeof (this)!=="function"){
        console.log("please attach a function to my bind method");
        return;
    }
    obj.fun=this;
    return function(...newArgs){
        obj.fun(...args,...newArgs);
    }
}
let newFun=getDetails.myBind(obj,"SDE-2")
newFun("SDE-1");