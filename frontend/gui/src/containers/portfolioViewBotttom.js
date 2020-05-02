import React from 'react';
import PositionsList from '../components/Positions';
import OrderList from '../components/getOrderHistory';

class PortfolioViewBottom extends React.Component{

    render() {
        return(
        <div style={{padding:'40px'}}>
            <div>
                <PositionsList/>
            </div>
            <div>
                <OrderList/>
            </div>
        </div>
        
        )
    }
}

export default PortfolioViewBottom