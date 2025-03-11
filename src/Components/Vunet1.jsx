import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../Styles/Vunet1.css'
//https://dummyjson.com/products

const Vunet1 = () => {

    const [data, setData] = useState([]);
    const [titleNames, setTitleNames] = useState([]);

    useEffect(()=>{
        axios.get('https://dummyjson.com/products')
        .then(response=>setData(response.data.products))
    },[])

    const handleSelect = (title) =>{
        setTitleNames(prev=>[...prev,title])
        
        localStorage.setItem('title',titleNames)
    }

  return (
    <div>
        <h1>Card Section</h1>
        <div className='card-wrap'>
            {data.map((x, index)=>(
                <div className='card-set' key={index} onClick={()=>handleSelect(x.title)}>
                    <p>{x.id}</p>
                    <p>{x.title}</p>
                </div>
            ))}
        </div>
        
    </div>
  )
}

export default Vunet1