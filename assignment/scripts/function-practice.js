console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return 'Hello ' + name + '!';
}
// Remember to call the function to test
console.log('in helloName', helloName('Ann'));

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  let answer = firstNumber + secondNumber;
  return answer
  // return firstNumber + secondNumber;
} //end addNumbers
console.log('in addNumbers 4 plus 5 is', addNumbers(4, 5));
console.log('in addNumbers 15 plus 45 is', addNumbers(15, 45));



// 4. Function to multiply three numbers & return the result
function multiplyThree( firstNumber, secondNumber, thridNumber ) {
  let answer = firstNumber * secondNumber * thridNumber;
  //return 3 numbers
  return answer
} // end multiply
console.log('in multipleThree 4 * 5 * 6 is', multiplyThree(4, 5, 6));



// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true; // return true if greater than zero
  }
  else {
    return false ; // false
  } //end 
} //end isPositive

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast( array ) {
  // array greater then zero
  if ( array.length > 0){
    //set lastItem to arraylength minus 1 to return value
    let lastItem = array[array.length - 1];
    return lastItem
  } // end
  
  else {  //empty array
  return undefined
  } 
}// end getLast
// cats array to test
let cats = ['cat1', 'cat2', 'cat3', 'cat4'];
console.log('in getLast', getLast(cats))

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find(value, array) {
  //set a found variable to test against later
  let found = false; 
  //check value in array
  //return true if value is found && set found to true
  for (i = 0; i < array.length; i++) {
    if (value === array[i]) {
      found = true;
      return true;
    }// end if
 }
 //if nothing was found, and variable remained false return false
 if(found === false){
  return false;
 }
} //end find
let fruit = ['apples', 'banana', 'grape'];
console.log(`list fruit array ${fruit}`)
console.log('Is banana in fruit array:', find('banana' ,fruit));
console.log('Is grape in fruit array:', find('grape' ,fruit));
console.log('Is orange in fruit array:', find('orange' ,fruit));



// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( ) {
  let sum = 0
  // TODO: loop to add items
  return sum;
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
