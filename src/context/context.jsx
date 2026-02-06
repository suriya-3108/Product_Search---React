import { useContext, createContext, useState } from "react";

const Createproduct = createContext();

//provider
export const FunProducts = ({ children }) => {
    const [Cart, setCart] = useState([]);
    const [Text,setText] = useState('');
    return(
    <Createproduct.Provider value={{ Cart, setCart,Text, setText}}>
        {children}
    </Createproduct.Provider>
)}

//consumer

export const useProduct = () => useContext(Createproduct);

