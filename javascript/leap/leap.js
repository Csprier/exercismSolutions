//
// This is only a SKELETON file for the "Leap" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Year = function (input) {
  this.value = input;
};

Year.prototype.isLeap = function () {
  if ((Year % 4) === 0) {
   if ((Year % 100) === 0) {
     if ((Year % 400) !== 0) {
       return false;
     }
     if ((Year % 400) === 0) {
       return true;
     }
   }
   if ((Year % 100) !== 0) {
     return true;
    }
  }
  if ((Year % 4) !== 0) {
    return false;
  }
};

module.exports = Year;

// There are issues with this code;
