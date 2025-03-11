import React, { useEffect, useState } from 'react'

const Vunet2 = () => {
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("title");
    
    
    // if (storedData) {
    //   setTitles(storedData.split(",")); // Split the data into an array
    // }
    setTitles(storedData.split(','));
  }, []); // Run only once when the component mounts

  console.log(titles);
  

  return (
    <div className="selected-titles">
      <h2>Selected Titles:</h2>
      <ul>
        {titles.map((x, index) => (
          <li key={index}>{x}</li>
        ))}
      </ul>
    </div>
  )
}

export default Vunet2