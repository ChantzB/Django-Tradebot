
import React from 'react';
import axios from 'axios';
import {
  Form,
  Input,
  Button,
  Select,
} from 'antd';

class OrderForm extends React.Component { 

  handleFormSubmit = (event, requestType) => {
    const symbol = event.target.elements.symbol.value;
    const qty = event.target.elements.qty.value;
    const type = event.target.elements.type.value;
    const time_in_force = event.target.elements.time_in_force.value;

    switch (requestType) {
      case 'post':
         return axios.post('http://127.0.0.1:8000/api/create_order/', {
          symbol: symbol,
          qty: qty,
          side: 'buy',
          type: type, 
          time_in_force: time_in_force
        })
        .then(res => console.log(res))
        .catch(error => console.err(error));
    }
    

  }

  render(){
    return (
      <div>
        <h2><center>Create an Order</center></h2>
        <br/>
        <Form
          onSubmit={(event) => this.handleFormSubmit(event, this.props.requestType)}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
          >
          <Form.Item label="Stock Symbol">
            <Input name="symbol" placeholder="symbol"/>
          </Form.Item>
          <Form.Item label="Quantity">
            <Input name="qty" placeholder="quantity"/>
          </Form.Item>
          <Form.Item label="Type">
            <Input name="type" placeholder="type" />
          </Form.Item>
          <Form.Item label="Time in Force">
            <Input name="time_in_force" placeholder="type" />
            gtc: "Good till canceled" <br/>
            day: Order expires at end of day
          </Form.Item>
          <Form.Item label=" ">
            <Button type="primary" htmlType="submit">Place Order</Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
};


export default OrderForm;