function arrayIntersection(arr1, arr2) {
  return Array.from(
    new Set(
      [...arr1, ...arr2].filter((x) => arr1.includes(x) && arr2.includes(x))
    )
  );
}

module.exports = arrayIntersection;
