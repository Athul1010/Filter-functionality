import axios from 'axios';
import React, { useEffect, useState } from 'react'

const FilterApi2 = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                setData(res.data);
                //   setSearch(res.data);
            })
            .catch(error => console.log('fetch data error', error))
    }, [])

    let handleFilter = () => {
        let filtering = data.filter((x) => x.title.includes(search) || x.id == Number(search))
        setData(filtering)
    }
    
    return (
        <div>
            <div>
                <input type="text" placeholder='Search here...' value={search} onChange={(e) => setSearch(e.target.value)} />
                <button onClick={() => handleFilter()}>Submit</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((data, index) => (
                        <tr key={index}>
                            <td>{data.id}</td>
                            <td>{data.title}</td>
                            <td>{data.body}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default FilterApi2

// import axios from 'axios';
// import React, { useEffect } from 'react'
// import { useState } from 'react'

// const FilterApi2 = () => {
//   const [title, settitle] = useState('');
//   const [body, setbody] = useState('');
//   const [id, setId] = useState('');

//   const [titleError, setTitleError] = useState('');
//   const [bodyError, setBodyError] = useState('');
//   const [idError, setIdError] = useState('');

//   const [data, setData] = useState([]);

//   const [search, setSearch] = useState('');

//   useEffect(() => {
//     handleFetchData()
//   }, [])

//   const handleFetchData = () =>{
//     axios.get('https://jsonplaceholder.typicode.com/posts')
//     .then(response => setData(response.data))
//     .catch(error => console.log('fetching error', error))
//   }


//   const handleFetch = async (e) => {
//     e.preventDefault()

//     let isValid = true

//     if (title === "") {
//       setTitleError('title is required')
//       isValid = false
//     } else {
//       setTitleError("")
//     }

//     if (body === "") {
//       setBodyError("body must be required")
//       isValid = false
//     } else {
//       setBodyError("")
//     }

//     if (id === "") {
//       setIdError("Id is required")
//       isValid = false
//     } else {
//       setIdError("")
//     }


//     if (isValid) {
//       const newData = {
//         title, body, id
//       }
//       try {
//         const response = await axios.post('https://jsonplaceholder.typicode.com/posts', newData)
//         setData(prev => [...prev, response.data])
//         settitle('')
//         setbody('')
//         setId('')
//       } catch (error) {
//         console.log('post error', error);

//       }
//     }

//   }


//   const handelDelete = (id) => {
//     const remove = data.filter((x) => x.id !== id)
//     setData(remove)
//   }

//   const handleFilter = () =>{
//     const filterData = data.filter((x)=>x.title.includes(search) || x.id === Number(search))
//     setData(filterData);
//   }

//   const handleFilterResult = (content) =>{
//     if (content) {
//       setSearch(content)
//     } else {
//       handleFetchData()
//     }
//   }

//   return (
//     <div className='container'>
//       <form onSubmit={handleFetch}>
//         <div>
//           <input type="text" placeholder='title' value={title} onChange={(e) => settitle(e.target.value)} />
//           {titleError && <p style={{ color: 'red' }}>{titleError}</p>}
//         </div>
//         <div>
//           <input type="body" placeholder='body' value={body} onChange={(e) => setbody(e.target.value)} />
//           {bodyError && <p style={{ color: 'red' }}>{bodyError}</p>}
//         </div>
//         <div>
//           <input type="number" placeholder='id' value={id} onChange={(e) => setId(e.target.value)} />
//           {idError && <p style={{ color: 'red' }}>{idError}</p>}
//         </div>

//         <button>Submit</button>

//       </form>

//       <div className='mt-5 mb-5'>
//         <h1>Filter Functionality</h1>
//         <input type="text" placeholder='Search Here...' onChange={(e)=>handleFilterResult(e.target.value)}/>
//         <button onClick={()=>handleFilter()}>Submit</button>
//       </div>

//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Title</th>
//             <th>Body</th>
//             <th>Delete</th>
//           </tr>
//         </thead>
//         {data.map((datas, index) => (
//           <tr key={index}>
//             <td>{index + 1}</td>
//             <td>{datas.title}</td>
//             <td>{datas.body}</td>
//             <td>
//               <button onClick={() => handelDelete(datas.id)}>Delete</button>
//             </td>
//           </tr>
//         ))}
//         <tbody>

//         </tbody>
//       </table>

//     </div>
//   )
// }

// export default FilterApi2

