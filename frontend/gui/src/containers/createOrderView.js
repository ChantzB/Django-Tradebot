import React from 'react';
// import axios from 'axios';
import OrderForm from '../components/OrderForm'


class OrderFormView extends React.Component{

    render() {
        // const { account } = this.state;
        return(
        <div>
            <OrderForm requestType="post"/>
        </div>
        )
    }
}

export default OrderFormView