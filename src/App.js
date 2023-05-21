import React from 'react';
import { BrowserRouter , Routes , Route} from "react-router-dom";
import Navbar from './Navbar/Navbar.jsx';
import Banner from './Banner/Banner.jsx';
import Editor from './Editor/Editor';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<><Navbar/><Banner/></>}/>
        <Route path='/edit' element={<Editor/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;