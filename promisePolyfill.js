// const promise=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Promise resolved");
//     },2000)
// })
// promise.then((res)=>{
//     console.log(res)
// }).catch(err=>{
//     console.log(err);
// })

function promisePolyfill(executor){
    let onResolve,onReject;
    function resolve(value){
        onResolve(value);
    }
    function reject(value){
        onReject(value);
    }
    this.then=function(callback){
        onResolve=callback;
        return this;
    }
    this.catch=function(callback){
        onReject=callback;
        return this;
    }
    executor(resolve,reject);
}

function executor(resolve,reject){
    setTimeout(()=>{
        resolve("Hemang");
    },2000)
}
const pr=new promisePolyfill(executor)
console.log(pr);
pr.then((res)=>console.log(res)).catch(err=>console.log(err))