import React from 'react'

const Argument = () => {

    // Function to handle button click with an argument
  const handleClick = (name) => {
    alert(`Hello, ${name}!`);
  };

  return (
    <div>
      {/* Button that triggers handleClick with an argument */}
      <button onClick={() => handleClick('John')}>
        Say Hello to John
      </button>
    </div>
  )
}

export default Argument