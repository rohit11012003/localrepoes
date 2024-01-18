const awaitTimeMs = 2000

const callback = () => {
    console.log('i print second')
}

console.log('i print first')
setTimeout(callback , awaitTimeMs)
console.log('i print third')

function damagecontol(health , damage) {
    promise = new Promise(resolve , reject )

    setTimeout(checkPromise , 1000)

    function checkPromise() {
        if (health > damage) {
            resolve('the player is alive')
        } else {
            reject('the player is dead')
        }
    }

    return promise
}


damagecontol(50,100)