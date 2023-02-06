import { Link, useLocation } from "@remix-run/react";
import clsx from "clsx";
import { useState } from "react";
import {
  Heart,
  LocationIcon,
  PersonnelIcon,
  StatisticIcon,
  VarLogo,
} from "~/src/icons";
import Header from "../Navbar/Header";

const menuItem = [
  {
    path: "/employee",
    name: "Nhân sự",
    icon: <PersonnelIcon />,
  },
  {
    path: "/check-in",
    name: "Check-in",
    icon: <LocationIcon />,
  },
  {
    name: "Chấm công",
    icon: <Heart />,
    subMenu: [
      {
        path: "/report",
        name: "Báo cáo",
      },
      {
        path: "/attendance",
        name: "Chấm công",
      },
    ],
  },
  {
    path: "/ui-test",
    name: "Tuyển dụng",
    icon: <Heart />,
  },
  {
    path: "/request",
    name: "Request (Xin WFH, Xin nghỉ)",
    icon: <Heart />,
  },
  {
    path: "/statistic",
    name: "Thống kê",
    icon: <StatisticIcon />,
  },
];

function Sidebar({ children }: any) {
  const [collapse, setCollapse] = useState<boolean>(false);
  const location = useLocation();
  return (
    <>
      <div className="flex w-full">
        <div
          className={clsx(
            "h-[100vh]",
            collapse && `w-[80px]`,
            !collapse && `w-[290px]`
          )}
        ></div>
        <div className="drawer-side fixed z-[9999999999] h-[100vh] border-r-2 border-[#e5e7eb] bg-gray-100">
          <Link to="/">
            {collapse ? (
              <div className="mt-4 flex justify-center">
                <VarLogo />
              </div>
            ) : (
              <div className="btn-ghost btn mt-4 flex justify-center">
                <VarLogo />

                <p>Var-Management</p>
              </div>
            )}
          </Link>
          <ul
            className={clsx(
              "menu mx-auto font-medium",
              !collapse ? `w-[290px]` : `flex w-[80px] justify-center`
            )}
          >
            {menuItem.map((item, index) =>
              item?.subMenu ? (
                collapse ? (
                  <li tabIndex={0} key={index}>
                    <span className={"flex justify-center"}>{item.icon}</span>
                    <ul className="border border-gray-200 bg-white">
                      {item.subMenu.map((subItem) => (
                        <li key={subItem.path} className={`py-2`}>
                          <Link
                            to={subItem.path}
                            className={`${
                              location.pathname === subItem.path
                                ? "rounded-md bg-gray-900/[0.075]"
                                : ""
                            }`}
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <div
                    tabIndex={0}
                    key={index}
                    className="collapse-arrow collapse"
                  >
                    <input type="checkbox" className="peer" />
                    <label className="collapse-title peer-checked:bg-gray-100">
                      <div className="inline-flex">
                        {item.icon}
                        <span className="pl-3">{item.name}</span>
                      </div>
                    </label>
                    <div className="collapse-content peer-checked:bg-gray-100 ">
                      {item.subMenu.map((subItem, index) => (
                        <li key={subItem.path} className={`py-2`}>
                          <Link
                            to={subItem.path}
                            className={`${
                              location.pathname === subItem.path
                                ? "rounded-md bg-gray-900/[0.075]"
                                : ""
                            }`}
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </div>
                  </div>
                )
              ) : (
                <li key={item.path} className="py-2">
                  <Link
                    to={item.path}
                    className={clsx(
                      `${
                        location.pathname === item.path
                          ? "rounded-md bg-gray-900/[0.075]"
                          : ""
                      }`,
                      { "flex justify-center": collapse }
                    )}
                  >
                    {item.icon}
                    {collapse ? "" : item.name}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
        <main className="grow">
          <Header
            menuCollapse={collapse}
            setMenuCollapse={() => setCollapse(!collapse)}
            collapse={collapse}
          ></Header>
          {children}
        </main>
      </div>
    </>
  );
}

export default Sidebar;
