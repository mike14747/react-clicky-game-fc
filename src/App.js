import React, { useState, useEffect, Fragment } from 'react';
import './css/my_style.css';
import './css/appStyles.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import presidentPics from './config/presidentPics.json';
import Pic from './components/pic/pic';
import ScoreContext from './context/scoreContext';
import TopScoreContext from './context/topScoreContext';
import MessageContext from './context/messageContext';
import ScoreColorTypeContext from './context/scoreColorTypeContext';
import Instructions from './components/instructions/instructions';

function App() {
    const [topScore, setTopScore] = useState(0);
    const [score, setScore] = useState(0);
    const [scoreColorType, setScoreColorType] = useState('initial');
    const [message, setMessage] = useState({ text: 'Click a president to begin.', subText: null, colorType: 'dark' });
    const [presidentsArray, setPresidentsArray] = useState(presidentPics);
    const [gameOver, setGameOver] = useState(false);

    const badClick = () => {
        setScoreColorType('lost');
        setMessage({ text: 'Incorrect Guess', subText: 'click any president to start a new game', colorType: 'danger' });
        setGameOver(true);
    };

    const goodClick = id => {
        const index = presidentsArray.findIndex(currentPic => currentPic.id === id);
        const newPresidentsArray = [...presidentsArray];
        newPresidentsArray[index].clicked = true;
        setPresidentsArray(newPresidentsArray);

        setScoreColorType('begun');

        if (score === 11) {
            setScoreColorType('won');
            setMessage({ text: 'You\'ve Won the Game!', subText: 'click any president to start a new game', colorType: 'success' });
            setScore(score + 1);
        } else if (score === 0 || gameOver) {
            setScore(1);
            setMessage({ text: 'The game has begun!', subText: null, colorType: 'primary' });
        } else {
            setMessage({ text: 'Correct Guess!', subText: null, colorType: 'success' });
            setScore(score + 1);
        }
    };

    const picClicked = id => {
        if (gameOver) {
            setGameOver(false);
        }
        const justClicked = presidentsArray.filter(president => president.id === id);
        if (justClicked[0].clicked) {
            badClick();
        } else {
            goodClick(id);
        }
    };

    const shuffleArray = array => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    useEffect(() => {
        if (score > topScore) {
            setTopScore(topScore + 1);
        }
        if (score === 12) {
            setGameOver(true);
        }
        // there will be a missing dependency warning here, but this is the way it has to be
    }, [score]);

    useEffect(() => {
        if (gameOver) {
            const updatedClickedStatus = presidentsArray.map(president => {
                president.clicked = false;
                return president;
            });
            setPresidentsArray(updatedClickedStatus);
        }
        // there will be a missing dependency warning here, but this is the way it has to be
    }, [gameOver]);

    return (
        <Fragment>
            <MessageContext.Provider value={message}>
                <TopScoreContext.Provider value={topScore}>
                    <ScoreContext.Provider value={score}>
                        <ScoreColorTypeContext.Provider value={scoreColorType}>
                            <Header />
                        </ScoreColorTypeContext.Provider>
                    </ScoreContext.Provider>
                </TopScoreContext.Provider>
            </MessageContext.Provider>
            <div className="container flex-fill">
                <Instructions />
                <div className="d-flex flex-wrap justify-content-center pic-container mx-auto mb-4">
                    {shuffleArray(presidentsArray).map(pic => (
                        <Pic key={pic.id} id={pic.id} image={pic.imageName} alt={pic.name} picClicked={picClicked} />
                    ))}
                </div>
            </div>
            <Footer />
        </Fragment>
    );
}

export default App;
