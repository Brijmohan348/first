import axios from 'axios';
import React, { useState } from 'react';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState(''); // Additional field for name
    const [registerId, setRegisterId] = useState(null); // State to store registration ID
    const [errorMessage, setErrorMessage] = useState(''); // State to store error messages

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:7000/v1/Register', {
                name,
                email,
                password,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true, // Include credentials with the request
            });

            // Check if response is successful and set registration ID
            if (response.status === 200) {
                setRegisterId(response.data.user._id); // Store the register ID from the response
                console.log("Register ID:", response.data.user._id);
            }
        } catch (error) {
            console.error("Registration failed:", error);
            setErrorMessage(error.response?.data?.message || "An error occurred"); // Set error message
        }
    };

    return (
        <form onSubmit={handleRegister}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                required
            />
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
            <button type="submit">Register</button>
            {registerId && <p>Register ID: {registerId}</p>}
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>} {/* Display error message */}
        </form>
    );
};

export default Register;
