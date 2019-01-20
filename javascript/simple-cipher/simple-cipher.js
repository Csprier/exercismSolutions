var map = {
  a : 'd',
  b : 'e',
  c : 'f',
  d : 'g',
  e : 'h',
  f : 'i',
  g : 'j',
  h : 'k',
  i : 'l',
  j : 'm',
  k : 'n',
  l : 'o',
  m : 'p',
  n : 'q',
  o : 'r',
  p : 's',
  q : 't',
  r : 'u',
  s : 'v',
  t : 'w',
  u : 'x',
  v : 'y',
  w : 'z',
  x : 'a',
  y : 'b',
  z : 'c'
}

var Cipher = function(string){
  this.string = string;
  this.map = map;
  var stringSplit = string.split('');
  // console.log(stringSplit);
  var encryptedString = '';


  for (var i = 0; i < stringSplit.length; i++) {
    // console.log(stringSplit[i]);
    // If the entire string is caps, return 'Bad key'
    if (this.string === string.toUpperCase()) {
      console.log('Bad key');
      return 'Bad key'
    }
    // If the entire string is numbers
    if (this.string === /([1-9])\w+/) {
      console.log('Bad key');
      return 'Bad key';
    }

    // If the first letter of the string is capitalized, push to encryptedString
    if (stringSplit[i] === this.string[0].toUpperCase()) {
      encryptedString += stringSplit[i]
    }

    // Monitor for punctuation
    if (stringSplit[i] === ' ') {
      encryptedString += stringSplit[i];
    } else if (stringSplit[i] === '.') {
      encryptedString += stringSplit[i];
    } else if (stringSplit[i] === '!') {
      encryptedString += stringSplit[i];
    } else if (stringSplit[i] === '?') {
      encryptedString += stringSplit[i];
    }

    for (var key in this.map) {
      if (stringSplit[i] === key) {
        encryptedString += this.map[key];
      }
    }
  }
  console.log('To be encrypted: ', this.string);
  console.log('encryptedString: ', encryptedString);
  return encryptedString;
};
