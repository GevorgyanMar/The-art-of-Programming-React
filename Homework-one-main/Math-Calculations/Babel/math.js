const PI = 3.14;

export function pow(base, exponent) {
  let mul = 1;
  for (let i = 0; i < exponent; i++) {
    mul = mul * base;
  }
  return mul;
}




export function hypotenuse(adjacent, opposite) {
  let hypotenuse = pow(adjacent, 2) + pow(opposite, 2); 
  let sqrtHypotenuse = Math.sqrt(hypotenuse);
  return {
    adjacent: adjacent,
    opposite: opposite,
    hypotenuse: sqrtHypotenuse
  };
}


export function circleArea(radius) {
  let area = pow(radius, 2) * PI;
  return area;
}
