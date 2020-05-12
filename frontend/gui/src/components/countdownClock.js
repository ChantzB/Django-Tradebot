import React from 'react';
import Clock from 'react-live-clock';

const start = 9 * 60 + 30;
const end =  16 * 60 + 0;
const date = new Date(); 
const now = date.getHours() * 60 + date.getMinutes();
var color = '';
var market = '';
var bgColor = '';

if(start <= now && now <= end){
    market = 'Open'
    color = '#4CAF50'
    // bgColor = '#8FBC8F'
} else {
    market = 'Closed'
    color = 'red'  
}

class TickingClock extends React.Component {

    render() {
        return(
        <div style={{ paddingLeft:'40px', border:'inset', borderWidth:"thick", boxShadow:" 5px 10px 5px grey", backgroundColor:"gainsboro"}}>
                <div style={{float:'right', paddingRight:'40px'}}>
                <h1>Market Status</h1>
                <center><h2 style={{ color:color, backgroundColor: bgColor, border:'solid', fontSize:'large' }}>
                    {market}
                </h2></center>
                </div>
                <h1>Live Clock</h1>
                <h2> Eastern Standard Time</h2>
                <Clock format={'dddd, MMMM Mo, YYYY, HH:mm:ss A'} ticking={true} timezone={'US/Eastern'} />

        </div>
        )
    }
}

export default TickingClock;