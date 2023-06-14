import React, { useState } from "react";
import Input from "./components/Input";

function CustomInput() {
  const [name, setName] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Input
        label="Name"
        type="text"
        value={name}
        onChange={handleNameChange}
      />
    </div>
  );
}

export default CustomInput;
