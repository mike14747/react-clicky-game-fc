import React, { Fragment } from 'react';
import './css/my_style.css';
import './css/styles.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';

function App() {
    return (
        <div className="main-content">
            <Header />
            <div className="m-4">
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                President pics in game will go here.
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </div>
            <Footer />
        </div>
    );
}

export default App;
