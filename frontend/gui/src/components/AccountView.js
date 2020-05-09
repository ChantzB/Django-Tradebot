import React from 'react';
import axios from 'axios';
import { Statistic, Row, Col} from 'antd';

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
            <div>
                <h1>Portfolio Value</h1>
                <Row gutter={16}>
                <Statistic title="Equity" value={ account.equity } precision={2} style={{padding:"10px"}}/>
                <Statistic title="Buying Power" value={ account.buying_power } precision={2} style={{padding:"10px"}}/>
                {/* </Col> */}
                </Row>
            </div>
        )
    }
}

export default AccountList