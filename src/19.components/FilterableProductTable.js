import React, {Component} from 'react';

class FilterableProductTable extends Component {
  constructor(props) {
    super(props);


  }

  componentDidMount() {

  }

  render() {
    return (<div style={{border: '1px solid orange', padding: '5px'}}>
              {this.props.children}
            </div>);
  }
}

export default FilterableProductTable;
