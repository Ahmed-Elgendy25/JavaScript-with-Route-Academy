// Q1: Write a program that allow to user enter number then print it//

var input = window.prompt('Please you enter a number');

console.log('output: ' + input);

// Q2:Write a program that take number from user then print yes if that number can divide by 3 and 4 otherwise print no //

var input2 = window.prompt('Enter a number which is divisble by 3 and 4');

if (input2 % 3 === 0 && input2 % 4 === 0) {
  console.log('Yes');
} else {
  console.log('No');
}

// Q3: Write a program that allows the user to insert 2 integers then print the max//

var firstNum = window.prompt('Enter The first integer number');

var secondNum = window.prompt('Enter The second integer number ');

if (firstNum > secondNum) console.log(firstNum);
else console.log(secondNum);

// Q4: Write a program that allows the user to insert an integer then print negative if it is negative number otherwise print positive.//

var checkNegativeOrPositive = window.prompt('Enter an integer');

if (checkNegativeOrPositive > 0) console.log('Positive');
else if (checkNegativeOrPositive < 0) console.log('Negative'); // i added this else if because the zero is nethier +ve nor -ve

// Q5: Write a program that take 3 integers from user then print the max element and the min element.

firstNum = window.prompt('Enter The First integer number');
secondNum = window.prompt('Enter The Second integer number');
var thirdNum = window.prompt('Enter The Third integer number');

if (firstNum > secondNum && firstNum > thirdNum) {
  if (secondNum > thirdNum) {
    console.log('max element = ' + firstNum);
    console.log('min element = ' + thirdNum);
  } else {
    console.log('max element = ' + firstNum);
    console.log('min element = ' + secondNum);
  }
} else if (secondNum > firstNum && secondNum > thirdNum) {
  if (firstNum > thirdNum) {
    console.log('max element = ' + secondNum);
    console.log('min element = ' + thirdNum);
  } else {
    console.log('max element = ' + secondNum);
    console.log('min element = ' + firstNum);
  }
} else if (thirdNum > firstNum && thirdNum > secondNum) {
  if (firstNum > secondNum) {
    console.log('max element = ' + thirdNum);
    console.log('min element = ' + secondNum);
  } else {
    console.log('max element = ' + thirdNum);
    console.log('min element = ' + firstNum);
  }
}

// Q6: Write a program that allows the user to insert integer number then check If a number is oven or odd//

firstNum = window.prompt('Enter The First integer number');

if (firstNum % 2 == 0) {
  console.log('even');
} else console.log('odd');

//Q7=Q8: Write a program that take character from user then if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonant

var char = window.prompt('Enter a charchter please');

if (
  char == 'a' ||
  char == 'e' ||
  char == 'i' ||
  char == 'o' ||
  char == 'u' ||
  char == 'A' ||
  char == 'E' ||
  char == 'I' ||
  char == 'O' ||
  char == 'U'
) {
  console.log('vowel');
} else console.log('Consonant');

//Q9: Write a program that allows user to insert integer then print all numbers between 1 to that’s number

firstNum = window.prompt('Enter an integer number');

for (let i = 1; i <= firstNum; i++) {
  console.log('Output: ' + i);
}

// Q10: Write a program that allows userto insert integerthen print a multiplication table up to 12.

firstNum = window.prompt('Enter an integer number');

for (let i = 1; i <= 12; i++) {
  console.log('Output: ' + i * 5);
}

//Q11: Write a program that allows to user to insert number then print all even numbers between 1 to this number

let number = window.prompt('Enter a number');
for (let i = 2; i < number; i++) {
  if (i % 2 === 0) {
    console.log(i + space);
  }
}

// Q12:Write a program that take two integers then print the power

var base = window.prompt('Enter a base number');
var power = window.prompt('Enter a power number');

var mul = 1;
for (let i = 1; i <= power; i++) {
  mul *= base;
}
console.log(mul);

// Q12:Write a program to enter marks of five subjects and calculate total, average and percentage.

var m1 = Number(window.prompt('Enter mark of subject 1'));
var m2 = Number(window.prompt('Enter mark of subject 2'));

var m3 = Number(window.prompt('Enter mark of subject 3'));

var m4 = Number(window.prompt('Enter mark of subject 4'));

var m5 = Number(window.prompt('Enter mark of subject 5'));

var totalMarks = m1 + m2 + m3 + m4 + m5;

// Assuming each subject has a maximum of 100 marks
var maximumMarksPerSubject = 100;

var averageMarks = totalMarks / 5;

var percentage = (totalMarks / (maximumMarksPerSubject * 5)) * 100;

// Display the results
console.log('Total marks = ', totalMarks);
console.log('Average Marks = ', averageMarks.toFixed(0));
console.log('Percentage = ', percentage.toFixed(0), '%');

// /* Q13: Write a program to input month number and print number of days in that month.
// month.
// Example:
// Input: - Month Number: 1
// Output:-. Days in Month: 31

// */

var monthNumber = Number(window.prompt("Enter Month's Number"));

