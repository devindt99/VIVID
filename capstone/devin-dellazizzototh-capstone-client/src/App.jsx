
import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import FeelingsManager from './components/FeelingsManager/FeelingsManager';
import FeelingLogsManager from './components/FeelingsLogsManager/FeelingsLogsManager';

const App = () => {
    return (
        <div className="App">
            <Header/>
            <FeelingsManager/>
            <FeelingLogsManager/>
            <Footer/>
        </div>
    );
};

export default App;
