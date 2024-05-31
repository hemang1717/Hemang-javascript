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
  