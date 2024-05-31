// Debouncing ensures that a function is only executed after
// a specified period of time has elapsed since the last time it was invoked. 
// In other words, it delays the execution of the function 
// until there has been a pause in the events.


// lets say user is entering hemang 
// debouncing:  user is pressing the keys and when the user stops and then again start typing then 
// it will calculate the time betwwen previous typing time and new typing time and if it greater than delay
// then function called happens and this is known as debouncing

// throtlling: lets say user presses h and then the function calls happen 1 time and after delay of d seconds
// whatever character the user is entering the call will happen and this is known as throtlling.
// throtlling is independent of the events.

// Example:

// Waiting until the user has finished typing in a search box before triggering a search query.
// Resizing the browser window and only performing an action once the resizing is complete.

function searchData(){
    console.log("Searching the data");
}
const debounce=function(fn,delay){
    let timer;
    return function(...args){
        let context=this
        args=arguments;
        if(timer) clearTimeout(timer)
        timer=setTimeout(()=>{
            fn.apply(context,args);
        },delay)
    }
}
const applyDebouncing=debounce(searchData,300)
window.addEventListener('resize',()=>console.log('resized'))
// Debounce function implementation
// function debounce(func, wait) {
//     let timeout;
  
//     return function(...args) {
//       const context = this;
  
//       clearTimeout(timeout);
//       timeout = setTimeout(()=>{
//         func.apply(context,args)
//       }, wait);
//     };
//   }
  
//   // Example usage
//   function handleResize() {
//     console.log('Resize event handled at', new Date().toLocaleTimeString());
//   }
  
//   window.addEventListener('resize', debounce(handleResize, 500));
  