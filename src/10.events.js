import React from 'react';
import ReactDOM from 'react-dom';

class ActionLink extends React.Component{
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  handleClick(e) {
    e.preventDefault();
    // console.log('handleClick=====', e)
  }

  render(e) {
    return (<div>
              <a href="http://baidu.com" onClick={this.handleClick}>呵呵</a>
            </div>)
  }
}

ReactDOM.render(
  <div>
    <ActionLink />
  </div>,
  document.getElementById('root')
);
