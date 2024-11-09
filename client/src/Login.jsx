
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { UserContext } from './UserContext';

const Login = () => {



    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginId, setLoginId] = useState(null); // State to store login ID
    const [errorMessage, setErrorMessage] = useState(''); // State to store error messages
    const { setUserId } = useContext(UserContext);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:7000/v1/Login', {
                email,
                password,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true // Include credentials with the request
            });

            // Check if response is successful and set login ID
            if (response.status === 200) {
                setLoginId(response.data.user._id); // Store the login ID from the response
                console.log("Login ID:", response.data.user._id);
                setUserId(response.data.user._id)
            }
        } catch (error) {
            console.error("Login failed:", error);
            setErrorMessage(error.response?.data?.message || "An error occurred"); // Set error message
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
            />
            <button type="submit">Login</button>
            {loginId && <p>Login ID: {loginId}</p>}
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>} {/* Display error message */}
            </form>
          );
      };
      
      
      

export default Login