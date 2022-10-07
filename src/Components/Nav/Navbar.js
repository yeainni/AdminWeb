import React, { useContext } from 'react';
import "./navbar.scss";
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import profile from './profile.jfif';
import { DarkModeContext } from '../../Context/DarkModeContext';

export default function Navbar() {

    const { dispatch } = useContext(DarkModeContext);

    return (
        <div className='navbar'>
            <div className='wrapper'>
                <div className='search'>
                    <input type="text" placeholder="Search Products" />
                    <SavedSearchIcon />
                </div>

                <div className='items'>
                    <div className='item'>
                        <LanguageIcon className='itemIcon' style={{ marginRight: "4px" }} /> Eng
                    </div>
                    <div className='item'>
                        <DarkModeIcon className='itemIcon'
                            onClick={() => dispatch({ type: "TOGGLE" })}
                        />
                    </div>
                    <div className='item'>
                        <CloseFullscreenIcon className='itemIcon' />
                    </div>

                    <div className='item'>
                        <NotificationsNoneIcon className='itemIcon' />
                        <div className='counter'> 1</div>
                    </div>

                    <div className='item'>
                        <ChatBubbleOutlineIcon className='itemIcon' />
                        <div className='counter'> 2</div>
                    </div>

                    <div className='item'>
                        <FormatListBulletedIcon className='itemIcon' />
                    </div>
                    <div className='item'>
                        <img src={profile} alt='' className='avatar' />
                    </div>

                </div>
            </div>
        </div>
    );
}