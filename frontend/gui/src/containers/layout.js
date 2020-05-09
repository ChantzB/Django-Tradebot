import React from 'react';
import { Layout, Menu} from 'antd';
import StockClock from '../components/countdownClock';
const { Header, Footer, Content } = Layout;


const CustomLayout = (props) => {
    return (
        <Layout className="layout">
        <br/>
        <Content>
            <div className="site-layout-content">
              <StockClock/>
              {props.children}
            </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Trading Bot ©2020 Created by CSC 436</Footer>
      </Layout>
    
    )
}

export default CustomLayout