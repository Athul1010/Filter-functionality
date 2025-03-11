


// import axios from 'axios';
// import React, { useEffect, useState } from 'react'

// const FilterApi = () => {
//   const [data, setData] = useState([]);


//   useEffect(() => {
//     fetchData();
//   }, [])

//   const fetchData = () => {
//     axios.get('https://jsonplaceholder.typicode.com/posts')
//       .then(res => {
//         setData(res.data);

//       })
//       .catch(error => console.log('fetch data error', error))
//   }

//   let handleFilter = (element) => {
//     let filtering = data.filter((x) => x.title.includes(element) || x.id == Number(element))
//     setData(filtering)
//   }

// let handleFilterChange = (value) => {
//   if (value) {
//     handleFilter(value)
//     console.log('first one', value);

//   } else {
//     // setData(data)
//     fetchData();
//     console.log('second one', value);

//   }
// }


//   return (
//     <div>

//       <div>
//         <input type="text" placeholder='Search here...' onChange={(e) => handleFilterChange(e.target.value)} />
//         <button onClick={() => handleFilter()}>Filter</button>
//       </div>

//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>title</th>
//             <th>Description</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((data, index) => (
//             <tr key={index}>
//               <td>{data.id}</td>
//               <td>{data.title}</td>
//               <td>{data.body}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   )
// }

// export default FilterApi

// // import React, { useState } from 'react'

// // const Test = () => {
// //   const [result, setResult] = useState(0);
// //   const addNumbers = (a1, a2) =>{
// //     setResult(a1+a2)
// //   }
// //   return (
// //     <div>
// //       <h1>{result}</h1>
// //       <button onClick={()=>addNumbers(5,5)}>Add</button>
// //     </div>
// //   )
// // }

// // export default Test


//https://jsonplaceholder.typicode.com/posts





