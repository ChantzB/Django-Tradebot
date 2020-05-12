import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import CustomLayout from './containers/layout';
import OrderView from './containers/OrderView';
import TopView from './containers/TopView';
import PortfolioViewBottom from './containers/portfolioViewBotttom';
import 'antd/dist/antd.css';
import { Layout, Menu} from 'antd';
const { Header } = Layout;


class App extends Component{
  render() {
    return(
      <Router>
        <div className="App">
          {/* <Header style={{backgroundColor:"#001f4d"}}>
            <center><h1 style={{fontFamily:"Arial, Helvetica, sans-serif", color:"white", fontSize:"40px", backgroundColor:"#001f4d", backdropFilter:"4px"}}>
              Trading Hub
            </h1></center>
          </Header> */}
          <Header style={{backgroundColor:"#8FBC8F"}}>
            <div className="logo" />
            <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']} style={{color:"white", backgroundColor:"#8FBC8F"}}>
            <Menu.Item key="1"><Link to='/'>Portfolio</Link></Menu.Item>
            <Menu.Item key="2"><Link to='/orders'>Orders</Link></Menu.Item>
            <Menu.Item key="3"><Link to='/about'>Account</Link></Menu.Item>
            </Menu>
          </Header>
            <Route path="/" exact render= {
              () => {
                return (
                  
                  <CustomLayout>
                    <TopView/>
                    <PortfolioViewBottom/>
                  </CustomLayout>
                );
              }
            }/>
            <Route path="/orders" exact render= {
              () => {
                return (
                  <CustomLayout>
                    <OrderView />
                  </CustomLayout>
                );
              }
            }/>
            <Route path="/about" exact render= {
              () => {
                return (
                  <CustomLayout>
                    <h1>Account </h1>
                    <br/>
                    {/* <AccountList/> */}
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