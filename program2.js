/**
 * 
 * @param {string} s 
 * @return {number} 
 */
var romanToInt = function(s) {
  const charToInt = (c) => {
      switch (c) {
          case 'I': return 1;
          case 'V': return 5;
          case 'X': return 10;
          case 'L': return 50;
          case 'C': return 100;
          case 'D': return 500;
          case 'M': return 1000;
          default: return 0;
      }
  };
  let result = 0;
  let previous = 0;

  for (const char of s.split('').reverse()) {
      const current = charToInt(char);
      if (current >= previous) {
          result += current;
      } else {
          result -= current;
      }
      previous = current;
  }

  return result;
};
module.exports={romanToInt}
console.log(romanToInt("III")); 
console.log(romanToInt("LVIII")); 
console.log(romanToInt("MCMXCIV")); 

