import React from 'react';
import './css/my_style.css';
import './css/styles.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';

function App() {
    return (
        <div className="container-fluid">
            <Header />
            <div className="main-content">
                President pics in game will go here.
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                Testing the bottom text.
            </div>
            <Footer />
        </div>
    );
}

export default App;
