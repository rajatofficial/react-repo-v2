import React from 'react';
import './App.css';
import Header from '../components/Header/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../components/Route/Route';
import Footer from '../components/Footer/Footer';


function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
