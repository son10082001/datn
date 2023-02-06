var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
        fileName: "app/entry.server.tsx",
        lineNumber: 41,
        columnNumber: 7
      }, this),
      {
        onAllReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
        fileName: "app/entry.server.tsx",
        lineNumber: 82,
        columnNumber: 7
      }, this),
      {
        onShellReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(err) {
          reject(err);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react5 = require("@remix-run/react"), import_react_toastify = require("react-toastify");

// node_modules/react-toastify/dist/ReactToastify.css
var ReactToastify_default = "/build/_assets/ReactToastify-NKV7QCPG.css";

// app/root.tsx
var import_recoil4 = require("recoil");

// app/src/icons/Heart.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), Heart = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
  "svg",
  {
    ...props,
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-6 w-6",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        d: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      },
      void 0,
      !1,
      {
        fileName: "app/src/icons/Heart.tsx",
        lineNumber: 12,
        columnNumber: 5
      },
      this
    )
  },
  void 0,
  !1,
  {
    fileName: "app/src/icons/Heart.tsx",
    lineNumber: 4,
    columnNumber: 3
  },
  this
), Heart_default = Heart;

// app/src/icons/Hide.tsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), Hide = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
  "svg",
  {
    ...props,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 640 512",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      "path",
      {
        fill: "#fff",
        d: "M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"
      },
      void 0,
      !1,
      {
        fileName: "app/src/icons/Hide.tsx",
        lineNumber: 10,
        columnNumber: 5
      },
      this
    )
  },
  void 0,
  !1,
  {
    fileName: "app/src/icons/Hide.tsx",
    lineNumber: 4,
    columnNumber: 3
  },
  this
), Hide_default = Hide;

// app/src/icons/Show.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), Show = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
  "svg",
  {
    ...props,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 576 512",
    fill: "none",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      "path",
      {
        fill: "#fff",
        d: "M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
      },
      void 0,
      !1,
      {
        fileName: "app/src/icons/Show.tsx",
        lineNumber: 10,
        columnNumber: 5
      },
      this
    )
  },
  void 0,
  !1,
  {
    fileName: "app/src/icons/Show.tsx",
    lineNumber: 4,
    columnNumber: 3
  },
  this
), Show_default = Show;

// app/src/layout/MainLayout/Navbar/index.tsx
var import_react4 = require("@remix-run/react"), import_recoil3 = require("recoil");

// app/src/recoil_state/authState.ts
var import_recoil = require("recoil"), userInfo = (0, import_recoil.atom)({
  key: "useInfo",
  default: {}
}), checkLogin = (0, import_recoil.selector)({
  key: "checkLogin",
  get: ({ get }) => {
    let user = get(userInfo);
    return Object.keys(user).length !== 0 && user.constructor === Object;
  }
});

// app/src/ui/Button.tsx
var import_clsx = __toESM(require("clsx")), import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), Button = ({
  label,
  className,
  loading = !1,
  iconEnd,
  iconStart,
  children,
  onClick
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
  "button",
  {
    className: (0, import_clsx.default)("btn btn-primary w-full gap-x-2", className, {
      "loading bg-base-300 text-primary": loading
    }),
    onClick,
    children: [
      !loading && iconStart,
      " ",
      label,
      " ",
      children,
      " ",
      !loading && iconEnd
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/src/ui/Button.tsx",
    lineNumber: 25,
    columnNumber: 7
  },
  this
) }, void 0, !1, {
  fileName: "app/src/ui/Button.tsx",
  lineNumber: 24,
  columnNumber: 5
}, this), Button_default = Button;

