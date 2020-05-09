import React from 'react';
// import axios from 'axios';
import OrderForm from '../components/OrderForm';
import SearchButton from '../components/searchbutton';

class OrdersView extends React.Component{

    render() {
        // const { account } = this.state;
        return(
        <div style={{}}>
            <div style={{float:"right"}}>
                <OrderForm />
            </div>
            <center><div>
                <SearchButton/>
            </div></center>
        </div>
        )
    }
}

export default OrdersView