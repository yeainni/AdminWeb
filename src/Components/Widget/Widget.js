import React from 'react';
import './widget.scss';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

export default function Widget({ type }) {
    let data;

    //Temporary
    const amount = 100;
    const diff = 20;

    switch (type) {
        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                link: "See all users",
                icon: <AccountCircleIcon className='icon' 
                style={{
                    color: "rgb(53, 165, 2)",
                    backgroundColor: "rgba(111, 253, 45, 0.288)"
                }} />
            };
            break;

        case "order":
            data = {
                title: "ORDERS",
                isMoney: false,
                link: "View all orders",
                icon: <ShoppingCartCheckoutIcon className='icon' 
                style={{
                    color: "crimson",
                    backgroundColor: "rgba(255, 0, 0, 0.2)"
                }} />
            };
            break;

        case "earning":
            data = {
                title: "EARNINGS",
                isMoney: false,
                link: "View net earnings",
                icon: <MonetizationOnIcon className='icon' 
                style={{
                    color: "rgb(25, 105, 255)",
                    backgroundColor: "rgba(65, 131, 255, 0.205)"
                }} />
            };
            break;

        case "balance":
            data = {
                title: "BALANCE",
                isMoney: false,
                link: "See details",
                icon: <AccountBalanceWalletIcon className='icon'
                    style={{
                        color: "rgb(180, 147, 0)",
                        backgroundColor: "rgba(255, 251, 11, 0.582)"
                    }} />
            };
            break;
        default:
            break;
    }


    return (
        <div className='widget'>
            <div className='left'>
                <span className='title'>{data.title}</span>
                <span className='counter'>{data.isMoney && "$"} {amount}</span>
                <span className='link'>{data.link}</span>
            </div>

            <div className='right'>
                <div className='percent positive'>
                    <ArrowDropUpIcon />
                    {diff} %
                </div>
                {data.icon}
            </div>
        </div>
    )
}
