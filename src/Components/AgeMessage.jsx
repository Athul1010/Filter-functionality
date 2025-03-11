import React, { useState } from 'react';

const AgeMessage = () => {
  const [age, setAge] = useState(20);

  return (
    <div>
      <h2>Age Message</h2>
      <p>{`Your age is ${age}.`}</p>
      <p>{age >= 18 ? 'You are an adult.' : 'You are a minor.'}</p>
    </div>
  );
};

export default AgeMessage;
