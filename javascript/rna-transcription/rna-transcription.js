/*
* `G` -> `C`
* `C` -> `G`
* `T` -> `A`
* `A` -> `U`
*/

function dnaTranscriber(n) {
  if (n === 'G') {
    console.log('C');
    return 'C';
  } else if (n === 'C') {
    console.log('G');
    return 'G';
  } else if (n === 'T') {
    console.log('A');
    return 'A';
  } else if (n === 'A') {
    console.log('U');
    return 'U';
  } else {
    console.log('Given Nucleotide is not a member of the DNA/RNA transcription.');
    return 'Given Nucleotide is not a member of the DNA/RNA transcription.';
  }
};

// dnaTranscriber('G'); // C
// dnaTranscriber('C'); // G
// dnaTranscriber('T'); // A
// dnaTranscriber('A'); // U
