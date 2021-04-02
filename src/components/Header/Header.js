import React from 'react';
import { baseUrl } from '../../globalVar'
import './Header.css'
const Header = (props)=>{
    //<a href="/"><button className="go_to_home">वापस जाएँ </button></a>
    const backButton = ()=>{
        if(window.location.href != `${baseUrl}`){
            return (
                <a href="/"><button className="go_to_home">वापस जाएँ </button></a>
            )
        }else{
            return;
        }
    }
    return (
            <div className="header">
                    <p>सरस्वती विद्या मंदिर</p>
                    {backButton()}
            </div>
            
    )
}

export default Header;