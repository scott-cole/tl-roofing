"use client";

import { useState, type KeyboardEvent } from "react";

interface FloatingLabelInputProps {
  id: string;
  name: string;
  label: string;
  type?: string;
  value: string;
  className?: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  onFocus?: (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  onBlur?: (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  required?: boolean;
  isTextArea?: boolean;
}

export default function FloatingLabelInput({
  label,
  isTextArea = false,
  className = "",
  id,
  name,
  type = "text",
  value,
  required,
  onChange,
  onFocus,
  onBlur,
}: FloatingLabelInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  const isFloating = isFocused || hasValue || value.length > 0;

  const handleFocus = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setIsFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setIsFocused(false);
    onBlur?.(e);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setHasValue(e.target.value.length > 0);
    onChange(e);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter" && !isTextArea) {
      (e.target as HTMLInputElement).form?.requestSubmit();
    }
  };

  const labelClass = `absolute left-4 transition-all duration-200 pointer-events-none ${
    isFloating
      ? "-top-3 left-3 text-xs bg-[#292929] px-2 text-[#1E97D4]"
      : "top-4 text-gray-400 text-base"
  }`;

  const inputClass = `w-full px-4 py-4 bg-[#292929] border-2 border-[#404040] rounded-xl focus:ring-2 focus:ring-[#1E97D4] focus:border-transparent transition-all text-white placeholder-gray-500 ${
    isFocused ? "border-[#1E97D4] shadow-lg shadow-[#1E97D4]/20" : ""
  } ${className}`;

  if (isTextArea) {
    return (
      <div className="relative">
        <textarea
          id={id}
          name={name}
          value={value}
          required={required}
          className={`${inputClass} resize-none min-h-[120px]`}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        <label className={labelClass} htmlFor={id}>
          {label}
        </label>
      </div>
    );
  }

  return (
    <div className="relative">
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        required={required}
        className={inputClass}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <label className={labelClass} htmlFor={id}>
        {label}
      </label>
    </div>
  );
}
