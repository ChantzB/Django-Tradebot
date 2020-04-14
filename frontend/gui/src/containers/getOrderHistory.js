import React, { Component } from 'react';
import axios from 'axios';
import { Table } from 'antd';
const { Column, ColumnGroup } = Table;

class OrderList extends Component {
//go through and clean up code.. positions here should be different variable
    constructor(props)
    {
        super(props);
        this.state = {
        userOrders: []
        }
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
            const { userOrders } = this.state;
            const order_List = userOrders.length ? (
                userOrders.map(userOrders => {
                    return (
                        <Table> 
                            <ColumnGroup title="Order History">
                            <Column title="Symbol" dataIndex=  "symbol" key = "symbol"/>
                            <Column title="Avg Cost" dataIndex= "price" key =  "price"/>
                            </ColumnGroup>
                        </Table> 
                    )
                })
            ):(
                <div className="center">No posts yet. Remember to run the backend server</div>
            )
        return (
            <div className="container">
                <h1 className="center">Order History</h1>
                { order_List }
            </div>
        )
    }
}

export default OrderList;
