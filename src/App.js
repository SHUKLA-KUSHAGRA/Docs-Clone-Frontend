import React from 'react';
import { BrowserRouter , Routes , Route} from "react-router-dom";
import Navbar from './Navbar/Navbar.jsx';
import Banner from './Banner/Banner.jsx';
import Screen from './Editor/Screen.jsx';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<><Navbar/><Banner/></>}/>
        <Route path='/edit' element={<Screen/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;