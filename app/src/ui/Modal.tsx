import type { FC } from "react";
import type { UseFormProps } from "react-hook-form";

interface IFormProps extends UseFormProps {
  children: any;
  nextCancelButton?: any;
  id: string;
  handleCancel?: () => void;
  customCancel?: any;
}

const Modal: FC<IFormProps> = ({
  children,
  nextCancelButton,
  id,
  handleCancel,
  customCancel,
}) => {
  return (
    <>
      <input type="checkbox" id={id} className="modal-toggle" />
      <div className="modal">
        <div className="rounded-lg bg-white">
          <div className="px-6 pt-8"> {children}</div>
          <div className="modal-action flex bg-[#f3f4f6]  rounded-br-lg rounded-bl-lg px-6 py-3">
            <label
              htmlFor={id}
              className="border bg-white border-gray-300 rounded-md text-sm px-3 py-2 font-semibold whitespace-nowrap mr-2"
              onClick={handleCancel}
            >
              {customCancel || "Cancel"}
            </label>
            <div className=""> {nextCancelButton}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
