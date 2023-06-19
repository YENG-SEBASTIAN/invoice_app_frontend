import './App.css';
import { Routes, Route } from 'react-router-dom';

import MainBody from './components/main/MainBody'
import SideBar from './components/sideBar/SideBar';
import CardDetails from './components/cardDetails/CardDetails';

function App() {
  return (
    <>
      <SideBar />
      <Routes>
        <Route path='/' element={<MainBody />} />
        <Route path='/viewInvoice/:id/' element={<CardDetails />} />
      </Routes>
    </>
  );
}

export default App;
