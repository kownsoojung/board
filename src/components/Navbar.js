import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import './Navbar.css';

function Navbar(){
    const [click, setClick] =useState(false);
    const [button, setButton] =useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    // 화면 크기에 따른 버튼 표시여부
    const showButton = () => {
        if ( window.innerWidth <= 960 ) setButton(false);
        else setButton(true);
    }

    // SIGNUP버튼이 사이즈가 줄어들면 없어지도록 한다. 
    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return(
        <>
            <nav className="navbar">
                <div className="navbar-container">
                   {/* 모바일버전에서 클릭하면 메뉴 보이도록 설정하는 것도 한다. (close Mobile Menu)는 다시 버튼 누르면 없어지고 생기고 하도록 한다.  */}
                    <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                        수정이의 첫 react
                        <i className="fab fa-typo3"/>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className = {click ? 'fas fa-times' : 'fas fa-bars' } />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick = {closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/station' className='nav-links' onClick = {closeMobileMenu}>
                                Station
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/voc' className='nav-links' onClick = {closeMobileMenu}>
                                Voc
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/sign-up' className='nav-links-mobile' onClick = {closeMobileMenu}>
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar