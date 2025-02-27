import React, { Component } from 'react';
import axios from 'axios';
import { Table} from 'antd';

class OrderList extends Component {
//go through and clean up code.. positions here should be different variable

state = {
    userOrders: []
}

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/order_history/')
            .then(res => {
                this.setState({
                    userOrders: res.data
                });
                console.log(res.data)
            })
    }

    render() {
    //Setting columns
    const cols = [
        {
            title: 'Time',
            width: 100,
            dataIndex: 'transaction_time',
          },
          {
            title: 'Symbol',
            width: 40,
            dataIndex: 'symbol',
          },
          {
            title: 'Quantitiy',
            dataIndex: 'qty',
            width: 60,
          },
          {
            title: 'Price',
            dataIndex: 'price',
            width: 60,
          },
          {
            title: 'Status',
            dataIndex: 'side',
            width: 50,
          },
        ]

        const { userOrders } = this.state;


    return(
      <div>
        <div style={{width:'100%', float:"left"}}>
          <h1  style={{ paddingTop:"20px", paddingBottom:"10px"}}> Order History</h1>
          <Table 
          style={{width:"100%" , border:'inset', borderWidth:"thick", boxShadow:" 5px 10px 5px grey", backgroundColor:"gainsboro"}}
          columns={cols} dataSource={userOrders} pagination={{ pageSize: 10 }} scroll={{ y: 220 }} />
        </div>
      </div>
        )
    }
}


export default OrderList;
