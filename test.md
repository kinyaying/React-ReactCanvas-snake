```
const defaultProps = {
  name: 'Stranger'
};

class Greeting extends React.Component {
  render() {
    return (
      <h1>Hello, {this.props.name}</h1>
    );
  }
}

// Specifies the default values for props:
Greeting.defaultProps = defaultProps;

// Renders "Hello, Stranger":
ReactDOM.render(
  <Greeting />,
  document.getElementById('example')
);
```

You can also put propTypes and defaultProps as static props inside React class.

```
class Greeting extends Component {

  static defaultProps = {
    name: 'stranger'
  }

  render() {
    return (
      <div>Hello, {this.props.name}</div>
    )
  }
}
```

It is considerably more convenient. But non-functional properties are not currently supported for ES2015 classes, you should install extra plugin to support this syntax. If you want to only use strictly ES2015, the former syntax is the better choice.


1、Declare the defaultProps alone. And it is obeying AirBNB's styleguide.
2、Someone is confused about is it OK to put propTypes and defaultProps as static props inside React class. And we can explain about this question.
