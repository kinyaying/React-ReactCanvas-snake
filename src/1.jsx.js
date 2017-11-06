import React from 'react';
import ReactDOM from 'react-dom';

// 是不能直接在浏览器中运行的，需要经过babel的编译
// {} 内部可以放表达式，但是表达式必须要有返回值
// 对象不是react的合法子元素
let element = <div>test render</div>;
let n1 = 1;
let n2 = 2;
let sum = <div>{n1+n2}</div>;
let user = {
  firstname: 'kin',
  lastname: 'yaying'
}

function greet(user) {
  if(user) {
    return `hello ${user}, welcome to react!`;
  } else {
    return 'hello stranger, welcome to react!';
  }
}

ReactDOM.render(
  <h1>
    {greet()}
  </h1>,
  document.getElementById('root')
);
