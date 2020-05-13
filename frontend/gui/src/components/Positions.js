import React from 'react';
import axios from 'axios';
import { Table, Radio} from 'antd';

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
    
    decrementCount() {
        this.setState((state) => {
          // Important: read `state` instead of `this.state` when updating.
          return {count: state.qty - 1}
        });
      }

    sellMe(event){
        event.preventDefault();
        this.setState({ symbol: event.target.value });
        const Symbol = this.state.symbol
        console.log(Symbol)
        axios.post('http://127.0.0.1:8000/api/positions/', { Symbol })
          .then(res => {
            console.log(res);
            console.log(Symbol);
          })
        this.decrementCount();
        alert("SOLD!")
      };

    render() {
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
                {
                    title: 'Trade',
                    key: 'action',
                    width: 150,
                    dataIndex: 'Symbol',
                    render: (dataIndex) => (
                    <Radio.Group value={dataIndex}>
                        <Radio.Button loading = 'True' value ={dataIndex} type="secondary" block onClick ={(event) => this.sellMe(event)}> 
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