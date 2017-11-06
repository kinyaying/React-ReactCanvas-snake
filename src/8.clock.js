import React from 'react';
import ReactDOM from 'react-dom';

// react元素
// react组件

// 本地的状态(this.state)和生命周期的勾子函数
class Clock extends React.Component{
  constructor(props) {
    super(props); // 通过this.props 拿到props
    console.log('this.props:',this.props)
    // 给state增加私有属性\
    // 在构造函数内部初始化state对象
    // 如果一个值或者属性不在render中使用，就不能放在state里, 因为会带来额外的性能问题
    this.state = {
      date: new Date(),
      num: 1
    }
    // 组件销毁了，state也会被销毁，被垃圾回收了
    // 组件 = 组件的实例 = 通过组件类型的构造函数生成的
    // this.state 其实是组件实例上的一个私有属性
    //
  }

  // 组件将要挂载|挂载前
  componentWillMount() {
    console.log('1.componentWillMount')
  }

  // tick = () => {
  //
  // }
  //
  // tick() {
  //
  // }

  // 组件挂载完成后
  componentDidMount() {
    console.log('3.componentDidMount')
    this.timer = setInterval(() => {
      this._setState({
        date: new Date(),
        num: this.state.num+1
      })
      // this.state.date = new Date();
    }, 1000);
  }

  _setState(state) {
    // 1、调用setState 的时候不需要传入完整的对象
    // 2、通过setState只能增加字段，或者覆盖同名字段，不能删除字段
    console.log('this.state:', this.state)
    this.state = Object.assign({}, this.state, state);
    this.render();
    // React updates the DOM accordingly.然后react更新真实DOM
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
    // this.timer = null;
    clearInterval(this.timer, null)
  }

  render() {
    console.log('2.render===>', this.state.date,'====>', this.state.num)
    return (<div>
                <h1>Hello React!!!</h1>
                <h2>{this.state.date.toLocaleString()}</h2>
                <div>the num is {this.state.num}</div>
                <span>{this.props.date.toLocaleString()}</span>
            </div>)
  }
}


class TestUnmount1 extends React.Component {
  componentWillUnmount() {
    // console.log('componentWillUnmount1')
    this.timer = null;
  }
  render() {
    // console.log('render1')
    return <div>TestUnmount1</div>
  }
}

class TestUnmount2 extends React.Component {
  componentWillUnmount() {
    // console.log('componentWillUnmount2')
    this.timer = null;
  }
  render() {
    // console.log('render2')
    return <div>TestUnmount2</div>
  }
}

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 1
    }
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        num: this.state.num + 1
      })
      // console.log(this.state.num)
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer, null)
  }

  render() {
    if(this.state.num % 2 == 1) {
      return <TestUnmount2 />
    } else {
      return <TestUnmount1 />
    }
  }
}

function handleClick() {
  console.log('handleClick:=========>')
  // 从指定节点上删除里面挂载的组件。会触发组件的componentWillUnmount方法执行
  ReactDOM.unmountComponentAtNode(document.querySelector('#root'));
}

ReactDOM.render(
  <div>
    {<Clock date={new Date()}/>}
    <Test />
    <button onClick={handleClick}>卸载组件</button>
  </div>,
  document.getElementById('root')
);
