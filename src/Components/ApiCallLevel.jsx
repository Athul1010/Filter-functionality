import React from 'react';

const Test = () => {
  const data = {
    users: [
      { name: 'athul', age: 23 },
      { name: 'ajay', age: 24 },
      { name: 'chinnu', age: 25 },
    ],
    forecast: {
      forecastday: [{ date: '2024-12-15', date_epoch: 1734220800, day: 'Sunday' }],
      location: [{place:"Morazha", state: "kannur"}]
    }
  };

  return (
    <div>
        
      <div>
        {data.users.map((x,index)=>(
          <div key={index}>
            <h1>{x.name}</h1>
          </div>
        ))}
      </div>

      <div>
        {data.forecast.forecastday.map((x,index)=>(
          <div key={index}>
            <h1>{x.date}</h1>
          </div>
        ))}
      </div>

      <div>
        {data.forecast.location.map((x,index)=>(
          <div key={index}>
            <h1>{x.place}</h1>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Test;