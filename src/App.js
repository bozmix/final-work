import './App.css';
import React from 'react';
import { Header } from './components/Header/Header';
import { SearchBar } from './components/SearchBar/SearchBar';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <React.Fragment>
      <Header />
      <SearchBar />
      <Footer />
    </React.Fragment>
  );
}

export default App;
