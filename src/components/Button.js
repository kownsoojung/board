import React, { Children }  from "react";
import './Button.css';
import {Link} from 'react-router-dom';

const styles = ['btn--primary', 'btn--outline'];
const sizes = ['btn--medium', 'btn--large'];

export const Button = ({children, type, onclick, buttonStyle, buttonSize}) => {

    // buttonStyle을 따로 지정하지 않을 경우 가장 기본배열의 0번쨰 설절
    const checkButtonStyle = styles.includes(buttonStyle) ? buttonStyle : styles[0];
    const checkButtonSize = styles.includes(buttonSize) ? buttonSize : sizes[0];

    return (
        // children안에 어떤 내용을 입력해도 버튼 이름이 된다.
        <Link to = '/sign-up' className='btn-mobile'>
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onclick={onclick} type={type}>
                {children}
            </button>
            
        </Link>
    );
};