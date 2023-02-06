import { useLoaderData } from "@remix-run/react";
import { useSetRecoilState } from "recoil";
import { userInfo } from "~/src/recoil_state/authState";

import type { LoaderFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { useEffect } from "react";
import { getSession } from "~/session.server";
import MainLayout from "~/src/layout/MainLayout/MainLayout";

export async function requireUserSession(request: Request) {
  const session = await getSession(request.headers.get("cookie"));
  if (!session.get("token")) {
    // can throw our helpers like `redirect` and `json` because they
    // return responses.

    throw redirect("/login", 302);
  }

  return { token: session.get("token"), username: session.get("username") };
}

export const loader: LoaderFunction = async ({ request, params }) => {
  const token = await requireUserSession(request);
  return json(token);
};

export default function Private() {
  const data = useLoaderData();
  const setUserInfo = useSetRecoilState(userInfo);
  useEffect(() => {
    setUserInfo(data);
  }, [data, setUserInfo]);

  return (
    // <Sidebar>
    //   <Outlet />
    // </Sidebar>
    <MainLayout />
  );
}
