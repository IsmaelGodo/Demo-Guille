import { useState, useContext } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { UserContext } from './context/userContext'


function App() {

const [user, setUser] =useState("Ismaeh");

const updateUser = (username) => {
  setUser(username);
}

  return (
    <>
      <UserContext.Provider value={{user, updateUser}}>
        <BrowserRouter>
          <Header />
          <Main />
        </BrowserRouter>
        <Footer />
      </UserContext.Provider>
    </>
  )
}

export default App
