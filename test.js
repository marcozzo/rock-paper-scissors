//UNRELATED TO ROCK-PAPER-SCISSORS

testPrime();

//TEST FOR PRIME FROM 2 TO nTH NUMBER
function testPrime () {

    //number -> INTERVAL LIMIT STARTING FROM 2
    let number = prompt('Enter the number largest for' +
        'up to which you want to test.')
    
    if (number === "" || number === null) {
        return
    }

    //i -> VALUE BEING TESTED CURRENTLY 
nextPrime:
    for (let i = 2; i <= number; ++i) {
        
        for(let allLess = 2; allLess < i; allLess++) {
            if(i % allLess === 0) continue nextPrime;
            }
        
        console.log(i);

        }
    return

}