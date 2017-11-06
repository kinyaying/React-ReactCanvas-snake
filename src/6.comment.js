import React from 'react';
import ReactDOM from 'react-dom';
import "./6.index.css";

let data = {
  author: {
    name: 'jack',
    avatarUrl: 'http://pic.downcc.com/upload/2016-7/20167181357357469.png'
  },
  text: 'hello react!!! This is funny!',
  date: new Date()
}

function Avatar(props) {
  return (<img className="Avatar"
    src={props.avatarUrl}
    alt={props.name}
  />)
}
function format(date) {
  return date.toLocaleString();
}
let UserInfo = (props) => {
  // props.author.name = 'kin';
  return (<div className="UserInfo">
            <Avatar {...props.author}/>
            <div className="UserInfo-name">
              {props.author.name}
            </div>
          </div>);
}
// ...props.author结构变成{name:"jack", avatarUrl: "url..."}
// 传入组件属性的时候，变成了name=“jack” avatarUrl="url..."
// 取值的时候变成了props={name:"jack", avatarUrl: "url..."}
function Comment(props) {
  // props.date = new Date();
  props.author.name = 'lily';
  return (
    <div className="Comment">
      <UserInfo {...props}/>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {format(props.date)}
      </div>
    </div>
  );
}



ReactDOM.render(
  <div>
    <Comment {...data}/>
  </div>,
  document.getElementById('root')
);
