import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayoutPage from './layout/MainLayoutPage';
import ErrorLayoutPage from './layout/ErrorLayoutPage';
import AboutUsLayoutPage from './layout/AboutUsLayoutPage';
import DashboardLayoutPage from './layout/DashboardLayoutPage';
import FAQsLayoutPage from './layout/FAQsLayoutPage';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route index element={<MainLayoutPage />}></Route>
        <Route path="*" element={<ErrorLayoutPage />}></Route>
        <Route path="/aboutus" element={<AboutUsLayoutPage />}></Route>
        <Route path="/faqs" element={<FAQsLayoutPage/>}></Route>
        <Route path="/home" element={<DashboardLayoutPage />}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
