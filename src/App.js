import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import Route from './routes';
import "./App.scss";



function App() {
  return (
      <div className="App">
        <Navigation/>
        {Route}
        <Footer/>
      </div>
  );
}

export default App;
