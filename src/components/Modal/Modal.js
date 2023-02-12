import './Modal.css'
import React, { useState } from 'react'
import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom';

export const Modal = (
  setIsLoggedIn,
  setUserName,
  setIsAdmin
) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginChange = (e) => {
    setLogin(e.target.value)
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleLogIn = (e) => {
    e.preventDefault();

    if (login === 'admin)') {
      if (password === '0000anya_the_best'){
        localStorage.setItem('isAdmin', true);
        setIsAdmin(true);
      }
      else {
        alert('Пароль и логин неверный, либо вспоминай, либо кыш!!!');
        return false
      }
    }
    localStorage.setItem('isLoggedIn', true);
    localStorage.setItem('userName', login);
    setUserName(login);
    setIsLoggedIn(true);
    
  }
  return(
         
          <form id="myModa1" class="modal-dialog_modal-sm" tabindex="-1" onSubmit = {handleLogIn}>
            
        <div class="moda1-content"> 
        <div class="container"> 
        <div class="row">
          <span class = "close" data-dismiss="modal" > </span>
     
        <div class= 'row'>
          <h2 class = "modal-header-h2" >напишите сжатое изложение:</h2>
          <div>
        <div class='row'>
        <input type="text" 
        placeholder="vash_login(нужно)"
         name="email" class="placeholder"
         value = {login}
         onChange={handleLoginChange}
         />
        <input type="text" 
        placeholder="пароль (я вас взломаю)" 
        name="parol" class="placeholder"
        value = {password}
        onChange={handlePasswordChange}
        />
        <button class="submit" data-target="myModa1" >cf,dtq c`ha njg!</button>
        </div>
    <div class='row'>
        <button class="btn_btn-danger" data-dismiss="modal" > البطاطا الأعلى ، الذي لا يوافق ، يوافق</button>
    
    
    </div>
    </div >
    </div>
    </div >
    </div>
    </div >
    </form>    
    )
}