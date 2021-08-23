"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pow = pow;
exports.hypotenuse = hypotenuse;
exports.circleArea = circleArea;
var PI = 3.14;

function pow(base, exponent) {
  var mul = 1;

  for (var i = 0; i < exponent; i++) {
    mul = mul * base;
  }

  return mul;
}

function hypotenuse(adjacent, opposite) {
  var hypotenuse = pow(adjacent, 2) + pow(opposite, 2);
  var sqrtHypotenuse = Math.sqrt(hypotenuse);
  return {
    adjacent: adjacent,
    opposite: opposite,
    hypotenuse: sqrtHypotenuse
  };
}

function circleArea(radius) {
  var area = pow(radius, 2) * PI;
  return area;
}