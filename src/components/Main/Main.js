import React from 'react'
 
 
import { ReactDOM } from 'react-dom';
import './Main.css'
import reclama from "./components/reclama.jpg";
import arab from "./components/arab.jpg";
import nine from "./components/09.jpeg";
  

export const Main = () =>{
    return(
        <div>
             
 
    <div  class="navbar-navbar-default">
    <div class="container-fluid">
    <div class= "navbar-header">
       <a href="#" class="navbar-brand">الشعار</a>
      </div>
       <div class="navbar-header">
       <a href="#" class="navbar-brand">القائمة</a>
      </div>
    </div>
    </div >
     
    <div class="rec">
    <img src={nine}
    widht="200" height="200" alt="banner_sitestroy.gif"
     title="ахахахахха" border="50" />
     <a href="https://konstruktortestov.ru/test-27404?ysclid=l874vfe7ew397480390" target="_blank">
        <img src={reclama}
        width="468" height="60" alt="перейди)" title="я тебя съем" border="0" />
          </a>
        </div>
        

       <div class="rec">
        <img src="reclama.jpg"
        widht="100" height="200" alt="7777777888888"
         title="ЯЛА" border="190" />
         <a href="https://i.ytimg.com/vi/O3sXws_bEvw/maxresdefault.jpg" target="_blank">
            <img src={arab}
            width="410" height="400" alt="жми сюды" title="я тебя съем" border="0" />
              </a>
            </div>
         

    
    
        </div>
    )
}