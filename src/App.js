import React, { useState, useEffect } from 'react';
import './css/my_style.css';
import './css/appStyles.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import presidentPics from './config/presidentPics.json';
import Pic from './components/pic/pic';
import ScoreContext from './context/scoreContext';
import TopScoreContext from './context/topScoreContext';
import MessageContext from './context/messageContext';

function App() {
    console.log('App is rendered!');
    const [topScore, setTopScore] = useState(0);

    const [score, setScore] = useState(0);

    const [message, setMessage] = useState({ text: 'Click a president to start the game.', subText: null, colorType: 'dark' });

    const [presidentsArray, setPresidentsArray] = useState(presidentPics);

    const newGame = () => {
        setScore(0);
        const resetClickedStatus = presidentsArray.map(president => {
            president.clicked = false;
            return president;
        });
        setPresidentsArray(resetClickedStatus);
    };

    const badClick = () => {
        setMessage({ text: 'Incorrect Guess', subText: '...click any president to start a new game...', colorType: 'danger' });
        newGame();
    };

    const goodClick = id => {
        const index = presidentsArray.findIndex(currentPic => currentPic.id === id);
        const newPresidentsArray = [...presidentsArray];
        newPresidentsArray[index].clicked = true;
        setPresidentsArray(newPresidentsArray);

        let subText = null;
        if (score > topScore) {
            subText = 'New Top Score!';
            setTopScore(topScore + 1);
        }

        if (score === 11) {
            setMessage({ text: 'You\'ve Won the Game!', subText: '...click any president to start a new game...', colorType: 'success' });
            newGame();
        } else if (score === 0) {
            setMessage({ text: 'The game has begun!', subText, colorType: 'primary' });
        } else {
            setMessage({ text: 'Correct Guess!', subText, colorType: 'success' });
        }

        setScore(score + 1);
    };

    const picClicked = id => {
        console.log('President with id ' + id + ' was clicked.');
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

    return (
        <div className="container">
            <MessageContext.Provider value={message}>
                <TopScoreContext.Provider value={topScore}>
                    <ScoreContext.Provider value={score}>
                        <Header />
                    </ScoreContext.Provider>
                </TopScoreContext.Provider>
            </MessageContext.Provider>
            <div className="d-flex flex-wrap justify-content-center pic-container mx-auto">
                {shuffleArray(presidentsArray).map(pic => (
                    <Pic key={pic.id} id={pic.id} image={pic.imageName} alt={pic.name} picClicked={picClicked} />
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default App;
