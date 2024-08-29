let promise = new Promise((resolve, reject)=>{
    let a = 1 + 1;
    if(a == 2){
        resolve('Success');
    }else{
        reject('Failed');
    }
});

promise.then((message) => {
    console.log('this is in the then' + message);
}).catch((message) => {
    console.log('this is in the catch' + message);
});