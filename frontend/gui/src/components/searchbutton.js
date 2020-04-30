import React from 'react';
import axios from 'axios';
import {
    Form,
    Input,
    AutoComplete,
    Select,
    Button,
  } from 'antd';
  
const { Option } = Select;

class SearchButton extends React.Component { 

    state = {
      data: [],
      Symbol: '',
      Time: '1d',
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
          console.log(res.data[0]);
        })
    };
  
    render(){
      
      return (
        <div>
          <Form
            onSubmit={this.handleFormSubmit}
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
    
        </div>
      );
    }
  };
  
  
  export default SearchButton;