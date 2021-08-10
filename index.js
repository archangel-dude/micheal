
function getMultiplesOfX(divisor, max) {
    for(let i=0; i*divisor<max; i++) {
        console.log(i*divisor);
    }
}
getMultiplesOfX(7, 1000)