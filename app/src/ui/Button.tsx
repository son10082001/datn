import clsx from "clsx";
import type { ButtonHTMLAttributes, FC, ReactElement, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  iconStart?: ReactElement;
  iconEnd?: ReactElement;
  loading?: boolean;
  className?: string;
  children?: ReactNode;
  onClick?: any;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({
  label,
  className,
  loading = false,
  iconEnd,
  iconStart,
  children,
  onClick,
  disabled,
}) => {
  return (
    <>
      <button
        className={clsx(
          "btn btn-primary w-full gap-x-2 rounded-md",
          className,
          {
            "loading bg-base-300 text-primary": loading,
          }
        )}
        onClick={onClick}
        disabled={disabled}
      >
        {!loading && iconStart} {label} {children} {!loading && iconEnd}
      </button>
    </>
  );
};

export default Button;
