import { IconButton } from '@material-ui/core'
import PinterestIcon from '@material-ui/icons/Pinterest';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react'
import '../styles/Header.css'
import CapsuleIcon from './CapsuleIcon';
import HeaderIcons from './HeaderIcons';
import SeachBar from './SeachBar'
const Header = () => {
    return (
        <div className="header">
            <div className="logo__section">
            <IconButton className="header__logo">
                <PinterestIcon style={{fontSize:'60px',color:'red'}}/>
            </IconButton>
            <CapsuleIcon bg="black" color="white">
                <p>Homepage</p>
            </CapsuleIcon>
            <CapsuleIcon bg="white" color="black">
                <p>Following</p>
            </CapsuleIcon>
            <div className="header_menu_icon">
            <IconButton>
                <MenuIcon />
            </IconButton>
            </div>
            </div>
            <SeachBar />
            <HeaderIcons />
        </div>
    )
}

export default Header
