async function fetchData(){
    const data=await fetch('https://jsonplaceholder.typicode.com/posts?q=sunt&&_limit=5')
    const result=await data.json();
    console.log("result: ",result)
    return result;
}
setTimeout(()=>{
    console.log('settimeout is running');
},100)

console.log('data is: ',fetchData());