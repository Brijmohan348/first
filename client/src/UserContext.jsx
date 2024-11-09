import React, { createContext, useState } from 'react';

// Create the context
export const UserContext = createContext();

// Create the provider component
export const UserProvider = ({ children }) => {
    const [userId, setUserId] = useState(null);
    const [reUserId, setReUserId] = useState(null);

    return (
        <UserContext.Provider value={{ userId, setUserId, reUserId, setReUserId }}>
            {children}
        </UserContext.Provider>
    );
};
export default UserProvider