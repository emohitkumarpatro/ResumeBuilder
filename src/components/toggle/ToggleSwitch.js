import React, { useState } from 'react';

const CustomSwitch = ({ label, checked, onChange,...otherProps }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    if (onChange) {
      onChange(!isChecked);
    }
  };

  return (
    <label className="flex items-center cursor-pointer" {...otherProps}>
      <div className="relative">
        <input
          type="checkbox"
          className="hidden"
          checked={isChecked}
          onChange={handleToggle}
        />
        <div className={`w-10 h-6 transition-colors duration-200 ease-in-out rounded-full ${
          isChecked ? 'bg-green-500' : 'bg-gray-300'
        }`} />
        <div className={`dot absolute left-1 top-1 transition-transform duration-200 ease-in-out w-4 h-4 rounded-full ${
          isChecked ? 'transform translate-x-full bg-white' : 'bg-gray-400'
        }`} />
      </div>
      <span className="ml-3">{label}</span>
    </label>
  );
};

export default CustomSwitch;
