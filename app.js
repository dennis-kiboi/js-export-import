const radius = 5;
const sideLength = 10;

// Option 1: import the entire shape-area.js module here.

// const areaFunctions = require("./shapeArea.js");

// const circleArea = areaFunctions.circleArea;
// const squareArea = areaFunctions.squareArea;

// Option 2: import circleArea and squareArea with object destructuring

// const { circleArea, squareArea } = require("./shapeArea.js");

// use the imported .circleArea() and .squareArea() methods here

import A from "./shapeArea.js";


const areaOfCircle = A(radius);

// const areaOfSquare = squareArea(sideLength);

console.log(`Area of the circle is: ${areaOfCircle}`);
// console.log(`Area of the square is: ${areaOfSquare}`);
