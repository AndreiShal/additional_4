module.exports = function multiply(first, second) {
  multiply('1', '1') // -> '1', because 1 * 1 === 1
  multiply('2', '2') // -> '4', because 2 * 2 === 4
  multiply('5', '10') // -> '50', because 5 * 10 === 50
  // your solution
  
  console.log(multiply(first, second) + ' because' + first + ' * ' + second + '===' + multiply(first, second));
}
