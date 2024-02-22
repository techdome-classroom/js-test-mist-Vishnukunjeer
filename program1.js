/**
* @param {string} s
* @return {boolean}
*/
var isValid = function(s){
   const stack = [];
   const validBrackets = {
       '(': ')',
       '{': '}',
       '[': ']',
   };

   for (const char of s) {
       if (validBrackets[char]) {
           stack.push(char);
       } else {
           const lastBracket = stack.pop();
           if (validBrackets[lastBracket] !== char) {
               return false;
           }
       }
   }

   return stack.length === 0;
};


console.log(isValid("()")); 
console.log(isValid("()[]{}")); 
console.log(isValid("(]")); 


module.exports = { isValid };



