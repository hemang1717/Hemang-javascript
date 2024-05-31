let obj={
    name:"Hemang",
    age:"23"
}
function getDetails(role)
{
    console.log("Name: ",this.name," Age: ",this.age," Role: ",role);
}
getDetails.call(obj,"SDE-1")

Function.prototype.myCall=function(obj={},...args){
    if(typeof (this)!=="function"){
        console.log("Attach a function");
        return;
    }
    obj.fun=this;
    obj.getDetails(...args);
}
getDetails.call(obj,"SDE-1")