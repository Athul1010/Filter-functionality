import React, { useState } from 'react';
import axios from 'axios'; // Import axios

const AddNewApi = () => {
    const [show, setShow] = useState(false);
    
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const [store, setStore] = useState([]); 

    const [nameError, setNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [emailError, setEmailError] = useState('');

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation logic
        if (name === '') {
            setNameError('Name is required');
            return;
        } else {
            setNameError('');
        }

        if (lastName === '') {
            setLastNameError('Last name is required');
            return;
        } else {
            setLastNameError('');
        }

        if (email === '' || !email.includes('@')) {
            setEmailError('Valid email is required');
            return;
        } else {
            setEmailError('');
        }

        const newData = { name, lastName, email };

        // Send the data to the API using axios
        try {
            const response = await axios.post('YOUR_API_ENDPOINT_URL', newData);

            if (response.status === 201 || response.status === 200) {
                const result = response.data;
                setStore((prev) => [...prev, result]); // Add the new data to the local state

                // Clear input fields after successful submission
                setName('');
                setLastName('');
                setEmail('');
                setShow(false);
                alert('Successfully submitted');
            } else {
                alert('Failed to submit data');
            }
        } catch (error) {
            console.error('Error submitting data:', error);
            alert('An error occurred while submitting the data.');
        }
    };

    return (
        <div>
            <div>
                {show && (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <input
                                type="text"
                                placeholder="First Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            {nameError && <p style={{ color: 'red' }}>{nameError}</p>}
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder="Last Name"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                            {lastNameError && <p style={{ color: 'red' }}>{lastNameError}</p>}
                        </div>
                        <div>
                            <input
                                type="email"
                                placeholder="Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                )}
                <button onClick={() => setShow(true)}>Add New</button>
            </div>
            <div>
                <table>
                    <tbody>
                        {store.map((data, index) => (
                            <tr key={index}>
                                <td>{data.name} {data.lastName} {data.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AddNewApi;

