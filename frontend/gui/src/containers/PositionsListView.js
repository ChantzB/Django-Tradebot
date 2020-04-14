import React from 'react';
import axios from 'axios';
import { List, Card, Table, columns } from 'antd';

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

class PositionsList extends React.Component{
//go through and clean up code.. positions here should be different variable
    state = {
        positions: []
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/positions/')
            .then(res => {
                this.setState({
                    positions: res.data
                });
                console.log(res.data)
            })
    }

    render() {
            // <Positions data = {this.state.positions}/>
            const columns = [
                {
                    title: 'Symbol',
                    dataIndex: 'symbol',
                    width: 150,
                },
                {
                    title: 'Quantity',
                    dataIndex: 'qty',
                    width: 150,
                },               
                {
                    title: 'Buy Price',
                    dataIndex: 'avg_entry_price',
                    width: 150,
                },
                {
                    title: 'Current Price',
                    dataIndex: 'current_price',
                    width: 150,
                },
                {
                    title: 'Profit',
                    dataIndex: 'unrealized_pl',
                    width: 150,
                },                
            ]
            const { positions } = this.state;
            // const position_List = positions.length ? (
            //     positions.map(positions => {
            //             <List grid={{ gutter: 16, column: 6 }}>
            //                 <List.Item >
            //                 <Card title={positions.symbol}>
            //                     Quantity: {positions.qty} <br/>
            //                     Buy Price: {positions.avg_entry_price} <br/>
            //                     Current Price: {positions.current_price} <br/>
            //                     Profit: {positions.unrealized_pl} <br/>
            //                 </Card>
            //                 </List.Item>
            //             </List>
            //     })
            // ):(
            //     <div className="Center">No posts yet. Remember to run the backend server</div>
            // )
        return (
            <Table columns={columns} dataSource={positions}  pagination={{ pageSize: 50 }} scroll={{ y: 240 }} />
        )
        
    }
}

export default PositionsList