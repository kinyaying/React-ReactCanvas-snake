import React from 'react';
import ReactDOM from 'react-dom';

// react是不可变的，如果要更新的话需要创建新的元素
// 只改变需要渲染的部分
function tick() {
  let time = new Date().toLocaleString();
  let clock = (<div>
                  <h1>{time}</h1>
                  <script>{/*alert(11)*/}
                  </script>
               </div>);
   ReactDOM.render(
     clock,
     document.getElementById('root')
   );
}

setInterval(function() {
  tick()
}, 1000);

function newTick() {
  let time = new Date().toLocaleString();
  return time;
}

ReactDOM.render(
  <div>
    {tick()}
  </div>,
  document.getElementById('root')
);
