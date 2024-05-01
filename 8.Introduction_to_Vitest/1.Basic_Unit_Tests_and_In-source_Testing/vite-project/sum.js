export default function sum(...numbers) {
  let sum = 0;

  for (let num of numbers) {
    sum += num;
  }
  return sum;
}

if (import.meta.vitest) {
  describe("#sum", () => {
    it("2+3 = 5", () => {
      expect(sum(2, 3)).toBe(5);
    });

    it("Returns same no. with one no.", () => {
      expect(sum(3)).toBe(3);
    });

    it("Returns sum with multiple no.", () => {
      expect(sum(5, 10, 15)).toBe(30);
    });
  });
}
