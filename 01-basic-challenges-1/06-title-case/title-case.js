function titleCase(str) {
  return str
    .split("")
    .map((word) => word[0].toUpperCase() + word.substring(1).toLowerCase())
    .join(" ");
}

module.exports = titleCase;
