import React from 'react';
import { Statistic, Row, Col, Button } from 'antd';
import account_data from '../containers/AccountView';


const Account = (props) => {
    return (
        <Row gutter={16} dataSource={props.positions_data}>
        <Col span={12}>
        <Statistic title="Portfolio Value" value={112893} precision={2} />
        <Button style={{ marginTop: 16 }} type="primary">
            Recharge
        </Button>
        </Col>
        </Row>
    )
  }
  

  export default Account;