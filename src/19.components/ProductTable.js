import React, {Component} from 'react';
import ProductCategoryRow from './ProductCategoryRow';
class ProductTable extends Component {
  constructor(props) {
    super(props);


  }

  componentDidMount() {

  }

  render() {
    let keyword = this.props.keyword;
    let check = this.props.check;

    let products = this.props.data;
    let tempCategory = '', tempArr = [], resArr = [];
    let titleArr = [];
    products.forEach((item, index) => {
      if(tempCategory != item.category) {
        titleArr.push(item.category);
        tempArr.length && resArr.push(tempArr);
        tempCategory = item.category;
        tempArr = [];
        console.log(item.name.indexOf(keyword))
        if(keyword == '' || item.name.indexOf(keyword) != -1) {
          if(!check || item.stocked) {
            tempArr.push(item)
          }
        }

      } else {
        if(keyword == '' || item.name.indexOf(keyword) != -1) {
          if(!check || item.stocked) {
            tempArr.push(item)
          }
        }
        index == products.length-1 && resArr.push(tempArr);
      }
    });

    console.log('DOM===>', resArr, titleArr)
    return (<div style={{border: '1px solid green'}}>
                <ul><li><span>名称</span><span>价格</span></li></ul>
                {resArr.map((item, index) => {
                  return <ProductCategoryRow
                            data={item}
                            title={titleArr[index]}
                            key={index}
                            keyword={this.props.keyword}
                            check={this.props.check} />
                })}
            </div>);
  }
}

export default ProductTable;
