import React from 'react';
import axios from 'axios';
import { Table, Radio, Button, Input} from 'antd';
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
    handleChange(event){
        this.setState({ 
          [event.target.name]: event.target.value,
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
        
        const Symbol = this.state.symbol
    
        axios.post('http://127.0.0.1:8000/api/positions/', { Symbol })
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
        alert('Sold')
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
                    title: '*Type symbol to confirm sale',
                    key: 'action',
                    width: 115,
                    dataIndex: 'Symbol',
                    render: (dataIndex) => (
                    <center><Radio.Group value={dataIndex}>
                        <Input style={{width:'60px'}} name="symbol" placeholder="" onChange={(event) => this.handleChange(event)}/>
                        <Button style={{backgroundColor:'#4CAF50', color:'white'}}type="button" onClick={(event) => this.handleFormSubmit(event)}>Sell</Button>
                        {/* <Radio.Button loading = 'True' value ={dataIndex} type="secondary" block onClick ={(event) => this.sellMe(event)}> 
                        Sell 
                        </Radio.Button>
                        <Radio.Button value = 'small' type="primary" block>
                        Buy
                        </Radio.Button> */}
                    </Radio.Group></center>
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