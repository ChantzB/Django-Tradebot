import React from 'react';
import { Layout, Menu} from 'antd';
const { Header, Footer, Content } = Layout;

const CustomLayout = (props) => {
    return (
        <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">Portfolio</Menu.Item>
          </Menu>
        </Header>
        <br/>
        <Content style={{ padding: '50px' }}>
            <div className="site-layout-content">
              {props.children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Trading Bot ©2020 Created by CSC 436</Footer>
      </Layout>
    
    )
}

export default CustomLayout