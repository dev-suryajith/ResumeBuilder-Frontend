import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './App.css'
import { IoHome } from "react-icons/io5";
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import ResumeGenerator from './pages/ResumeGenerator';
import History from './pages/History';
import PageNotFound from './pages/PageNotFound';
import Form from './pages/Form';


function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/resume' element={<ResumeGenerator />} />
        <Route path='/history' element={<History />} />
        <Route path='/form' element={<Form />} />
        <Route path='/*' element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
