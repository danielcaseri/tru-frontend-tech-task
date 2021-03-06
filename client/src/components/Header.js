import React from 'react';
import logo from '../assets/logo.svg';
import account from '../assets/account.svg';
import calendar from '../assets/calendar.svg';

export default class Header extends React.Component {
render() {
    return (
        <div>
            <div className="header">
                < div className= "line1">
                    <img src={logo} className="picture" alt="logo" />
                    <img src={account} className="picture" alt="account" />
                </div>
                < div >
                    <img src={calendar} className="picture" alt="calendar" />
                </div>
            </div>
            <div className="margin-header" />
        </div>
    )
}
}