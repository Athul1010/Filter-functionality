// import axios from 'axios'
// import React, { useEffect, useState } from 'react'

// const ApiCall = () => {

//   let [value, setValue] = useState([])


//   useEffect(() => {
//     axios.get('https://jsonplaceholder.typicode.com/posts')
//       .then(res => setValue(res.data))
//       .then(error => console.log('fetching error', error))
//   }, [])

//   return (
//     <div>
//       {value.map((x) => (
//         <h1>{x.title}</h1>
//       ))}
//     </div>
//   )
// }

// export default ApiCall


import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ApiCall = () => {

  let [value, setValue] = useState([])

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res=>setValue(res.data))
    .then(error=>console.log('fetching error',error))
  },[])

  return (
    <div>
      {value.map((x)=>(
        <h1>{x.title}</h1>
      ))}
    </div>
  )
}

export default ApiCall