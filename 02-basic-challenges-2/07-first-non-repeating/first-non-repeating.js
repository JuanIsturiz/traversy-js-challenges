function findFirstNonRepeatingCharacter(str) {
  const dict = str
    .split("")
    .reduce(
      (acc, el) =>
        el in acc ? { ...acc, [el]: acc[el] + 1 } : { ...acc, [el]: 1 },
      {}
    );

  for (const key in dict) {
    if (dict[key] === 1) return key;
  }
  return null;
}

module.exports = findFirstNonRepeatingCharacter;
