import React, { useState } from "react";
import CustomInput from "./customInput"; 

export default function FormFields() {
  const [inputs, setInputs] = useState([]);

  const handleAdd = () => {
    setInputs((prevInputs) => [...prevInputs, { type: "", id: Date.now() }]);
  };

  const handleTypeChange = (index, type) => {
    const updatedInputs = [...inputs];
    updatedInputs[index].type = type;
    setInputs(updatedInputs);
  };

  const handleRemove = (index) => {
    const updatedInputs = inputs.filter((_, i) => i !== index);
    setInputs(updatedInputs);
  };

  const renderInputs = () => {
    return inputs.map((input, index) => (
      <div key={input.id} style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        {input.type === "" ? (
          <>
            <button onClick={() => handleTypeChange(index, "text")}>Text</button>
            <button onClick={() => handleTypeChange(index, "number")}>Number</button>
            <button onClick={() => handleTypeChange(index, "email")}>Email</button>
          </>
        ) : (
          <>
            <CustomInput type={input.type} />
            <button onClick={() => handleRemove(index)}>Remove</button>
          </>
        )}
      </div>
    ));
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", margin: "5px 0 0 5px", gap: "10px", }}>
      <div>
        <button onClick={handleAdd}>Add</button>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {renderInputs()}
      </div>
    </div>
  );
}
