import React from 'react';
import './App.css';
import FavList from './components/fav/FavList';
import ResolutionForm from './components/form/ResolutionForm';
import ResolutionList from './components/resolution/ResolutionList';

function App() {
  return (
    <div className="App">
      <h1>New year resolution</h1>
      <ResolutionForm/>
      <ResolutionList/>
      <FavList />
    </div>
  );
}

export default App;
