import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ApiCall = () => {

  let [value, setValue] = useState([])


  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => setValue(res.data))
      .catch(error => console.log('fetching error', error))
  }, [])

  return (
    <div>
      {value.map((x) => (
        <h1>{x.title}</h1>
      ))}
    </div>
  )
}

export default ApiCall


//Explanation on above code

// 1)Imports:

// We import axios for making HTTP requests and React along with useEffect and useState from the React library.


// 2)State Setup:

// We create a state variable called value using useState. This will hold the data we get from the API, and it starts as an empty array.


// 3)Fetching Data:

// Inside the useEffect hook, which runs after the component mounts, we use axios.get to make a GET request to the API endpoint https://jsonplaceholder.typicode.com/posts.
// If the request is successful, we set the value state to the data received from the API using setValue(res.data).
// If there's an error during fetching, we log the error to the console.


// 4)Rendering:

// In the return statement, we map over the value array, and for each item in the array, we create an <h1> element to display the title of each post.


// 5)Export:

// Finally, we export the ApiCall component so it can be used in other parts of the application.


// Summary:-
// All the data fetched from the API is stored in res.data.
// The variable value will hold the contents of res.data after you call setValue(res.data).
//The "res" parameter represents the response object that Axios receives from the API.
//We use res as a parameter to capture the response object from the Axios request, allowing us to access the data returned from the API.









