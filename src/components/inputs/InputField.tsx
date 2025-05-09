import React from "react";

interface ContactUsInputPropsTypes {
  labelClassName?: string;
  inputClassName?: string;
  label?: string;
  inputType?: React.HTMLInputTypeAttribute;
  placeholder?: string;
}

const InputField: React.FC<ContactUsInputPropsTypes> = ({
  labelClassName,
  inputClassName,
  label,
  inputType,
  placeholder,
}) => {
  return (
    <div>
      <label
        className={` ${labelClassName} block mb-1 font-medium text-gray-700 `}
      >
        {label}
      </label>
      <input
        type={inputType}
        placeholder={placeholder}
        className={` ${inputClassName} w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2A75BB] transition`}
      />
    </div>
  );
};

export default InputField;
