import type { ActionFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { destroySession, getSession } from "~/session.server";

export const action: ActionFunction = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));
  // eslint-disable-next-line react-hooks/rules-of-hooks

  return redirect("/login?reLogin=true", {
    headers: {
      "Set-Cookie": await destroySession(session),
    },
  });
};
