import React, { useContext } from 'react';
import ScoreContext from '../../../../context/scoreContext';
import ScoreColorTypeContext from '../../../../context/scoreColorTypeContext';
import './css/score.css';

const Score = () => {
    const score = useContext(ScoreContext);
    const ScoreColorType = useContext(ScoreColorTypeContext);

    return (
        <div className="score">
            Score: <span className={'score-span score-' + ScoreColorType}>{score}</span>
        </div>
    );
};

export default Score;
