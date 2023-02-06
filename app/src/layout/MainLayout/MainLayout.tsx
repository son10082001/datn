import { Outlet, useLocation } from "@remix-run/react";
import { useEffect, useState } from "react";
import Filter from "~/src/ui/Filter";
import Sidebar from "./Sidebar";

const filterNS = [
  {
    label: "Phòng ban",
    name: "department",
    type: "select",
    object: ["A", "B", "C"],
  },
  {
    label: "Vị trí",
    name: "vitri",
    type: "select",
    object: ["A", "B", "C"],
  },
  {
    label: "Tên nhân viên",
    name: "name",
    type: "input",
  },
];
const filterRQ = [
  {
    label: "RQPhòng ban",
    name: "department",
    type: "select",
    object: ["A", "B", "C"],
  },
  {
    label: "RQVị trí",
    name: "vitri",
    type: "select",
    object: ["A", "B", "C"],
  },
  {
    label: "RQTên nhân viên",
    name: "name",
    type: "input",
  },
];
function MainLayout() {
  const location = useLocation();
  const [filter, setFilter] = useState<any>([]);
  useEffect(() => {
    location.pathname === "/employee" && setFilter(filterNS);
    location.pathname === "/request" && setFilter(filterRQ);
  }, [location.pathname]);
  return (
    <Filter filter={filter}>
      <Sidebar>
          <Outlet />
      </Sidebar>
    </Filter>
  );
}

export default MainLayout;
