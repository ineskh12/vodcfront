import React from 'react'
import { useLocation } from 'react-router-dom';
const Dialog = () => {
    let location = useLocation();
    return (
        <div>
             {location.state.question}
        </div>
    )
}

export default Dialog
