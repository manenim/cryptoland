import logo from './logo.svg';
import './App.css';
import {Navbar, Homepage, Exchanges, CryptoDetails, Cryptocurrencies, News} from './components/index.js';
import { Layout, Space, Typography } from 'antd';
import { Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <Routes>
            <Route exact path="/cryptoland" element={<Homepage/>} />
            <Route path="/exchanges" element={<Exchanges/>} />
            <Route path="/cryptocurrencies" element={<Cryptocurrencies/>} />
            <Route path="/crypto/:coinId" element={<CryptoDetails/>} />
            <Route path="/news" element={<News/>} />
          </Routes>
        </Layout>
      
      </div>
    </div>
        <div className="footer">
          <Typography.Title level={5} style = {{color: "white", textAlign: "center"}}>
            cryptonia <br />
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to = "/">Home</Link>
            {/* <Link to = "/exchanges">Exchanges</Link> */}
            <Link to = "/news">News</Link>
          </Space>
        </div>
        </div>
  );
}

export default App;
