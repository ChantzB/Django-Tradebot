import React from 'react';
import { List, Avatar } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';


const IconText = ({ icon, text }) => (
  <span>
    {React.createElement(icon, { style: { marginRight: 8 } })}
    {text}
  </span>
);

const Positions = (props) => {
  return (
    <List
    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: page => {
        console.log(page);
      },
      pageSize: 3,
    }}
    dataSource={props.data}
    footer={
      <div>
        <b>ant design</b> footer part
      </div>
    }
    renderItem={item => (
      <List.Item
        key={item.title}
        extra={
          <img
            width={272}
          />
        }
      >
      <List.Item.Meta title={item.symbol}/>
        Quantity: {item.qty} <br/>
        Buy Price: {item.avg_entry_price} <br/>
        Current Price: {item.current_price} <br/>
        Profit: {item.unrealized_pl} <br/>
      </List.Item>
    )}
    />
  )
}

export default Positions;