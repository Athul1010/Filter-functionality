import axios from 'axios';
import React, { useEffect, useState } from 'react'

const FilterApi = () => {

  let [value, setValue] = useState([]);
  let [search, setSearch] = useState([]);

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
      setValue(res.data)
      setSearch(res.data)
    })
    .catch(error=>console.log('fetching error',error))
  },[])

  let handleSearch = (element) =>{
    let result = value.filter((x)=>x.title.includes(element)|| x.id === Number(element))
    setSearch(result)
  }

  return (
    <div>
      <h1>Filter Functionality</h1>
      <div>
        <label htmlFor="">Search: </label>
        <input type="text" placeholder='Type here' onChange={(e)=>handleSearch(e.target.value)}/>
      </div>
      {search.map((x,index)=>(
        <div key={index}>
          <h2>{x.title}</h2>
          <p>{x.id}</p>
        </div>
      ))}
    </div>
  )
}

export default FilterApi