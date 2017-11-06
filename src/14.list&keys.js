import React, {Component} from 'react';

function NumList(props) {
  let {numbers} = props;
  return (<ul>
              {numbers.map((item, index) => (<li key={index}>{item}</li>))}
          </ul>)
}

class List extends Component {
  render() {
    return <NumList numbers={[1,2,3,4,5]} />
  }
}

export default List;
