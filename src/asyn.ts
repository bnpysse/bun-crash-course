function fetchData(callback:(data:any)=>void){
    setTimeout(()=>{
        callback('Hi');
    },1000);
}

fetchData(function(data){
    console.log(data);
});


function fetchData1(): Promise<any>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Hello, World');
        },1000);
    });
}
fetchData1().then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
});