// app/src/layout/MainLayout/AuthSection/index.tsx
var import_react2 = require("@remix-run/react"), import_react3 = require("react"), import_recoil2 = require("recoil"), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function AuthSection() {
  let data = (0, import_react2.useLoaderData)(), fetcher = (0, import_react2.useFetcher)(), setUser = (0, import_recoil2.useSetRecoilState)(userInfo), isLogin = (0, import_recoil2.useRecoilValue)(checkLogin);
  return (0, import_react3.useEffect)(() => {
    setUser(data || {});
  }, [data, setUser]), /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex-none", children: isLogin ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "dropdown dropdown-end", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("label", { tabIndex: 0, className: "btn btn-ghost btn-circle avatar", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "w-10 rounded-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("img", { src: "https://placeimg.com/80/80/people", alt: "avatar" }, void 0, !1, {
      fileName: "app/src/layout/MainLayout/AuthSection/index.tsx",
      lineNumber: 31,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/src/layout/MainLayout/AuthSection/index.tsx",
      lineNumber: 30,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/src/layout/MainLayout/AuthSection/index.tsx",
      lineNumber: 29,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      "ul",
      {
        tabIndex: 0,
        className: "mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react2.Link, { to: "/ui-test", children: "UI" }, void 0, !1, {
            fileName: "app/src/layout/MainLayout/AuthSection/index.tsx",
            lineNumber: 39,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/src/layout/MainLayout/AuthSection/index.tsx",
            lineNumber: 38,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react2.Link, { to: "/child", className: "justify-between", children: [
            "Profile",
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "badge", children: "New" }, void 0, !1, {
              fileName: "app/src/layout/MainLayout/AuthSection/index.tsx",
              lineNumber: 44,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/src/layout/MainLayout/AuthSection/index.tsx",
            lineNumber: 42,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/src/layout/MainLayout/AuthSection/index.tsx",
            lineNumber: 41,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(fetcher.Form, { method: "post", action: "/logout", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("button", { type: "submit", children: "Logout" }, void 0, !1, {
            fileName: "app/src/layout/MainLayout/AuthSection/index.tsx",
            lineNumber: 49,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/src/layout/MainLayout/AuthSection/index.tsx",
            lineNumber: 48,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/src/layout/MainLayout/AuthSection/index.tsx",
            lineNumber: 47,
            columnNumber: 13
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/src/layout/MainLayout/AuthSection/index.tsx",
        lineNumber: 34,
        columnNumber: 11
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/src/layout/MainLayout/AuthSection/index.tsx",
    lineNumber: 28,
    columnNumber: 9
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("ul", { className: "menu menu-horizontal px-1", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react2.Link, { to: "/ui-test", children: "UI" }, void 0, !1, {
      fileName: "app/src/layout/MainLayout/AuthSection/index.tsx",
      lineNumber: 21,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/src/layout/MainLayout/AuthSection/index.tsx",
      lineNumber: 20,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react2.Link, { to: "/login", children: "Login" }, void 0, !1, {
      fileName: "app/src/layout/MainLayout/AuthSection/index.tsx",
      lineNumber: 24,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/src/layout/MainLayout/AuthSection/index.tsx",
      lineNumber: 23,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/src/layout/MainLayout/AuthSection/index.tsx",
    lineNumber: 19,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/src/layout/MainLayout/AuthSection/index.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

// app/src/layout/MainLayout/Navbar/index.tsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function Navbar() {
  let user = (0, import_react4.useLoaderData)(), setUserInfo = (0, import_recoil3.useSetRecoilState)(userInfo);
  return user && setUserInfo(user), /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "navbar bg-primary", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react4.Link, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      Button_default,
      {
        className: "btn-ghost glass normal-case text-xl",
        iconStart: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Heart_default, {}, void 0, !1, {
          fileName: "app/src/layout/MainLayout/Navbar/index.tsx",
          lineNumber: 20,
          columnNumber: 24
        }, this),
        children: "Var-Management"
      },
      void 0,
      !1,
      {
        fileName: "app/src/layout/MainLayout/Navbar/index.tsx",
        lineNumber: 18,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/src/layout/MainLayout/Navbar/index.tsx",
      lineNumber: 17,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/src/layout/MainLayout/Navbar/index.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(AuthSection, {}, void 0, !1, {
      fileName: "app/src/layout/MainLayout/Navbar/index.tsx",
      lineNumber: 27,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/src/layout/MainLayout/Navbar/index.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/src/layout/MainLayout/Navbar/index.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

// app/styles/global.css
var global_default = "/build/_assets/global-B3SCI46P.css";

// app/root.tsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function links() {
  return [
    { rel: "stylesheet", href: global_default },
    { rel: "stylesheet", href: ReactToastify_default },
    {
      rel: "icon",
      href: "/favicon.png",
      type: "image/png"
    }
  ];
}
var meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
});
function DebugButton() {
  let onClick = (0, import_recoil4.useRecoilCallback)(
    ({ snapshot }) => async () => {
      console.debug("Atom values:");
      for (let node of snapshot.getNodes_UNSTABLE()) {
        let value = await snapshot.getPromise(node);
        console.debug((node.key, value));
      }
    },
    []
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
    Button_default,
    {
      className: "fixed bottom-8 left-10 w-36 py-2",
      onClick,
      iconStart: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Heart_default, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 52,
        columnNumber: 18
      }, this),
      children: "Log Recoil"
    },
    void 0,
    !1,
    {
      fileName: "app/root.tsx",
      lineNumber: 49,
      columnNumber: 5
    },
    this
  );
}
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react5.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react5.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 63,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 61,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("body", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_recoil4.RecoilRoot, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Navbar, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 67,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react5.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 68,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        import_react_toastify.ToastContainer,
        {
          position: "top-right",
          autoClose: 5e3,
          hideProgressBar: !1,
          newestOnTop: !1,
          closeOnClick: !0,
          rtl: !1,
          pauseOnFocusLoss: !0,
          draggable: !0,
          pauseOnHover: !0,
          theme: "light"
        },
        void 0,
        !1,
        {
          fileName: "app/root.tsx",
          lineNumber: 69,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react5.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 81,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react5.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 82,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(DebugButton, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 83,
        columnNumber: 53
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react5.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 84,
        columnNumber: 53
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 66,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 65,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 60,
    columnNumber: 5
  }, this);
}

// app/routes/__private.tsx
var private_exports = {};
__export(private_exports, {
  default: () => Private,
  loader: () => loader,
  requireUserSession: () => requireUserSession
});
var import_react6 = require("@remix-run/react"), import_recoil5 = require("recoil");
var import_node3 = require("@remix-run/node"), import_react7 = require("react");

// app/session.server.ts
var import_node2 = require("@remix-run/node"), { getSession, commitSession, destroySession } = (0, import_node2.createCookieSessionStorage)({
  cookie: {
    name: "__session",
    httpOnly: !0,
    maxAge: 60,
    path: "/",
    sameSite: "lax",
    secrets: ["s3cret1"],
    secure: !0
  }
});

// app/routes/__private.tsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
async function requireUserSession(request) {
  let session = await getSession(request.headers.get("cookie"));
  if (!session.get("token"))
    throw (0, import_node3.redirect)("/login", 302);
  return { token: session.get("token"), username: session.get("username") };
}
var loader = async ({ request, params }) => {
  let token = await requireUserSession(request);
  return (0, import_node3.json)(token);
};
function Private() {
  let data = (0, import_react6.useLoaderData)(), setUserInfo = (0, import_recoil5.useSetRecoilState)(userInfo);
  return (0, import_react7.useEffect)(() => {
    setUserInfo(data);
  }, [data, setUserInfo]), /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react6.Outlet, {}, void 0, !1, {
    fileName: "app/routes/__private.tsx",
    lineNumber: 34,
    columnNumber: 10
  }, this);
}

// app/routes/__private/ui-test.tsx
var ui_test_exports = {};
__export(ui_test_exports, {
  default: () => ui_test_default
});
var import_react_toastify2 = require("react-toastify"), yup = __toESM(require("yup"));

// app/src/hooks/useYupValidationResolver.ts
var import_react8 = require("react"), useYupValidationResolver = (validationSchema) => (0, import_react8.useCallback)(
  async (data) => {
    try {
      return {
        values: await validationSchema.validate(data, {
          abortEarly: !1
        }),
        errors: {}
      };
    } catch (errors) {
      return {
        values: {},
        errors: errors.inner.reduce(
          (allErrors, currentError) => ({
            ...allErrors,
            [currentError.path]: {
              type: currentError.type ?? "validation",
              message: currentError.message
            }
          }),
          {}
        )
      };
    }
  },
  [validationSchema]
), useYupValidationResolver_default = useYupValidationResolver;

// app/src/ui/Form.tsx
var import_react_hook_form = require("react-hook-form"), import_jsx_dev_runtime10 = require("react/jsx-dev-runtime"), Form = ({
  defaultValues,
  children,
  onSubmit,
  className,
  resolver
}) => {
  let methods = (0, import_react_hook_form.useForm)({ defaultValues, resolver }), { handleSubmit } = methods;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react_hook_form.FormProvider, { ...methods, children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("form", { onSubmit: handleSubmit(onSubmit), className, children }, void 0, !1, {
    fileName: "app/src/ui/Form.tsx",
    lineNumber: 24,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/src/ui/Form.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
}, Form_default = Form;

// app/src/ui/Input.tsx
var import_clsx2 = __toESM(require("clsx")), import_react9 = require("react");

// app/src/ui/ConnectForm.tsx
var import_react_hook_form2 = require("react-hook-form"), ConnectForm = ({ children }) => {
  let methods = (0, import_react_hook_form2.useFormContext)();
  return children({ ...methods });
};

// app/src/ui/Input.tsx
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime"), TextInput = ({ name, ...rest }) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(ConnectForm, { children: ({ register, formState: { errors } }) => {
  var _a, _b;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_jsx_dev_runtime11.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
      "input",
      {
        className: (0, import_clsx2.default)("input input-bordered input-primary w-full", {
          "input-error": errors[`${name}`]
        }),
        ...register(name ?? ""),
        ...rest
      },
      void 0,
      !1,
      {
        fileName: "app/src/ui/Input.tsx",
        lineNumber: 22,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { className: "text-error italic text-sm", children: (_a = errors[name ?? ""]) != null && _a.message ? String((_b = errors[name ?? ""]) == null ? void 0 : _b.message) : null }, void 0, !1, {
      fileName: "app/src/ui/Input.tsx",
      lineNumber: 30,
      columnNumber: 15
    }, this)
  ] }, void 0, !0, {
    fileName: "app/src/ui/Input.tsx",
    lineNumber: 21,
    columnNumber: 11
  }, this);
} }, void 0, !1, {
  fileName: "app/src/ui/Input.tsx",
  lineNumber: 18,
  columnNumber: 5
}, this), Select = ({ name, options, ...rest }) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(ConnectForm, { children: ({ register, formState: { errors } }) => {
  var _a, _b;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_jsx_dev_runtime11.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
      "select",
      {
        className: (0, import_clsx2.default)("select select-primary w-full", {
          "input-error": errors
        }),
        ...register(name ?? ""),
        ...rest,
        children: options == null ? void 0 : options.map((value, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("option", { value: value ?? "", children: value }, (0, import_clsx2.default)(name, index), !1, {
          fileName: "app/src/ui/Input.tsx",
          lineNumber: 60,
          columnNumber: 15
        }, this))
      },
      void 0,
      !1,
      {
        fileName: "app/src/ui/Input.tsx",
        lineNumber: 52,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { className: "text-error italic text-sm", children: (_a = errors[name ?? ""]) != null && _a.message ? String((_b = errors[name ?? ""]) == null ? void 0 : _b.message) : null }, void 0, !1, {
      fileName: "app/src/ui/Input.tsx",
      lineNumber: 67,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/src/ui/Input.tsx",
    lineNumber: 51,
    columnNumber: 9
  }, this);
} }, void 0, !1, {
  fileName: "app/src/ui/Input.tsx",
  lineNumber: 49,
  columnNumber: 5
}, this), PassWordInput = ({ name, ...rest }) => {
  let [show, setShow] = (0, import_react9.useState)(!1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(ConnectForm, { children: ({ register, formState: { errors } }) => {
    var _a, _b;
    return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_jsx_dev_runtime11.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "form-control", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "input-group", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          "input",
          {
            autoComplete: "off",
            type: (0, import_clsx2.default)({ password: !show }),
            className: (0, import_clsx2.default)("input input-bordered input-primary w-full", {
              "input-error": errors[`${name}`]
            }),
            ...register(name ?? ""),
            ...rest
          },
          void 0,
          !1,
          {
            fileName: "app/src/ui/Input.tsx",
            lineNumber: 88,
            columnNumber: 17
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          "button",
          {
            className: "btn btn-square btn-primary",
            type: "button",
            onClick: () => setShow(!show),
            children: show ? /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Show_default, { className: "h-4 text-gray-700" }, void 0, !1, {
              fileName: "app/src/ui/Input.tsx",
              lineNumber: 103,
              columnNumber: 21
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Hide_default, { className: "h-4 text-gray-700" }, void 0, !1, {
              fileName: "app/src/ui/Input.tsx",
              lineNumber: 105,
              columnNumber: 21
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/src/ui/Input.tsx",
            lineNumber: 97,
            columnNumber: 17
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/src/ui/Input.tsx",
        lineNumber: 87,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/src/ui/Input.tsx",
        lineNumber: 86,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { className: "text-error italic text-sm", children: (_a = errors[name ?? ""]) != null && _a.message ? String((_b = errors[name ?? ""]) == null ? void 0 : _b.message) : null }, void 0, !1, {
        fileName: "app/src/ui/Input.tsx",
        lineNumber: 111,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/src/ui/Input.tsx",
      lineNumber: 85,
      columnNumber: 11
    }, this);
  } }, void 0, !1, {
    fileName: "app/src/ui/Input.tsx",
    lineNumber: 82,
    columnNumber: 5
  }, this);
};

// app/routes/__private/ui-test.tsx
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime"), UiTest = () => {
  let resolver = useYupValidationResolver_default(
    yup.object().shape({
      username: yup.string().trim().min(3, "user name too short").max(256, "user name must be less than 256 characters").label("username"),
      password: yup.string().trim().min(3, "password too short").max(50, "password must be less than 50 characters").label("password")
    })
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "container mx-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { children: "ui-test" }, void 0, !1, {
      fileName: "app/routes/__private/ui-test.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "flex gap-4 items-start", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Button_default, { className: "w-24", children: "2" }, void 0, !1, {
        fileName: "app/routes/__private/ui-test.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Button_default, { className: "w-24", iconStart: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Heart_default, {}, void 0, !1, {
        fileName: "app/routes/__private/ui-test.tsx",
        lineNumber: 31,
        columnNumber: 47
      }, this), children: "2" }, void 0, !1, {
        fileName: "app/routes/__private/ui-test.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Button_default, { className: "w-24", iconEnd: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Heart_default, {}, void 0, !1, {
        fileName: "app/routes/__private/ui-test.tsx",
        lineNumber: 34,
        columnNumber: 45
      }, this), label: "2" }, void 0, !1, {
        fileName: "app/routes/__private/ui-test.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Button_default, { className: "w-24", iconEnd: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Heart_default, {}, void 0, !1, {
        fileName: "app/routes/__private/ui-test.tsx",
        lineNumber: 35,
        columnNumber: 45
      }, this), label: "2", loading: !0 }, void 0, !1, {
        fileName: "app/routes/__private/ui-test.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Button_default, { className: "w-24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Heart_default, {}, void 0, !1, {
        fileName: "app/routes/__private/ui-test.tsx",
        lineNumber: 37,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/__private/ui-test.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/__private/ui-test.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { children: "typo" }, void 0, !1, {
      fileName: "app/routes/__private/ui-test.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("article", { className: "prose", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h1", { children: "Garlic bread with cheese: What the science tells us" }, void 0, !1, {
        fileName: "app/routes/__private/ui-test.tsx",
        lineNumber: 43,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { children: "For years parents have espoused the health benefits of eating garlic bread with cheese to their children, with the food earning such an iconic status in our culture that kids will often dress up as warm, cheesy loaf for Halloween." }, void 0, !1, {
        fileName: "app/routes/__private/ui-test.tsx",
        lineNumber: 44,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { children: "But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases springing up around the country." }, void 0, !1, {
        fileName: "app/routes/__private/ui-test.tsx",
        lineNumber: 50,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/__private/ui-test.tsx",
      lineNumber: 42,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/__private/ui-test.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { children: "Form" }, void 0, !1, {
      fileName: "app/routes/__private/ui-test.tsx",
      lineNumber: 56,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "mt-5 w-1/2 mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Form_default, { onSubmit: (data) => import_react_toastify2.toast.success(JSON.stringify(data)), className: "w-1/2 mx-auto", resolver, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "space-y-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(TextInput, { name: "username" }, void 0, !1, {
          fileName: "app/routes/__private/ui-test.tsx",
          lineNumber: 60,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Select, { name: "like", options: ["yes", "no"] }, void 0, !1, {
          fileName: "app/routes/__private/ui-test.tsx",
          lineNumber: 61,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/__private/ui-test.tsx",
        lineNumber: 59,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(PassWordInput, { name: "password" }, void 0, !1, {
        fileName: "app/routes/__private/ui-test.tsx",
        lineNumber: 63,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Button_default, { className: "mt-8", children: "Submit" }, void 0, !1, {
        fileName: "app/routes/__private/ui-test.tsx",
        lineNumber: 65,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/__private/ui-test.tsx",
      lineNumber: 58,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/__private/ui-test.tsx",
      lineNumber: 57,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/__private/ui-test.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}, ui_test_default = UiTest;

// app/routes/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  action: () => action
});
var import_node4 = require("@remix-run/node");
var action = async ({ request }) => {
  let session = await getSession(request.headers.get("Cookie"));
  return (0, import_node4.redirect)("/login?reLogin=true", {
    headers: {
      "Set-Cookie": await destroySession(session)
    }
  });
};

// app/routes/child.tsx
var child_exports = {};
__export(child_exports, {
  default: () => child,
  meta: () => meta2
});
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime"), meta2 = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
});
function child() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { children: "this is child" }, void 0, !1, {
    fileName: "app/routes/child.tsx",
    lineNumber: 10,
    columnNumber: 10
  }, this);
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "w-full text-red-500", children: "HOME Page" }, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 2,
    columnNumber: 10
  }, this);
}

// app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action2,
  default: () => Login,
  loader: () => loader2
});
var import_node5 = require("@remix-run/node"), import_react10 = require("@remix-run/react"), import_react11 = require("react"), import_react_toastify3 = require("react-toastify"), import_recoil6 = require("recoil"), yup2 = __toESM(require("yup"));
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime"), loader2 = async function({ request, params }) {
  let session = await getSession(request.headers.get("Cookie"));
  if (new URL(request.url).searchParams.get("reLogin"))
    return (0, import_node5.json)({ emptySession: !0 });
  if (session.has("token"))
    return (0, import_node5.redirect)("/");
  let data = {
    error: session.get("errors"),
    username: session.get("username"),
    password: session.get("password")
  };
  return (0, import_node5.json)(data, {
    headers: {
      "Set-Cookie": await commitSession(session)
    }
  });
}, action2 = async function({ request }) {
  let session = await getSession(request.headers.get("Cookie")), form = await request.formData(), username = form.get("username"), password = form.get("password"), token = await validateCredentials({
    username: String(username),
    password: String(password),
    id: ""
  });
  return token == null ? (session.flash("errors", "Invalid username/password"), session.flash("username", username), session.flash("password", password), (0, import_node5.redirect)("/login", {
    headers: {
      "Set-Cookie": await commitSession(session)
    },
    status: 302
  })) : (session.set("token", token), (0, import_node5.redirect)("/ui-test", {
    headers: {
      "Set-Cookie": await commitSession(session)
    }
  }));
};
async function validateCredentials(params) {
  return params.password === "1234567" && params.username === "Abcxyz" ? "access-token" : null;
}
function Login() {
  let { error, username, password, emptySession } = (0, import_react10.useLoaderData)(), reset = (0, import_recoil6.useResetRecoilState)(userInfo), submit = (0, import_react10.useSubmit)(), resolver = useYupValidationResolver_default(
    yup2.object().shape({
      username: yup2.string().trim().min(3, "user name too short").max(256, "user name must be less than 256 characters").label("username"),
      password: yup2.string().trim().min(3, "password too short").max(50, "password must be less than 50 characters").label("password")
    })
  );
  return (0, import_react11.useEffect)(() => {
    emptySession && (reset(), (0, import_react_toastify3.toast)("You are logged out"));
  }, [emptySession, reset]), (0, import_react11.useEffect)(() => {
    (0, import_react_toastify3.toast)(error);
  }, [error, username, password]), /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "w-full mt-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Form_default, { onSubmit: async (data, e) => {
    try {
      await submit(e.target, {
        replace: !0,
        method: "post"
      });
    } catch (error2) {
      (0, import_react_toastify3.toast)(error2.message);
    }
  }, className: "w-1/2 mx-auto", resolver, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "space-y-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(TextInput, { name: "username" }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 135,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(PassWordInput, { name: "password" }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 136,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 134,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Button_default, { className: "mt-8", children: "Login" }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 139,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/login.tsx",
    lineNumber: 133,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/login.tsx",
    lineNumber: 132,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "19f9b10a", entry: { module: "/build/entry.client-PVP3Y5VS.js", imports: ["/build/_shared/chunk-NUYY7IMT.js", "/build/_shared/chunk-VIPVJV6J.js", "/build/_shared/chunk-5KL4PAQL.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-MCPAW5EF.js", imports: ["/build/_shared/chunk-7QYA3SAN.js", "/build/_shared/chunk-YX2YDSOO.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__private": { id: "routes/__private", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/__private-HNBKOIDP.js", imports: ["/build/_shared/chunk-GLWAIFE6.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__private/ui-test": { id: "routes/__private/ui-test", parentId: "routes/__private", path: "ui-test", index: void 0, caseSensitive: void 0, module: "/build/routes/__private/ui-test-XQER7LMG.js", imports: ["/build/_shared/chunk-L7I3WUOP.js", "/build/_shared/chunk-YX2YDSOO.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/child": { id: "routes/child", parentId: "root", path: "child", index: void 0, caseSensitive: void 0, module: "/build/routes/child-ATZSIYFK.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-5JZWILZI.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-TSDCSOIO.js", imports: ["/build/_shared/chunk-GLWAIFE6.js", "/build/_shared/chunk-L7I3WUOP.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/logout": { id: "routes/logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/logout-DOMDNNGV.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-19F9B10A.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_meta: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/__private": {
    id: "routes/__private",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: private_exports
  },
  "routes/__private/ui-test": {
    id: "routes/__private/ui-test",
    parentId: "routes/__private",
    path: "ui-test",
    index: void 0,
    caseSensitive: void 0,
    module: ui_test_exports
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/child": {
    id: "routes/child",
    parentId: "root",
    path: "child",
    index: void 0,
    caseSensitive: void 0,
    module: child_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
