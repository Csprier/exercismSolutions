function reverseString(string) {
  var newString = '';

  for (var i = string.length - 1; i >= 0; i--) {
    newString += string[i];
    // console.log(str[i]);
  }
  console.log(newString);
  return newString;
}

// reverseString('');
// reverseString('robot');
// reverseString('Ramen');
// reverseString('I am hungry!');
// reverseString('racecar');
