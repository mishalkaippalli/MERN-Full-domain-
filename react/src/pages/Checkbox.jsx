import { useContext } from "react";
import { CheckboxContext } from "./CheckboxContext";

function Checkbox(){
    const {checked, toggleCheckbox} = useContext(CheckboxContext)

    return(
        <label>
            <input
              type="checkbox"
              checked = {checked}
              onChange={toggleCheckbox}
            />
            Accept terms
        </label>
    )
}
export default Checkbox