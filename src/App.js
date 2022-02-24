import React, { useState } from 'react';
import './App.css';
// import { Login } from './components/Login/Login';
// import { ListOfItem } from './components/ListOfItem/ListOfItem';
import { SearchForm } from './components/SearchForm/SearchForm';
import './App.css'
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
function App() {

  const [menu, setMenu] = useState(0)


  return (
    <div className='App-content'>
      <Header menu={menu}/>
      <SearchForm setMenu={setMenu}/>
      <Home menu={menu}/>
    </div>
  )
}

export default App;
