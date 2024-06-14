// import React, { useEffect, useState } from "react";
// import axios from 'axios';

// const Table = () => {
//     const [user, setUser] = useState([]);
//     const [id, setId] = useState("");
//     const [title, setTitle] = useState("");
//     const [stateControl, setStateControl] = useState(false);

//     useEffect(() => {
//         axios.get('https://fakestoreapi.com/products')
//             .then(res => setUser(res.data))
//             .catch(error => console.log('fetching error', error));
//     }, [stateControl]);

//     const remove = (id) => {
//         setUser(user.filter(x => x.id !== id));
//     };

//     const handleRemove = (e) => {
//         e.preventDefault();
//         const data2 = { id, title };
//         axios.post("https://fakestoreapi.com/products", data2, {
//             headers: { 'Content-Type': 'application/json' }
//         })
//         .then(() => setStateControl(!stateControl))
//         .catch(error => console.log('posting error', error));
//     };

//     return (
//         <div className="table">
//             <table>
//                 <thead>
//                     <tr>
//                         <th>No</th>
//                         <th>Title</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {user.map((data) => (
//                         <tr key={data.id}>
//                             <td>{data.id}</td>
//                             <td>{data.title}</td>
//                             <td><button onClick={() => remove(data.id)}>DELETE</button></td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>

//             <form onSubmit={handleRemove}>
//                 <input
//                     type="text"
//                     placeholder="Enter the name"
//                     value={title}
//                     onChange={(e) => setTitle(e.target.value)}
//                 />
//                 <input
//                     type="number"
//                     placeholder="Type number"
//                     value={id}
//                     onChange={(e) => setId(e.target.value)}
//                 />
//                 <button type="submit">Add here</button>
//             </form>
//         </div>
//     );
// };

// export default Table;

import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ApiToTable = () => {
    let [value, setValue] = useState([])
    let [id, setId] = useState('')
    let [title, setTitle] = useState('')
    let [stateControl, setStateControl] = useState(false)


    useEffect(() => {
        axios.get('')
            .then(res => setValue(res.data))
            .catch(error => setValue('fetching error', error))
    }, [stateControl])

    let remove = (id) => {
        setValue(value.filter(x => x.id != id))
    }

    let handleRemove = (e) => {
        e.preventDefault();
        let data2 = { id, title }
        axios.post('', data2, {
            headers: { "Content-Type": "application/json" }
        })
            .then(() => setStateControl(!stateControl))
            .catch(error => console.log('error', error))
    };

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    {value.map((data) => (
                        <tr key={data.id}>
                            <td>{data.id}</td>
                            <td>{data.title}</td>
                            <button onClick={() => remove(data.id)}>Delete</button>
                        </tr>
                    ))}
                </tbody>
            </table>

            <form onSubmit={handleRemove}>
                <input type="text" value={id} onChange={(e)=>setId(e.target.value)}/>
                <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                <button type='submit'>Add here</button>
            </form>
        </div>
    )
}

export default ApiToTable
