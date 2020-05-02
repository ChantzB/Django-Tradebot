import React from 'react';
import AccountList from '../components/AccountView';
import WatchList from '../components/watchlist';

class PortfolioViewTop extends React.Component{

    render() {
        return(
        <div style={{padding:'40px'}}>
            <div style={{float:"left", width:"75%"}}>
                <AccountList/>
            </div>
            <div style={{float:"right", height:""}}>
                <WatchList/>
            </div>
            <br/>
        </div>
        
        )
    }
}

export default PortfolioViewTop