for(var i=0;i<5;i++){
    function inner(i){
        setTimeout(()=>{
            console.log(i);
        },i*1000)
    }
    inner(i);
}