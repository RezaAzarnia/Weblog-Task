import React from "react";
import EmailIcon from "../_Icons/EmailIcon";
import LockIcon from "../_Icons/LockIcon";
type Props = {
  type: "text" | "password";
  label: string;
  name: string;
  errors: { [key: string]: string };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder: string;
};
export default function Input({
  value,
  onChange,
  errors,
  name,
  type,
  label,
  placeholder,
}: Props) {
  return (
    <div className="block space-y-1">
      <label className="text-sm font-semibold text-stone-800">{label}</label>
      <div className="relative flex flex-row items-center">
        <div className="absolute flex items-center justify-center h-full px-4 text-sm text-center text-white rounded-sm bg-lightOrange">
          {type === "text" ? <EmailIcon /> : <LockIcon />}
        </div>

        <input
          className="w-full py-3.5  text-sm border rounded-sm shadow-md outline-none pr-14 border-lightGray border-1 placeholder:text-sm placeholder:py-3 placeholder:text-stone-500"
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      </div>
      <div className="min-h-5"> 
        {errors[name] && (
          <span className="block text-sm font-medium text-red-600">
            {errors[name]}
          </span>
        )}
      </div>
    </div>
  );
}
