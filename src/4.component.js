import React from 'react';
import ReactDOM from 'react-dom';

/*
** 通过函数定义组件
**
**
*/
// 渲染函数式组件的时候，会先把传入组件的属性包装成对象，传入组件函数，返回一个react元素
function Welcome(props) {
  return (<h1>{props.name}
            <p>{props.msg}</p>
          </h1>);
}

/*
*  如何渲染类级组件
*  1、把所有传递给组件的属性封装成一个对象
*  2、把属性对象传递给组件类的构造函数，从而得到组件的实例
*  3、调用实例的render方法，得到react元素
*  4、由reactdom把react元素转换成真实的DOM对象，插入到页面中
*  !!! 类的名称必须首字母大写，因为大写字母开头，表示是react组件，react内部会进行处理，小写字母开头表示react元素，直接渲染进去
*/
// 一个普通的类继承了React组件类，就成为一个自定义组件, 每个类有一个render方法，用来返回react元素
class Test extends React.Component {
  constructor(props) {
    super(props); //调用父类的构造函数
    // 内部执行了 this.props = props;
  }
  // es6代码，最终变成es5代码
  render() {
    return <div>{this.props.name}</div>
  }
}

ReactDOM.render(
  <div>
    <Welcome name="kin" msg="hello react!!!" />
    <Test name="kinyaying" />
  </div>,
  document.getElementById('root')
);
