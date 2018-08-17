import React from 'react';
import logo from "../assets/logo.svg";
import account from "../assets/account.svg";
import calendar from "../assets/calendar.svg";

export default class Header extends React.Component {
render() {
    return (
        <div className="header">
            < div className= "line1">
            <img src={logo} className="logo" alt="logo" />
            <img src={account} className="logo" alt="logo" />
            </div>
            < div >
            <img src={calendar} className="logo" alt="logo" />
            </div>
        </div>
    )
}
}