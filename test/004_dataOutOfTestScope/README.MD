# Data out of test scope

At first glance, it does not matter when to read test data and to init
supplementary objects - inside `it`, `describe` or on the top of the module.

```js
const fs = require('fs');
const testData = JSON.parse(fs.readFileSync('./testData.json', 'utf8')); // here?

describe('some block', ()=>{
    const testData = JSON.parse(fs.readFileSync('./testData.json', 'utf8')); // or here?
    it('should do something', ()=>{
      const testData = JSON.parse(fs.readFileSync('./testData.json', 'utf8')); // May be here?
  })
})

```
But imagine that you have thousands of test files and each of them init their test data
on the top of the module... What will happen?

Yeah, those objects will stay in your RAM until the end of the tests.
Number of tests will grow, RAM spent will grow... And eventually you will not have
enough RAM to run tests.

So you should always initialise test specific data inside test functions.
