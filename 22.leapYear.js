//Write a program to Check Whether the given year is a leap year or not

const leapYear = x => {
  return x % 4 === 0 ? "Leap year" : "Not a leap year";
};

console.log(leapYear(2016));
