import React, { useEffect, useState } from 'react'

const Filtering = () => {
  let items = ["Athul", "Arun", "Vyshnav", "Ajay", "Raman", "Krishnan", "Raj", "Sreerag", "Appuse"];


  let [value, setValue] = useState(items)



  let handleChange = (name) => {
    const FilterData = items.filter(item => item.includes(name)) // "items" nte ullil ulla oro perukal aan ithile "item", nammal type cheyyunnath aan "name"
    console.log(FilterData);

    setValue(FilterData)
  }

  return (
    <div>
      <div>
      {/* nammal input tag il type cheyyunna karyangal aan "e.target.value" */}
        <input type="text" onChange={(e) => handleChange(e.target.value)} /> 
      </div>
      <ul>
        {value.map((data, index) => ( // "items" nte ullil ulla oro perukal aan ithile "data" means "data yum item um same aan use aan"
          <li key={index}>{data}</li>
        ))}
      </ul>
    </div>
  )
}

export default Filtering 