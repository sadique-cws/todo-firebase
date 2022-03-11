import { onValue, ref } from 'firebase/database';
import { useEffect, useState } from 'react';
import {db} from '../firebaseConfig';


const ListTodo = () => {

    const [listdata,setListdata] = useState([]);

    useEffect(()=>{
        let todoRef = ref(db,"tasks")
        onValue(todoRef,(snapshot)=>{
            let data = [];
            snapshot.forEach((childSnapshot) => {
                var value = childSnapshot.val();
                data = [...data,value]
            });
            setListdata(data);
        })
    },[])
    return (
        <div className="container mt-2">
            <div className="row">
                <div className="col-5 mx-auto">
                <div className="list-group">
                {listdata.map((value,key) => (
                    <a href="#" key={key} className="list-group-item list-group-item-action">{value.title}</a>
                    ))}
                </div>
            </div>
            </div>
        </div>
    )
}

export default ListTodo;