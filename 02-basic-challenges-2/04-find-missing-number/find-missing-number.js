function findMissingNumber(nums) {
  if (Array.isArray(nums) && nums.length === 0) return 1;
  if (!Array.isArray(nums)) return undefined;
  const sorted = nums.sort((a, b) => a - b);
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i + 1] !== sorted[i] + 1) return sorted[i] + 1;
  }
}

module.exports = findMissingNumber;
