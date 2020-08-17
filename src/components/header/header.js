import React from 'react';
import './css/header.css';
import Score from './subcomponents/score/score';
import TopScore from './subcomponents/topScore/topScore';

const Header = () => {
    return (
        <div className="row fixed-top header">
            <div className="col-12">
                <div className="row">
                    <div className="col">
                        <div className="header-name">19th Century Presidents</div>
                    </div>
                    <div className="col-auto">
                        <TopScore />
                    </div>
                    <div className="col-auto">
                        <Score />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="instructions">Click each president sequentially (without clicking any twice) to win the game!</div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Header;
