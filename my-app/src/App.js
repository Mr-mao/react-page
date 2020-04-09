import React from 'react';
import logo from './logo.svg';
import './styles/App.css';
import Nav from './pages/nav'
import Main from './pages/main'
import Position from './pages/position'

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Main></Main>
      <Position></Position>
      <footer className="footer">
        <div className="footer-content">阿里巴巴集团 Copyright ©1999-2020 版权所有</div>
      </footer>
    </div>
  );
}

export default App;
