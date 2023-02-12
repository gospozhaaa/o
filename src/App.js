import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import {Main} from './components/Main/Main'
import { Modal } from './components/Modal/Modal';
import {Review } from './components/Review/Review';
import {Quiz} from './components/Quiz/Quiz';
import { Blog } from './components/Blog/Blog';
import { useState } from 'react';
import {Header} from './components/Header/Header';
import { Login } from '@mui/icons-material';
import {Gallery} from './components/Gallery/Gallery'
function App() { 
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    if (localStorage.getItem('isLoggedIn') === 'true') return true
    return false
  });
  const [isAdmin, setIsAdmin] = useState(() => {
    if (localStorage.getItem('isAdmin') === 'true') return true
    return false
  });
  const [userName, setUserName] = useState((localStorage.getItem('userName') != '') ) ; 


  return (
    
    <div className="App">
  <Header
      props
      isAdmin = {isAdmin}
      userName = {userName}
      setIsLoggedIn = {setIsLoggedIn}
      isLoggedIn = {isLoggedIn}/>
     
      

      <main>
     
        <BrowserRouter>
                    
            <Routes>
            <Route path ="/" element = {<Main/>}/>
            <Route path ="/login" element = {!isLoggedIn?<Modal
            props
          setIsAdmin={setIsAdmin}
          setUserName = {setUserName}
          setIsLoggedIn ={setIsLoggedIn}
          isLoggedIn ={isLoggedIn} />
        :<Navigate to="/main"/> }/>
        
            <Route path ="/review" element = {<Review/> }/>
            <Route path ="/quiz" element = {<Quiz/> }/>
            <Route path ="/blog" element = {<Blog/> }/>
            <Route path = "/gallery" element = {<Gallery/>}/>
            </Routes>


        </BrowserRouter>
      </main>
    </div>
  );
}
export default App; 
 