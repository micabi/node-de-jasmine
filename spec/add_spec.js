const add = require('./add');

describe("関数addのテスト", () => {
  it("2 + 3 = 5", () => {
    expect(add(2, 3)).toBe(5);
  });
});