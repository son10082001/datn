import clsx from "clsx";
import type { FC, InputHTMLAttributes } from "react";
import { useState } from "react";
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { FieldValues, FormState, UseFormRegister } from "react-hook-form";
import { Hide, Show } from "../icons";
import { ConnectForm } from "./ConnectForm";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

interface IConnectFunctionProps {
  register: UseFormRegister<FieldValues>;
  formState: FormState<FieldValues>;
}

const TextInput: FC<TextInputProps> = ({ name, ...rest }) => {
  return (
    <ConnectForm>
      {({ register, formState: { errors } }: IConnectFunctionProps) => {
        return (
          <>
            <input
              className={clsx(
                "input-bordered input w-full rounded-md focus:border-hidden",
                {
                  "input-error": errors[`${name}`],
                }
              )}
              {...register(name ?? "")}
              {...rest}
            />
            {
              <p className="text-sm italic text-error">
                {errors[name ?? ""]?.message
                  ? String(errors[name ?? ""]?.message)
                  : null}
              </p>
            }
          </>
        );
      }}
    </ConnectForm>
  );
};

interface SelectProps extends InputHTMLAttributes<HTMLSelectElement> {
  options?: any;
}

const Select: FC<SelectProps> = ({ name, options, ...rest }) => {
  return (
    <ConnectForm>
      {({ register, formState: { errors } }: IConnectFunctionProps) => (
        <>
          <select
            className={clsx("select-primary select w-full", {
              "input-error": errors,
            })}
            {...register(name ?? "")}
            {...rest}
          >
            {options?.map((value: any, index: number) => (
              <option key={clsx(name, index)} value={value ?? ""}>
                {value}
              </option>
            ))}
          </select>

          {
            <p className="text-sm italic text-error">
              {errors[name ?? ""]?.message
                ? String(errors[name ?? ""]?.message)
                : null}
            </p>
          }
        </>
      )}
    </ConnectForm>
  );
};

const PassWordInput: FC<TextInputProps> = ({ name, ...rest }) => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <ConnectForm>
      {({ register, formState: { errors } }: IConnectFunctionProps) => {
        return (
          <>
            <div className="form-control">
              <div className="flex justify-end">
                <input
                  autoComplete="off"
                  type={clsx({ password: !show })}
                  className={clsx(
                    "input-bordered input w-full rounded-md focus:border-hidden",
                    {
                      "input-error": errors[`${name}`],
                    }
                  )}
                  {...register(name ?? "")}
                  {...rest}
                />
                <button
                  className="btn-ghost btn absolute flex"
                  type="button"
                  onClick={() => setShow(!show)}
                >
                  {show ? <Show className="h-4" /> : <Hide className="h-4" />}
                </button>
              </div>
            </div>
            {
              <p className="text-sm italic text-error">
                {errors[name ?? ""]?.message
                  ? String(errors[name ?? ""]?.message)
                  : null}
              </p>
            }
          </>
        );
      }}
    </ConnectForm>
  );
};

export { TextInput, Select, PassWordInput };
