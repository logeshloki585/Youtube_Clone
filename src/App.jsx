import './App.css';
import React from 'react';
import Header from './Components/Header';
import SearchPage from './Components/Search/Search'
import SliderRow from './Components/Slider/SliderRow';
import { Recommended } from './Components/Recommend/Recommended';
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
          <Switch>
            <Route path="/search/:searchTerm">
                <div className="page">
                    <SliderRow />
                    <SearchPage/>
                  </div> 
            </Route>
            <Route path="/">
              
              <div className="page">
                <SliderRow />
                <Recommended /> 
              </div> 
            </Route>
          </Switch>
      </Router>
      


    
    </div>
  );
}

export default App;


// https://api.themoviedb.org/3/movie/popular?api_key=c59c5e5e11c5c4cad6f4b7273c979c45&languag1e=en-US&page=