switch (monthNumber) {
  case 1:
    console.log('Days in month: 31');
    break;

  case 2:
    console.log('Days in month: 28 or 29');
    break;

  case 3:
    console.log('Days in month: 31');
    break;

  case 4:
    console.log('Days in month: 30');
    break;

  case 5:
    console.log('Days in month: 31');
    break;

  case 6:
    console.log('Days in month: 30');
    break;

  case 7:
    console.log('Days in month: 31');
    break;

  case 8:
    console.log('Days in month: 31');
    break;

  case 9:
    console.log('Days in month: 30');
    break;

  case 10:
    console.log('Days in month: 31');
    break;

  case 11:
    console.log('Days in month: 30');
    break;

  case 12:
    console.log('Days in month: 31');
    break;

  default:
    console.log('Invalid month Number');
}

/* Q14: 14- Write a program to input marks of five subjects
Physics, Chemistry, Biology, Mathematics and Computer
, Find percentage and grade
Percentage >= 90%: Grad A
Percentage >= 80%: Grad B
Percentage >= 70%: Grad C
Percentage >= 60%: Grad D
Percentage >= 40%: Grad E
Percentage < 40%: Grad F
*/

var physics = Number(prompt('Enter Physics marks'));
var chemistry = Number(prompt('Enter Chemistry marks'));
var biology = Number(prompt('Enter Biology marks'));
var mathematics = Number(prompt('Enter Mathematics marks'));
var computer = Number(prompt('Enter Computer marks'));

var totalMarks = physics + chemistry + biology + mathematics + computer;

var percentage = (totalMarks / 500) * 100;

var grade;

if (percentage >= 90) {
  grade = 'Grade A';
} else if (percentage >= 80) {
  grade = 'Grade B';
} else if (percentage >= 70) {
  grade = 'Grade C';
} else if (percentage >= 60) {
  grade = 'Grade D';
} else if (percentage >= 40) {
  grade = 'Grade E';
} else {
  grade = 'Grade F';
}

console.log('Total marks = ', totalMarks);
console.log('Percentage = ', percentage.toFixed(2), '%');
console.log('Grade = ', grade);

//Q15- Write a program to print total number of days in month
var monthNumber = Number(window.prompt("Enter Month's Number"));

switch (monthNumber) {
  case 1:
    console.log('Days in month: 31');
    break;

  case 2:
    console.log('Days in month: 28 or 29');
    break;

  case 3:
    console.log('Days in month: 31');
    break;

  case 4:
    console.log('Days in month: 30');
    break;

  case 5:
    console.log('Days in month: 31');
    break;

  case 6:
    console.log('Days in month: 30');
    break;

  case 7:
    console.log('Days in month: 31');
    break;

  case 8:
    console.log('Days in month: 31');
    break;

  case 9:
    console.log('Days in month: 30');
    break;

  case 10:
    console.log('Days in month: 31');
    break;

  case 11:
    console.log('Days in month: 30');
    break;

  case 12:
    console.log('Days in month: 31');
    break;

  default:
    console.log('Invalid month Number');
}

// Q16:

var char = window.prompt('Enter a character, please');

switch (char) {
  case 'a':
  case 'e':
  case 'i':
  case 'o':
  case 'u':
  case 'A':
  case 'E':
  case 'I':
  case 'O':
  case 'U':
    console.log('Vowel');
    break;

  default:
    console.log('Consonant');
}

//Q17:
let num1 = Number(prompt('Enter the first number'));
let num2 = Number(prompt('Enter the second number'));

let maxNumber = num1 > num2 ? num1 : num2;

console.log('The maximum number is: ', maxNumber);

//Another solution with If else

/*
let num1 = Number(prompt('Enter the first number'));
let num2 = Number(prompt('Enter the second number'));
if(num1>num2) {
console.log('The maximum number is: ', num1);
}
else {
  console.log('The maximum number is: ', num2);
}
*/

// Q18:

var even_or_odd = Number(prompt('Enter a number'));

switch (even_or_odd % 2) {
  case 0:
    console.log('The number is even.');
    break;

  case 1:
    console.log('The number is odd.');
    break;

  default:
    console.log('Invalid input');
}

// q19:

var negativeOrPositive = Number(prompt('Enter a number'));

if (negativeOrPositive > 0) {
  console.log('This number is Positive');
} else if (negativeOrPositive < 0) {
  console.log('This Number is negative');
} else {
  console.log(
    'You picked zero Number which is neither negative nor positive😊'
  );
}

// q20:

var numb1 = Number(window.prompt('Enter first Number: '));
var operator = window.prompt('Enter operator + - * /');
var numb2 = Number(window.prompt('Enter second Number: '));

switch (operator) {
  case '+':
    console.log(numb1 + numb2);
    break;
  case '-':
    console.log(numb1 - numb2);
    break;

  case '*':
    console.log(numb1 * numb2);
    break;

  case '/':
    console.log(numb1 / numb2);
    break;

  default:
    console.log('Invalid Operator ⚠');
}
