import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import CustomLayout from './containers/layout';
import PositionsList from './containers/PositionsListView';
import OrderHistory from './containers/getOrderHistory';
import AccountList from './containers/AccountView';
import OrderFormView from './containers/createOrderView'
import 'antd/dist/antd.css';
import { Layout, Menu} from 'antd';
//import Chart from './components/portfolioChart';
//import StockClock from './components/countdownClock';
import watchList from './containers/getWatchList';
const { Header, Footer, Content } = Layout;


class App extends Component{
  render() {
    return(
      <Router>
        <div className="App">
          <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1"><Link to='/'>Portfolio</Link></Menu.Item>
            <Menu.Item key="2"><Link to='/orders'>Orders</Link></Menu.Item>
            <Menu.Item key="3"><Link to='/about'>About</Link></Menu.Item>
            </Menu>
          </Header>
            <Route path="/" exact render= {
              () => {
                return (
                  
                  <CustomLayout>
                    {/* <StockClock/> */}
                    <AccountList/>
                    {/* <Chart/> */}
                    <br/>
                    <h1>Porfolio Assets</h1>
                    <PositionsList />
                    <br/>
                    <h1>Order History </h1>
                    <OrderHistory/>
                    <watchList/>
                  </CustomLayout>
                );
              }
            }/>
            <Route path="/orders" exact render= {
              () => {
                return (
                  <CustomLayout>
                    <h1>Create Order</h1>
                    <br/>
                    <OrderFormView />
                  </CustomLayout>
                );
              }
            }/>
            <Route path="/about" exact render= {
              () => {
                return (
                  <CustomLayout>
                    <h1>About</h1>
                  </CustomLayout>
                );
              }
            }/>
        </div>
      </Router>
    )
  }
}

export default App;
