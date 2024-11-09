import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { UserContext } from './UserContext';

const Getalluser = () => {
    const [users, setUsers] = useState([]); // Ensure users is initialized as an array
    const {  setReUserId } = useContext(UserContext);
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:7000/v1/getalluser', {
                    withCredentials: true,
                });
               console.log(response.data.user)
               setUsers(response.data.user)
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };
        fetchUsers();
    }, []);

    const handleUserClick = async (id) => {
        
        try {
            const userid = id
            setReUserId(userid)
            console.log(userid)
            const response = await axios.post(`http://localhost:7000/user/${userid}`,  {
                withCredentials: true,
            });
            console.log("User ID stored:", response.data); // Use response.data to access the actual response content
        } catch (error) {
            console.error("Error sending user ID:", error);
        }
    };

    return (
        <div>
            <h2>User List</h2>
            <ul>
                {users.map((user) => (
                    <li key={user._id}>
                        <button onClick={() => handleUserClick(user._id)}>
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                         
                             </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Getalluser;
