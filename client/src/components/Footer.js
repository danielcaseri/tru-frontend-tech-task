import React from 'react';
import pulse from '../assets/pulse.svg';
import notifications from '../assets/notifications.svg';
import leaderboard from '../assets/leaderboard.svg';

export default class Footer extends React.Component {
render() {
    return (
        <div className="footer">
            <div> 
                <img src={pulse} className="picture block" alt="" />
                Pulse
            </div>
            <div> 
                <img src={leaderboard} className="picture block" alt="" />
                LeaderBoard
            </div>
            < div > 
                <img src={notifications} className="picture block" alt="" />
                Notification
            </div>
        </div>
    )
}
}