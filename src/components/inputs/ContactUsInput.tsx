import React from "react";

interface ContactUsInputPropsTypes {
  label?: string;
  inputType?: React.HTMLInputTypeAttribute;
  placeholder?: string;
}

const ContactUsInput: React.FC<ContactUsInputPropsTypes> = ({
  label,
  inputType,
  placeholder,
}) => {
  return (
    <div>
      <label className="block mb-1 font-medium text-gray-700">
         {label}
      </label>
      <input
        type={inputType}
        placeholder={placeholder}
        className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2A75BB] transition"
      />
    </div>
  );
};

export default ContactUsInput;
