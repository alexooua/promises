

const doAfter=(s)=>{
    let myPromise = new Promise((resolve,reject) => {
        setTimeout(() => {
            const randomV = Math.random()
            if (randomV>0.5){
                resolve(randomV)
            }else {reject(randomV)
            }
        }, s*1000)
    })
    return myPromise
}
