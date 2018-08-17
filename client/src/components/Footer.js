import React from 'react';
import pulse from "../assets/pulse.svg";
import notifications from "../assets/notifications.svg";
import leaderboard from "../assets/leaderboard.svg";

export default class Footer extends React.Component {
render() {
    return (
        <div className="footer">
            <img src={pulse} className="logo" alt="logo" />
            <img src={notifications} className="logo" alt="logo" />
            <img src={leaderboard} className="logo" alt="logo" />
        </div>
    )
}
}