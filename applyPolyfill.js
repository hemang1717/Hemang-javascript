let obj={
    name:"Hemang",
    age:"23"
}
function getDetails(role)
{
    console.log("Name: ",this.name," Age: ",this.age," Role: ",role);
}
// getDetails.apply(obj,["SDE-1"])

Function.prototype.myApply=function(obj={},args){
    if(typeof (this)!=="function"){
        console.log("Attach a function to apply");
        return;
    }
    if(!Array.isArray(args)){
        console.log("CreateListFromArrayLike called on non-object");
        return;
    }
    obj.fun=this;
    obj.fun(...args);
}
getDetails.myApply(obj,["SDE-1","HELLO"])
