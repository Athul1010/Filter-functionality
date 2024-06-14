import React, { useEffect, useState } from 'react'

const Filtering = () => {
    let items = ["Athul", "Arun", "Vyshnav", "Ajay", "Raman", "Krishnan", "Raj", "Sreerag", "Appuse"];
    

    let [value, setValue] = useState(items)


    
    let handleChange = (name) =>{
        const FilterData = items.filter(item=>item.includes(name))
        console.log(FilterData);

        setValue(FilterData)
    }
    
  return (
    <div>
        <div>
            <input type="text" onChange={(e)=>handleChange(e.target.value)}/>
        </div>
        <ul>
       {value.map((data, index)=>(
        <li key={index}>{data}</li>
       ))}
       </ul>
    </div>
  )
}

export default Filtering