function test(a) {
  console.log(arguments);
}

let newTest = test.bind(this, 2);
newTest('aaa','cccs');
