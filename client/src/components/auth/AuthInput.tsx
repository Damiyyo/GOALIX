"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface AuthInputProps {
  label: string;
  type?: string;
  placeholder: string;

  name?: string;
  value?: string;

  onChange?: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
}

const AuthInput = ({
  label,
  type = "text",
  placeholder,
  name,
  value,
  onChange,
}: AuthInputProps) => {
  const [showPassword, setShowPassword] =
    useState(false);

  const isPassword =
    type === "password";

  return (
    <div className="space-y-2">
      <label
        className="
          text-sm
          font-semibold
          text-zinc-700
        "
      >
        {label}
      </label>

      <div className="relative">
        <input
          type={
            isPassword
              ? showPassword
                ? "text"
                : "password"
              : type
          }
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          className="
            h-14
            w-full
            rounded-2xl

            border
            border-zinc-300

            bg-black

            px-5
            pr-14

            outline-none

            transition-all
            duration-300

            focus:border-zinc-700
            focus:ring-4
            focus:ring-zinc-200
          "
        />

        {isPassword && (
          <button
            type="button"
            onClick={() =>
              setShowPassword(
                !showPassword
              )
            }
            className="
              absolute
              right-4
              top-1/2

              -translate-y-1/2

              text-zinc-500

              transition-colors

              hover:text-white
            "
          >
            {showPassword ? (
              <EyeOff size={20} />
            ) : (
              <Eye size={20} />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default AuthInput;