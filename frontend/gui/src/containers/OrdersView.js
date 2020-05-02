import React from 'react';
// import axios from 'axios';
import OrderForm from '../components/OrderForm';

class OrdersView extends React.Component{

    render() {
        // const { account } = this.state;
        return(
        <div>
            <OrderForm />
        </div>
        )
    }
}

export default OrdersView