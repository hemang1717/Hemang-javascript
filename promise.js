const cart=["shoes","pants","kurta"]

const validateCart=(cart)=>{
    return cart.length>3;
}

function createOrder(cart)
{
    const pr=new Promise(function(resolve,reject){
        if(!validateCart(cart)){
            const err=new Error("Cart is not valid");
            reject(err);
        }
        resolve("Hey promise is resolved")
    })
    return pr;
}
const message=createOrder(cart)
message.then((data)=>{
    console.log('data : ',data)
})
.catch((error)=>{
    console.log("Error: ",error)
})
console.log(message)