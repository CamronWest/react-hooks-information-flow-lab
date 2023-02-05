import React, { useState } from "react"; 

function Header({ isDarkMode, onDarkModeClick }){
    return(
        <header>
            <h2>Shopster</h2>
            <button onClick={onDarkModeClick}>
                {isDarkMode ? "dark" : "light"} Mode
                
            </button>
        </header>
    )
}

export default Header;