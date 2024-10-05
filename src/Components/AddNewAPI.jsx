
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddNewApi = () => {
    const [data, setData] = useState([]); // State for existing and new data

    const [userId, setUserId] = useState('');
    const [id, setId] = useState('');
    const [title, setTitle] = useState('');

    const [body, setBody] = useState('');

    // Fetch existing data from the API
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
                setData(response.data); // Store fetched data in state
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);


    // Handle form submission to add new data
    const handleSubmit = async (e) => {
        e.preventDefault();

        const newPost = {
            userId,
            id,
            title,
            body
        };

        try {
            // Send the new post data to the API
            const response = await axios.post('https://jsonplaceholder.typicode.com/posts', newPost);

            // Add the new post to the local state
            setData((prevData) => [...prevData, response.data]);

            // Clear the input fields
            setUserId('');
            setId('');
            setTitle('');
            setBody('');

            alert('Post added successfully!');
        } catch (error) {
            console.error('Error adding data:', error);
        }
    };

    // Handle delete action
    const handleDelete = async (postId) => {
        try {
            // Send delete request to the API
            await axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);

            // Remove the deleted post from the local state
            setData((prevData) => prevData.filter((post) => post.id !== postId));

            alert('Post deleted successfully!');
        } catch (error) {
            console.error('Error deleting post:', error);
        }
    };

    return (
        <div>
            <h2>Post Data</h2>

            {/* Form to add new data */}
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="number"
                        placeholder="User ID"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type="number"
                        placeholder="ID"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <textarea
                        placeholder="Body"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    />
                </div>
                <button type="submit">Add Post</button>
            </form>

            {/* Display data in a table */}
            <table border="1" style={{ marginTop: '20px', width: '100%' }}>
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Body</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((post) => (
                        <tr key={post.id}>
                            <td>{post.userId}</td>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td>{post.body}</td>
                            <td>
                                <button onClick={() => handleDelete(post.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AddNewApi;






