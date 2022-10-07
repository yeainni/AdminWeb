import React, { useState } from 'react'
import "./dataTable.scss"
import { DataGrid } from "@mui/x-data-grid"
import { userColumns, userRows } from '../../TableData'
import { Link } from "react-router-dom"

export default function DataTable() {

    const [data, setData] = useState(userRows);
    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id))
    }

    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className='cellAction'>
                        <Link to="/users/test" style={{ textDecoration: "none" }}>
                            <div className='viewBtn'>View</div>
                        </Link>
                        <div className='deleteBtn'
                            onClick={() => handleDelete(params.row.id)}
                        >
                            Delete</div>
                    </div>
                )
            }
        }
    ]

    return (

        <div className='dataTable'>
            <div className="dataTableTitle">
                Add New Username
                <Link to="/users/new"
                    style={{ textDecoration: "none" }}
                    className="link"
                >
                    Add New
                </Link>
            </div>

            <DataGrid
                className="dataGrid"
                rows={data}
                columns={userColumns.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
            />

        </div>
    )
}
