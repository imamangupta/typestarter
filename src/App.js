import './App.css';
import { useState } from 'react';
import About from './page/About';
import Competition from './page/Competition';
import Login from './page/Login';
import Navbar from './component/Navbar';
import Home from './page/Home';
import { Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import Type from './page/Type';
import Setting from './page/Setting';
import Game from './page/Game';
import Chat from './page/Chat';

function App() {

  const [progress, setProgress] = useState(0);


  const increasePro = (progress) => {
    setProgress(progress);
  }

  return (
    <>
      <LoadingBar color='white' height={3} progress={progress} onLoaderFinished={() => setProgress(0)} />

      <Routes>

        <Route path='/' element={<>
          <Home setProgress={increasePro}/>
        </>} />

        <Route path='/type' element={<>
          <Type setProgress={increasePro}/>
        </>} />

        <Route path='/game' element={<>
          <Game setProgress={increasePro}/>
        </>} />

        <Route path='/about' element={<>
          <About setProgress={increasePro}/>
        </>} />

        <Route path='/competition' element={<>
          <Competition setProgress={increasePro}/>
        </>} />

        <Route path='/setting' element={<>
          <Setting setProgress={increasePro} />
        </>} />
        
        <Route path='/chat' element={<>
          <Chat setProgress={increasePro} />
        </>} />

        <Route path='/login' element={<>
          <Login setProgress={increasePro} />
        </>} />

      </Routes>

    </>
  );
}

export default App;
