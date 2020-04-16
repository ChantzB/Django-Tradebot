import React, { Component } from 'react';
import axios from 'axios';
import { Table} from 'antd';
//const { Column, ColumnGroup } = Table;

class OrderList extends Component {
//go through and clean up code.. positions here should be different variable

state = {
    userWatchList: []
}

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/order_history/')
            .then(res => {
                this.setState({
                        userWatchList: res.data
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
            width: 100,
            dataIndex: 'symbol',
          },
          {
            title: 'Quantitiy',
            dataIndex: 'qty',
            width: 150,
          },
          {
            title: 'Price',
            dataIndex: 'price',
            width: 150,
          },
          {
            title: 'Status',
            dataIndex: 'side',
            width: 150,
          },
        ]

        const { userWatchList } = this.state;


    return(
    <Table columns={cols} dataSource={userWatchList} pagination={{ pageSize: 50 }} scroll={{ y: 240 }} />
        )
    }
}

export default OrderList;
