import React from 'react';
// import axios from 'axios';
import OrderForm from '../components/OrderForm';
import SearchButton from '../components/searchbutton';
class OrderFormView extends React.Component{

    render() {
        // const { account } = this.state;
        return(
        <div>
            <center><SearchButton /></center>
            <OrderForm />
        </div>
        )
    }
}

export default OrderFormView