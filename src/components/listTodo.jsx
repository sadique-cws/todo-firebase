import { onValue, ref,remove,update } from 'firebase/database';
import { useEffect, useState } from 'react';
import {db,storage} from '../firebaseConfig';




const ListTodo = () => {

    const [listdata,setListdata] = useState([]);

    useEffect(()=>{
        let todoRef = ref(db,"tasks")
        onValue(todoRef,(snapshot)=>{
            let data = [];
            snapshot.forEach((childSnapshot) => {
                var value = childSnapshot.val();
                value['key'] = childSnapshot.key
                data = [...data,value]
            });
            setListdata(data);
        })
    },[])

    const handleDelete = (recordId) => {

        let deleteRef = remove(ref(db,`tasks/${recordId}`))

    }
    const handleUpdate= (recordId) => {

        let updateRef = update(ref(db,`tasks/${recordId}`), {status:false})

    }
    return (
        <div className="container mt-2">
            <div className="row">
                <div className="col-5 mx-auto">
                <ul className="list-group">
                {listdata.map((value,key) => (
                    <li key={key} className={(value.status)?"list-group-item list-group-item-action list-group-item-success": "list-group-item list-group-item-action list-group-item-danger"}>{value.title}
                        <button type='button' onClick={()=>handleDelete(value.key)} className="float-end badge bg-danger text-white border-0 py-2">Remove</button>
                       {value.status &&  <button type='button' onClick={()=>handleUpdate(value.key)} className="float-end badge bg-primary text-white border-0 py-2 me-2">Done</button>}
                    </li>
                    ))}
                </ul>
            </div>
            </div>
        </div>
    )
}

export default ListTodo;