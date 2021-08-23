# Homework-one
Create a simple program that does math calculations. The program should have the following structure:
1. Three modules/files: main.js, math.js, and format.js
2. The math module file should implement and export 3 functions and a constant:
pow(base, exponent) - Calculates exponent of the given number. The exponent defaults to 2. Example: pow(2,3) -> 2 * 2 * 2 = 8
hypotenuse(adjacent, opposite) - Calculates the hypotenuse using Pythagore's theorem. Returns an object with the following structure: { adjacent: value, opposite: value, hypotenuse: value }.
circleArea(radius) - Calculates the area of a circle.
PI - A constant that has the approximate value of PI.

3. The format module/file should have exported function format(prefix, result) which accepts prefix, result, and prints them in this format: 'The value of prefix is: result' where prefix and result should take corresponding values from parameters.
4. Using the functions provided in these modules calculate the following values and print the by formatting with the format function. Use restructuring to extract values from objects/arrays.
Calculate an area of a circle with a radius of 8
The hypotenuse of a triangle with sides 8 and 11
5 to the power of 9

5. Put all the calculation code in main.js.
6. Set up and configure Babel to transpile the code and put it in a dist folder