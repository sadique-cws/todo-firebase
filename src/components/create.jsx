import { useEffect, useState } from "react";
import {db,auth} from '../firebaseConfig'
import {ref,set,push}  from 'firebase/database';
import { useNavigate } from "react-router-dom";
const Create = () => {
    const [data,setData] = useState("")

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
                </div>
            </div>
        </div>
    )
}

export default Create;