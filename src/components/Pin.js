import React from 'react'
import '../styles/Dashboard.css'
const Pin = ({img}) => {
    const handleClick = () => {
        window.location.href = img
    }
    return (
        <div className="dashboard__pin" onClick={handleClick}>
            <img src={img} alt="" />
        </div>
    )
}

export default Pin
