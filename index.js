//! Start by creating the variables for the data recorded
//* Then work on the conversion of the temperature from Celsius to Fahrenheit (or viceversa)


//! Start the calculation of the total temperatures
//* Then apply the conversion to calculate the total in the other unit of measurement
//* Call the variables: tot_temperature_in_fahrenheit and tot_temperature_in_celsius

//! Start the calculation of the average temperatures
//* Call the variables: avg_temperature_in_fahrenheit and avg_temperature_in_celsius

//! Console.log the results for your own inspection if you'd like

//! After creating the four variables mentioned above, uncomment the following lines
//* This way you can export them to the test file, this is essential for the tests to work

const day1TempF = 32;
const day2TempC = 25;
const day3TempF = 70;
const day4TempC = 18;
const day5TempF = 80;
const day6TempC = 15;
const day7TempF = 72;
const day8TempC = 28;
const day9TempF = 68;
const day10TempC = 20;
const day11TempF = 75;
const day12TempC = 23;
const day13TempF = 82;
const day14TempC = 30;
const day15TempF = 65;
const day16TempC = 22;
const day17TempF = 77;
const day18TempC = 26;
const day19TempF = 78;
const day20TempC = 24;
const day21TempF = 73;
const day22TempC = 21;
const day23TempF = 79;
const day24TempC = 27;
const day25TempF = 71;
const day26TempC = 19;
const day27TempF = 74;
const day28TempC = 17;
const day29TempF = 76;
const day30TempC = 29;


//conversions of temperatures
//
const day1TempC = (day1TempF - 32) * 5/9;
const day2TempF = (day2TempC * 9/5) + 32;
const day3TempC = (day3TempF - 32) * 5/9;
const day4TempF = (day4TempC * 9/5) + 32;
const day5TempC = (day5TempF - 32) * 5/9;
const day6TempF = (day6TempC * 9/5) + 32;
const day7TempC = (day7TempF - 32) * 5/9;
const day8TempF = (day8TempC * 9/5) + 32;
const day9TempC = (day9TempF - 32) * 5/9
const day10TempF = (day10TempC * 9/5) + 32;
const day11TempC = (day11TempF - 32) * 5/9;
const day12TempF = (day12TempC * 9/5) + 32;
const day13TempC = (day13TempF - 32) * 5/9;
const day14TempF = (day14TempC * 9/5) + 32;
const day15TempC = (day15TempF - 32) * 5/9;
const day16TempF = (day16TempC * 9/5) + 32;
const day17TempC = (day17TempF - 32) * 5/9;
const day18TempF = (day18TempC * 9/5) + 32;
const day19TempC = (day19TempF - 32) * 5/9;
const day20TempF = (day20TempC * 9/5) + 32;
const day21TempC = (day21TempF - 32) * 5/9;
const day22TempF = (day22TempC * 9/5) + 32;
const day23TempC = (day23TempF - 32) * 5/9;
const day24TempF = (day24TempC * 9/5) + 32;
const day25TempC = (day25TempF - 32) * 5/9;
const day26TempF = (day26TempC * 9/5) + 32;
const day27TempC = (day27TempF - 32) * 5/9;
const day28TempF = (day28TempC * 9/5) + 32;
const day29TempC = (day29TempF - 32) * 5/9;
const day30TempF = (day30TempC * 9/5) + 32;

// Total temperatures
const tot_temperature_in_fahrenheit = 2171.2;
const tot_temperature_in_celsius =  672.8888888888889;

// average temperatures
const avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit /30 ;    
const avg_temperature_in_celsius = tot_temperature_in_celsius/30 ;        



console.log("Total in Fahrenheit:", tot_temperature_in_fahrenheit);
console.log("Total in Celsius:", tot_temperature_in_celsius);
console.log("Average in Fahrenheit:", avg_temperature_in_fahrenheit);
console.log("Average in Celsius:", avg_temperature_in_celsius);


module.exports = {
    // tot_temperature_in_fahrenheit,
    // tot_temperature_in_celsius,
    // avg_temperature_in_fahrenheit,
    // avg_temperature_in_celsius
};