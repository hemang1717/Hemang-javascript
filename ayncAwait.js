const p=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('Promise resolved value!!');
      }, 3000);
})
// 📌 await is a keyword that can only be used inside a async function.
// async function f(){
//     const val = await p;
//     console.log('Hello There!');
//     console.log(val);
// }
// f()
// 💡 async function always returns a promise, 
// even if I return a simple string from below function, 
// async keyword will wrap it under Promise and then return.
// async function getData() {
//     return "Namaste JavaScript";
//   }
// const dataPromise = getData();
// console.log(dataPromise); // Promise {<fulfilled>: 'Namaste JavaScript'}
  
//❓How to extract data from above promise? One way is using promise .then
// dataPromise.then(res => console.log(res)); // Namaste JavaScript


const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise resolved value by p2!!');
    }, 2000);
  })
  
//   async function handlePromise() {
//     console.log('Hi');
//     const val = await p;
//     console.log('Hello There!');
//     console.log(val);
  
//     const val2 = await p2;
//     console.log('Hello There! 2');
//     console.log(val2);
//   }
//   handlePromise(); 
//   const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Promise resolved value by p2!!');
//     }, 2000);
//   })
  
async function handlePromise() {
    console.log('Hi');
    const val = await p2;
    console.log('Hello There!');
    console.log(val);
  
    const val2 = await p;
    console.log('Hello There! 2');
    console.log(val2);
  }
  handlePromise(); 