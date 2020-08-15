import React from 'react';
import './css/header.css';

const Header = () => {
    return (
        <div className="row fixed-top header">
            <div className="col-12">
                <div className="row">
                    <div className="col-md-6">
                        <div className="header-name">19th Century Presidents</div>
                    </div>
                    <div className="col-md-6">
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
                <div className="row">
                    <div className="col-12">
                        <div className="instructions">Click on each 19th century president sequentially, without clicking on any of them twice, to win the game!</div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Header;
