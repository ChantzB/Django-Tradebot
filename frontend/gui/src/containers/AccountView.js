import React from 'react';
// import Account from '../components/Account';
import axios from 'axios';
import { Card } from 'antd';

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
        return(
            <div className="containter">
                <h1 className="center">equity</h1>
                { account.buying_power }
            </div>
        )
    }
}

export default AccountList