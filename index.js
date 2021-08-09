
function getMultiplesOfX(divisor, max) {
    for(let i=0; i<=max; i++) {
        if((i%divisor) == 0) {
            console.log(i);
        }
    }
}
getMultiplesOfX(5, 1000)