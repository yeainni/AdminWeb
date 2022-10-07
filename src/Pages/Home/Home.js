import React from 'react'
import "./home.scss"
import Sidebar from "../../Components/Nav/Sidebar"
import Navbar from "../../Components/Nav/Navbar"
import Widget from "../../Components/Widget/Widget"
import Feature from '../../Components/Feature/Feature'
import Chart from '../../Components/Chart/Chart'
import TableList from '../../Components/Table/TableList'

export default function Home() {
    return (
        <div className='home'>
            <Sidebar />
            <div className='homeContainer'>
                <Navbar />
                <div className='widgets'>
                    <Widget type="user" />
                    <Widget type="order" />
                    <Widget type="earning" />
                    <Widget type="balance" />
                </div>
                <div className='charts'>
                    <Feature />
                    <Chart title="Last 6 Months (revenue)" aspect={2 / 1} />
                </div>
                <div className='listContainer'>
                    <div className='listTitle'>
                        Latest Transactions
                    </div>

                    <TableList />
                </div>
            </div>
        </div>
    );
}