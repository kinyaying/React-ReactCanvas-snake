import React from 'react';
import ReactDOM from 'react-dom';

class Toggle extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      status: 'on'
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(val, e) {
    // 在类组件里，除了生命周期函数和构造函数（this指向react的实例）之外，其他函数里的this都指向undefined
    // 解决this问题的3种方法
    // 1、箭头函数
    // 2、调用的时候bind(this)
    // 3、在constructor里面 bind
    console.log('e:', e)
    arguments[1].preventDefault()
    if(this.state.status == 'on') {
      this.setState({
        status: 'off'
      })
    } else {
      this.setState({
        status: 'on'
      })
    }
  }

  handleA() {
    arguments[1].preventDefault()
    console.log(arguments)
  }

  render(e) {
    return (<div>
              {this.state.status}
              <a href="http://baidu.com" onClick={this.handleA.bind(this, 5)}>hei hei </a>
              <button onClick={this.handleClick.bind(this, e)}>开关</button>
            </div>)
  }
}

ReactDOM.render(
  <div>
    <Toggle />
  </div>,
  document.getElementById('root')
);
