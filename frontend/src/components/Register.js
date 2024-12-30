import React, { useState } from 'react';

async function registerUser(userData) {
    return fetch('http://localhost:3001/registerUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
      .then(data => data.json())
   }

export default function Register(){
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) =>{
        e.preventDefault();
        console.log('Form submitted');

        const result = await registerUser({username, password});

        if (result){
            setMessage("Registration successful!");
        } else{
            setMessage("Registration failed. Please try again.");
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label>Username</label>
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Enter your username here ..."
                            value={username}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                    <label>Password</label>
                        <input
                            className="form-control"
                            type="password"
                            placeholder="Enter your password here ..."
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    <button type ="submit" className="button btn btn-primary">Register</button>
                </div>
            </form> 
            {message && <p>{message}</p>} 
        </div>
    )
}