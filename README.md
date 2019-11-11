# node-de-jasmine

## npmパッケージのjasmineを使ってjavascriptのテストをおこなう

### 準備

```bash
$ npm init

$ npm i -D jasmine

$ export PATH=$PATH:./node_modules/.bin  // パスを通す

$ jasmine init  // specディレクトリができる
```

### テスト用のファイルは**spec.jsと名付ける

$ touch add.js add_spec.js

モジュールの読み込みはCommonJS方式でおこなう（大事!）

add.js

```javascript
function add(a, b){
  return a + b;
}
module.exports = add;
```

add_spec.js

```javascript
const add = require('./add');

describe("関数addのテスト", () => {
  it("2 + 3 = 5", () => {
    expect(add(2, 3)).toBe(5);
  });
});
```

$ jasmine spec/add_spec.js

```bash
Randomized with seed 84644
Started
.


1 spec, 0 failures
Finished in 0.013 seconds
Randomized with seed 84644 (jasmine --random=true --seed=84644)
```
