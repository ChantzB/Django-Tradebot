import React from 'react';
// import Account from '../components/Account';
import axios from 'axios';
import { Statistic, Row, Col, Button } from 'antd';

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    portfolio_value: `ant design part ${i}`,
    quantity: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    bought_price:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    current_price:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

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
        const account_list = account.length ? (
            account.map(account => {
                return (
                    <Row gutter={16}>
                    <Col span={12}>
                    <Statistic title="Portfolio Value" value={account.equity} precision={2} />
                    <Button style={{ marginTop: 16 }} type="primary">
                        Recharge
                    </Button>
                    </Col>
                    </Row>
                )
            })
        ):(
            <div className="center>">No data yet</div>
        )
        return(
            <div className="containter">
                <h1 className="center">equity</h1>
                {  account_list }
            </div>
        )
    }
}

export default AccountList