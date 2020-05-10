import React from 'react';
import axios from 'axios';
import {
    Form,
    Input,
    Select,
    Button,
  } from 'antd';
import {
LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';
  
const { Option } = Select;

class SearchButton extends React.Component { 

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
          <Form
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
          </Form>
          <LineChart
            style={{float:"left"}}
            width={1200}
            height={700}
            data={data}
            margin={{
              top: 5, right: 30, left: 20, bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="equity" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="Open" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="Close" stroke="#82ca9d" />
          </LineChart>
        </div>
      );
    }
  };
  
  
  export default SearchButton;