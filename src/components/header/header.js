import React from 'react';
import './css/header.css';
import PropTypes from 'prop-types';

const Header = ({ topScore, score }) => {
    return (
        <div className="row fixed-top header">
            <div className="col-12">
                <div className="row">
                    <div className="col">
                        <div className="header-name">19th Century Presidents</div>
                    </div>
                    <div className="col-auto">
                        <div className="scores">Top Score: {topScore}</div>
                    </div>
                    <div className="col-auto">
                        <div className="scores">Score: {score}</div>
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

Header.propTypes = {
    topScore: PropTypes.number,
    score: PropTypes.number,
};

export default Header;
