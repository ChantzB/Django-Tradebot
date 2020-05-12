import React from 'react';
import axios from 'axios';
import { Table, Radio} from 'antd';
import { Redirect } from 'react-router-dom';

class PositionsList extends React.Component{
    state = {
        positions: [],
        size : 'small',
        symbol: '',
        qty: 1,
        time_in_force: 'gtc',
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

    handleSizeChange = e => {
        this.setState({ size: e.target.value });
      };

      sellMe() {

        const order = this.state

        axios.post('http://127.0.0.1:8000/api/create_order/', {order})
        .then(res => 
            {

            })

        alert('Sold!');
        // <div>
        // <p> {this.order.symbol} </p>
        // </div>
        
      };

    render() {
        const { size } = this.state.size;
            // <Positions data = {this.state.positions}/>
            const columns = [
                {
                    title: 'Symbol',
                    dataIndex: 'symbol',
                    width: 100,
                },
                {
                    title: 'Quantity',
                    dataIndex: 'qty',
                    width: 100,
                },               
                {
                    title: 'Buy Price',
                    dataIndex: 'avg_entry_price',
                    width: 100,
                },
                {
                    title: 'Current Price',
                    dataIndex: 'current_price',
                    width: 100,
                },
                {
                    title: 'Profit',
                    dataIndex: 'unrealized_pl',
                    width: 100,
                },
                {title: 'Trade',
                key: 'action',
                width: 150,

                render: (text, record) => (
                <Radio.Group value={size} onChange={this.handleSizeChange}>
                    <Radio.Button value = 'small' type="secondary" block onClick ={() => this.sellMe()}> 
                     Sell 
                    </Radio.Button>

                    <Radio.Button value = 'small' type="primary" block>
                     Buy
                    </Radio.Button>
                </Radio.Group>
    ),
  },                
            ]
            const { positions } = this.state;
        return (
            <div>
                <div style={{width:'100%', float:"left"}}>
                    <h1 style={{ paddingTop:"20px", paddingBottom:"10px"}}>Assets</h1>
                    <Table 
                    style={{width:'100%', border:'inset', borderWidth:"thick", boxShadow:" 5px 10px 5px grey", backgroundColor:"gainsboro"}}
                    columns={columns} dataSource={positions}  pagination={{ pageSize: 10 }} scroll={{ y: 240 }} />
                </div>
            </div>
        )
        
    }
}

export default PositionsList