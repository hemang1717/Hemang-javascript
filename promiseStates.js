// A promise is a placeholder for a value that's going to be available
// sometime later. The promise helps handle asynchronous operations.
// JavaScript provides a helper function Promise.all(promisesArrayOrIterable)
// to handle multiple promises at once, in parallel, 
// and get the results in a single aggregate array.


const promise1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise 1 resolved");
        // const err=new Error("Promise 1 fails");
        // reject(err);
    },3000)
})
const promise2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // const err=new Error("Promise 2 fails");
        // reject(err);
        resolve("Promise 2 resolved");
    },1000)
})
const promise3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise 3 resolved");
        // const err=new Error("Promise 3 fails");
        // reject(err);
    },2000)
})
promise1.then((res)=>console.log(res)).catch(err=>console.log("error: ",err));
promise2.then((res)=>console.log(res)).catch(err=>console.log("error: ",err));
promise3.then((res)=>console.log(res)).catch(err=>console.log("error: ",err));

// To conclude, the Promise.all() waits for all the input promises to resolve
// and returns a new promise that resolves to an array containing the results
// of the input promises. If one of the input promises is rejected,
// the Promise.all() method immediately returns a promise that is rejected
//  with an error of the first rejected promise.
Promise.all([promise1,promise2,promise3]).then((result)=>{
    console.log("promsise.all result: ",result)
})
.catch((err)=>{
    console.log("error in promise.all: ",err);
})

// Promise.allSettled() method that accepts a list of Promises and returns a
// new promise that resolves after all the input promises have settled,
// either resolved or rejected

Promise.allSettled([promise1,promise2,promise3]).then((result)=>{
    console.log("promsise.allSettled result: ",result)
})
.catch((err)=>{
    console.log("error in promise.allSetlled: ",err);
})

// 💡 Promise.all() -> Fail Fast
// 💡 Promise.allSettled() -> Will wait and provide accumulative result


// The Promise.race() static method accepts a list of promises as an 
// iterable object and returns a new promise that fulfills or rejects 
// as soon as there is one promise that fulfills or rejects, with the value 
// or reason from that promise. The name of Promise.race() implies that all 
// the promises race against each other with a single winner, either resolved or rejected.

Promise.race([promise1,promise2,promise3]).then((result)=>{
    console.log("promsise.race result: ",result)
})
.catch((err)=>{
    console.log("error in promise.race: ",err);
})

// The Promise.any() method accepts a list of Promise objects as an iterable 
// object. If one of the promises in the iterable object is fulfilled, the 
// Promise.any() returns a single promise that resolves to a value which is 
// the result of the fulfilled promise.

// ❓ But what if all promises got failed, so the returned result will be 
// aggregated error i.e. [err1, err2, err3].

Promise.any([promise1,promise2,promise3]).then((result)=>{
    console.log("promsise.any result: ",result)
})
.catch((err)=>{
    console.log("error in promise.race: ",err);
})