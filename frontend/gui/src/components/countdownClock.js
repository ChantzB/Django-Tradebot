import React from 'react';
import Clock from 'react-live-clock';

const start = 9 * 60 + 30;
const end =  16 * 60 + 0;
const date = new Date(); 
const now = date.getHours() * 60 + date.getMinutes();
var color = '';
var market = '';

if(start <= now && now <= end){
    market = 'Open'
    color = '#7fff00'  
} else {
    market = 'Closed'
    color = 'red'  
}

class TickingClock extends React.Component {

    render() {
        return(
        <div style={{ paddingLeft:'40px' }}>
            <h1>Live Clock</h1>
            <h2> Estern Standard Time</h2>
            <Clock format={'dddd, MMMM Mo, YYYY, HH:mm:ss A'} ticking={true} timezone={'US/Eastern'} />
            <h3 style={{ color:color }}>
                {market}
            </h3>
        </div>
        )
    }
}

export default TickingClock;