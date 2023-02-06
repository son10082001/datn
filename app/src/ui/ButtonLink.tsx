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
  id: string;
  disabled?: boolean;
}

const ButtonLink: FC<ButtonProps> = ({
  label,
  className,
  loading = false,
  iconEnd,
  iconStart,
  children,
  onClick,
  id,
  disabled,
}) => {
  return (
    <label
      htmlFor={disabled ? "" : id}
      className={clsx(className, "btn btn-primary gap-x-2 rounded-md", {
        "loading bg-base-300 text-primary": loading,
        "no-animation cursor-not-allowed border border-solid border-[#999999] bg-[#cccccc] text-[#666666] hover:bg-[#cccccc] hover:border-[#999999]":
          disabled,
      })}
      onClick={() => {
        disabled ? null : onClick();
      }}
    >
      {!loading && iconStart} {label} {children} {!loading && iconEnd}
    </label>
  );
};

export default ButtonLink;
