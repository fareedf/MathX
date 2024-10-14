import React from 'react';
import Slider from './components/Slider';
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import { Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Layout from './components/Layout';
import Sidebar from './components/Sidebar';
import Quiz from './components/Quiz'
import Content1 from './pages/Content1';
import Content2 from './pages/Content2';
import Content3 from './pages/Content3';
import Chart from './components/Chart'

const App = () => {
  let location = useLocation();
  return (
    <Layout isLoggedIn={location.pathname !== "/"}>
    <Routes>
      <Route path='/' element={<LoginPage />}></Route>
      <Route path='/HomePage' element = {<HomePage/>}></Route>
      <Route path='/Slider' element={<Slider/>}></Route>
      <Route path='/Navbar' element={<Navbar/>}></Route>
      <Route path='/Sidebar' element={<Sidebar/>}></Route>
      <Route path='/Quiz' element={<Quiz/>}></Route>
      <Route path='/Content1' element={<Content1/>}></Route>
      <Route path='/Content2' element={<Content2/>}></Route>
      <Route path='/Content3' element={<Content3/>}></Route>
      <Route path='/Chart' element={<Chart/>}></Route>
    </Routes>
    </Layout>
  );
};

export default App;