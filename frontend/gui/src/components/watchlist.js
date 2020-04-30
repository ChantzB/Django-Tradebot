import React from 'react';
import axios from 'axios';
import { Table, Tag } from 'antd'


class WatchList extends React.Component{
    state = {
        watchlist : []

    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/watchlist/')
            .then(res => {
                this.setState({
                    watchlist: res.data
                });
                console.log(res.data)
            })
    }

    render(){
        const columns = [
            {
              title: 'Symbol',
              dataIndex: 'symbol',
              key: 'symbol',
              width:50,
              align:"center",
              render: text => <a>{text}</a>,
            },
            {
                title: 'Recommendation',
                key: 'recommendation',
                dataIndex: 'recommendation',
                tags: 'recommendation',
                align:"center",
                // render: tags => (
                //   <span>
                //     {tags.map(tag => {
                //       let color = tag.length > 5 ? 'geekblue' : 'green';
                //       if (tag === 'Sell') {
                //         color = 'volcano';
                //       }
                //       return (
                //         <Tag color={color} key={tag}>
                //           {tag.toUpperCase()}
                //         </Tag>
                //       );
                //     })}
                //   </span>
                // ),
              }
        ]
        const { watchlist } = this.state;
        return(
            <div style={{float:"right"}}>
            <h2>Watch List</h2>
            <Table style={{width:150, float:"right", paddingRight:250, backgroundColor:'#E8E8E8'}} 
                bordered="true"
                class="watchlist" 
                columns={columns} 
                dataSource={watchlist} 
                pagination={false}/>
            </div>
        )
    }

}

export default WatchList