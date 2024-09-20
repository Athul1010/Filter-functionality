import React, { useState } from 'react';

const Validation = () => {

    // State to store form values
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // State to store error messages
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page refresh

        // Simple name validation
        if (name === '') {
            setNameError('Name is required');
        } else {
            setNameError('');
        }

        // Simple email validation (checking for '@' symbol)
        if (email === '' || !email.includes('@')) {
            setEmailError('Valid email is required');
        } else {
            setEmailError('');
        }

        // Password validation
        if (password === '') {
            setPasswordError('Password is required');
        } else if (!/[A-Z]/.test(password)) {
            setPasswordError('Password must contain at least one capital letter');
        } else if (!/\d/.test(password)) {
            setPasswordError('Password must contain at least one number');
        } else if (!password.includes('@')) {
            setPasswordError('Password must contain "@" symbol');
        } else {
            setPasswordError('');
        }

        // If all fields are valid
        //-----------------------------

        // if (name && email.includes('@') && password && !passwordError) {
        //     alert('Form submitted successfully!');
        // }

        // (OR )

        if (name && !nameError && email && !emailError && password && !passwordError) {
            alert('Form submitted successfully!');
        }
        
    };

    return (
        <div>
            <h2>Simple Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    {nameError && <p style={{ color: 'red' }}>{nameError}</p>}
                </div>

                <div>
                    <label>Email:</label>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
                </div>

                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Validation