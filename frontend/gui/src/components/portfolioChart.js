import React, { Component } from 'react';
import { Chart, Axis, Tooltip, Geom } from 'bizcharts';
import axios from 'axios';

class stockChart extends  Component{

    state = {
        stockData : []
    } 
    
        componentDidMount() {
            axios.get('')
                .then(res => {
                    this.setState({
                        stockData: res.data
                    });
                    console.log(res.data)
                })
        }
    

render(){ return (
<Chart height={400} data={stockData} forceFit>
  <Axis name="month" />
  <Axis name="Stock Price" label={{ formatter: val => `$${val}` }} />
  <Tooltip crosshairs={{ type : "y" }} />
  <Geom type="line" position="month*Stock Price" size={2} color={'city'} />
  <Geom type='point' position="month*Stock Price" size={4} color={'city'} />
</Chart>
        )
    };
}

export default stockChart;

