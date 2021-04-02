import React from 'react';
// import ReactDOM from 'react-dom';
// import { Router, Route, Link} from 'react-router'
import './Header.css'
const Header = (props)=>{
    //<a href="/"><button className="go_to_home">वापस जाएँ </button></a>
    const backButton = ()=>{
        if(window.location.href != "http://localhost:3000/"){
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