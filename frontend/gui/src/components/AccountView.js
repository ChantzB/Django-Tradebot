import React  from 'react';
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
            <div style={{width:"93.9%", border:'inset', borderWidth:"thick", boxShadow:" 5px 10px 5px grey", backgroundColor:""}}>
                {/* <h1>Portfolio Value</h1> */}
                <Row gutter={16}>
                <Statistic title="Equity" value={ account.equity } precision={2} style={{padding:"10px"}}/>
                <Statistic title="Buying Power" value={ account.buying_power } precision={2} style={{paddingLeft:"50px", paddingTop:"10px"}}/>
                <Statistic title="Day Trades" value={ account.daytrade_count } style={{paddingLeft:"70px", paddingTop:"10px", float:"right"}}/>
                <Statistic title="Day Trading Power" value={ account.daytrading_buying_power } precision={2} style={{paddingLeft:"70px", paddingTop:"10px", float:"right"}}/>

                {/* </Col> */}
                </Row>
            </div>
        )
    }
}

export default AccountList