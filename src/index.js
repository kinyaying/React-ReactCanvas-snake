import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// import Chess from './chess.js';
// import Snake from './snake.js';
// import TestCanvas from './testCanvas.js';
import TestRouter from '../11_07/index'
// 测试 defaultProps
// class Greeting extends Component {
//
//   static defaultProps = {
//     name: 'stranger'
//   }
//
//   render() {
//     return (
//       <div>Hello, {this.props.name}</div>
//     )
//   }
// }

// Greeting.defaultProps = {
//   name: 'stranger'
// }

ReactDOM.render(
  <div>
    <TestRouter />
  </div>,
  document.getElementById('root')
);
