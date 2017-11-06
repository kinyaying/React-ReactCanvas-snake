import React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      num: 0
    }

    this.minus = this.minus.bind(this);
  }

  add = (val) => {
    console.log('val::',val)
    this.setState({
      num: this.state.num + 1
    }, (preState, preProps) => {
      console.log('state 1==>', this.state.num)
    })

    // 因为setState是异步的，不能拿上一个执行的值计算这个
    // this.setState({
    //   num: this.state.num + 1
    // })
    // this.setState({
    //   num: this.state.num + 1
    // })

    // setState里面放一个函数的话，会被放入一个队列中变成串行执行
    this.setState((preState, preProps) => ({
      num: preState.num + 1
    }))
  }

  minus() {
    console.log('this', this)
    // this.setState({
    //   num: this.state.num - 1
    // })
  }

  render() {
    // onClick=this.add()  不行，render不能调用setState()
    return (<div>
              <p>{this.state.num}</p>
              <button onClick={this.add.bind(null, 1)}>加</button>
              <button onClick={this.minus}>减</button>
            </div>)
  }
}

ReactDOM.render(
  <div>
    <Counter />
  </div>,
  document.getElementById('root')
);
