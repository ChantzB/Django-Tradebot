import React, { Component } from 'react';
import 'antd/dist/antd.css';

import CustomLayout from './containers/layout';
// import { render } from 'react-dom';
import PositionsList from './containers/PositionsListView'

class App extends Component{
  render() {
    return(
      <div className="App">
        <CustomLayout>
          <PositionsList />
        </CustomLayout>
      </div>

    )
  }
}

export default App;
