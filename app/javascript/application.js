import React from 'react';
import Home from './components/Home';
import { createRoot } from 'react-dom/client';
import Header from './components/Header';
import "../assets/stylesheets/App.css"
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
