import React from 'react';
import { List, Card } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';


const Positions = (props) => {
  return (
    <List
    grid={{ gutter: 16, column: 4 }}
    dataSource={props.data}
    renderItem={item => (
      <List.Item>
        <Card title={item.symbol}>
          Quantity: {item.qty} <br/>
          Buy Price: {item.avg_entry_price} <br/>
          Current Price: {item.current_price} <br/>
          ProfitL {item.unrealized_pl} <br/>
        </Card>
      </List.Item>
    )}
  />
    // <List
    // itemLayout="vertical"
    // size="large"
    // pagination={{
    //   onChange: page => {
    //     console.log(page);
    //   },
    //   pageSize: 3,
    // }}
    // dataSource={props.data}
    // renderItem={item => (
    //   <List.Item
    //     key={item.title}
    //   >
    //   <List.Item.Meta title={item.symbol}/>
    //     Quantity: {item.qty} <br/>
    //     Buy Price: {item.avg_entry_price} <br/>
    //     Current Price: {item.current_price} <br/>
    //     Profit: {item.unrealized_pl} <br/>
    //   </List.Item>
    // )}
    // />
  )
}

export default Positions;