import React, { useContext } from 'react'
import "./toggle.css"
import Light from "../../img/brightness.png"
import Dark from "../../img/night-mode.png"
import { ThemeContext } from '../../Context'

const Toggle = () => {
    const theme = useContext(ThemeContext);
    const handleClick=()=>{
        theme.dispatch({type:"Toggle"});
    };
    return (
        <div className='t'>
            <img src={Light} alt="" className="t-icon" />
            <img src={Dark} alt="" className="t-icon" />
            <div className="t-button" onClick={handleClick} style={{left:theme.state.darkmode? 0:25}}></div>
        </div>
    )
}

export default Toggle
