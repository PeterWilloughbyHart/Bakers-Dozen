import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';
import Feed from './components/Feed/Feed';


function App() {
  return (
    <div className="App">
        <Navigation/>
        <Login/>
        <Feed/>
        <Footer/>
    </div>
  );
}

export default App;
