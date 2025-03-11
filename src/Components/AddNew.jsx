import React, { useState } from 'react'

const Test = () => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [store, setStore] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;

    if (name == "") {
      setNameError("name is req")
      isValid = false;
    } else {
      setNameError("")
    }

    if (email == "" || !email.includes('@')) {
      setEmailError("Valid Email is required")
      isValid = false;
    } else {
      setEmailError("")
    }

    if (password == '') {
      setPasswordError('Valid Password is required')
      isValid = false;
    } else if (!/[A-Z]/.test(password)) { // regex pattern
      setPasswordError('Atleast one capital letter is required')
      isValid = false;
    } else if (!/\d/.test(password)) { // regex pattern
      setPasswordError('Atleast one number is required')
      isValid = false;
    } else if (!password.includes('@')) {
      setPasswordError('Password must contain @')
      isValid = false;
    } else {
      setPasswordError('')
    }

    // if (name && !nameError && email && !emailError && password && !passwordError) {
    //   alert("Successfully submitted")
    // }

    if (isValid) {
      const newData = {
        id: Date.now(),
        name, email, password
      }
  
      setStore(prev => [...prev, newData]);
      setName('');
      setEmail('');
      setPassword('');
    }

  }

  const handleDelete = (id) => {
    const remove = store.filter((x) => x.id !== id)
    setStore(remove)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          {nameError && <p style={{ color: 'red' }}>{nameError}</p>}
        </div>
        <div>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
        </div>
        <div>
          <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
          {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
        </div>
        <button>Submit</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {store.map((post, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{post.name}</td>
              <td>{post.email}</td>
              <td>{post.password}</td>
              <td>
                <button onClick={() => handleDelete(post.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}

export default Test






// import React, { useState } from 'react'

// const AddNew = () => {

//     const [show, setShow] = useState(false);

//     const [name, setName] = useState('');
//     const [lastName, setLastName] = useState('');
//     const [email, setEmail] = useState('');

//     const [store, setStore] = useState([]);

//     const [nameError, setNameError] = useState('');
//     const [lastNameError, setLastNameError] = useState('');
//     const [emailError, setEmailError] = useState('');

//     let handleSubmit = (e) => {
//         e.preventDefault();
//         let body = {
//             name, lastName, email
//         }

//         setStore(prev => [...prev, body]);
//         setName('');
//         setLastName('');
//         setEmail('');

//         setShow(false)

//         localStorage.setItem('name:',name) // To store in local storage
//         localStorage.setItem('lastName:',lastName)
//         localStorage.setItem('email:',email)

//         if (name=='') {
//             setNameError('Name is required')
//         } else {
//             setNameError('')
//         }

//         if (lastName=='') {
//             setLastNameError('Name is required')
//         } else {
//             setLastNameError('')
//         }

//         if (email=='' || !email.includes('@')) {
//             setEmailError('valid email is required')
//         } else {
//             setEmailError('')
//         }

//         if (name && !nameError && lastName && !lastNameError && email && !emailError) {
//             alert('Successfully submitted')
//         }


//     }

//     return (
//         <div>
//             <div>
//                 {show &&
//                     <form onSubmit={handleSubmit}>
//                         <div>
//                             <input type="text" placeholder='First Name' value={name} onChange={(e) => setName(e.target.value)} />
//                             {nameError && <p style={{color: 'red'}}>{nameError}</p>}
//                         </div>
//                         <div>
//                             <input type="text" placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
//                             {lastNameError && <p style={{color: 'red'}}>{lastNameError}</p>}
//                         </div>
//                         <div>
//                             <input type="email" placeholder='Email Address' value={email} onChange={(e) => setEmail(e.target.value)} />
//                             {emailError && <p style={{color: 'red'}}>{emailError}</p>}
//                         </div>
//                         <button type='submit'>Submit</button>
//                     </form>
//                 }
//                 <button onClick={() => setShow(true)}>Add New</button>
//             </div>
//             <div>
//                 <table>
//                     {store.map((data, index) => (
//                         <tr key={index}>
//                             <td>{data.name}{lastName} {data.email}</td>
//                         </tr>
//                     ))}
//                 </table>
//             </div>
//         </div>
//     )
// }

// export default AddNew




//--------------------------------------------------------------------------------------------------------------------



// import React, { useState } from 'react'

// const AddNew = () => {
//     const [show, setShow] = useState(false)

//     const [firstName, setFirstName] = useState('')
//     const [lastName, setLastName] = useState('')
//     const [email, setEmail] = useState('')

//     const [store, setStore] = useState([])


//     let handleSubmit = (e) => {
//         e.preventDefault();

//         const newData = {
//             id: Date.now(), // Add a unique ID
//             firstName,
//             lastName,
//             email
//         }

//         setStore(prev => [...prev, newData])

//         // Store each value separately in localStorage
//         localStorage.setItem('Name', firstName)
//         localStorage.setItem('lastName', lastName)
//         localStorage.setItem('email', email)


//         setFirstName('')
//         setLastName('')
//         setEmail('')
//         setShow(false)


//     }

//     const handleDelete = (id) =>{
//         const remove = store.filter((x)=>x.id !== id)
//         setStore(remove)
//     }


//     return (
//         <div>
//             {show &&
//                 <form onSubmit={handleSubmit}>
//                     <div>
//                         <input type="text" placeholder='First name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
//                     </div>
//                     <div>
//                         <input type="text" placeholder='Last name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
//                     </div>
//                     <div>
//                         <input type="email" placeholder='Email address' value={email} onChange={(e) => setEmail(e.target.value)} />
//                     </div>
//                     <button>Submit</button>
//                 </form>
//             }
//             <button onClick={() => setShow(true)}>Add New</button>

//             <div>
//                 <table border='1'>
//                     <thead>
//                         <tr>
//                             <th>ID</th>
//                             <th>First Name</th>
//                             <th>Last Name</th>
//                             <th>Email Address</th>
//                             <th>Delete</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {store.map((post, index) => (
//                             <tr key={post.id}>
//                                 <td>{index + 1}</td>
//                                 <td>{post.firstName}</td>
//                                 <td>{post.lastName}</td>
//                                 <td>{post.email}</td>
//                                 <td>
//                                     <button onClick={()=>handleDelete(post.id)}>Delete</button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     )
// }

// export default AddNew

//------------------------------------------------------------------------------------------------------

// import React, { useState } from 'react'

// const AddNew = () => {
//     const [show, setShow] = useState(true);

//     const [firstName, setFirstName] = useState('');
//     const [lastName, setLastName] = useState('');
//     const [email, setEmail] = useState('');

//     const [store, setStore] = useState([])

//     const handleSubmit = (e) =>{
//         e.preventDefault();

//         const newData = {
//             id: Date.now(), // Add a unique ID
            
//             firstName,lastName,email
//         }

//         setStore(prev=>[...prev,newData]);
        

//         setFirstName('');
//         setLastName('');
//         setEmail('');
//         localStorage.setItem('name',firstName);
        

//     }

//     let handleDelete = (id) =>{
//         let remove = store.filter((x)=>x.id !== id)
//         setStore(remove)
//         localStorage.clear()
//     }

//     return (
//         <div>
//             {show ?
//                 <div>
//                     <h1>Click Add New button to show the Form</h1>
//                 </div>
//                 :
//                 <form onSubmit={handleSubmit}>
//                     <div>
//                         <input type="text" placeholder='First Name' value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
//                     </div>
//                     <div>
//                         <input type="text" placeholder='Last Name' value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
//                     </div>
//                     <div>
//                         <input type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
//                     </div>
//                     <button type='submit'>Submit</button>
//                 </form>
//             }
//             <button onClick={() => setShow(!show)}>Add New</button>

//             <div style={{display:'flex', justifyContent:'center', margin:'2rem'}}>
//                 <table border='1'>
//                     <thead>
//                         <tr>
//                             <th>Id</th>
//                             <th>First Name</th>
//                             <th>Last Name</th>
//                             <th>Email</th>
//                             <th>Delete</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {store.map((data,index)=>(
//                             <tr key={index}>
//                                 <td>{index+1}</td>
//                                 <td>{data.firstName}</td>
//                                 <td>{data.lastName}</td>
//                                 <td>{data.email}</td>
//                                 <td>
//                                     <button onClick={()=>handleDelete(data.id)}>Delete</button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     )
// }

// export default AddNew