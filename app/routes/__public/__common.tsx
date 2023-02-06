import { Outlet } from "@remix-run/react";
import Navbar from "~/src/layout/MainLayout/Navbar";

export default function Private() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet />
    </>
  );
}
