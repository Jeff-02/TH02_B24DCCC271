
import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Weather from './components/Weather';
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';
import News from './components/News';

function App() {
  return (
    <BrowserRouter>
    
      <nav>
        <NavLink to="/weather">Bài 1: Thời tiết</NavLink>
        <NavLink to="/users">Bài 2: Danh sách SV</NavLink>
        <NavLink to="/news">Bài 3: Tin tức</NavLink>
      </nav>

   
      <Routes>
        {/* Đặt Bài 1 làm trang chủ mặc định */}
        <Route path="/" element={<Weather />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/users/:id" element={<UserDetail />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
