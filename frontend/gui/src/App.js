import React, { Component } from 'react';
import 'antd/dist/antd.css';

import CustomLayout from './containers/layout';
// import { render } from 'react-dom';
import PositionsList from './containers/PositionsListView';
import OrderHistory from './containers/getOrderHistory';
import AccountList from './containers/AccountView';
// import Chart from './components/portfolioChart';

class App extends Component{
  render() {
    return(
      <div className="App">
        <CustomLayout>
          <AccountList/>
          <br/>
          <h1>Porfolio Assets</h1>
          <PositionsList />
          <br/>
          {/* <Chart/> */}
          <h1>Order History </h1>
           <OrderHistory/>  
        </CustomLayout>
      </div>

    )
  }
}

export default App;
