import spinner from './Rolling-1s-200px.gif'
import './Spinner.css';

import React from 'react'

const Spinner = () => {
    return (
        <div className="Spinner">
            <img src={spinner} alt="Loading..." style={{width: '200px', margin: 'auto', display: 'block'}}/>
        </div>
    )
}

export default Spinner