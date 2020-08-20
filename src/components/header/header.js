import React from 'react';
import './css/header.css';
import Score from './subcomponents/score/score';
import TopScore from './subcomponents/topScore/topScore';
import Message from './subcomponents/message/message';

const Header = () => {
    return (
        <div className="row fixed-top header">
            <div className="col-12">
                <div className="row">
                    <div className="col-4">
                        <div className="header-name mt-2">19th Century Presidents</div>
                    </div>
                    <div className="col-4 mt-2">
                        <Message />
                    </div>
                    <div className="col-4 mt-2 pb-2 text-right">
                        <TopScore />
                        <Score />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Header;
