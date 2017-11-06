import React, {Component} from 'react';
import ReactDOM from 'react-dom';

function GreetGuest() {
  return (<div>已登录</div>);
}

function GreetStrang() {
  return (<div>未登录</div>);
}

function Greeting(props) {
  if(props.isLogin) {
    return <GreetGuest />
  } else {
    return <GreetStrang />
  }
}

function LoginButton(props) {
  return (<button onClick={props.onclick}>登录</button>)
}

function LogoutButton(props) {
  return (<button onClick={props.onclick}>退出</button>)
}

class LoginCtrl extends Component{
  constructor(props) {
      super(props);
      this.state = {
        isLogin: true
      }
  }

  click(btn) {
    this.setState({
      isLogin: btn
    })

  }

  render(e) {
    let button = this.state.isLogin?<LogoutButton onclick={this.click.bind(this, false)} />:<LoginButton onclick={this.click.bind(this, true)} />;
    return (<div>
                <Greeting isLogin={this.state.isLogin}/>
                {button}
            </div>)
  }
}

ReactDOM.render(
  <div>
    <LoginCtrl />
  </div>,
  document.getElementById('root')
);
