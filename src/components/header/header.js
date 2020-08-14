import React from 'react';
import './css/header.css';

const Header = () => {
    return (
        <div id="header">
            <div className="row">
                <div className="col-md-4">
                    <div className="header-name">19th Century Presidents</div>
                </div>
                <div className="col-md-4">
                    <div className="instructions">Instructions</div>
                </div>
                <div className="col-md-4">
                    <div className="row">
                        <div className="col-6">
                            <div className="scores">Top Score: 0</div>
                        </div>
                        <div className="col-6">
                            <div className="scores">Score: 0</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Header;
