"use client";

import { forwardRef, useState } from "react";

interface FloatingLabelInputProps
  extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  isTextArea?: boolean;
}

const FloatingLabelInput = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  FloatingLabelInputProps
>(({ label, isTextArea = false, className = "", ...props }, ref) => {
  const [isFocused, setIsFocused] = useState(!!props.value);
  const [hasValue, setHasValue] = useState(!!props.value);

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setIsFocused(true);
    if (props.onFocus) props.onFocus(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setIsFocused(false);
    if (props.onBlur) props.onBlur(e);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setHasValue(e.target.value.length > 0);
    if (props.onChange) props.onChange(e);
  };

  const labelClass = `absolute left-4 transition-all duration-200 pointer-events-none ${
    isFocused || hasValue
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
          ref={ref as React.RefObject<HTMLTextAreaElement>}
          {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
          className={`${inputClass} resize-none`}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        <label className={labelClass}>{label}</label>
      </div>
    );
  }

  return (
    <div className="relative">
      <input
        ref={ref as React.RefObject<HTMLInputElement>}
        {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
        className={inputClass}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
      />
      <label className={labelClass}>{label}</label>
    </div>
  );
});

FloatingLabelInput.displayName = "FloatingLabelInput";

export default FloatingLabelInput;
