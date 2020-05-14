import React from 'react';
import axios from 'axios';
import { Table, Radio, Button, Input} from 'antd';
import { Redirect } from 'react-router-dom';

class PositionsList extends React.Component{
    state = {
        positions: [],
        symbol: '',
        qty: '',
        side: 'sell',
        type: 'market',
        time_in_force:'gtc',
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
          [event.target.name]: event.target.value,
         })
      }
    
    // decrementCount() {
    //     this.setState((state) => {
    //       // Important: read `state` instead of `this.state` when updating.
    //       return {count: state.qty - 1}
    //     });
    //   }

    handleFormSubmit(event){
        
        const order = [
            this.state.symbol,
            this.state.qty,
            this.state.side,
            this.state.type,
            this.state.time_in_force
        ]
     
        axios.post('http://127.0.0.1:8000/api/create_order/', { order })
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
        alert('Sold')
        this.setState({
            symbol: '',
            qty: '',
          });
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
                    title: 'Sell - Type symbol to confirm*',
                    key: 'action',
                    width: 115,
                    dataIndex: 'Symbol',
                    render: (title) => (
                    <div>
                        <Radio.Group value={title}>
                            <Input style={{width:'50px'}} name="qty" placeholder="Qty" onChange={(event) => this.handleChange(event)}/>
                             :
                            <Input style={{width:'70px'}} name="symbol" placeholder="Symbol" onChange={(event) => this.handleChange(event)}/>
                            <Button style={{backgroundColor:'#4CAF50', color:'white'}}type="button" onClick={(event) => this.handleFormSubmit(event)}>Sell</Button>
                        </Radio.Group>

                    </div>
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