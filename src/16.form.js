import React, {Component} from 'react';
import './index.css';

// 受控组件： input的显示的值受react控制
// 组件不应该从非受控到受控
class RegForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // username: 111,
      password: 111,
      textvalue: '',
      selectVal: ''
    }
  }

  handleChange(type, e) {
    let val = e.target.value;
    let field = e.target.dataset.field;
    // this.setState({[type]: val})
    console.log(e.target.dataset.fieldAa)
    var partialState = {};
    partialState[field] = val;
    this.setState(partialState)
  }


  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state)
  }

  // handleSelect(e) {
  //   // console.log(this.state.value, e.target.value)
  //   // this.setState({
  //   //   value: e.target.value
  //   // })
  // }

  render() {
    return (<div>
              <form method="post" onSubmit={this.handleSubmit.bind(this)}>
                <input required data-age="15" data-field-aa="username" type="text" value={this.state.username}  onChange={this.handleChange.bind(this, 'username')} />
                <input type="password" data-field="password" value={this.state.password}  onChange={this.handleChange.bind(this, 'password')}/>
                <input type="submit" value="提交" />
              </form>
              <textarea data-field="textvalue" value={this.state.textvalue} onChange={this.handleChange.bind(this, 'textvalue')}>111</textarea>
              <select name="" id="" value={this.state.selectVal} onChange={this.handleChange.bind(this, 'selectVal')} data-field="selectVal">
                  <option value="apple">苹果</option>
                  <option value="banner">香蕉</option>
                  <option value="orange">橘子</option>
              </select>
            </div>)
  }
}

export default RegForm;
