// Looping a triangle
// Write a loop that makes seven calls to console.log to output the following triangle:

// #
// ##
// ###
// ####
// #####
// ######
// #######
// It may be useful to know that you can find the length of a string by writing .length after it.

// let abc = "abc";
// console.log(abc.length);
// // → 3
// Most exercises contain a piece of code that you can modify to solve the exercise. Remember that you can click code blocks to edit them.

const loopingATriangle = () => {
    let start = "";
    while(start.length<7) {
        start += "#";
        console.log(start);
    }
}

// FizzBuzz
// Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

// When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

// (This is actually an interview question that has been claimed to weed out a significant percentage of programmer candidates. So if you solved it, your labor market value just went up.)

const FizzBuzz = () => {
    for (let i=1; i<=100; i++) {
        if(i%5 === 0) {
            console.log(i%3 == 0 ? "FizzBuzz" : "Buzz");
        } else if (i%3 === 0) {
            console.log("Fizz");
        } else {
            console.log(i);
        }
    }
}

// Chessboard
// Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

// Passing this string to console.log should show something like this:

//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # #
// When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.

const chessboard = (size) => {
    size = Number(size);

    if( size%2 === 0 ) {
        for ( let i=1; i<=size; i++ ) {
            if ( i%2 !== 0 ) {
                console.log(" #".repeat(size/2));
            } else {
                console.log("# ".repeat(size/2));
            }
        }
    } else {
        console.log("Please input a even number");
    }
}