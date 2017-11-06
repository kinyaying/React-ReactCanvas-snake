import React, {Component} from 'react';
import ReactDom from 'react-dom';
import a from '../package.json';
a['test'] =1
console.log(a)
function Warnbanner(props) {
  if(props.warn) {
    return <div>{props.msg}</div>
  } else {
    return null;
  }
}

function testKuohao(cb) {
  console.log(cb(1))
}

testKuohao(val => val);
testKuohao(val => ({a: val}));
testKuohao(val => {return {a: val}});

class Page extends Component {
  constructor(props) {
    super(props);

    this.state = {
      msg: 'hehe',
      warn: false
    };

    this.click = this.click.bind(this);
  }

  click() {
    // console.log((val) => ({console.log(val)}))
    this.setState((preState) => {return {warn: !preState.warn}})

    // this.setState(
    //   {warn: !this.state.warn}
    // )
  }

  render() {
    return (<div>
              <Warnbanner warn={this.state.warn} msg={this.state.msg}/>
              <button onClick={this.click}>按钮</button>
            </div>)
  }
}

export default Page;
