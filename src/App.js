import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';
import axios from 'axios';

class App extends Component {
  state = {
    products: [],
    columns: [{
      dataField: 'id',
      text: 'Product ID',
      sort:true
    },
    {
      dataField: 'name',
      text: 'Product Name',
      filter: textFilter()
    }, {
      dataField: 'price',
      text: 'Product Price',
      sort: true
    }]
  }

  componentDidMount() {
  
        const more_data = [];
        for(let i = 0; i < 100; i++ ){
          const sample_data = {
            "id": i,
            "name": "PC",
            "price": "1000"
           }
             more_data.push(sample_data) 
        }

        this.setState({
          products: more_data
        });
  }
  
  render() {
    return (
      <div className="container" style={{ marginTop: 50}}>
        <BootstrapTable 
        striped
        hover
        keyField='id' 
        data={ this.state.products } 
        columns={ this.state.columns }
        filter={ filterFactory() }
        pagination={ paginationFactory() }
        
        />
      </div>
    );
  }
}

export default App;