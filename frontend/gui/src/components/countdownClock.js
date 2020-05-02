import React from 'react';
import Clock from 'react-live-clock';


class TickingClock extends React.Component {
    render() {
        return(
        <div style={{ paddingLeft:'40px' }}>
            <h2>Live Clock</h2>
            <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Eastern'} />
        </div>
        )
    }
}

export default TickingClock;