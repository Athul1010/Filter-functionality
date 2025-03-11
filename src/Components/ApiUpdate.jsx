import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ApiUpdate = () => {
  const [data, setData] = useState([])
  const [userId, setUserId] = useState('')
  const [id, setId] = useState('')
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [editId, setEditId] = useState(null) // To store which row is being updated

  const [message, setMessage] = useState('') // Success Message State

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => setData(response.data))
      .catch(error => console.log('Fetching Error', error))
  }, [])

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      setData(data.filter((x) => x.id !== id))
      setMessage('Data Deleted Successfully ✅')
    } catch (error) {
      console.log('Not Deleted', error)
      setMessage('Failed to Delete ❌')
    }
  }

  const handleUpdate = (x) => {
    setUserId(x.userId)
    setId(x.id)
    setTitle(x.title)
    setBody(x.body)
    setEditId(x.id) // Set the id for updating
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const updatedData = {
      userId, id, title, body
    }
    try {
      if (editId) {
        const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${editId}`, updatedData)

        setData(data.map((x) => x.id === editId ? response.data : x))
        setMessage('Data Updated Successfully ✅')

        // Reset All Fields
        setEditId(null)
        setUserId('')
        setId('')
        setTitle('')
        setBody('')
      }
    } catch (error) {
      console.log('Update Error', error)
      setMessage('Failed to Update ❌')
    }
  }

  return (
    <div>
      {message && <h3 style={{ color: message.includes('✅') ? 'green' : 'red' }}>{message}</h3>}

      <form onSubmit={handleSubmit}>
        <div>
          <input type="number" placeholder='User ID' value={userId} onChange={(e) => setUserId(e.target.value)} />
        </div>
        <div>
          <input type="number" placeholder='Id' value={id} onChange={(e) => setId(e.target.value)} />
        </div>
        <div>
          <input type="text" placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <textarea placeholder='Body' value={body} onChange={(e) => setBody(e.target.value)}></textarea>
        </div>
        <button>{editId ? 'Update' : 'Submit'}</button>
      </form>

      <table border='1'>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
            <th>Action</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {data.map((x) => (
            <tr key={x.id}>
              <td>{x.userId}</td>
              <td>{x.id}</td>
              <td>{x.title}</td>
              <td>{x.body}</td>
              <td>
                <button onClick={() => handleDelete(x.id)}>Delete</button>
              </td>
              <td>
                <button onClick={() => handleUpdate(x)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ApiUpdate