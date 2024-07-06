import { createContext, useState } from "react";
import UseLocalStorageState from "../hooks/userLocalStorage";


export const UserContext = createContext();

const UserContextProvider = ({children}) => {
    const [user, setUser] = useState({}); 
    const [users, setUsers] = useState([]);

    const contextValue = {
        user,
        setUser,
    }

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;