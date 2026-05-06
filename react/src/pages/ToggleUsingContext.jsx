
import React, { useState, createContext, useContext } from 'react';

const CheckboxContext = createContext();

function ToggleUsingUseContext() {
  const [isChecked, setChecked] = useState(true);

  return (
    <>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => setChecked(prev => !prev)}
      />

      <CheckboxContext.Provider value={setChecked}>
        <Child />
      </CheckboxContext.Provider>
    </>
  );
}

function Child() {
  const toggleCheckbox = useContext(CheckboxContext);

  return (
    <button onClick={() => toggleCheckbox(prev => !prev)}>
      Change value
    </button>
  );
}

export default ToggleUsingUseContext;