const PI = Math.PI;

// Define and export circleArea() and squareArea() below
// module.exports.circleArea = function (radiusLength) {
//   return PI * radiusLength * radiusLength;
// };

function circleArea(radiusLength) {
  return PI * radiusLength * radiusLength;
}

// module.exports.circleArea = circleArea;

// module.exports.squareArea = function (sideLength) {
//   return sideLength * sideLength;
// };

function squareArea(sideLength) {
  return sideLength * sideLength;
}

export default circleArea;