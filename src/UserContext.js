import {useState, createContext, useMemo} from 'react';

const UserContext = createContext();

const UserProvider = (props) => {
    const [raceid, setRaceid] = useState(1067);
    const value = useMemo(() => ({raceid, setRaceid}), [raceid])
    return (
        <UserContext.Provider value={value}>
            {props.children}
        </UserContext.Provider>
    );
}

export {UserContext, UserProvider};

