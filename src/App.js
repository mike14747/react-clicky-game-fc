import React, { useState, useEffect } from 'react';
import './css/my_style.css';
import './css/styles.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import presidentPics from './config/presidentPics.json';
import Pic from './components/pic/pic';
import ScoreContext from './context/scoreContext';
import TopScoreContext from './context/topScoreContext';

function App() {
    const [topScore, setTopScore] = useState(0);

    const [score, setScore] = useState(0);

    const [presidentsArray, setPresidentsArray] = useState(presidentPics);

    const picClicked = () => {

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
            <TopScoreContext.Provider value={topScore}>
                <ScoreContext.Provider value={score}>
                    <Header />
                </ScoreContext.Provider>
            </TopScoreContext.Provider>
            <div className="pic-container mx-auto">
                <div className="d-flex flex-wrap justify-content-center mx-auto picContainer">
                    {shuffleArray(presidentsArray).map(pic => (
                        <Pic key={pic.id} id={pic.id} image={pic.imageName} alt={pic.name} picClicked={picClicked} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;
