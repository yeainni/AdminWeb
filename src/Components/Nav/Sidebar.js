import React, { useContext } from 'react'
import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard'
import FaceIcon from '@mui/icons-material/Face'
import InventoryIcon from '@mui/icons-material/Inventory'
import AddCardIcon from '@mui/icons-material/AddCard'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import AssessmentIcon from '@mui/icons-material/Assessment'
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant'
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety'
import HistoryEduIcon from '@mui/icons-material/HistoryEdu'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import { Link } from "react-router-dom"
import { DarkModeContext } from '../../Context/DarkModeContext'

export default function Sidebar() {

    const { dispatch } = useContext(DarkModeContext);

    return (
        <div className='sidebar'>
            <div className='top'>
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span className='logo'>  MJ Admin </span>
                </Link>
            </div>

            <hr />

            <div className='center'>
                <ul>
                    <div className='title'> MAIN </div>
                    <li>
                        <DashboardIcon className='icon' />
                        <span> Dashboard </span>
                    </li>

                    <li>
                        <Link to="/users" style={{ textDecoration: "none" }}>
                            <FaceIcon className='icon' />
                            <span> Users </span>
                        </Link>
                    </li>

                    <div className='title'> LIST </div>
                    <li>
                        <Link to="/products" style={{ textDecoration: "none" }}>
                            <InventoryIcon className='icon' />
                            <span> Products </span>
                        </Link>
                    </li>

                    <li>
                        <AddCardIcon className='icon' />
                        <span> Orders </span>
                    </li>


                    <li>
                        <LocalShippingIcon className='icon' />
                        <span> Delivery </span>
                    </li>

                    <div className='title'> OPTION </div>
                    <li>
                        <AssessmentIcon className='icon' />
                        <span> Stats </span>
                    </li>
                    <li>
                        <NotificationImportantIcon className='icon' />
                        <span> Notifications </span>

                    </li>

                    <div className='title'> SERVICE </div>
                    <li>
                        <HealthAndSafetyIcon className='icon' />
                        <span> System Health </span>
                    </li>
                    <li>
                        <HistoryEduIcon className='icon' />
                        <span> Log </span>

                    </li>
                    <li>
                        <SettingsSuggestIcon className='icon' />
                        <span> Setting </span>
                    </li>

                    <div className='title'> USER </div>
                    <li>
                        <AccountCircleIcon className='icon' />
                        <span> Profile </span>
                    </li>
                    <li>
                        <ExitToAppIcon className='icon' />
                        <span> Logout </span>
                    </li>
                </ul>
            </div>

            <div className='bottom'>
                <div className='colorOp'
                    onClick={() => dispatch({ type: "LIGHT" })}
                />

                <div className='colorOp'
                    onClick={() => dispatch({ type: "DARK" })}
                />

                <div className='colorOp'
                />

                <div className='colorOp'
                />
            </div>
        </div>
    );
}