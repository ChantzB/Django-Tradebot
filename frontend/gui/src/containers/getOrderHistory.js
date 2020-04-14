import React from 'react';
import axios from 'axios';
import { Table } from 'antd';

// const listData = [];
// for (let i = 0; i < 23; i++) {
//   listData.push({
//     title: `ant design part ${i}`,
//     quantity: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
//     bought_price:
//       'Ant Design, a design language for background applications, is refined by Ant UED Team.',
//     current_price:
//       'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
//   });
// }

class OrderList extends React.Component{
//go through and clean up code.. positions here should be different variable
    state = {
        positions: []
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/order_history/')
            .then(res => {
                this.setState({
                    positions: res.data
                });
                console.log(res.dat)
            })
    }

    render() {
            // <Positions data = {this.state.positions}/>
            const { positions: orders } = this.state;
            const order_List = orders.length ? (
                orders.map(positions => {
                    return (
                        <div> </div>
                    )
                })
            ):(
                <div className="center">No posts yet. Remember to run the backend server</div>
            )
        return (
            <div className="container">
                <h1 className="center">Portfolio</h1>
                { order_List }
            </div>
        )
        
    }
}

export default OrderList;