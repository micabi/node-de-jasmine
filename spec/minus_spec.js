const minus = require('./minus');

describe("関数minusのテスト", () => {
  it("5 - 3 = 2", () => {
    expect(minus(5, 3)).toBe(2);
  });
});