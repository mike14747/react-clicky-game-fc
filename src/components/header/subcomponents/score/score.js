import React, { useContext } from 'react';
import ScoreContext from '../../../../context/scoreContext';
import './css/score.css';

const Score = () => {
    const score = useContext(ScoreContext);

    return (
        <div className="score">
            Score: <span className="border bg-white text-success px-2">{score}</span>
        </div>
    );
};

export default Score;
