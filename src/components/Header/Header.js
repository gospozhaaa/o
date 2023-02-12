import './Header.css';
export const Header = ({
    isLoggedIn,
    setIsLoggedIn,
    registerLinkVisibility,
    welcomeLinkVisibility,
    isAdminVisibility,
    setIsAdmin
}) => {
    const handleExit = (e) =>{
        e.preventDefault();
        localStorage.setItem('isLoggedIn', false)
        setIsLoggedIn(false);
        setIsAdmin(false);
        localStorage.setItem('userName', '');
    }
    registerLinkVisibility = !isLoggedIn? 'visible':'hidden';
    welcomeLinkVisibility = isLoggedIn? 'visible': 'hidden';
    isAdminVisibility =(localStorage.getItem('isAdmin') === 'true')? 'visible':'hidden';

    return (
       <div className="Header">
<header>
            <a class = "menu" href="/" >Main</a>
            <a class = "menu" href="/login" style = {{visibility:registerLinkVisibility}}>
                Регистрация</a>
            <a class= "menu" href="/review" >Тута отзывы</a> 
            <a class= "menu" href="/quiz" >Гвиз</a>
            <a class= "menu" href="/blog" >Блог</a>
            <a className = "menu" href = "/gallery"> Галеhрея</a>
            <a className= "welcome" style = {{visibility:welcomeLinkVisibility}} >
                    Рахим&nbsp; этэгес,&nbsp;{localStorage.getItem('userName')}!&nbsp; Вы хав ноль баллов&nbsp;
                <button className='logoutIcon' onClick = {handleExit}>выход</button> 
       
           

            </a>
            <a className = "welcome" style = {{visibility: isAdminVisibility}}>
            &nbsp; Удачи тебе, админчик!!! Эта надпись тут навечно. ;
            </a>

      </header> 
        </div>
    )
}