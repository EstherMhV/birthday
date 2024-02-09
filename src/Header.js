import React from 'react';
import './Header.scss';

const Header = () => {
    const currentDate = new Date().toLocaleDateString();

    return (
        <header className="App-header">
        <div className="header-content">
            <div>Citation et Anniversaire</div>
            <div>{currentDate}</div>
        </div>
        </header>
    );
};

export default Header;