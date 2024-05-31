const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("p1 resolved");
        // reject("p1 rejected")
    },3000);
})
const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("p2 resolved");
    },2000);
})
const p3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("p3 resolved");
        // reject('p3 rejected')
    },5000);
})
console.log('promise all polyfill')
Promise.all([p1,p2,p3]).then((res)=>{
  console.log(res)
})

Promise.myAll=function(arr){
    if(!Array.isArray(arr)){
        console.log("Provide an array as input");
        return;
    }
    
    return new Promise((resolve,reject)=>{
        let result=[];
        let cnt=0;
        for(let i=0;i<arr.length;i++){
            arr[i].then((res)=>{
                result[i]=res;
                cnt++;
                if(cnt==arr.length){
                    resolve(result)
                }
            })
            .catch((err)=>{
                reject(err);
            })
        }
    })
}

const res=Promise.myAll([p1,p2,p3]);
res.then((val)=>{
    console.log("result of myall method: ",val)
}).catch(err=>console.log("error in promise.all :",err))
