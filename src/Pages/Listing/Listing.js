import React from 'react';
import DataTable from '../../Components/Data/DataTable';
import Navbar from '../../Components/Nav/Navbar';
import Sidebar from '../../Components/Nav/Sidebar';
import "./listing.scss";

export default function Listing() {
    return (
        <div className='listing'>
            <Sidebar />
            <div className='listingContainer'>
                <Navbar />
                <DataTable />
            </div>
        </div>
    );
}