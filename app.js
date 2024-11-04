//========================Js assignment no 27===================
// FUNCTIONS, SWITCH

// STATEMENTS, WHILE... DO-
// WHILE LOOPS

// | FUNCTIONS| SWITCH | WHILE.. DO-WHILE |
// 1. Write a custom function power ( a, b ), to calculate the value of
// a raised to b.

function power(a, b) {
    let result = 1;
    while (b > 0) {
        result *= a;
        b--;
    }
    return result;
}

console.log(power(2, 3)); 

// 2. Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year or not.
// Leap years ..., 2012, 2016, 2020, ...

function isLeapYear(year) {
    if (year % 4 !== 0) {
        return false;
    } else if (year % 100 !== 0) {
        return true;
    } else if (year % 400 !== 0) {
        return false;
    } else {
        return true;
    }
}

console.log(isLeapYear(2012)); 
// 3. If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions

function calculateArea(a, b, c) {
    let s = (a + b + c) / 2;
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}   

console.log(calculateArea(3, 4, 5));

// 4. Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction.

function calculateAverageAndPercentage(marks1, marks2, marks3) {
    let average = (marks1 + marks2 + marks3) / 3;
    let percentage = (average / 100) * 100;
    return { average, percentage };
}

let studentMarks = calculateAverageAndPercentage(85, 90, 95);

console.log(`Average: ${studentMarks.average}, Percentage: ${studentMarks.percentage}`);
// 5. You have learned the function indexOf. Code your own custom
// function that will perform the same functionality. You can code
// for single character as of now.

function myIndexOf(str, char) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            return i;
        }
    }
    return -1;


}

console.log(myIndexOf("Hello World", "l")); // Output: 2

// 6. Write a function to delete all vowels from a sentence. Assume
// that the sentence is not more than 25 characters long.

function removeVowels(sentence) {
    let vowels = "aeiouAEIOU";
    let result = "";

    for (let i = 0; i < sentence.length; i++) {
        if (vowels.indexOf(sentence[i]) === -1) {
            result += sentence[i];
        }
    }

    return result;
}

console.log(removeVowels("Hello World")); 
// 7. Write a function with switch statement to count the number of
// occurrences of any two vowels in succession in a line of text.
// For example, in the sentence

function countVowelPairs(sentence) {
    let vowels = "aeiouAEIOU";
    let count = 0;

    for (let i = 0; i < sentence.length - 1; i++) {
        if (vowels.indexOf(sentence[i]) !== -1 && vowels.indexOf(sentence[i + 1]) !== -1) {
            count++;
        }
    }

    return count;
}

console.log(countVowelPairs("Helsslo Worsslld"));
// 8. The distance between two cities (in km.) is input through the
// keyboard. Write four functions to convert and print this
// distance in meters, feet, inches and centimeters.

function convertKilometersToMeters(distance) {
    return distance * 1000;
}

function convertMetersToFeet(distance) {
    return distance * 3.28084;
    
}

function convertFeetToInches(distance) {
    return distance * 12;
}

function convertInchesToCentimeters(distance) {
    return distance * 2.54;
}

let distanceInKilometers = 10;

console.log(`${distanceInKilometers} kilometers = ${convertKilometersToMeters(distanceInKilometers)} meters`);

console.log(`${distanceInKilometers} kilometers = ${convertMetersToFeet(convertKilometersToMeters(distanceInKilometers))} feet`);

console.log(`${distanceInKilometers} kilometers = ${convertFeetToInches(convertMetersToFeet(convertKilometersToMeters(distanceInKilometers)))} inches`);

console.log(`${distanceInKilometers} kilometers = ${convertInchesToCentimeters(convertFeetToInches(convertMetersToFeet(convertKilometersToMeters(distanceInKilometers))))} centimeters`);


// 9. Write a program to calculate overtime pay of employees.
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour
// worked above 40 hours. Assume that employees do not work
// for fractional part of an hour.

function calculateOvertimePay(hoursWorked, hourlyRate) {
    let overtimeHours = hoursWorked - 40;
    let overtimePay = overtimeHours * hourlyRate;
    return overtimePay;
}

console.log(calculateOvertimePay(45, 12)); 


// 10. A cashier has currency notes of denominations 10, 50 and
// 100. If the amount to be withdrawn is input through the
// keyboard in hundreds, find the total number of currency notes
// of each denomination the cashier will have to give to the
// withdrawer.

function calculateNotes(amount) {
    let notes = {
        hundreds: Math.floor(amount / 100),
        fifties: Math.floor((amount % 100) / 50),
        tens: Math.floor(((amount % 100) % 50) / 10)
    };
    return notes;
}
