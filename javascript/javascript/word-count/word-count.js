'use strict';

var Words = function(phrase) {
  // Regex acts as a whitelist, and replaces everything but what's in the regex
  let phrase_replace = phrase.replace(/[^\w\s*]/gi, ' ').trim();
  //   console.log(phrase_replace);
  let phrase_split = phrase_replace.split(' ').sort();

  for (let i = 0; i < phrase_split.length; i++) {
    if(phrase_split[i] == "") {
      phrase_split.splice(phrase_split[i], 1);
    }
  }
  console.log(phrase_split);

  let count = {};

  phrase_split.forEach(function(i) {
    count[i] = (count[i] || 0) + 1;
  });
  console.log(count);
  return count;
};

Words('word');
Words('counts one of each word');
Words('one fish two fish three fish four fish');
Words('one,two,three');
Words('testing 1 2 testing');
Words('car : carpet as java: javascript!!&@$%^&');
// module.exports = Words;