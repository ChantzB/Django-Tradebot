import React from 'react';
import Clock from 'react-live-clock';


class TickingClock extends React.Component {
    render() {
        return(
        <div>
        <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Eastern'} />
        </div>
        )
    }
}

export default TickingClock;