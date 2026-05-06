import { createContext, useState } from "react";

export const CheckboxContext = createContext();

export const CheckboxProvider = ({children}) => {

    const [checked, setChecked] = useState(false);

    const toggleCheckbox = () => {
        setChecked(prev => !prev)
    }
    return(
        <CheckboxContext.Provider value = {{checked, toggleCheckbox}}>
            {children}
        </CheckboxContext.Provider>
    )
}