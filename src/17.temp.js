import React, {Component} from 'react';

const scaleNames = {
  c: '摄氏温度',
  f: '华氏温度'
};

function BoilingVerdict(props) {
  if(props.celsius >= 100) {
    return (<p>水开了</p>)
  } else {
    return (<p>水没开</p>)
  }

}
// 华氏转摄氏
function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

// 摄氏转华氏
function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      temperature: 0
    }
    this.clearInput = this.clearInput.bind(this);
  }

  handleChange(e) {
    // this.setState({[e.target.dataset.name]: e.target.value})
    console.log('e.target.value:', e.target.value)
    this.props.getTemp(e.target.value);
  }

  clearInput(e) {
    this.props.clearInput()
  }

  onClick(val){
    console.log(val)
  }

  render() {
    return (<fieldset>
                <label>请输入一个{scaleNames[this.props.scale]}：</label>
                <input
                    value={this.props.temperature}
                    data-name={this.props.scale}
                    onChange={this.props.getTemp.bind(this, this.refs.input.value)}
                    onClick={this.onClick.bind(this, this)}
                    onFocus={this.props.clearInput}
                    ref="input"
                    />
            </fieldset>)
  }
}


class Result extends Component {
  constructor() {
    super();
    this.state = {
      temp: 0,
      scale: 'c',
      t1: 0,
      t2: 0
    }
  }

  getTemp(temp,e) {
    console.log('e:???', e, temp)
    this.setState({
      temp
    });
  }

  clearInput(e) {
    this.setState({
      temp: '',
      scale: e.target.dataset.name
    })
  }

  handleTempChange() {

  }

  handleClick(e) {
    console.log('e:----', e.target.dataset.name)
  }

  render() {
    const scale = this.state.scale;
    const temp = this.state.temp;
    const cTemp = scale == 'f' ? tryConvert(this.state.temp, toCelsius) : temp;
    const fTemp = scale == 'c' ? tryConvert(this.state.temp, toFahrenheit) : temp;
    return (
      <div>
        <BoilingVerdict celsius={cTemp}/>
        <Calculator getTemp={this.getTemp.bind(this)} temperature={cTemp} clearInput={this.clearInput.bind(this)} onClick={this.handleClick} scale="c"/>
        <Calculator getTemp={this.getTemp.bind(this)} temperature={fTemp} clearInput={this.clearInput.bind(this)} onClick={this.handleClick} scale="f"/>
      </div>
    )
  }
}

export default Result;

{/*onChange={this.handleChange.bind(this)}*/}
