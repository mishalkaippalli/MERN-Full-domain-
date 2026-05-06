import { useContext } from "react";
import { CheckboxContext } from "./CheckboxContext";

function ToggleButton(){
    const {toggleCheckbox} = useContext(CheckboxContext)
    console.log("Child rendered")

    return(
        <button onClick={toggleCheckbox}>
          Toggle Checkbox
        </button>
    )
}
export default ToggleButton