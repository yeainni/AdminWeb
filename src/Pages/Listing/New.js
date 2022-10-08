import React, { useEffect, useState } from 'react'
import "./new.scss"
import Navbar from '../../Components/Nav/Navbar'
import Sidebar from '../../Components/Nav/Sidebar'
// import noimg from "./noimg.jpg"
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { setDoc, doc, serverTimestamp, } from "firebase/firestore"
import { auth, db, storage } from '../../Firebase'
import { createUserWithEmailAndPassword } from "firebase/auth"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"

export default function New({ inputs, title }) {

    const [file, setFile] = useState("");
    const [data, setData] = useState({});
    const [uploadProgress, setUploadProgress] = useState(null);

    useEffect(() => {
        const uploadFile = () => {
            const name = new Date().getTime() + file.name
            console.log(name);

            const storageRef = ref(storage, file.name);
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on('state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');

                    setUploadProgress(progress)
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                        default:
                            break;
                    }
                },
                (err) => {
                    console.log(err)
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref)
                        .then((downloadURL) => {
                            setData((prev) => ({ ...prev, img: downloadURL }));
                        });
                }
            );
        };
        file && uploadFile();
    }, [file])

    const handleInput = (e) => {
        const id = e.target.id;
        const value = e.target.value;

        setData({ ...data, [id]: value })
    };
    // console.log(data);

    const handleAdd = async (e) => {
        e.preventDefault();

        try {
            const res = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            );
            await setDoc(doc(db, "users", res.user.uid), {
                ...data,
                timeStamp: serverTimestamp(),
            });
        } catch (err) {
            console.log(err)
        }
    };

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
                                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqVVDYp5tZtEqwFaniDQTkutweDjjt4CX_Hie6DbsSlATtI9k&s"
                            }
                            alt=""
                        />
                    </div>

                    <div className='right'>
                        <form onSubmit={handleAdd}>
                            <div className='formInput'>

                                <label htmlFor="file">
                                    Image: < CloudUploadIcon className='icon' />
                                </label>
                                <input
                                    type="file"
                                    id="file"
                                    onChange={(e) => setFile(e.target.files[0])}
                                    style={{ display: "none" }}
                                />
                            </div>

                            {inputs.map((input) => (
                                <div className='formInput' key={input.id}>
                                    <label> {input.label}</label>
                                    <input
                                        id={input.id}
                                        type={input.type}
                                        placeholder={input.placeholder}
                                        onChange={handleInput}
                                    />
                                </div>
                            ))}

                            <button
                                disabled={
                                    uploadProgress !== null && uploadProgress < 100
                                }
                                type='submit'
                            > Send </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}