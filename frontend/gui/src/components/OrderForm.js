
import React from 'react';
import axios from 'axios';
import {
  Form,
  Input,
  Button,
  Select,
} from 'antd';

class OrderForm extends React.Component { 

  state = {
    symbol: '',
    qty: '',
    type: '',
    time_in_force:'',
  }

  handleChange = event => {
    this.setState({ 
      symbol: event.target.symbol,
      qty: event.target.qty,
      type: event.target.type,
      time_in_force: event.target.time_in_force,

     })
  }
  
  handleFormSubmit = (event, requestType) => {
    event.preventDefault();
    
    const order = {
      symbol: this.state.symbol,
      qty: this.state.qty,
      type: this.state.type,
      time_in_force: this.state.time_in_force
    };

    axios.post('http://127.0.0.1:8000/api/create_order/', { order })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render(){
    return (
      <div>
        <h2><center>Create an Order</center></h2>
        <br/>
        <Form
          onSubmit={this.handleFormSubmit}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
          >
          <Form.Item label="Stock Symbol">
            <Input name="symbol" placeholder="symbol" onChange={this.handleChange}/>
          </Form.Item>
          <Form.Item label="Quantity">
            <Input name="qty" placeholder="quantity" onChange={this.handleChange}/>
          </Form.Item>
          <Form.Item label="Type">
            <Input name="type" placeholder="type" onChange={this.handleChange}/>
          </Form.Item>
          <Form.Item label="Time in Force">
            <Input name="time_in_force" placeholder="type" onChange={this.handleChange}/>
            gtc: "Good till canceled" <br/>
            day: Order expires at end of day
          </Form.Item>
          <Form.Item label=" ">
            <Button type="submit" htmlType="submit">Place Order</Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
};


export default OrderForm;