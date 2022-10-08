import React, { useEffect, useState } from 'react'
import './widget.scss'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import { collection, query, where, getDocs } from "firebase/firestore"
import { db } from "../../Firebase"

export default function Widget({ type }) {

    const [amount, setAmount] = useState(null);
    const [diff, setDiff] = useState(null);
    let data;

    // //Temporary
    // const amount = 100;
    // const diff = 20;

    switch (type) {
        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                link: "See all users",
                query: "users",
                icon: <AccountCircleIcon className='icon'
                    style={{
                        color: "rgb(53, 165, 2)",
                        backgroundColor: "rgba(111, 253, 45, 0.288)"
                    }} />
            };
            break;

        case "product":
            data = {
                title: "PRODUCTS",
                query: "products",
                link: "See details",
                icon: <AccountBalanceWalletIcon className='icon'
                    style={{
                        color: "rgb(180, 147, 0)",
                        backgroundColor: "rgba(255, 251, 11, 0.582)"
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
                isMoney: true,
                link: "View net earnings",
                icon: <MonetizationOnIcon className='icon'
                    style={{
                        color: "rgb(25, 105, 255)",
                        backgroundColor: "rgba(65, 131, 255, 0.205)"
                    }} />
            };
            break;
        default:
            break;
    }

    useEffect(() => {
        const fetchData = async () => {
            const today = new Date();
            const lastMonth = new Date(new Date().setMonth(today.getMonth() - 1));
            const prevMonth = new Date(new Date().setMonth(today.getMonth() - 2));

            const lastMonthQuery = query(
                collection(db, data.query),
                where("timeStamp", "<=", today),
                where("timeStamp", ">", lastMonth)
            );

            const prevMonthQuery = query(
                collection(db, data.query),
                where("timeStamp", "<=", lastMonth),
                where("timeStamp", ">", prevMonth)
            );

            const lastMonthData = await getDocs(lastMonthQuery)
            const prevMonthData = await getDocs(prevMonthQuery)

            setAmount(lastMonthData.docs.length);
            setDiff(
                (lastMonthData.docs.length - prevMonthData.docs.length) / (prevMonthData.docs.length)
                * 100
            );
        };
        fetchData();
    }, [data.query]);


    return (
        <div className='widget'>
            <div className='left'>
                <span className='title'>{data.title}</span>
                <span className='counter'>{data.isMoney && "$"} {amount}</span>
                <span className='link'>{data.link}</span>
            </div>

            <div className='right'>
                <div className={`percent ${diff < 0 ? "negative" : "positive"}`}>
                    {diff < 0 ? < ArrowDropDownIcon /> : <ArrowDropUpIcon />}
                    {diff} %
                </div>
                {data.icon}
            </div>
        </div>
    )
}
