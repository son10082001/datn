import type { FC } from "react";
import { useFormContext } from "react-hook-form";

interface IProps {
  children: any;
}

export const ConnectForm: FC<IProps> = ({ children }) => {
  const methods = useFormContext();
  return children({ ...methods });
};
