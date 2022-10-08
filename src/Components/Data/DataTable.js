import React, { useEffect, useState } from 'react'
import "./dataTable.scss"
import { DataGrid } from "@mui/x-data-grid"
import { userColumns } from '../../TableData'
import { Link } from "react-router-dom"
import { collection, doc, deleteDoc, onSnapshot } from "firebase/firestore"
import { db } from "../../Firebase"

export default function DataTable() {

    const [data, setData] = useState([]);

    useEffect(() => {
        // const fetchData = async () => {
        //     let list = []
        //     try {
        //         const querySnapshot = await getDocs(collection(db, "users"));
        //         querySnapshot.forEach((doc) => {
        //             list.push({ id: doc.id, ...doc.data() })
        //         });
        //         setData(list);
        //     } catch (err) {
        //         console.log(err)
        //     }
        // };
        // fetchData()

        const unsub = onSnapshot(collection(db, "users"), (snapShot) => {
            let list = [];
            snapShot.docs.forEach((doc) => {
                list.push({ id: doc.id, ...doc.data() });
            });
            setData(list);
        },
            (err) => {
                console.log(err);
            }
        );

        return () => {
            unsub();
        };
    }, []);

    console.log(data)

    const handleDelete = async (id) => {
        try {
            await deleteDoc(doc(db, "users", id));
            setData(data.filter(item => item.id !== id));
        } catch (err) {
            console.log(err)
        }
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
