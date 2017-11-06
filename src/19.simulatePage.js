import React, {Component} from 'react';
import FilterableProductTable from './19.components/FilterableProductTable.js'
import SearchBar from './19.components/SearchBar.js'
import ProductTable from './19.components/ProductTable.js'
import ProductCategoryRow from './19.components/ProductCategoryRow.js'
import ProductRow from './19.components/ProductRow.js'
let goods = require('./19.good.js')
// import goods from './19.good.js'
// [
//   {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
//   {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
//   {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
//   {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
//   {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
//   {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
// ];

function Test() {
  console.log('test this', this)
  return <div>test</div>
}

window.AAA = function() {
  console.log('AAA this', this)
}

window.AAA()

class Page extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: '',
      check: false
    }

  }

  componentDidMount() {

  }

  onSearch(keyword) {
    this.setState({keyword});
  }

  changeCheck(e) {
    this.setState({
      check: e.target.checked
    })
  }

  render() {
    return (<div>
              <FilterableProductTable>
                  <SearchBar keyword={this.state.keyword} check={this.state.check} onSearch={this.onSearch.bind(this)} changeCheck={this.changeCheck.bind(this)}/>
                  <ProductTable data={goods} keyword={this.state.keyword} check={this.state.check} />
              </FilterableProductTable>
              <Test />
            </div>);
  }
}

export default Page;
