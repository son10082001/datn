import type { FC } from "react";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { useSortableTable } from "../hooks/useSortableTable";
import {
  AddIcon,
  DeleteIcon,
  EditIcon,
  FilterIcon,
  SearchIcon,
  SortDownIcon,
  SortIcon,
  SortUpIcon,
} from "../icons";
import { filterInfo } from "../recoil_state/filterState";
import Button from "./Button";

type ITableProps = {
  title?: string;
  columns: any[];
  dataSource: any[];
};

const Table: FC<ITableProps> = ({ title, columns, dataSource }) => {
  const [sortField, setSortField] = useState<string>("");
  const [order, setOrder] = useState<string>("asc");

  const handleSortingChange = (accessor: any) => {
    const sortOrder =
      accessor === sortField && order === "asc" ? "desc" : "asc";
    setSortField(accessor);
    setOrder(sortOrder);
    handleSorting(accessor, sortOrder);
  };
  const setCheck = useSetRecoilState(filterInfo);
  const handleFilter = () => {
    setCheck(true);
  };
  const [tableData, handleSorting] = useSortableTable(dataSource);
  return (
    <div className="card w-full bg-base-100">
      <div className="card-body">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="card-title mb-4">{title}</h2>

          <div className="flex flex-row items-center space-x-2">
            <span className="flex relative w-full">
              <div className="left-3 absolute top-2/4 translate-y-[-50%]">
                <SearchIcon />
              </div>
              <input
                type="text"
                placeholder="Search here"
                className="input input-bordered w-52 max-w-xs h-9 px-[2.125rem] focus:ring-indigo-600 focus:border-indigo-600"
              />
            </span>
            <Button
              className="btn-sm btn h-9 w-fit justify-start border border-gray-300 bg-white text-gray-600 hover:border-gray-500 hover:bg-gray-50"
              iconStart={<FilterIcon />}
              onClick={handleFilter}
            >
              Filter
            </Button>
            <Button
              className="btn-sm btn  h-9 w-fit justify-start bg-indigo-600 text-white hover:bg-indigo-500"
              iconStart={<AddIcon />}
              onClick={handleFilter}
            >
              Add
            </Button>
          </div>
        </div>

        <div className="card-actions">
          <div className="h-[50vh] w-full overflow-auto">
            <table className="table-compact w-full table-auto border-collapse text-left text-sm">
              <thead className="sticky top-0 border-b-2 border-t-gray-500 bg-gray-50 uppercase text-gray-500">
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  {columns?.map((col) => (
                    <th key={col.key}>
                      <div
                        className={col.sort ? `cursor-pointer` : ""}
                        onClick={
                          col.sort
                            ? () => handleSortingChange(col.key)
                            : undefined
                        }
                      >
                        {col.name}
                        {col.sort ? (
                          <span>
                            <div className="inline-flex">
                              {sortField === col.key && order === "asc" ? (
                                <SortUpIcon />
                              ) : sortField === col.key && order === "desc" ? (
                                <SortDownIcon />
                              ) : (
                                <SortIcon />
                              )}
                            </div>
                          </span>
                        ) : (
                          ""
                        )}
                      </div>
                    </th>
                  ))}
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((data: any) => (
                  <tr
                    className="border-b border-gray-200 hover:bg-gray-50"
                    key={data.id}
                  >
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>
                    {Object.keys(data).map((key) => (
                      <td key={key}>{data[key]}</td>
                    ))}
                    <th>
                      <div className="flex justify-end text-lg">
                        <span className="cursor-pointer p-2 hover:text-indigo-600">
                          <EditIcon />
                        </span>
                        <span className="cursor-pointer p-2 hover:text-red-500">
                          <DeleteIcon />
                        </span>
                      </div>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
