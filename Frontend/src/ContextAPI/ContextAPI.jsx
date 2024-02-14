import React, { Children } from 'react'
import { createContext } from 'react'

export const dataContext = createContext();
const DataProvider = ({Children}) => {
    const [data, setData] = useState("This is the Central Data Center");
    return (
    <dataContext.Provider value={{data, setData}}>
        {Children}
    </dataContext.Provider>);
}