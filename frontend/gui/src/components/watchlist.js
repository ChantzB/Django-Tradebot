import React from 'react';
import axios from 'axios';
import { Table, Input, Form, Button } from 'antd'


class WatchList extends React.Component{
    state = {
        watchlist : [],
        symbol: '', 
        price: '', 

    }

    handleChange(event){
        this.setState({ 
          [event.target.name]: event.target.value
         })
      }

    handleFormSubmit(event){
    event.preventDefault();
    
    const Symbol = this.state.symbol

    axios.post('http://127.0.0.1:8000/api/watchlist/', { Symbol })
        .then(res => {
            console.log(Symbol)
        })
    };

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
                align:"center",
              }, 
              {
                title: 'Market Price', 
                key: 'price', 
                dataIndex: 'price', 
                align: 'center',
                width: 'flex',
              }
        ]
        const { watchlist } = this.state;
        return(
            <div>
            <div style={{float:"right", width:"25%", height:"500px", border:'inset', borderWidth:"thick", boxShadow:" 5px 10px 5px grey", backgroundColor:"gainsboro"}}>
            <center><h2>Watch List</h2></center>
            <Form onSubmit={this.handleFormSubmit}>
                <Input.Group>
                <Input style={{width:"75%"}} name="symbol" placeholder="Add to watch" onChange={(event) => this.handleChange(event)}/>
                <Button style={{width:"25%"}} type="button" onClick={(event) => this.handleFormSubmit(event)}>Add</Button>
                <br/>
                <br/>
                <Table 
                    style={{Color:'#E8E8E8'}} 
                    bordered="true"
                    class="watchlist" 
                    columns={columns} 
                    dataSource={watchlist} 
                    pagination={{ pageSize: 4}}
                    />
                </Input.Group>
            </Form>
            </div>
        
            </div>
        )
    }

}

export default WatchList