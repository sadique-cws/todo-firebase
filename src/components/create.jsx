import { useEffect, useState } from "react";
import {db,auth,storage} from '../firebaseConfig'
import {ref,set,push}  from 'firebase/database';
import { useNavigate } from "react-router-dom";
import {getStorage,uploadBytesResumable,ref as refFile,getDownloadURL} from 'firebase/storage';
const Create = () => {
    const [data,setData] = useState("")
    const [progress, setProgress] = useState(0)

    const uploadFile = (file) => {
        if(!file) return;
        const refStorage = refFile(storage,`/image/${file.name}`)

        const uploadTask = uploadBytesResumable(refStorage,file)


        uploadTask.on("state_changed",(snapshot)=> {
            const prog = Math.round((snapshot.bytesTransferred / snapshot.totalBytes)  * 100)
            setProgress(prog)
        },(error) => console.log(error),
        () => {
            getDownloadURL(uploadTask.snapshot.ref).then((url) => console.log(url));
        });
        

        
    }

    const handleFileUpdate = (e) => {
        e.preventDefault();

        const file = e.target[0].files[0];
        console.log(file);
        uploadFile(file)

        
    }   

    const handleForm = () => {
        var todoRef = push(ref(db,"tasks"))

        set(todoRef,{
            title:data,
            status: true
        })

        setData("");

    }
    var nav = useNavigate();
    useEffect(() => {
        var userData = localStorage.getItem("userData");
        if(userData){
            nav("/");
        }
        if(!userData){
            nav("/login"); 
        }
    },[])
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-5 mx-auto">
                    <div className="card">
                        <div className="card-body d-flex">
                            <input type="text" value={data} onChange={(e) =>setData(e.target.value)} className="form-control" placeholder="Write your task" />    
                            <input type="submit" onClick={handleForm} className="btn btn-success" />    
                        </div>
                    </div>   
                    <div className="card">
                        <form action="" onSubmit={handleFileUpdate}>
                            <input type="file" name="file" className="form-control" />
                            <input type="submit" className="btn btn-success" />
                        </form>

                        <h5>Uploaded  ({progress})%</h5>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Create;