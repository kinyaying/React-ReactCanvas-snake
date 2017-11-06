import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// import Chess from './chess.js';
import Snake from './snake.js';

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
    <Snake />
  </div>,
  document.getElementById('root')
);
