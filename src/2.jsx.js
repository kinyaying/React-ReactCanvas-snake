import React from 'react';
import ReactDOM from 'react-dom';

let msg = '<script>alert(1)</script>'
let element = <div className="head">
  {msg}
  hello react
  <button tabIndex={3}>heihei</button>
  <button tabIndex={1}>hehe</button>
  <button tabIndex={2}>haha</button>
  <img src={'https://www.baidu.com/img/wanshengdoodle_677234cad70a5974a64e4665c6485c71.gif'} style={{border: '1px solid #ccc'}}/>
</div>;
var element1 = React.createElement(
  "h1",
  { id: "111", className: 'test' },
  'hello react world!!!'
);

const obj = {
  type: 'h1',
  props: {
    type: 'div',
    className: 'greeting',
    children: 'Hello, world'
  }
}; //虚拟dom


// element就是虚拟dom
// 虚拟dom其实是一个普通的js对象，但是可以用来描述真实dom长什么样子
// 属性有：type props children className
// render时把虚拟dom元素变成真实dom元素，插入到根节点
console.log('element::', element)

ReactDOM.render(
  <div>
    {element}
    {element1}
    
  </div>,
  document.getElementById('root')
);
