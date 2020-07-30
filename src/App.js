import React from 'react';
import MeuComponente from './components/MeuComponente';
import VideList from './components/VideoList';
import VideoPlayer from './components/VideoPlayer';
import './App.css';

function App() {
  return (
    <div className="App">
    <VideoPlayer />  
    <VideList />
      
    </div>
  );
}

export default App;
