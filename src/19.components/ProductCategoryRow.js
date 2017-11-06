import React, {Component} from 'react';

class ProductCategoryRow extends Component {
  constructor(props) {
    super(props);


  }

  componentDidMount() {

  }



  render() {
    // let keyword = this.props.keyword;
    // let check = this.props.check;
    // li是react元素
    return (<ul>
                {this.props.data.length != 0 && <div style={{color: 'green', fontWeight: 'bold'}}>{this.props.title}</div>}
                {
                  this.props.data.map((item, index) => {
                    return <li key={index} style={item.stocked ? {} : {color: 'red'}}><span>{item.name}</span><span>{item.price}</span></li>
                  })
                }
            </ul>);
  }
}

export default ProductCategoryRow;
