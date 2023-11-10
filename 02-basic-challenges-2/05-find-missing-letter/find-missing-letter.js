function findMissingLetter(letters) {
  if (!letters.length) return "";
  const ABC = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let j = 0;
  for (
    let i = ABC.indexOf(letters[0]);
    i < ABC.indexOf(letters[letters.length - 1]);
    i++
  ) {
    if (ABC[i] !== letters[j]) return ABC[i];
    j++;
  }
}

module.exports = findMissingLetter;
