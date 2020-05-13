import React from 'react';
import axios from 'axios';
import {
  Form,
  Input,
  Button
} from 'antd';

class OrderForm extends React.Component { 

  state = {
    symbol: '',
    qty: '',
    side: 'buy',
    type: '',
    time_in_force:'',
  }

  handleChange(event){
    this.setState({ 
      [event.target.name]: event.target.value,
      [event.target.name]: event.target.value,
      [event.target.name]: event.target.value,
      [event.target.name]: event.target.value,
     })
  }
  
  handleFormSubmit(event){
    event.preventDefault();
    
    const order = this.state

    axios.post('http://127.0.0.1:8000/api/create_order/', { order })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  };

  render(){
    return (
      <div style={{float:"right", width:"25%", height:"500px",  border:"inset", borderWidth:"thick", boxShadow:"5px 10px 5px grey"}}>
        <h2><center>Create an Order</center></h2>
        <br/>
        <br/>
        <Form
          onSubmit={this.handleFormSubmit}
          labelCol={{ span:8 }}
          wrapperCol={{ span: 12}}
          layout="horizontal"
          size = "large" 
          style={{height:"600px"}}
          >
          <Form.Item label="Stock Symbol">
            <Input name="symbol" placeholder="symbol" onChange={(event) => this.handleChange(event)}/>
          </Form.Item>
          <Form.Item label="Quantity">
            <Input name="qty" placeholder="quantity" onChange={(event) => this.handleChange(event)}/>
          </Form.Item>
          <Form.Item label="Type">
            <Input name="type" placeholder="type" onChange={(event) => this.handleChange(event)}/>
          </Form.Item>
          <Form.Item label="Time in Force">
            <Input name="time_in_force" placeholder="type" onChange={(event) => this.handleChange(event)}/>
            gtc: "Good till canceled" <br/>
            day: Order expires at end of day
          </Form.Item>
          <Form.Item label=" ">
            <Button type="button" onClick={(event) => this.handleFormSubmit(event)}>Place Order</Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
};


export default OrderForm;