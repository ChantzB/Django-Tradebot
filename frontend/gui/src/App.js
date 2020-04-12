import React, { Component } from 'react';
import 'antd/dist/antd.css';

import CustomLayout from './containers/layout';
// import { render } from 'react-dom';
import PositionsList from './containers/PositionsListView'
import AccountList from './containers/AccountView'


class App extends Component{
  render() {
    return(
      <div className="App">
        <CustomLayout>
          <AccountList/>
          <br/>
          <h1>Portfolio</h1>
          <PositionsList />
        </CustomLayout>
      </div>

    )
  }
}

export default App;
