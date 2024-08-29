function fetchData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            if(success) {
                resolve('Data fetched successfully');
            }else {
                reject('Failed to fetch data.');
            }
        },2000);
    });
}

async function getData() {
    try {
        const result = await fetchData();
        console.log(result);
    }catch(error){
        console.error(error);
    }
}
getData();