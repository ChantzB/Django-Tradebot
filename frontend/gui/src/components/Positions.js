import React from 'react';
import axios from 'axios';
import { Table, Radio, Result, Button } from 'antd';


class PositionsList extends React.Component{
    state = {
        positions: [],
        size : 'small',
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

      constructor(props) {
        super(props);
        this.sellMe = this.sellMe.bind(this);
      };
    
      sellMe() {
        alert('Sold!');
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
                    <Radio.Button value = 'small' type="primary" block onClick ={() => this.sellMe()}> 
                     Sell 
                    </Radio.Button>

                    {/* <Result
    status="success"
    title="Successfully Purchased Cloud Server ECS!"
    subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
    extra={[
      <Button type="primary" key="console">
        Go Console
      </Button>,
      <Button key="buy">Sell Again</Button>,
    ]} */}
    
                    <Radio.Button value = 'small' type="primary" block>
                     Buy
                    </Radio.Button>
                </Radio.Group>
    ),
  },                
            ]
            const { positions } = this.state;
        return (
            <div style={{ paddingTop: "50px", width:'75%', float:"left"}}>
                <h1>Assets</h1>
                <Table 
                style={{width:'75%'}}
                columns={columns} dataSource={positions}  pagination={{ pageSize: 10 }} scroll={{ y: 240 }} />
            </div>
        )
        
    }
}

export default PositionsList