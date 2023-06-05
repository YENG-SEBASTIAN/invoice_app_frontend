import './App.css';
import { Routes, Route } from 'react-router-dom';

import MainBody from './components/main/MainBody'
import SideBar from './components/sideBar/SideBar';

function App() {
  return (
    <>
    <SideBar/>
    <Routes>
        <Route path='/' element={<MainBody />} />
      </Routes>
    </>
  );
}

export default App;
