import React, { useContext } from 'react';
import TopScoreContext from '../../../../context/topScoreContext';
import './css/topScore.css';

const Score = () => {
    const topScore = useContext(TopScoreContext);

    return (
        <div className="top-score">
            Top Score: <span className="border bg-white text-primary px-2">{topScore}</span>
        </div>
    );
};

export default Score;
