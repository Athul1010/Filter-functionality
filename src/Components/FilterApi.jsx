// import axios from 'axios';
// import React, { useEffect, useState } from 'react'

// const FilterApi = () => {
//   console.log('Component rendered!');
//   const [data, setData] = useState([]);
//   const [search, setSearch] = useState([]);

//   useEffect(()=>{
//     axios.get('https://jsonplaceholder.typicode.com/posts')
//     .then(res=>{
//       setData(res.data);
//       setSearch(res.data);
//     })
//     .catch(error=>console.log('fetch data error',error))
//   },[])

//   let handleFilter = (element) =>{
//     console.log('Filtering data...');
//     let filtering = data.filter((x)=>x.title.includes(element)|| x.id === Number(element))
//     setSearch(filtering)
//   }


//   return (
//     <div>
//       <div>
//         <input type="text" placeholder='Search here...' onChange={(e)=>handleFilter(e.target.value)} />
//       </div>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Title</th>
//             <th>Description</th>
//           </tr>
//         </thead>
//         <tbody>
//         {search.map((data,index)=>(
//           <tr key={index}>
//             <td>{data.id}</td>
//             <td>{data.title}</td>
//             <td>{data.body}</td>
//           </tr>
//         ))}
//         </tbody>
//       </table>
//     </div>
//   )
// }

// export default FilterApi







