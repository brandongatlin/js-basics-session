// Make an app that lets a user input text and get a crazy version of that text back. 
// The text will randomly have uppercase letters

// 1. write a function "sarcasticate" that accepts a parameter "input" of type string and returns a sarcastic version of that string, with random letters being uppercase. Function should utilize a loop and randomly decide if each char should be upper-cased

function sarcasticate(input) {
    // Parts:
    // a. validate input
    if (!typeof input === 'string') {
        throw new Error('input should be of type string');
    }
    // change input from string to array of strings
    const inputArray = input.split('');
    // b. loop
    for (let i = 0; i < inputArray.length; i++) {
        // c. heads or tails - do we want to uppercase this letter? (bool)
        const weWantToUppercase = Math.floor(Math.random() * 2);
        if (weWantToUppercase) {
            // d. change to Uppercase
            inputArray[i] = inputArray[i].toUpperCase();
        }
    }
    const output = inputArray.join('');
    return output;
}

const textInput = document.body.children[0].children[0].children[0].children[1];
const submitBtn = document.body.children[0].children[0].children[1];

function getUserInput(event) {
    // console.log(event.target);
    event.preventDefault();
    // 2. using DOM traversing, create references to each element we'll need to interface with

    // 3. set up click event to take the user text and run the sarcasticate function with it.
    const userText = textInput.value;
    const output = sarcasticate(userText);
    // alert(output);
    const h1 = document.body.children[0].children[1];
    h1.textContent = output;
}


submitBtn.addEventListener("click", getUserInput);

// 4. write the returned string to the h2 tag on the DOM
// console.log(sarcasticate('hello world'));