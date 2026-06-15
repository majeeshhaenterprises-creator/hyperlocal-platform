import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({
  children,
  className = "",
  ...props
}: Props) {
  return (
    <button
      {...props}
      className={`bg-orange-500 hover:bg-orange-600 transition px-5 py-2 rounded-lg font-semibold text-white disabled:opacity-50 ${className}`}
    >
      {children}
    </button>
  );
}