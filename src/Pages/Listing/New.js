import React, { useState } from 'react'
import "./new.scss"
import Navbar from '../../Components/Nav/Navbar'
import Sidebar from '../../Components/Nav/Sidebar'
import noimg from "./noimg.jpg"
import CloudUploadIcon from '@mui/icons-material/CloudUpload'

export default function New({ inputs, title }) {

    const [file, setFile] = useState("");

    return (
        <div className='new'>
            <Sidebar />
            <div className='newContainer'>
                <Navbar />
                <div className='top'>
                    <h1> {title} </h1>
                </div>

                <div className='bottom'>
                    <div className='left'>
                        <img
                            src={
                                file
                                    ? URL.createObjectURL(file)
                                    : { noimg }
                            }
                            alt=""
                        />
                    </div>

                    <div className='right'>
                        <form>
                            <div className='formInput'>
                                <label htmlFor="file">
                                    Image: < CloudUploadIcon className='icon' />
                                </label>
                                <input
                                    type="file"
                                    id="file"
                                    onChange={e => setFile(e.target.files[0])}
                                    style={{ display: "none" }}
                                />
                            </div>

                            {inputs.map((input) => (
                                <div className='formInput' key={input.id}>
                                    <label> {input.label}</label>
                                    <input type={input.type} placeholder={input.placeholder} />
                                </div>
                            ))}

                            <button> Send </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}