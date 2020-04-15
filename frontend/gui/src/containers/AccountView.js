import React from 'react';
// import Account from '../components/Account';
import axios from 'axios';
import { Statistic, Row, Col, Button } from 'antd';

class AccountList extends React.Component{

    state = {
        account: []
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/account/')
            .then(res => {
                this.setState({
                    account: res.data
                });
                console.log(res.data)
            })
    }

    render() {
        const { account } = this.state;
        return(
        <Row gutter={16}>
         <Col span={12}>
         <h1>Portfolio Value</h1>
         <Statistic title="Equity" value={ account.equity } precision={2} />
         <Statistic title="Buying Power" value={ account.buying_power } precision={2} />
         </Col>
         </Row>
        )
    }
}

export default AccountList