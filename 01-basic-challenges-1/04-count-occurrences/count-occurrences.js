function countOccurrences(str, char) {
  return str.split("").filter((c) => c === char).length;
}

module.exports = countOccurrences;
