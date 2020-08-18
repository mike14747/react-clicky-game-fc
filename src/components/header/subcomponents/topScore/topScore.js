import React, { useContext } from 'react';
import TopScoreContext from '../../../../context/topScoreContext';
import './css/topScore.css';

const Score = () => {
    const topScore = useContext(TopScoreContext);

    return (
        <div className="top-score">
            Top Score: <span className="border border-info bg-white text-info px-2">{topScore}</span>
        </div>
    );
};

export default Score;
