import React, {Component} from 'react';

// 给子组件添加红色边框
class Panel extends Component {
  // constructor() {
  //
  // }

  componentDidMount() {
    console.log('this.props.children:', this.props.children)
    console.log('React.Children::', React.Children)
  }

  render() {
    return (<div style={{border: '1px solid red'}}>
              {React.Children.map(this.props.children, (item,index) => {return <p>{item}</p>;})}
            </div>);
  }
}

export default Panel;
// {this.props.children.map((item,index) => <p>{item}</p>)}
