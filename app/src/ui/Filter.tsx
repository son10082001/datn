import useYupValidationResolver from "../hooks/useYupValidationResolver";
import * as yup from "yup";
import Button from "./Button";
import Form from "./Form";
import { Select, TextInput } from "./Input";
import { useRecoilState } from "recoil";
import { filterInfo } from "../recoil_state/filterState";
import { CloseIcon, SearchIcon } from "../icons";

function Filter({ children, filter }: any) {
  const resolver = useYupValidationResolver(yup.object());
  const [check, setCheck] = useRecoilState(filterInfo);

  const onSubmit = (values: any) => {
    console.log("submit filter", values);
  };

  const handleClick = () => {
    const elm = document.getElementById("my-drawer-4");
    elm?.click();
    setCheck(!check);
  };

  return (
    <div>
      <div className="drawer drawer-end">
        <input
          id="my-drawer-4"
          type="checkbox"
          className="drawer-toggle"
          checked={check}
          onChange={handleClick}
        />
        <div className="drawer-content">{children}</div>
        <div className="drawer-side flex">
          <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
          <ul className="menu w-[400px] bg-base-100 text-gray-900 font-medium">
            <div className="items-center border-b border-gray-200 px-6 py-4 flex justify-between bg-white sticky top-0">
              <span className="text-xl ">Filter</span>
              <CloseIcon onClick={handleClick} />
            </div>
            <Form onSubmit={onSubmit} resolver={resolver}>
              <div className={`p-6 h-screen`}>
                <div className="space-y-7">
                  {filter?.map((item: any, index: number) => (
                    <div key={index} className="flex flex-col">
                      <label className="label">
                        <h3 className="label-text text-base text-gray-900 mb-4">
                          {item.label}
                        </h3>
                      </label>
                      {item.type === "input" && (
                        <span className="flex relative w-full">
                          <div className="left-3 absolute top-2/4 translate-y-[-50%]">
                            <SearchIcon />
                          </div>
                          <TextInput
                            name={item.name}
                            className="input input-bordered w-full h-11 px-[2.215rem] focus:ring-indigo-600 focus:border-indigo-600"
                          />
                        </span>
                      )}
                      {item.type === "select" && (
                        <Select
                          name={item.name}
                          options={item.object}
                          className="select select-bordered w-full h-11 focus:ring-indigo-600 focus:border-indigo-600"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className="items-center border-t border-gray-200 bg-white py-4 px-6 flex justify-between sticky bottom-0">
                <div className="text-right w-full">
                  <Button
                    className="btn btn-sm bg-white border border-gray-300 hover:bg-gray-50 hover:border-gray-500 justify-center w-fit h-9 px-3 py-2 text-gray-600 mr-2"
                    onClick={handleClick}
                  >
                    Cancel
                  </Button>
                  <Button
                    className="btn btn-sm bg-indigo-600 hover:bg-indigo-500 justify-center w-fit h-9 px-3 py-2 text-white"
                    onClick={handleClick}
                  >
                    Filter
                  </Button>
                </div>
              </div>
            </Form>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Filter;
