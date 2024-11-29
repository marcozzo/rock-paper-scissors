

function capitalize() {
    let sentence = prompt("Enter a sentence whose first letter is lowercase.");
    let letter1 = sentence.charAt(0);

    window.alert( sentence.replace( letter1, letter1.toUpperCase() ) );

}