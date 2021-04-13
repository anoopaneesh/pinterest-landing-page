import '../styles/CapsuleIcon.css'
import React from 'react'

const CapsuleIcon = ({bg,color,children}) => {
    return (
        <div style={styles.container(bg,color)} className="capsule">
            {children}
        </div>
    )
}


const styles = {
    container:(bg,color) => {
        return {
            padding:'20px 30px',
            background : bg,
            color:color,
            height:'60px',
            borderRadius:'40px',
            textAlign:'center'
        }
    },
    
}


export default CapsuleIcon
