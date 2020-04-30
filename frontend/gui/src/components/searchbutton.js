import React from 'react';
import axios from 'axios';
import {
    Form,
    Input,
    AutoComplete,
    Select,
    Button,
  } from 'antd';
import {
LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
const { Option } = Select;

class SearchButton extends React.Component { 

    state = {
      data: [],
      Symbol: '',
      Time: '',
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
          console.log(market_search);
          console.log(res.data);
        })
    };
  
    render(){
      const {data} = this.state.data
      return (
        <div>
          <h2><center>Search</center></h2>
          <br/>
          <Form
            onSubmit={this.handleFormSubmit}
          >
            <Form.Item rules={[{ required: true }]}>
                <Input.Group compact>
                <Input name="Symbol" onChange={(event) => this.handleChange(event)} style={{ width: '20%' }} />
                <Select name="Time" onChange={this.handleChange} defaultValue="1mo">
                    <Option value="1mo">1 Month</Option>
                    <Option value="3mo">3 Months</Option>
                </Select>
                </Input.Group>
            </Form.Item>
            <Button type="button" onClick={(event) => this.handleFormSubmit(event)}>Search</Button>
          </Form>
        </div>
      );
    }
  };
  
  
  export default SearchButton;