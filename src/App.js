import './App.css';
import React, { useState } from 'react';
import { Header } from './components/Header/Header';
import { SearchBar } from './components/SearchBar/SearchBar';
import { Footer } from './components/Footer/Footer';
import { LogIn } from './components/LogIn/LogIn';
import { LogInHeader } from './components/LogInHeader/LogInHeader';

function App() {

  const [loggedin, setLoggedin] = useState(false);
  console.log(loggedin)



  return (
    loggedin ?
    <React.Fragment>
      <Header />
      <SearchBar />
      <Footer />
    </React.Fragment> :
    <React.Fragment>
      <LogInHeader />
      <LogIn setLoggedin={setLoggedin} loggedin={loggedin}/>
      <Footer />
    </React.Fragment>
  );
}

export default App;
