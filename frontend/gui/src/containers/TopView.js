import React from 'react';
import axios from 'axios';
import AccountList from '../components/AccountView';
import WatchList from '../components/watchlist';
import {
    Form,
    Input,
    Select,
    Button,
  } from 'antd';
import {
LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

  
const { Option } = Select;

class TopView extends React.Component { 

    state = {
      data: [],
      Symbol: '',
      Time: '1mo',
    }
  
    componentDidMount() {
      axios.get('http://127.0.0.1:8000/api/market_data/')
          .then(res => {
              this.setState({
                  data: res.data
              });
          })
    }

    handleChange(event){
      this.setState({ 
        [event.target.name]: event.target.value,
        [event.target.name]: event.target.value,
       })
    }
    
    handleFormSubmit(event){
      event.preventDefault();
      
      const market_search = this.state

      axios.post('http://127.0.0.1:8000/api/market_data/', { market_search })
        .then(res => {
          this.setState({
            data: res.data
        });
          // console.log(market_search);
          console.log(res.data);
        })
    };
  
    render(){
        const data = this.state.data
      return (
        <div>
            <div>
                <center><Form
                    onSubmit={this.handleFormSubmit}
                    style={{width:"50%"}}
                >
                    <Form.Item rules={[{ required: true }]}>
                        <Input.Group compact>
                        <Input name="Symbol" placeholder="Stock Search" onChange={(event) => this.handleChange(event)} style={{ width: '20%', backgroundColor: '#E8E8E8' }} />
                        <Select name="Time"
                        onChange={this.handleChange} defaultValue="1mo">
                            <Option value="1mo">1 Month</Option>
                            <Option value="3mo">3 Months</Option>
                        </Select>
                        <Button style={{}}
                        type="button" onClick={(event) => this.handleFormSubmit(event)}>Search</Button>
                        </Input.Group>
                    </Form.Item>
                </Form></center>
            </div>
            <div style={{paddingLeft:'40px', float:"left", width:"75%"}}>
                <AccountList/>
            </div>
            <div style={{padding:'40px'}}>
                <WatchList/>
                <LineChart
                    style={{float:"left", border:'inset'}}
                    width={1000}
                    height={500}
                    data={data}
                    margin={{
                    top: 30, right: 30, left: 0, bottom: 30,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="equity" stroke="red" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="Open" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="Close" stroke="#82ca9d" />
                </LineChart>
            </div>
        </div>
      );
    }
  };

  export default TopView
  