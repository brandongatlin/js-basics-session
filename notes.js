function sarcasticate(input){
    // a. validate
    if(typeof input !== 'string') throw new TypeError('Input must be of type string');
    // b. change to array
    const inputArr = input.split('');
    // d. loop
    for(let i = 0; i < inputArr.length; i++){
        // c. heads or tails
        const randomlyPicked = Math.floor(Math.random() * 2);
        if(randomlyPicked){
            // e. change to Uppercase
            inputArr[i] = inputArr[i].toUpperCase();
        }
    }
    console.log(inputArr.join(''));
    return inputArr.join('');
}

try {
    sarcasticate('hello');
} catch(err){
    console.log(err);
}