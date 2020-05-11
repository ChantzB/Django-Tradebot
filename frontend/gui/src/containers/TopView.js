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
LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Dot, Bar, 
} from 'recharts';

  
const { Option } = Select;

class TopView extends React.Component { 

    state = {
      data: [],
      Symbol: '',
      Time: '',
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
                <center><Form onSubmit={this.handleFormSubmit} style={{width:"50%"}}>
                    <Form.Item rules={[{ required: true }]}>
                        <Input.Group compact>
                        <Input name="Symbol" placeholder="Stock Search" onChange={(event) => this.handleChange(event)} style={{ width: '20%', backgroundColor: '#E8E8E8' }} />
                        <Input name="Time" placeholder="Time" onChange={(event) => this.handleChange(event)} style={{ width: '10%', backgroundColor: '#E8E8E8' }} >
                        </Input>
                        <Button style={{}}
                        type="button" onClick={(event) => this.handleFormSubmit(event)}>Search</Button>
                        </Input.Group>
                        <p style={{fontSize:"12px"}}>Valid Times: 1mo, 3mo, 6mo, 1y</p>
                    </Form.Item>
                </Form></center>
            </div>
            <div style={{paddingLeft:'40px', float:"left", width:"75.3%"}}>
                <AccountList/>
            </div>
            <div style={{padding:'40px', }}>
                <WatchList/>
                <LineChart
                    style={{paddingRight:"", float:"left", border:'inset', borderWidth:"thick", boxShadow:"5px 10px 5px grey"}}
                    width={1000}
                    height={500}
                    data={data}
                    margin={{
                    top: 30, right: 30, left: 0, bottom: 30,
                    }}
                >
                    <CartesianGrid strokeDasharray="" stroke="eee"/>
                    <XAxis dataKey="date" />
                    <YAxis/>
                    <Tooltip />
                    <Legend type="line"/>
                    <Line type="monotone" dataKey="equity" stroke="red" width={8} strokeWidth={1} width={0} fill="red" direction="y"/>
                    <Line type="monotone" dataKey="Open" width={8} strokeWidth={1} width={0} fill="blue" direction="y" />
                    <Line type="monotone" dataKey="Close" stroke="Green" fill="green"/>
                </LineChart>
            </div>
        </div>
      );
    }
  };

  export default TopView
  