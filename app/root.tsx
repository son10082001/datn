import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import toastCss from "react-toastify/dist/ReactToastify.css";
import { RecoilRoot, useRecoilSnapshot } from "recoil";
import styles from "./styles/global.css";

export function links() {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "stylesheet", href: toastCss },
    {
      rel: "icon",
      href: "/favicon.png",
      type: "image/png",
    },
  ];
}

export function ErrorBoundary({ error }: any) {
  return (
    <div>
      <h1>Error</h1>
      <p>{error.message}</p>
      <p>The stack trace is:</p>
      <pre>{error.stack}</pre>
    </div>
  );
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});
function DebugObserver(): React.ReactElement | null {
  const snapshot = useRecoilSnapshot();
  useEffect(() => {
    console.debug("The following atoms were modified:");
    for (const node of snapshot.getNodes_UNSTABLE({ isModified: true })) {
      console.debug(node.key, snapshot.getLoadable(node));
    }
  }, [snapshot]);

  return null;
}
export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <RecoilRoot>
          <Outlet />
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <ScrollRestoration />
          <Scripts />
          {process.env.NODE_ENV === "development" ? <DebugObserver /> : null}
          {process.env.NODE_ENV === "development" ? <LiveReload /> : null}
        </RecoilRoot>
      </body>
    </html>
  );
}
