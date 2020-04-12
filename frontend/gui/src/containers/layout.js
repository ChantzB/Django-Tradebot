import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Footer, Content } = Layout;

const CustomLayout = (props) => {
    return (
        <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <br/>
        <Content style={{ padding: '0 50px' }}>
          <div>
            This is where portfolio value will go
          </div>
        </Content>
        <Content style={{ padding: '50px' }}>
          <h1>Portfolio</h1>
            <div className="site-layout-content">
              {props.children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Trading Bot ©2020 Created by CSC 436</Footer>
      </Layout>
    
    )
}

export default CustomLayout