import React, { useState } from 'react'

const AddNew = () => {

    const [show, setShow] = useState(false);

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const [store, setStore] = useState([]);

    const [nameError, setNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [emailError, setEmailError] = useState('');

    let handleSubmit = (e) => {
        e.preventDefault();
        let body = {
            name, lastName, email
        }

        setStore(prev => [...prev, body]);
        setName('');
        setLastName('');
        setEmail('');

        setShow(false)

        localStorage.setItem('name:',name) // To store in local storage
        localStorage.setItem('lastName:',lastName)
        localStorage.setItem('email:',email)

        if (name=='') {
            setNameError('Name is required')
        } else {
            setNameError('')
        }

        if (lastName=='') {
            setLastNameError('Name is required')
        } else {
            setLastNameError('')
        }

        if (email=='' || !email.includes('@')) {
            setEmailError('valid email is required')
        } else {
            setEmailError('')
        }

        if (name && !nameError && lastName && !lastNameError && email && !emailError) {
            alert('Successfully submitted')
        }
        

    }

    return (
        <div>
            <div>
                {show &&
                    <form onSubmit={handleSubmit}>
                        <div>
                            <input type="text" placeholder='First Name' value={name} onChange={(e) => setName(e.target.value)} />
                            {nameError && <p style={{color: 'red'}}>{nameError}</p>}
                        </div>
                        <div>
                            <input type="text" placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                            {lastNameError && <p style={{color: 'red'}}>{lastNameError}</p>}
                        </div>
                        <div>
                            <input type="email" placeholder='Email Address' value={email} onChange={(e) => setEmail(e.target.value)} />
                            {emailError && <p style={{color: 'red'}}>{emailError}</p>}
                        </div>
                        <button type='submit'>Submit</button>
                    </form>
                }
                <button onClick={() => setShow(true)}>Add New</button>
            </div>
            <div>
                <table>
                    {store.map((data, index) => (
                        <tr key={index}>
                            <td>{data.name}{lastName} {data.email}</td>
                        </tr>
                    ))}
                </table>
            </div>
        </div>
    )
}

export default AddNew
