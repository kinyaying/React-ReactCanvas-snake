import React from 'react';
import ReactDOM from 'react-dom';

// 自定义组件 区分与 元素的react组件，比如p div span标签等
// 复合组件
function Welcome(props) {
  let {name, age} = {...props}
  console.log('a:', name, age)
  console.log('props:', {...props})
  return (<h1>
            Hello React!<br/>
            <Person {...props} />
          </h1>);
}

function Person(props) {
  return (
    <span>name is {props.name} and age is {props.age}</span>
  )
}

function App() {
  // 必须返回并且返回一个顶级元素, 至少要return null;
  return (<div>
            <Welcome name="lucy" age="9"/>
            <Welcome name="lily" age="1"/>
            <Welcome name="react" age="0"/>
          </div>);

}


class Test extends React.Component {
  state = {
    a: 1111
  }
  render() {
    return <div>{this.state.a}</div>
  }
}

ReactDOM.render(
  <div>
    <App />
    <Test />
  </div>,
  document.getElementById('root')
);
