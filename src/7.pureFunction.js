// 纯函数
// 1、不会修改输入的参数
// 2、相同的参数一定会产生相同的输出
// 不是纯函数 ，修改了输入的参数
function withdrow(account) {
  account.balance = 100;
}

// 不是纯函数 ，相同的参数，不同的输出
function random() {
  return Math.random();
}

// react 的组件是纯函数
// 1、不要修改props
// 2、输入相同，输出相同
// 所以的react组件必须表现的像个纯函数
