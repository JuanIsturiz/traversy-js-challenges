function countVowels(str) {
  return str
    .split("")
    .filter((letter) => "aeiou".includes(letter.toLowerCase())).length;
}

console.log(
  countVowels("hello") // 2
);
console.log(
  countVowels("why") // 0
);
console.log(
  countVowels("mississippi") // 4
);

module.exports = countVowels;
