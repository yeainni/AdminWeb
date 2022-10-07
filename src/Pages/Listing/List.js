import React from 'react';
import "./list.scss";
import Navbar from '../../Components/Nav/Navbar';
import Sidebar from '../../Components/Nav/Sidebar';
import Cat from './ListingProfile.jfif';
import Chart from "../../Components/Chart/Chart"
import TableList from '../../Components/Table/TableList';

export default function List() {
    return (
        <div className='list'>
            <Sidebar />
            <div className='listContainer'>
                <Navbar />

                <div className='top'>
                    <div className='left'>
                        <div className='editBtn'> Edit</div>
                        <h1 className='title'>Information</h1>
                        <div className='item'>
                            <img src={Cat}
                                alt=""
                                className="itemImg" />
                            <div className='details'>
                                <h1 className='itemTitle'> MJ Yoon</h1>
                                <div className='detailItem'>
                                    <span className='itemKey'>Email:</span>
                                    <span className='itemValue'>mjyoon@mjyoon.com</span>
                                </div>

                                <div className='detailItem'>
                                    <span className='itemKey'>Phone:</span>
                                    <span className='itemValue'>+64 1234 5678</span>
                                </div>

                                <div className='detailItem'>
                                    <span className='itemKey'>Address:</span>
                                    <span className='itemValue'>25 Welly st, Auckland</span>
                                </div>

                                <div className='detailItem'>
                                    <span className='itemKey'>Country:</span>
                                    <span className='itemValue'>NZ</span>
                                </div>

                            </div>
                        </div>

                    </div>

                    <div className='right'>
                        <Chart aspect={3 / 1} title="User Speding (Last 6 Month)" />
                    </div>
                </div>

                <div className='bottom'>
                    <h1 className='title'>Last Transactions</h1>
                    <TableList />
                </div>
            </div>
        </div>
    );
}