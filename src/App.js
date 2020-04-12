import React from 'react';
import './App.css';
import Layout from "./components/Layout";
import Header from "./components/Header";
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Layout />
      <Footer />
    </div>
  );
}

export default App;
