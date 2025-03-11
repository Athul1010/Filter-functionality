import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Task = () => {
    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [data, setData] = useState([]);
    const [isEditing, setIsEditing] = useState(false); // State to track editing mode
    const [editId, setEditId] = useState(null); // State to store the id of the post being edited

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => setData(res.data))
            .catch(error => console.log('fetch error', error));
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newData = { id, title, body };

        try {
            if (isEditing) {
                // If editing, send a PUT request
                const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${editId}`, newData);
                setData(data.map(item => (item.id === editId ? response.data : item))); // Update the local state
                setIsEditing(false); // Reset editing mode
                setEditId(null); // Reset edit ID
                alert('Updated Successfully...');
            } else {
                // If not editing, send a POST request
                const response = await axios.post('https://jsonplaceholder.typicode.com/posts', newData);
                setData(prev => [...prev, response.data]);
                alert('Added Successfully...');
            }
            setId('');
            setTitle('');
            setBody('');
        } catch (error) {
            console.error('Error', error);
            alert('Error occurred');
        }
    };

    const handleDelete = (id) => {
        let remove = data.filter((x) => x.id !== id);
        setData(remove);
        alert('Successfully deleted');
    };

    const handleEdit = (element) => {
        setIsEditing(true); // Set editing mode
        setEditId(element.id); // Store the ID of the post being edited
        setId(element.id); // Populate the form fields
        setTitle(element.title);
        setBody(element.body);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="number" placeholder='ID' value={id} onChange={(e) => setId(e.target.value)} />
                </div>
                <div>
                    <input type="text" placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    <textarea placeholder='Description' value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                </div>
                <button type='submit'>{isEditing ? 'Update' : 'Submit'}</button>
            </form>

            <div>
                <table border='1'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((element, index) => (
                            <tr key={element.id}>
                                <td>{index + 1}</td>
                                <td>{element.title}</td>
                                <td>{element.body}</td>
                                <td>
                                    <button onClick={() => handleEdit(element)}>Edit</button>
                                    <button onClick={() => handleDelete(element.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Task;
