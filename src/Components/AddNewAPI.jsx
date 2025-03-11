import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AddNewAPI = () => {

    const [data, setData] = useState([])

    const [userId, setUserId] = useState('')
    const [id, setId] = useState('')
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    // useEffect(()=>{
    //     const fetchData = async() =>{
    //         try {
    //             const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    //             setData(response.data)
    //         } catch (error) {
    //             console.error('fetching error',error)
    //         }
    //     };
    //     fetchData()
    // },[])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => setData(response.data))
            .catch(error => console.log('fetching error', error))
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newData = {
            userId, id, title, body
        }
        try {
            const response = await axios.post('https://jsonplaceholder.typicode.com/posts', newData)
            setData(prev => [...prev, response.data])
            alert('Successfully Added')
        } catch (error) {
            console.error('Not Added', error)
        }
    }

    

    const handleDelete = (id) => {
        try {
            axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
            setData(data.filter((x)=>x.id !== id))
        } catch (error) {
            console.log('not deleted',error);
            
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="number" placeholder='User ID' value={userId} onChange={(e) => setUserId(e.target.value)} />
                </div>
                <div>
                    <input type="number" placeholder='Id' value={id} onChange={(e) => setId(e.target.value)} />
                </div>
                <div>
                    <input type="text" placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    <textarea name="" id="" placeholder='Body' value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                </div>
                <button>Submit</button>
            </form>
            <table border='1'>
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Body</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((x) => (
                        <tr key={x.id}>
                            <td>{x.userId}</td>
                            <td>{x.id}</td>
                            <td>{x.title}</td>
                            <td>{x.body}</td>
                            <td>
                                <button onClick={() => handleDelete(x.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default AddNewAPI


// import axios from 'axios'
// import React, { useEffect, useState } from 'react'

// const AddNewAPI = () => {
//     const [data, setData] = useState([])

//     const [userId, setUserId] = useState('')
//     const [id, setId] = useState('')
//     const [title, setTitle] = useState('')
//     const [body, setBody] = useState('')

//     // 🔹 GET Request (Fetching Data)
//     useEffect(() => {
//         axios.get('https://jsonplaceholder.typicode.com/posts')
//             .then(res => {
//                 if (res.status === 200) {  // ✅ Standard success response
//                     setData(res.data);
//                 } else {
//                     console.error('Unexpected Status:', res.status);
//                 }
//             })
//             .catch(error => {
//                 console.error('Fetching error:', error);
//             });
//     }, []);

//     // 🔹 POST Request (Adding New Data)
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const newData = { userId, id, title, body };

//         try {
//             const response = await axios.post('https://jsonplaceholder.typicode.com/posts', newData);
//             if (response.status === 201) {  // ✅ Standard success response for creating a resource
//                 setData(prev => [...prev, response.data]);
//                 alert('Successfully Added');
//             } else {
//                 console.error('Unexpected Status:', response.status);
//             }
//         } catch (error) {
//             console.error('Not Added:', error);
//         }
//     };

//     // 🔹 DELETE Request (Deleting Data)
//     const handleDelete = async (id) => {
//         try {
//             const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
//             if (response.status === 200 || response.status === 204) {  // ✅ Standard success responses for DELETE
//                 setData(data.filter(x => x.id !== id));
//                 alert('Successfully Deleted');
//             } else {
//                 console.error('Unexpected Status:', response.status);
//             }
//         } catch (error) {
//             console.error('Not Deleted:', error);
//         }
//     };

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <input type="number" placeholder='User ID' value={userId} onChange={(e) => setUserId(e.target.value)} />
//                 </div>
//                 <div>
//                     <input type="number" placeholder='Id' value={id} onChange={(e) => setId(e.target.value)} />
//                 </div>
//                 <div>
//                     <input type="text" placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
//                 </div>
//                 <div>
//                     <textarea placeholder='Body' value={body} onChange={(e) => setBody(e.target.value)}></textarea>
//                 </div>
//                 <button>Submit</button>
//             </form>

//             <table border='1'>
//                 <thead>
//                     <tr>
//                         <th>User ID</th>
//                         <th>Id</th>
//                         <th>Title</th>
//                         <th>Body</th>
//                         <th>Action</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {data.map((x) => (
//                         <tr key={x.id}>
//                             <td>{x.userId}</td>
//                             <td>{x.id}</td>
//                             <td>{x.title}</td>
//                             <td>{x.body}</td>
//                             <td>
//                                 <button onClick={() => handleDelete(x.id)}>Delete</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     )
// }

// export default AddNewAPI;
