import '../styles/HeaderIcons.css'
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChatIcon from '@material-ui/icons/Chat';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import React from 'react'
import { IconButton } from '@material-ui/core';

const HeaderIcons = () => {
    return (
        <div className="header__icons">
            <IconButton>
                <NotificationsIcon />
            </IconButton>
            <IconButton>
                <ChatIcon />
            </IconButton>
            <IconButton>
                <AccountCircleIcon />
            </IconButton>
        </div>
    )
}

export default HeaderIcons
