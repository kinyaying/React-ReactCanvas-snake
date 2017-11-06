import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);


  }

  componentDidMount() {

  }

  onKeyDown(e) {
    let value = e.target.value;
    if(e.keyCode == 13) {
      this.props.onSearch(value);
    }
  }


  render() {
    return (<div style={{border: '1px solid purple'}}>
              <input placeholder="please enter ..." type="text" onKeyDown={this.onKeyDown.bind(this)}/>
              <br/>
              <input type="checkbox" checked={this.props.check} onChange={this.props.changeCheck} /> Only show products in store
            </div>);
  }
}

export default SearchBar;
