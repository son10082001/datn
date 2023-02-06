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
function handleRequest(request2, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request2.headers.get("user-agent")) ? handleBotRequest(
    request2,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request2,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request2, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request2.url }, void 0, !1, {
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
function handleBrowserRequest(request2, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request2.url }, void 0, !1, {
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
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react2 = require("@remix-run/react"), import_react3 = require("react"), import_react_toastify = require("react-toastify");

// node_modules/react-toastify/dist/ReactToastify.css
var ReactToastify_default = "/build/_assets/ReactToastify-NKV7QCPG.css";

// app/root.tsx
var import_recoil = require("recoil");

// app/styles/global.css
var global_default = "/build/_assets/global-BZZ6HJWF.css";

// app/root.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
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
function ErrorBoundary({ error }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { children: "Error" }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: error.message }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "The stack trace is:" }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("pre", { children: error.stack }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 30,
    columnNumber: 5
  }, this);
}
var meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
});
function DebugObserver() {
  let snapshot = (0, import_recoil.useRecoilSnapshot)();
  return (0, import_react3.useEffect)(() => {
    console.debug("The following atoms were modified:");
    for (let node of snapshot.getNodes_UNSTABLE({ isModified: !0 }))
      console.debug(node.key, snapshot.getLoadable(node));
  }, [snapshot]), null;
}
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 59,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 58,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_recoil.RecoilRoot, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 64,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
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
          lineNumber: 65,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 77,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 78,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DebugObserver, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 79,
        columnNumber: 53
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 80,
        columnNumber: 53
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 63,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 62,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 57,
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
var import_react11 = require("@remix-run/react"), import_recoil6 = require("recoil");

// app/src/recoil_state/authState.ts
var import_recoil2 = require("recoil");

// app/src/utils/constants.ts
var STORAGE_KEY = {
  token: "access_token",
  refreshToken: "refresh_token",
  user: "user_info",
  theme: "themes",
  language: "language",
  rememberUser: "remember_user"
};

// app/src/utils/sideEffect.ts
var localStorageEffect = (key) => ({ setSelf, onSet }) => {
  if (typeof document < "u") {
    let savedValue = localStorage.getItem(key);
    savedValue != null && setSelf(JSON.parse(savedValue));
  }
  onSet((newValue, _, isReset) => {
    isReset ? localStorage.removeItem(key) : localStorage.setItem(key, JSON.stringify(newValue));
  });
};

// app/src/recoil_state/authState.ts
var userInfo = (0, import_recoil2.atom)({
  key: "useInfo",
  default: {},
  effects: [localStorageEffect(STORAGE_KEY.user)]
}), accessToken = (0, import_recoil2.atom)({
  key: "accessToken",
  default: {},
  effects: [localStorageEffect(STORAGE_KEY.token)]
}), checkLogin = (0, import_recoil2.selector)({
  key: "checkLogin",
  get: ({ get }) => {
    let user = get(userInfo);
    if (typeof document < "u")
      return user !== null && Object.keys(user).length !== 0;
  }
});

// app/routes/__private.tsx
var import_node3 = require("@remix-run/node"), import_react12 = require("react");

// app/session.server.ts
var import_node2 = require("@remix-run/node"), { getSession, commitSession, destroySession } = (0, import_node2.createCookieSessionStorage)({
  cookie: {
    name: "__session",
    httpOnly: !0,
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
    sameSite: "lax",
    secrets: ["s3cret1"],
    secure: !0
  }
});

// app/src/layout/MainLayout/MainLayout.tsx
var import_react9 = require("@remix-run/react"), import_react10 = require("react");

// app/src/hooks/useYupValidationResolver.ts
var import_react4 = require("react"), useYupValidationResolver = (validationSchema) => (0, import_react4.useCallback)(
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

// app/src/ui/Filter.tsx
var yup = __toESM(require("yup"));

// app/src/ui/Button.tsx
var import_clsx = __toESM(require("clsx")), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), Button = ({
  label,
  className,
  loading = !1,
  iconEnd,
  iconStart,
  children,
  onClick,
  disabled
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
  "button",
  {
    className: (0, import_clsx.default)(
      "btn btn-primary w-full gap-x-2 rounded-md",
      className,
      {
        "loading bg-base-300 text-primary": loading
      }
    ),
    onClick,
    disabled,
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
    lineNumber: 27,
    columnNumber: 7
  },
  this
) }, void 0, !1, {
  fileName: "app/src/ui/Button.tsx",
  lineNumber: 26,
  columnNumber: 5
}, this), Button_default = Button;

// app/src/ui/Form.tsx
var import_react_hook_form = require("react-hook-form"), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), Form = ({
  defaultValues,
  children,
  onSubmit,
  className,
  resolver
}) => {
  let methods = (0, import_react_hook_form.useForm)({ defaultValues, resolver }), { handleSubmit } = methods;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react_hook_form.FormProvider, { ...methods, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("form", { onSubmit: handleSubmit(onSubmit), className, children }, void 0, !1, {
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
var import_clsx2 = __toESM(require("clsx")), import_react5 = require("react");

// app/src/icons/Add.tsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), AddIcon = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
  "svg",
  {
    ...props,
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 20 20",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      "path",
      {
        fillRule: "evenodd",
        d: "M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z",
        clipRule: "evenodd"
      },
      void 0,
      !1,
      {
        fileName: "app/src/icons/Add.tsx",
        lineNumber: 14,
        columnNumber: 5
      },
      this
    )
  },
  void 0,
  !1,
  {
    fileName: "app/src/icons/Add.tsx",
    lineNumber: 4,
    columnNumber: 3
  },
  this
), Add_default = AddIcon;

// app/src/icons/Delete.tsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), DeleteIcon = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
  "svg",
  {
    ...props,
    stroke: "currentColor",
    fill: "none",
    strokeWidth: "0",
    viewBox: "0 0 24 24",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
      },
      void 0,
      !1,
      {
        fileName: "app/src/icons/Delete.tsx",
        lineNumber: 14,
        columnNumber: 5
      },
      this
    )
  },
  void 0,
  !1,
  {
    fileName: "app/src/icons/Delete.tsx",
    lineNumber: 4,
    columnNumber: 3
  },
  this
), Delete_default = DeleteIcon;

// app/src/icons/Edit.tsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), EditIcon = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
  "svg",
  {
    ...props,
    stroke: "currentColor",
    fill: "none",
    strokeWidth: "0",
    viewBox: "0 0 24 24",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        d: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
      },
      void 0,
      !1,
      {
        fileName: "app/src/icons/Edit.tsx",
        lineNumber: 14,
        columnNumber: 5
      },
      this
    )
  },
  void 0,
  !1,
  {
    fileName: "app/src/icons/Edit.tsx",
    lineNumber: 4,
    columnNumber: 3
  },
  this
), Edit_default = EditIcon;

// app/src/icons/Filter.tsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), FilterIcon = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
  "svg",
  {
    ...props,
    stroke: "currentColor",
    fill: "none",
    strokeWidth: "0",
    viewBox: "0 0 24 24",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        d: "M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
      },
      void 0,
      !1,
      {
        fileName: "app/src/icons/Filter.tsx",
        lineNumber: 14,
        columnNumber: 5
      },
      this
    )
  },
  void 0,
  !1,
  {
    fileName: "app/src/icons/Filter.tsx",
    lineNumber: 4,
    columnNumber: 3
  },
  this
), Filter_default = FilterIcon;

// app/src/icons/Heart.tsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), Heart = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
  "svg",
  {
    ...props,
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-6 w-6",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
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
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime"), Hide = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
  "svg",
  {
    ...props,
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 17",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12 0.999998C7.00001 0.999998 2.73001 4.11 1.00001 8.5C2.73001 12.89 7.00001 16 12 16C17 16 21.27 12.89 23 8.5C21.27 4.11 17 0.999998 12 0.999998ZM12 13.5C9.24001 13.5 7.00001 11.26 7.00001 8.5C7.00001 5.74 9.24001 3.5 12 3.5C14.76 3.5 17 5.74 17 8.5C17 11.26 14.76 13.5 12 13.5ZM12 5.5C10.34 5.5 9.00001 6.84 9.00001 8.5C9.00001 10.16 10.34 11.5 12 11.5C13.66 11.5 15 10.16 15 8.5C15 6.84 13.66 5.5 12 5.5ZM0.927826 15.1799L22.4278 0.179871L23.5722 1.82012L2.07219 16.8201L0.927826 15.1799Z",
        fill: "black",
        fillOpacity: "0.6"
      },
      void 0,
      !1,
      {
        fileName: "app/src/icons/Hide.tsx",
        lineNumber: 12,
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

// app/src/icons/Location.tsx
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime"), LocationIcon = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
  "svg",
  {
    ...props,
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    height: "20px",
    width: "20px",
    xmlns: "http://www.w3.org/2000/svg",
    strokeWidth: "0.5px",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("g", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("path", { d: "M12,2A7.008,7.008,0,0,0,5,9c0,5.353,6.036,11.45,6.293,11.707l.707.707.707-.707C12.964,20.45,19,14.353,19,9A7.008,7.008,0,0,0,12,2Zm0,16.533C10.471,16.825,7,12.553,7,9A5,5,0,0,1,17,9C17,12.546,13.527,16.823,12,18.533Z" }, void 0, !1, {
        fileName: "app/src/icons/Location.tsx",
        lineNumber: 15,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("path", { d: "M12,6a3,3,0,1,0,3,3A3,3,0,0,0,12,6Zm0,4a1,1,0,1,1,1-1A1,1,0,0,1,12,10Z" }, void 0, !1, {
        fileName: "app/src/icons/Location.tsx",
        lineNumber: 16,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/src/icons/Location.tsx",
      lineNumber: 14,
      columnNumber: 5
    }, this)
  },
  void 0,
  !1,
  {
    fileName: "app/src/icons/Location.tsx",
    lineNumber: 4,
    columnNumber: 3
  },
  this
), Location_default = LocationIcon;

// app/src/icons/MenuIcon.tsx
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime"), MenuIcon = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
  "svg",
  {
    stroke: "currentColor",
    fill: "none",
    strokeWidth: "0",
    viewBox: "0 0 24 24",
    height: "20px",
    width: "20px",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        d: "M4 6h16M4 12h16M4 18h7"
      },
      void 0,
      !1,
      {
        fileName: "app/src/icons/MenuIcon.tsx",
        lineNumber: 13,
        columnNumber: 5
      },
      this
    )
  },
  void 0,
  !1,
  {
    fileName: "app/src/icons/MenuIcon.tsx",
    lineNumber: 4,
    columnNumber: 3
  },
  this
), MenuIcon_default = MenuIcon;

// app/src/icons/PersonnelIcon.tsx
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime"), PersonnelIcon = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
  "svg",
  {
    ...props,
    stroke: "currentColor",
    fill: "none",
    viewBox: "0 0 24 24",
    height: "20px",
    width: "20px",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
      },
      void 0,
      !1,
      {
        fileName: "app/src/icons/PersonnelIcon.tsx",
        lineNumber: 13,
        columnNumber: 5
      },
      this
    )
  },
  void 0,
  !1,
  {
    fileName: "app/src/icons/PersonnelIcon.tsx",
    lineNumber: 4,
    columnNumber: 3
  },
  this
), PersonnelIcon_default = PersonnelIcon;

// app/src/icons/Show.tsx
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime"), Show = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
  "svg",
  {
    ...props,
    width: "1em",
    height: "1em",
    viewBox: "0 0 22 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M11 0C6 0 1.73 3.11 0 7.5C1.73 11.89 6 15 11 15C16 15 20.27 11.89 22 7.5C20.27 3.11 16 0 11 0ZM11 12.5C8.24 12.5 6 10.26 6 7.5C6 4.74 8.24 2.5 11 2.5C13.76 2.5 16 4.74 16 7.5C16 10.26 13.76 12.5 11 12.5ZM11 4.5C9.34 4.5 8 5.84 8 7.5C8 9.16 9.34 10.5 11 10.5C12.66 10.5 14 9.16 14 7.5C14 5.84 12.66 4.5 11 4.5Z",
        fill: "black",
        fillOpacity: "0.6"
      },
      void 0,
      !1,
      {
        fileName: "app/src/icons/Show.tsx",
        lineNumber: 12,
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

// app/src/icons/Sort.tsx
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime"), SortIcon = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
  "svg",
  {
    ...props,
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 320 512",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("path", { d: "M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z" }, void 0, !1, {
      fileName: "app/src/icons/Sort.tsx",
      lineNumber: 14,
      columnNumber: 5
    }, this)
  },
  void 0,
  !1,
  {
    fileName: "app/src/icons/Sort.tsx",
    lineNumber: 4,
    columnNumber: 3
  },
  this
), Sort_default = SortIcon;

// app/src/icons/SortDown.tsx
var import_jsx_dev_runtime16 = require("react/jsx-dev-runtime"), SortIcon2 = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
  "svg",
  {
    ...props,
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 320 512",
    className: "text-indigo-600",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("path", { d: "M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z" }, void 0, !1, {
      fileName: "app/src/icons/SortDown.tsx",
      lineNumber: 15,
      columnNumber: 5
    }, this)
  },
  void 0,
  !1,
  {
    fileName: "app/src/icons/SortDown.tsx",
    lineNumber: 4,
    columnNumber: 3
  },
  this
), SortDown_default = SortIcon2;

// app/src/icons/SortUp.tsx
var import_jsx_dev_runtime17 = require("react/jsx-dev-runtime"), SortIcon3 = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
  "svg",
  {
    ...props,
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 320 512",
    className: "text-indigo-600",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("path", { d: "M279 224H41c-21.4 0-32.1-25.9-17-41L143 64c9.4-9.4 24.6-9.4 33.9 0l119 119c15.2 15.1 4.5 41-16.9 41z" }, void 0, !1, {
      fileName: "app/src/icons/SortUp.tsx",
      lineNumber: 15,
      columnNumber: 5
    }, this)
  },
  void 0,
  !1,
  {
    fileName: "app/src/icons/SortUp.tsx",
    lineNumber: 4,
    columnNumber: 3
  },
  this
), SortUp_default = SortIcon3;

// app/src/icons/StatisticIcon.tsx
var import_jsx_dev_runtime18 = require("react/jsx-dev-runtime"), StatisticIcon = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
  "svg",
  {
    ...props,
    stroke: "currentColor",
    fill: "none",
    strokeWidth: "0",
    viewBox: "0 0 24 24",
    height: "20px",
    width: "20px",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
        "path",
        {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "2",
          d: "M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
        },
        void 0,
        !1,
        {
          fileName: "app/src/icons/StatisticIcon.tsx",
          lineNumber: 14,
          columnNumber: 5
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
        "path",
        {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "2",
          d: "M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
        },
        void 0,
        !1,
        {
          fileName: "app/src/icons/StatisticIcon.tsx",
          lineNumber: 20,
          columnNumber: 5
        },
        this
      )
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/src/icons/StatisticIcon.tsx",
    lineNumber: 4,
    columnNumber: 3
  },
  this
), StatisticIcon_default = StatisticIcon;

// app/src/icons/VarLogo.tsx
var import_jsx_dev_runtime19 = require("react/jsx-dev-runtime"), LogoVarMeta = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
  "svg",
  {
    width: "48",
    height: "48",
    viewBox: "0 0 112 113",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("g", { filter: "url(#filter0_d_106_321)", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("circle", { cx: "56", cy: "48.5", r: "40", fill: "white" }, void 0, !1, {
          fileName: "app/src/icons/VarLogo.tsx",
          lineNumber: 12,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
          "path",
          {
            d: "M61.5956 67.8821L56.7347 55.158C56.4828 54.492 55.8418 54.492 55.59 55.158L50.7138 67.8821C50.462 68.5482 50.7749 69.375 51.2861 69.375H61.0309C61.5269 69.375 61.8474 68.5482 61.5956 67.8821Z",
            fill: "#312DCA"
          },
          void 0,
          !1,
          {
            fileName: "app/src/icons/VarLogo.tsx",
            lineNumber: 13,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
          "path",
          {
            d: "M60.584 36.0224C60.5782 36.0224 60.5741 36.0167 60.5759 36.0112C60.5778 36.0057 60.5737 36 60.5679 36H59.1902C58.9561 36 58.7371 36.1907 58.6238 36.4823L56.4338 42.1244C56.1846 42.775 55.5503 42.775 55.3011 42.1244L53.1186 36.4823C53.0054 36.1795 52.7864 36 52.5522 36L27.6543 36.0224C27.1483 36.0224 26.8387 36.83 27.0879 37.4806L39.1631 68.6299C39.2763 68.9327 39.4953 69.1122 39.7294 69.1122H47.3642C47.5983 69.1122 47.8173 68.9215 47.9306 68.6299L55.3011 49.6285C55.5503 48.9779 56.1846 48.9779 56.4338 49.6285L63.8043 68.6299C63.9176 68.9327 64.1366 69.1122 64.3707 69.1122H72.0054C72.2396 69.1122 72.4585 68.9215 72.5718 68.6299L84.6621 37.4582C84.9113 36.8076 84.6017 36 84.0957 36L60.584 36.0224Z",
            fill: "#312DCA"
          },
          void 0,
          !1,
          {
            fileName: "app/src/icons/VarLogo.tsx",
            lineNumber: 17,
            columnNumber: 7
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/src/icons/VarLogo.tsx",
        lineNumber: 11,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("defs", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
        "filter",
        {
          id: "filter0_d_106_321",
          x: "0",
          y: "0.5",
          width: "112",
          height: "112",
          filterUnits: "userSpaceOnUse",
          colorInterpolationFilters: "sRGB",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }, void 0, !1, {
              fileName: "app/src/icons/VarLogo.tsx",
              lineNumber: 32,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
              "feColorMatrix",
              {
                in: "SourceAlpha",
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                result: "hardAlpha"
              },
              void 0,
              !1,
              {
                fileName: "app/src/icons/VarLogo.tsx",
                lineNumber: 33,
                columnNumber: 9
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("feOffset", { dy: "8" }, void 0, !1, {
              fileName: "app/src/icons/VarLogo.tsx",
              lineNumber: 39,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("feGaussianBlur", { stdDeviation: "8" }, void 0, !1, {
              fileName: "app/src/icons/VarLogo.tsx",
              lineNumber: 40,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("feComposite", { in2: "hardAlpha", operator: "out" }, void 0, !1, {
              fileName: "app/src/icons/VarLogo.tsx",
              lineNumber: 41,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
              "feColorMatrix",
              {
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
              },
              void 0,
              !1,
              {
                fileName: "app/src/icons/VarLogo.tsx",
                lineNumber: 42,
                columnNumber: 9
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
              "feBlend",
              {
                mode: "normal",
                in2: "BackgroundImageFix",
                result: "effect1_dropShadow_106_321"
              },
              void 0,
              !1,
              {
                fileName: "app/src/icons/VarLogo.tsx",
                lineNumber: 46,
                columnNumber: 9
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
              "feBlend",
              {
                mode: "normal",
                in: "SourceGraphic",
                in2: "effect1_dropShadow_106_321",
                result: "shape"
              },
              void 0,
              !1,
              {
                fileName: "app/src/icons/VarLogo.tsx",
                lineNumber: 51,
                columnNumber: 9
              },
              this
            )
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/src/icons/VarLogo.tsx",
          lineNumber: 23,
          columnNumber: 7
        },
        this
      ) }, void 0, !1, {
        fileName: "app/src/icons/VarLogo.tsx",
        lineNumber: 22,
        columnNumber: 5
      }, this)
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/src/icons/VarLogo.tsx",
    lineNumber: 4,
    columnNumber: 3
  },
  this
), VarLogo_default = LogoVarMeta;

// app/src/icons/Warning.tsx
var import_jsx_dev_runtime20 = require("react/jsx-dev-runtime"), Warning = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
  "svg",
  {
    ...props,
    stroke: "currentColor",
    fill: "none",
    strokeWidth: "0",
    viewBox: "0 0 24 24",
    height: "24px",
    width: "24px",
    xmlns: "http://www.w3.org/2000/svg",
    color: "red",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
      "path",
      {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
      },
      void 0,
      !1,
      {
        fileName: "app/src/icons/Warning.tsx",
        lineNumber: 15,
        columnNumber: 5
      },
      this
    )
  },
  void 0,
  !1,
  {
    fileName: "app/src/icons/Warning.tsx",
    lineNumber: 4,
    columnNumber: 3
  },
  this
), Warning_default = Warning;

// app/src/icons/Close.tsx
var import_jsx_dev_runtime21 = require("react/jsx-dev-runtime"), CloseIcon = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("span", { className: "close-btn close-btn-default", role: "button", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
  "svg",
  {
    ...props,
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 20 20",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
      "path",
      {
        fillRule: "evenodd",
        d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
        clipRule: "evenodd"
      },
      void 0,
      !1,
      {
        fileName: "app/src/icons/Close.tsx",
        lineNumber: 15,
        columnNumber: 7
      },
      this
    )
  },
  void 0,
  !1,
  {
    fileName: "app/src/icons/Close.tsx",
    lineNumber: 5,
    columnNumber: 5
  },
  this
) }, void 0, !1, {
  fileName: "app/src/icons/Close.tsx",
  lineNumber: 4,
  columnNumber: 3
}, this), Close_default = CloseIcon;

// app/src/icons/Search.tsx
var import_jsx_dev_runtime22 = require("react/jsx-dev-runtime"), SearchIcon = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("span", { className: "close-btn close-btn-default", role: "button", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
  "svg",
  {
    ...props,
    stroke: "currentColor",
    fill: "none",
    strokeWidth: "0",
    viewBox: "0 0 24 24",
    className: "text-lg",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      },
      void 0,
      !1,
      {
        fileName: "app/src/icons/Search.tsx",
        lineNumber: 16,
        columnNumber: 7
      },
      this
    )
  },
  void 0,
  !1,
  {
    fileName: "app/src/icons/Search.tsx",
    lineNumber: 5,
    columnNumber: 5
  },
  this
) }, void 0, !1, {
  fileName: "app/src/icons/Search.tsx",
  lineNumber: 4,
  columnNumber: 3
}, this), Search_default = SearchIcon;

// app/src/ui/ConnectForm.tsx
var import_react_hook_form2 = require("react-hook-form"), ConnectForm = ({ children }) => {
  let methods = (0, import_react_hook_form2.useFormContext)();
  return children({ ...methods });
};

// app/src/ui/Input.tsx
var import_jsx_dev_runtime23 = require("react/jsx-dev-runtime"), TextInput = ({ name, ...rest }) => /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(ConnectForm, { children: ({ register, formState: { errors } }) => {
  var _a, _b;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_jsx_dev_runtime23.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
      "input",
      {
        className: (0, import_clsx2.default)(
          "input-bordered input w-full rounded-md focus:border-hidden",
          {
            "input-error": errors[`${name}`]
          }
        ),
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("p", { className: "text-sm italic text-error", children: (_a = errors[name ?? ""]) != null && _a.message ? String((_b = errors[name ?? ""]) == null ? void 0 : _b.message) : null }, void 0, !1, {
      fileName: "app/src/ui/Input.tsx",
      lineNumber: 33,
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
}, this), Select = ({ name, options, ...rest }) => /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(ConnectForm, { children: ({ register, formState: { errors } }) => {
  var _a, _b;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_jsx_dev_runtime23.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
      "select",
      {
        className: (0, import_clsx2.default)("select-primary select w-full", {
          "input-error": errors
        }),
        ...register(name ?? ""),
        ...rest,
        children: options == null ? void 0 : options.map((value, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("option", { value: value ?? "", children: value }, (0, import_clsx2.default)(name, index), !1, {
          fileName: "app/src/ui/Input.tsx",
          lineNumber: 63,
          columnNumber: 15
        }, this))
      },
      void 0,
      !1,
      {
        fileName: "app/src/ui/Input.tsx",
        lineNumber: 55,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("p", { className: "text-sm italic text-error", children: (_a = errors[name ?? ""]) != null && _a.message ? String((_b = errors[name ?? ""]) == null ? void 0 : _b.message) : null }, void 0, !1, {
      fileName: "app/src/ui/Input.tsx",
      lineNumber: 70,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/src/ui/Input.tsx",
    lineNumber: 54,
    columnNumber: 9
  }, this);
} }, void 0, !1, {
  fileName: "app/src/ui/Input.tsx",
  lineNumber: 52,
  columnNumber: 5
}, this), PassWordInput = ({ name, ...rest }) => {
  let [show, setShow] = (0, import_react5.useState)(!1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(ConnectForm, { children: ({ register, formState: { errors } }) => {
    var _a, _b;
    return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_jsx_dev_runtime23.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "form-control", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "flex justify-end", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
          "input",
          {
            autoComplete: "off",
            type: (0, import_clsx2.default)({ password: !show }),
            className: (0, import_clsx2.default)(
              "input-bordered input w-full rounded-md focus:border-hidden",
              {
                "input-error": errors[`${name}`]
              }
            ),
            ...register(name ?? ""),
            ...rest
          },
          void 0,
          !1,
          {
            fileName: "app/src/ui/Input.tsx",
            lineNumber: 91,
            columnNumber: 17
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
          "button",
          {
            className: "btn-ghost btn absolute flex",
            type: "button",
            onClick: () => setShow(!show),
            children: show ? /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(Show_default, { className: "h-4" }, void 0, !1, {
              fileName: "app/src/ui/Input.tsx",
              lineNumber: 108,
              columnNumber: 27
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(Hide_default, { className: "h-4" }, void 0, !1, {
              fileName: "app/src/ui/Input.tsx",
              lineNumber: 108,
              columnNumber: 54
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/src/ui/Input.tsx",
            lineNumber: 103,
            columnNumber: 17
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/src/ui/Input.tsx",
        lineNumber: 90,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/src/ui/Input.tsx",
        lineNumber: 89,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("p", { className: "text-sm italic text-error", children: (_a = errors[name ?? ""]) != null && _a.message ? String((_b = errors[name ?? ""]) == null ? void 0 : _b.message) : null }, void 0, !1, {
        fileName: "app/src/ui/Input.tsx",
        lineNumber: 113,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/src/ui/Input.tsx",
      lineNumber: 88,
      columnNumber: 11
    }, this);
  } }, void 0, !1, {
    fileName: "app/src/ui/Input.tsx",
    lineNumber: 85,
    columnNumber: 5
  }, this);
};

// app/src/ui/Filter.tsx
var import_recoil4 = require("recoil");

// app/src/recoil_state/filterState.ts
var import_recoil3 = require("recoil"), filterInfo = (0, import_recoil3.atom)({
  key: "filterInfo",
  default: !1
}), checkFilter = (0, import_recoil3.selector)({
  key: "checkFilter",
  get: ({ get }) => get(filterInfo)
});

// app/src/ui/Filter.tsx
var import_jsx_dev_runtime24 = require("react/jsx-dev-runtime");
function Filter({ children, filter }) {
  let resolver = useYupValidationResolver_default(yup.object()), [check, setCheck] = (0, import_recoil4.useRecoilState)(filterInfo), onSubmit = (values) => {
    console.log("submit filter", values);
  }, handleClick = () => {
    let elm = document.getElementById("my-drawer-4");
    elm == null || elm.click(), setCheck(!check);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "drawer drawer-end", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
      "input",
      {
        id: "my-drawer-4",
        type: "checkbox",
        className: "drawer-toggle",
        checked: check,
        onChange: handleClick
      },
      void 0,
      !1,
      {
        fileName: "app/src/ui/Filter.tsx",
        lineNumber: 27,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "drawer-content", children }, void 0, !1, {
      fileName: "app/src/ui/Filter.tsx",
      lineNumber: 34,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "drawer-side flex", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("label", { htmlFor: "my-drawer-4", className: "drawer-overlay" }, void 0, !1, {
        fileName: "app/src/ui/Filter.tsx",
        lineNumber: 36,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("ul", { className: "menu w-[400px] bg-base-100 text-gray-900 font-medium", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "items-center border-b border-gray-200 px-6 py-4 flex justify-between bg-white sticky top-0", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("span", { className: "text-xl ", children: "Filter" }, void 0, !1, {
            fileName: "app/src/ui/Filter.tsx",
            lineNumber: 39,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(Close_default, { onClick: handleClick }, void 0, !1, {
            fileName: "app/src/ui/Filter.tsx",
            lineNumber: 40,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/src/ui/Filter.tsx",
          lineNumber: 38,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(Form_default, { onSubmit, resolver, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "p-6 h-screen", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "space-y-7", children: filter == null ? void 0 : filter.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("label", { className: "label", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("h3", { className: "label-text text-base text-gray-900 mb-4", children: item.label }, void 0, !1, {
              fileName: "app/src/ui/Filter.tsx",
              lineNumber: 48,
              columnNumber: 25
            }, this) }, void 0, !1, {
              fileName: "app/src/ui/Filter.tsx",
              lineNumber: 47,
              columnNumber: 23
            }, this),
            item.type === "input" && /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("span", { className: "flex relative w-full", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "left-3 absolute top-2/4 translate-y-[-50%]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(Search_default, {}, void 0, !1, {
                fileName: "app/src/ui/Filter.tsx",
                lineNumber: 55,
                columnNumber: 29
              }, this) }, void 0, !1, {
                fileName: "app/src/ui/Filter.tsx",
                lineNumber: 54,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
                TextInput,
                {
                  name: item.name,
                  className: "input input-bordered w-full h-11 px-[2.215rem] focus:ring-indigo-600 focus:border-indigo-600"
                },
                void 0,
                !1,
                {
                  fileName: "app/src/ui/Filter.tsx",
                  lineNumber: 57,
                  columnNumber: 27
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/src/ui/Filter.tsx",
              lineNumber: 53,
              columnNumber: 25
            }, this),
            item.type === "select" && /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
              Select,
              {
                name: item.name,
                options: item.object,
                className: "select select-bordered w-full h-11 focus:ring-indigo-600 focus:border-indigo-600"
              },
              void 0,
              !1,
              {
                fileName: "app/src/ui/Filter.tsx",
                lineNumber: 64,
                columnNumber: 25
              },
              this
            )
          ] }, index, !0, {
            fileName: "app/src/ui/Filter.tsx",
            lineNumber: 46,
            columnNumber: 21
          }, this)) }, void 0, !1, {
            fileName: "app/src/ui/Filter.tsx",
            lineNumber: 44,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/src/ui/Filter.tsx",
            lineNumber: 43,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "items-center border-t border-gray-200 bg-white py-4 px-6 flex justify-between sticky bottom-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "text-right w-full", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
              Button_default,
              {
                className: "btn btn-sm bg-white border border-gray-300 hover:bg-gray-50 hover:border-gray-500 justify-center w-fit h-9 px-3 py-2 text-gray-600 mr-2",
                onClick: handleClick,
                children: "Cancel"
              },
              void 0,
              !1,
              {
                fileName: "app/src/ui/Filter.tsx",
                lineNumber: 76,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
              Button_default,
              {
                className: "btn btn-sm bg-indigo-600 hover:bg-indigo-500 justify-center w-fit h-9 px-3 py-2 text-white",
                onClick: handleClick,
                children: "Filter"
              },
              void 0,
              !1,
              {
                fileName: "app/src/ui/Filter.tsx",
                lineNumber: 82,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/src/ui/Filter.tsx",
            lineNumber: 75,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/src/ui/Filter.tsx",
            lineNumber: 74,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/src/ui/Filter.tsx",
          lineNumber: 42,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/src/ui/Filter.tsx",
        lineNumber: 37,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/src/ui/Filter.tsx",
      lineNumber: 35,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/src/ui/Filter.tsx",
    lineNumber: 26,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/src/ui/Filter.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}
var Filter_default2 = Filter;

// app/src/layout/MainLayout/Sidebar/index.tsx
var import_react7 = require("@remix-run/react"), import_clsx4 = __toESM(require("clsx")), import_react8 = require("react");

// app/src/layout/MainLayout/Navbar/Header.tsx
var import_clsx3 = __toESM(require("clsx"));

// app/src/layout/MainLayout/AuthSection/index.tsx
var import_react6 = require("@remix-run/react"), import_recoil5 = require("recoil"), import_jsx_dev_runtime25 = require("react/jsx-dev-runtime");
function AuthSection() {
  let fetcher = (0, import_react6.useFetcher)(), isLogin = (0, import_recoil5.useRecoilValue)(checkLogin);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "flex-none", children: isLogin ? /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "dropdown-end dropdown", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("label", { tabIndex: 0, className: "btn-ghost btn-circle avatar btn", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "w-10 rounded-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("img", { src: "https://placeimg.com/80/80/people", alt: "avatar" }, void 0, !1, {
      fileName: "app/src/layout/MainLayout/AuthSection/index.tsx",
      lineNumber: 33,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/src/layout/MainLayout/AuthSection/index.tsx",
      lineNumber: 32,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/src/layout/MainLayout/AuthSection/index.tsx",
      lineNumber: 31,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
      "ul",
      {
        tabIndex: 0,
        className: "dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_react6.Link, { to: "/check-in", children: "Check-in" }, void 0, !1, {
            fileName: "app/src/layout/MainLayout/AuthSection/index.tsx",
            lineNumber: 41,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/src/layout/MainLayout/AuthSection/index.tsx",
            lineNumber: 40,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_react6.Link, { to: "/ui-test", children: "UI" }, void 0, !1, {
            fileName: "app/src/layout/MainLayout/AuthSection/index.tsx",
            lineNumber: 44,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/src/layout/MainLayout/AuthSection/index.tsx",
            lineNumber: 43,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_react6.Link, { to: "/child", className: "justify-between", children: [
            "Profile",
            /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("span", { className: "badge", children: "New" }, void 0, !1, {
              fileName: "app/src/layout/MainLayout/AuthSection/index.tsx",
              lineNumber: 49,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/src/layout/MainLayout/AuthSection/index.tsx",
            lineNumber: 47,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/src/layout/MainLayout/AuthSection/index.tsx",
            lineNumber: 46,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(fetcher.Form, { method: "post", action: "/logout", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("button", { className: "w-full text-left", type: "submit", children: "Logout" }, void 0, !1, {
            fileName: "app/src/layout/MainLayout/AuthSection/index.tsx",
            lineNumber: 54,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/src/layout/MainLayout/AuthSection/index.tsx",
            lineNumber: 53,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/src/layout/MainLayout/AuthSection/index.tsx",
            lineNumber: 52,
            columnNumber: 13
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/src/layout/MainLayout/AuthSection/index.tsx",
        lineNumber: 36,
        columnNumber: 11
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/src/layout/MainLayout/AuthSection/index.tsx",
    lineNumber: 30,
    columnNumber: 9
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("ul", { className: "menu menu-horizontal px-1", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_react6.Link, { to: "/check-in", children: "Check-in" }, void 0, !1, {
      fileName: "app/src/layout/MainLayout/AuthSection/index.tsx",
      lineNumber: 20,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/src/layout/MainLayout/AuthSection/index.tsx",
      lineNumber: 19,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_react6.Link, { to: "/ui-test", children: "UI" }, void 0, !1, {
      fileName: "app/src/layout/MainLayout/AuthSection/index.tsx",
      lineNumber: 23,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/src/layout/MainLayout/AuthSection/index.tsx",
      lineNumber: 22,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_react6.Link, { to: "/login", children: "Login" }, void 0, !1, {
      fileName: "app/src/layout/MainLayout/AuthSection/index.tsx",
      lineNumber: 26,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/src/layout/MainLayout/AuthSection/index.tsx",
      lineNumber: 25,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/src/layout/MainLayout/AuthSection/index.tsx",
    lineNumber: 18,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/src/layout/MainLayout/AuthSection/index.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

// app/src/layout/MainLayout/Navbar/Header.tsx
var import_jsx_dev_runtime26 = require("react/jsx-dev-runtime");
function Header({
  menuCollapse,
  setMenuCollapse,
  collapse
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "navbar border-b-2 border-[#e5e7eb]", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "flex-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
      Button_default,
      {
        className: (0, import_clsx3.default)("btn-ghost btn w-fit justify-start"),
        iconStart: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(MenuIcon_default, {}, void 0, !1, {
          fileName: "app/src/layout/MainLayout/Navbar/Header.tsx",
          lineNumber: 16,
          columnNumber: 22
        }, this),
        onClick: () => setMenuCollapse()
      },
      void 0,
      !1,
      {
        fileName: "app/src/layout/MainLayout/Navbar/Header.tsx",
        lineNumber: 14,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/src/layout/MainLayout/Navbar/Header.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "flex-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(AuthSection, {}, void 0, !1, {
      fileName: "app/src/layout/MainLayout/Navbar/Header.tsx",
      lineNumber: 21,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/src/layout/MainLayout/Navbar/Header.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/src/layout/MainLayout/Navbar/Header.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// app/src/layout/MainLayout/Sidebar/index.tsx
var import_jsx_dev_runtime27 = require("react/jsx-dev-runtime"), menuItem = [
  {
    path: "/employee",
    name: "Nh\xE2n s\u1EF1",
    icon: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(PersonnelIcon_default, {}, void 0, !1, {
      fileName: "app/src/layout/MainLayout/Sidebar/index.tsx",
      lineNumber: 17,
      columnNumber: 11
    }, this)
  },
  {
    path: "/check-in",
    name: "Check-in",
    icon: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(Location_default, {}, void 0, !1, {
      fileName: "app/src/layout/MainLayout/Sidebar/index.tsx",
      lineNumber: 22,
      columnNumber: 11
    }, this)
  },
  {
    name: "Ch\u1EA5m c\xF4ng",
    icon: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(Heart_default, {}, void 0, !1, {
      fileName: "app/src/layout/MainLayout/Sidebar/index.tsx",
      lineNumber: 26,
      columnNumber: 11
    }, this),
    subMenu: [
      {
        path: "/report",
        name: "B\xE1o c\xE1o"
      },
      {
        path: "/attendance",
        name: "Ch\u1EA5m c\xF4ng"
      }
    ]
  },
  {
    path: "/ui-test",
    name: "Tuy\u1EC3n d\u1EE5ng",
    icon: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(Heart_default, {}, void 0, !1, {
      fileName: "app/src/layout/MainLayout/Sidebar/index.tsx",
      lineNumber: 41,
      columnNumber: 11
    }, this)
  },
  {
    path: "/request",
    name: "Request (Xin WFH, Xin ngh\u1EC9)",
    icon: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(Heart_default, {}, void 0, !1, {
      fileName: "app/src/layout/MainLayout/Sidebar/index.tsx",
      lineNumber: 46,
      columnNumber: 11
    }, this)
  },
  {
    path: "/statistic",
    name: "Th\u1ED1ng k\xEA",
    icon: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(StatisticIcon_default, {}, void 0, !1, {
      fileName: "app/src/layout/MainLayout/Sidebar/index.tsx",
      lineNumber: 51,
      columnNumber: 11
    }, this)
  }
];
function Sidebar({ children }) {
  let [collapse, setCollapse] = (0, import_react8.useState)(!1), location = (0, import_react7.useLocation)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_jsx_dev_runtime27.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "flex w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
      "div",
      {
        className: (0, import_clsx4.default)(
          "h-[100vh]",
          collapse && "w-[80px]",
          !collapse && "w-[290px]"
        )
      },
      void 0,
      !1,
      {
        fileName: "app/src/layout/MainLayout/Sidebar/index.tsx",
        lineNumber: 61,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "drawer-side fixed z-[9999999999] h-[100vh] border-r-2 border-[#e5e7eb] bg-gray-100", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_react7.Link, { to: "/", children: collapse ? /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "mt-4 flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(VarLogo_default, {}, void 0, !1, {
        fileName: "app/src/layout/MainLayout/Sidebar/index.tsx",
        lineNumber: 72,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/src/layout/MainLayout/Sidebar/index.tsx",
        lineNumber: 71,
        columnNumber: 15
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "btn-ghost btn mt-4 flex justify-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(VarLogo_default, {}, void 0, !1, {
          fileName: "app/src/layout/MainLayout/Sidebar/index.tsx",
          lineNumber: 76,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("p", { children: "Var-Management" }, void 0, !1, {
          fileName: "app/src/layout/MainLayout/Sidebar/index.tsx",
          lineNumber: 78,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/src/layout/MainLayout/Sidebar/index.tsx",
        lineNumber: 75,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/src/layout/MainLayout/Sidebar/index.tsx",
        lineNumber: 69,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
        "ul",
        {
          className: (0, import_clsx4.default)(
            "menu mx-auto font-medium",
            collapse ? "flex w-[80px] justify-center" : "w-[290px]"
          ),
          children: menuItem.map(
            (item, index) => item != null && item.subMenu ? collapse ? /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("li", { tabIndex: 0, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("span", { className: "flex justify-center", children: item.icon }, void 0, !1, {
                fileName: "app/src/layout/MainLayout/Sidebar/index.tsx",
                lineNumber: 92,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("ul", { className: "border border-gray-200 bg-white", children: item.subMenu.map((subItem) => /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("li", { className: "py-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
                import_react7.Link,
                {
                  to: subItem.path,
                  className: `${location.pathname === subItem.path ? "rounded-md bg-gray-900/[0.075]" : ""}`,
                  children: subItem.name
                },
                void 0,
                !1,
                {
                  fileName: "app/src/layout/MainLayout/Sidebar/index.tsx",
                  lineNumber: 96,
                  columnNumber: 27
                },
                this
              ) }, subItem.path, !1, {
                fileName: "app/src/layout/MainLayout/Sidebar/index.tsx",
                lineNumber: 95,
                columnNumber: 25
              }, this)) }, void 0, !1, {
                fileName: "app/src/layout/MainLayout/Sidebar/index.tsx",
                lineNumber: 93,
                columnNumber: 21
              }, this)
            ] }, index, !0, {
              fileName: "app/src/layout/MainLayout/Sidebar/index.tsx",
              lineNumber: 91,
              columnNumber: 19
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
              "div",
              {
                tabIndex: 0,
                className: "collapse-arrow collapse",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("input", { type: "checkbox", className: "peer" }, void 0, !1, {
                    fileName: "app/src/layout/MainLayout/Sidebar/index.tsx",
                    lineNumber: 116,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("label", { className: "collapse-title peer-checked:bg-gray-100", children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "inline-flex", children: [
                    item.icon,
                    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("span", { className: "pl-3", children: item.name }, void 0, !1, {
                      fileName: "app/src/layout/MainLayout/Sidebar/index.tsx",
                      lineNumber: 120,
                      columnNumber: 25
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "app/src/layout/MainLayout/Sidebar/index.tsx",
                    lineNumber: 118,
                    columnNumber: 23
                  }, this) }, void 0, !1, {
                    fileName: "app/src/layout/MainLayout/Sidebar/index.tsx",
                    lineNumber: 117,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "collapse-content peer-checked:bg-gray-100 ", children: item.subMenu.map((subItem, index2) => /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("li", { className: "py-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
                    import_react7.Link,
                    {
                      to: subItem.path,
                      className: `${location.pathname === subItem.path ? "rounded-md bg-gray-900/[0.075]" : ""}`,
                      children: subItem.name
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/src/layout/MainLayout/Sidebar/index.tsx",
                      lineNumber: 126,
                      columnNumber: 27
                    },
                    this
                  ) }, subItem.path, !1, {
                    fileName: "app/src/layout/MainLayout/Sidebar/index.tsx",
                    lineNumber: 125,
                    columnNumber: 25
                  }, this)) }, void 0, !1, {
                    fileName: "app/src/layout/MainLayout/Sidebar/index.tsx",
                    lineNumber: 123,
                    columnNumber: 21
                  }, this)
                ]
              },
              index,
              !0,
              {
                fileName: "app/src/layout/MainLayout/Sidebar/index.tsx",
                lineNumber: 111,
                columnNumber: 19
              },
              this
            ) : /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("li", { className: "py-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
              import_react7.Link,
              {
                to: item.path,
                className: (0, import_clsx4.default)(
                  `${location.pathname === item.path ? "rounded-md bg-gray-900/[0.075]" : ""}`,
                  { "flex justify-center": collapse }
                ),
                children: [
                  item.icon,
                  collapse ? "" : item.name
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/src/layout/MainLayout/Sidebar/index.tsx",
                lineNumber: 143,
                columnNumber: 19
              },
              this
            ) }, item.path, !1, {
              fileName: "app/src/layout/MainLayout/Sidebar/index.tsx",
              lineNumber: 142,
              columnNumber: 17
            }, this)
          )
        },
        void 0,
        !1,
        {
          fileName: "app/src/layout/MainLayout/Sidebar/index.tsx",
          lineNumber: 82,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/src/layout/MainLayout/Sidebar/index.tsx",
      lineNumber: 68,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("main", { className: "grow", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
        Header,
        {
          menuCollapse: collapse,
          setMenuCollapse: () => setCollapse(!collapse),
          collapse
        },
        void 0,
        !1,
        {
          fileName: "app/src/layout/MainLayout/Sidebar/index.tsx",
          lineNumber: 163,
          columnNumber: 11
        },
        this
      ),
      children
    ] }, void 0, !0, {
      fileName: "app/src/layout/MainLayout/Sidebar/index.tsx",
      lineNumber: 162,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/src/layout/MainLayout/Sidebar/index.tsx",
    lineNumber: 60,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/src/layout/MainLayout/Sidebar/index.tsx",
    lineNumber: 59,
    columnNumber: 5
  }, this);
}
var Sidebar_default = Sidebar;

// app/src/layout/MainLayout/MainLayout.tsx
var import_jsx_dev_runtime28 = require("react/jsx-dev-runtime"), filterNS = [
  {
    label: "Ph\xF2ng ban",
    name: "department",
    type: "select",
    object: ["A", "B", "C"]
  },
  {
    label: "V\u1ECB tr\xED",
    name: "vitri",
    type: "select",
    object: ["A", "B", "C"]
  },
  {
    label: "T\xEAn nh\xE2n vi\xEAn",
    name: "name",
    type: "input"
  }
], filterRQ = [
  {
    label: "RQPh\xF2ng ban",
    name: "department",
    type: "select",
    object: ["A", "B", "C"]
  },
  {
    label: "RQV\u1ECB tr\xED",
    name: "vitri",
    type: "select",
    object: ["A", "B", "C"]
  },
  {
    label: "RQT\xEAn nh\xE2n vi\xEAn",
    name: "name",
    type: "input"
  }
];
function MainLayout() {
  let location = (0, import_react9.useLocation)(), [filter, setFilter] = (0, import_react10.useState)([]);
  return (0, import_react10.useEffect)(() => {
    location.pathname === "/employee" && setFilter(filterNS), location.pathname === "/request" && setFilter(filterRQ);
  }, [location.pathname]), /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(Filter_default2, { filter, children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(Sidebar_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_react9.Outlet, {}, void 0, !1, {
    fileName: "app/src/layout/MainLayout/MainLayout.tsx",
    lineNumber: 54,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/src/layout/MainLayout/MainLayout.tsx",
    lineNumber: 53,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/src/layout/MainLayout/MainLayout.tsx",
    lineNumber: 52,
    columnNumber: 5
  }, this);
}
var MainLayout_default = MainLayout;

// app/routes/__private.tsx
var import_jsx_dev_runtime29 = require("react/jsx-dev-runtime");
async function requireUserSession(request2) {
  let session = await getSession(request2.headers.get("cookie"));
  if (!session.get("token"))
    throw (0, import_node3.redirect)("/login", 302);
  return { token: session.get("token"), username: session.get("username") };
}
var loader = async ({ request: request2, params }) => {
  let token = await requireUserSession(request2);
  return (0, import_node3.json)(token);
};
function Private() {
  let data = (0, import_react11.useLoaderData)(), setUserInfo = (0, import_recoil6.useSetRecoilState)(userInfo);
  return (0, import_react12.useEffect)(() => {
    setUserInfo(data);
  }, [data, setUserInfo]), /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(MainLayout_default, {}, void 0, !1, {
    fileName: "app/routes/__private.tsx",
    lineNumber: 39,
    columnNumber: 5
  }, this);
}

// app/routes/__private/attendance.tsx
var attendance_exports = {};
__export(attendance_exports, {
  default: () => attendance
});

// app/src/ui/Table.tsx
var import_react14 = require("react"), import_recoil7 = require("recoil");

// app/src/hooks/useSortableTable.tsx
var import_react13 = require("react"), useSortableTable = (data) => {
  let [tableData, setTableData] = (0, import_react13.useState)(data);
  return [tableData, (sortField, sortOrder) => {
    if (sortField) {
      let sorted = [...tableData].sort((a, b) => a[sortField] === null ? 1 : b[sortField] === null ? -1 : a[sortField] === null && b[sortField] === null ? 0 : a[sortField].toString().localeCompare(b[sortField].toString(), {
        numeric: !0
      }) * (sortOrder === "asc" ? 1 : -1));
      setTableData(sorted);
    }
  }];
};

// app/src/ui/Table.tsx
var import_jsx_dev_runtime30 = require("react/jsx-dev-runtime"), Table = ({ title, columns: columns4, dataSource: dataSource4 }) => {
  let [sortField, setSortField] = (0, import_react14.useState)(""), [order, setOrder] = (0, import_react14.useState)("asc"), handleSortingChange = (accessor) => {
    let sortOrder = accessor === sortField && order === "asc" ? "desc" : "asc";
    setSortField(accessor), setOrder(sortOrder), handleSorting(accessor, sortOrder);
  }, setCheck = (0, import_recoil7.useSetRecoilState)(filterInfo), handleFilter = () => {
    setCheck(!0);
  }, [tableData, handleSorting] = useSortableTable(dataSource4);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "card w-full bg-base-100", children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "card-body", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "mb-4 flex items-center justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("h2", { className: "card-title mb-4", children: title }, void 0, !1, {
        fileName: "app/src/ui/Table.tsx",
        lineNumber: 44,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "flex flex-row items-center space-x-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("span", { className: "flex relative w-full", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "left-3 absolute top-2/4 translate-y-[-50%]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(Search_default, {}, void 0, !1, {
            fileName: "app/src/ui/Table.tsx",
            lineNumber: 49,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/src/ui/Table.tsx",
            lineNumber: 48,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
            "input",
            {
              type: "text",
              placeholder: "Search here",
              className: "input input-bordered w-52 max-w-xs h-9 px-[2.125rem] focus:ring-indigo-600 focus:border-indigo-600"
            },
            void 0,
            !1,
            {
              fileName: "app/src/ui/Table.tsx",
              lineNumber: 51,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/src/ui/Table.tsx",
          lineNumber: 47,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
          Button_default,
          {
            className: "btn-sm btn h-9 w-fit justify-start border border-gray-300 bg-white text-gray-600 hover:border-gray-500 hover:bg-gray-50",
            iconStart: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(Filter_default, {}, void 0, !1, {
              fileName: "app/src/ui/Table.tsx",
              lineNumber: 59,
              columnNumber: 26
            }, this),
            onClick: handleFilter,
            children: "Filter"
          },
          void 0,
          !1,
          {
            fileName: "app/src/ui/Table.tsx",
            lineNumber: 57,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
          Button_default,
          {
            className: "btn-sm btn  h-9 w-fit justify-start bg-indigo-600 text-white hover:bg-indigo-500",
            iconStart: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(Add_default, {}, void 0, !1, {
              fileName: "app/src/ui/Table.tsx",
              lineNumber: 66,
              columnNumber: 26
            }, this),
            onClick: handleFilter,
            children: "Add"
          },
          void 0,
          !1,
          {
            fileName: "app/src/ui/Table.tsx",
            lineNumber: 64,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/src/ui/Table.tsx",
        lineNumber: 46,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/src/ui/Table.tsx",
      lineNumber: 43,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "card-actions", children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "h-[50vh] w-full overflow-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("table", { className: "table-compact w-full table-auto border-collapse text-left text-sm", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("thead", { className: "sticky top-0 border-b-2 border-t-gray-500 bg-gray-50 uppercase text-gray-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("th", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("label", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("input", { type: "checkbox", className: "checkbox" }, void 0, !1, {
          fileName: "app/src/ui/Table.tsx",
          lineNumber: 81,
          columnNumber: 23
        }, this) }, void 0, !1, {
          fileName: "app/src/ui/Table.tsx",
          lineNumber: 80,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/src/ui/Table.tsx",
          lineNumber: 79,
          columnNumber: 19
        }, this),
        columns4 == null ? void 0 : columns4.map((col) => /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("th", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
          "div",
          {
            className: col.sort ? "cursor-pointer" : "",
            onClick: col.sort ? () => handleSortingChange(col.key) : void 0,
            children: [
              col.name,
              col.sort ? /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("span", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "inline-flex", children: sortField === col.key && order === "asc" ? /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(SortUp_default, {}, void 0, !1, {
                fileName: "app/src/ui/Table.tsx",
                lineNumber: 99,
                columnNumber: 33
              }, this) : sortField === col.key && order === "desc" ? /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(SortDown_default, {}, void 0, !1, {
                fileName: "app/src/ui/Table.tsx",
                lineNumber: 101,
                columnNumber: 33
              }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(Sort_default, {}, void 0, !1, {
                fileName: "app/src/ui/Table.tsx",
                lineNumber: 103,
                columnNumber: 33
              }, this) }, void 0, !1, {
                fileName: "app/src/ui/Table.tsx",
                lineNumber: 97,
                columnNumber: 29
              }, this) }, void 0, !1, {
                fileName: "app/src/ui/Table.tsx",
                lineNumber: 96,
                columnNumber: 27
              }, this) : ""
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/src/ui/Table.tsx",
            lineNumber: 86,
            columnNumber: 23
          },
          this
        ) }, col.key, !1, {
          fileName: "app/src/ui/Table.tsx",
          lineNumber: 85,
          columnNumber: 21
        }, this)),
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("th", {}, void 0, !1, {
          fileName: "app/src/ui/Table.tsx",
          lineNumber: 113,
          columnNumber: 19
        }, this)
      ] }, void 0, !0, {
        fileName: "app/src/ui/Table.tsx",
        lineNumber: 78,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/src/ui/Table.tsx",
        lineNumber: 77,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("tbody", { children: tableData.map((data) => /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
        "tr",
        {
          className: "border-b border-gray-200 hover:bg-gray-50",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("th", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("label", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("input", { type: "checkbox", className: "checkbox" }, void 0, !1, {
              fileName: "app/src/ui/Table.tsx",
              lineNumber: 124,
              columnNumber: 25
            }, this) }, void 0, !1, {
              fileName: "app/src/ui/Table.tsx",
              lineNumber: 123,
              columnNumber: 23
            }, this) }, void 0, !1, {
              fileName: "app/src/ui/Table.tsx",
              lineNumber: 122,
              columnNumber: 21
            }, this),
            Object.keys(data).map((key) => /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("td", { children: data[key] }, key, !1, {
              fileName: "app/src/ui/Table.tsx",
              lineNumber: 128,
              columnNumber: 23
            }, this)),
            /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("th", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "flex justify-end text-lg", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("span", { className: "cursor-pointer p-2 hover:text-indigo-600", children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(Edit_default, {}, void 0, !1, {
                fileName: "app/src/ui/Table.tsx",
                lineNumber: 133,
                columnNumber: 27
              }, this) }, void 0, !1, {
                fileName: "app/src/ui/Table.tsx",
                lineNumber: 132,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("span", { className: "cursor-pointer p-2 hover:text-red-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(Delete_default, {}, void 0, !1, {
                fileName: "app/src/ui/Table.tsx",
                lineNumber: 136,
                columnNumber: 27
              }, this) }, void 0, !1, {
                fileName: "app/src/ui/Table.tsx",
                lineNumber: 135,
                columnNumber: 25
              }, this)
            ] }, void 0, !0, {
              fileName: "app/src/ui/Table.tsx",
              lineNumber: 131,
              columnNumber: 23
            }, this) }, void 0, !1, {
              fileName: "app/src/ui/Table.tsx",
              lineNumber: 130,
              columnNumber: 21
            }, this)
          ]
        },
        data.id,
        !0,
        {
          fileName: "app/src/ui/Table.tsx",
          lineNumber: 118,
          columnNumber: 19
        },
        this
      )) }, void 0, !1, {
        fileName: "app/src/ui/Table.tsx",
        lineNumber: 116,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/src/ui/Table.tsx",
      lineNumber: 76,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/src/ui/Table.tsx",
      lineNumber: 75,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/src/ui/Table.tsx",
      lineNumber: 74,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/src/ui/Table.tsx",
    lineNumber: 42,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/src/ui/Table.tsx",
    lineNumber: 41,
    columnNumber: 5
  }, this);
}, Table_default = Table;

// app/src/pages/Attendance/index.tsx
var import_jsx_dev_runtime31 = require("react/jsx-dev-runtime"), columns = [
  {
    name: "M\xE3 NS",
    sort: !1,
    key: "id"
  },
  {
    name: "H\u1ECD v\xE0 t\xEAn",
    sort: !1,
    key: "name"
  },
  {
    name: "Ph\xF2ng ban",
    sort: !0,
    key: "department"
  },
  {
    name: "V\u1ECB tr\xED",
    sort: !0,
    key: "position"
  },
  {
    name: "Ch\u1EE9c v\u1EE5",
    sort: !0,
    key: "role"
  },
  {
    name: "H\u1ECDc v\u1EA5n",
    sort: !0,
    key: "hv"
  },
  {
    name: "L\u01B0\u01A1ng",
    sort: !0,
    key: "luong"
  },
  {
    name: "Ng\xE0y sinh",
    sort: !1,
    key: "dob"
  },
  {
    name: "Ng\xE0y v\xE0o",
    sort: !1,
    key: "date"
  },
  {
    name: "Gi\u1EDBi t\xEDnh",
    sort: !0,
    key: "gender"
  },
  {
    name: "Ng\xE0y t\u1EA1o",
    sort: !1,
    key: "createAt"
  }
], dataSource = [
  {
    id: "1",
    name: "A",
    department: "PTSP",
    position: "DEv",
    role: "Team lead",
    hv: "\u0110\u1EA1i h\u1ECDc",
    luong: "7000000",
    dob: "11/11/2000",
    date: "12/10/2022",
    gender: "male",
    createAt: "12/12/2022"
  },
  {
    id: "2",
    name: "A",
    department: "PTSP",
    position: "DEv",
    role: "Team lead",
    hv: "\u0110\u1EA1i h\u1ECDc",
    luong: "7000000",
    dob: "11/11/2000",
    date: "12/10/2022",
    gender: "male",
    createAt: "12/12/2022"
  }
];
function Attendance() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
    Table_default,
    {
      title: "Danh s\xE1ch nh\xE2n s\u1EF1",
      columns,
      dataSource
    },
    void 0,
    !1,
    {
      fileName: "app/src/pages/Attendance/index.tsx",
      lineNumber: 90,
      columnNumber: 5
    },
    this
  );
}

// app/routes/__private/attendance.tsx
var import_jsx_dev_runtime32 = require("react/jsx-dev-runtime");
function attendance() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(Attendance, {}, void 0, !1, {
    fileName: "app/routes/__private/attendance.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/__private/check-in.tsx
var check_in_exports = {};
__export(check_in_exports, {
  default: () => check_in_default,
  meta: () => meta2
});

// app/src/pages/CheckIn/index.tsx
var import_react16 = require("react"), import_recoil10 = require("recoil");

// app/src/recoil_state/checkIn.ts
var import_recoil8 = require("recoil"), imgUser = (0, import_recoil8.atom)({
  key: "imgCheckin",
  default: null
});

// app/src/ui/ButtonLink.tsx
var import_clsx5 = __toESM(require("clsx")), import_jsx_dev_runtime33 = require("react/jsx-dev-runtime"), ButtonLink = ({
  label,
  className,
  loading = !1,
  iconEnd,
  iconStart,
  children,
  onClick,
  id,
  disabled
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
  "label",
  {
    htmlFor: disabled ? "" : id,
    className: (0, import_clsx5.default)(className, "btn btn-primary gap-x-2 rounded-md", {
      "loading bg-base-300 text-primary": loading,
      "no-animation cursor-not-allowed border border-solid border-[#999999] bg-[#cccccc] text-[#666666] hover:bg-[#cccccc] hover:border-[#999999]": disabled
    }),
    onClick: () => {
      disabled || onClick();
    },
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
    fileName: "app/src/ui/ButtonLink.tsx",
    lineNumber: 28,
    columnNumber: 5
  },
  this
), ButtonLink_default = ButtonLink;

// app/src/ui/Modal.tsx
var import_jsx_dev_runtime34 = require("react/jsx-dev-runtime"), Modal = ({
  children,
  nextCancelButton,
  id,
  handleCancel,
  customCancel
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(import_jsx_dev_runtime34.Fragment, { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("input", { type: "checkbox", id, className: "modal-toggle" }, void 0, !1, {
    fileName: "app/src/ui/Modal.tsx",
    lineNumber: 21,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "modal", children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "rounded-lg bg-white", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "px-6 pt-8", children: [
      " ",
      children
    ] }, void 0, !0, {
      fileName: "app/src/ui/Modal.tsx",
      lineNumber: 24,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "modal-action flex bg-[#f3f4f6]  rounded-br-lg rounded-bl-lg px-6 py-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(
        "label",
        {
          htmlFor: id,
          className: "border bg-white border-gray-300 rounded-md text-sm px-3 py-2 font-semibold whitespace-nowrap mr-2",
          onClick: handleCancel,
          children: customCancel || "Cancel"
        },
        void 0,
        !1,
        {
          fileName: "app/src/ui/Modal.tsx",
          lineNumber: 26,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "", children: [
        " ",
        nextCancelButton
      ] }, void 0, !0, {
        fileName: "app/src/ui/Modal.tsx",
        lineNumber: 33,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/src/ui/Modal.tsx",
      lineNumber: 25,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/src/ui/Modal.tsx",
    lineNumber: 23,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/src/ui/Modal.tsx",
    lineNumber: 22,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/src/ui/Modal.tsx",
  lineNumber: 20,
  columnNumber: 5
}, this), Modal_default = Modal;

// app/src/ui/SurFace.tsx
var import_clsx6 = __toESM(require("clsx")), import_jsx_dev_runtime35 = require("react/jsx-dev-runtime"), SurFace = ({ children, className }) => /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
  "div",
  {
    className: (0, import_clsx6.default)(
      className,
      "w-full rounded-md border-2 border-[#e5e7eb] py-6 px-5 "
    ),
    children
  },
  void 0,
  !1,
  {
    fileName: "app/src/ui/SurFace.tsx",
    lineNumber: 11,
    columnNumber: 5
  },
  this
), SurFace_default = SurFace;

// app/src/pages/CheckIn/components/WebcamCapture.tsx
var import_react15 = require("react"), import_react_webcam = __toESM(require("react-webcam")), import_recoil9 = require("recoil");
var import_jsx_dev_runtime36 = require("react/jsx-dev-runtime"), WebcamCapture = () => {
  let setDataImg = (0, import_recoil9.useSetRecoilState)(imgUser), dataImg = (0, import_recoil9.useRecoilValue)(imgUser), webcamRef = (0, import_react15.useRef)(), [imgSrc, setImgSrc] = (0, import_react15.useState)(null), capture = (0, import_react15.useCallback)(() => {
    var _a;
    let imageSrc = (_a = webcamRef == null ? void 0 : webcamRef.current) == null ? void 0 : _a.getScreenshot();
    setImgSrc(imageSrc), setDataImg(imageSrc);
  }, [webcamRef, setDataImg, setImgSrc]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_jsx_dev_runtime36.Fragment, { children: dataImg ? /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "flex flex-col justify-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("img", { src: imgSrc }, void 0, !1, {
      fileName: "app/src/pages/CheckIn/components/WebcamCapture.tsx",
      lineNumber: 23,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(
      "label",
      {
        htmlFor: "modal-check-in",
        className: "btn btn-primary mt-2 rounded-md",
        onClick: () => {
          setDataImg(imgSrc);
        },
        children: "D\xF9ng \u1EA3nh n\xE0y"
      },
      void 0,
      !1,
      {
        fileName: "app/src/pages/CheckIn/components/WebcamCapture.tsx",
        lineNumber: 24,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(
      Button_default,
      {
        className: "mt-2",
        onClick: () => {
          setDataImg(null);
        },
        children: "Ch\u1EE5p l\u1EA1i"
      },
      void 0,
      !1,
      {
        fileName: "app/src/pages/CheckIn/components/WebcamCapture.tsx",
        lineNumber: 34,
        columnNumber: 11
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/src/pages/CheckIn/components/WebcamCapture.tsx",
    lineNumber: 22,
    columnNumber: 9
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "flex flex-col justify-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_react_webcam.default, { audio: !1, ref: webcamRef, screenshotFormat: "image/jpeg" }, void 0, !1, {
      fileName: "app/src/pages/CheckIn/components/WebcamCapture.tsx",
      lineNumber: 45,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(Button_default, { className: "mt-2", onClick: capture, children: "Ch\u1EE5p" }, void 0, !1, {
      fileName: "app/src/pages/CheckIn/components/WebcamCapture.tsx",
      lineNumber: 47,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/src/pages/CheckIn/components/WebcamCapture.tsx",
    lineNumber: 44,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/src/pages/CheckIn/components/WebcamCapture.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}, WebcamCapture_default = WebcamCapture;

// app/src/pages/CheckIn/index.tsx
var import_jsx_dev_runtime37 = require("react/jsx-dev-runtime");
function CheckIn() {
  let [location, setLocation] = (0, import_react16.useState)({
    Longitude: NaN,
    Latitude: NaN
  }), GetLocation = () => {
    let result = { Latitude: NaN, Longitude: NaN };
    navigator.geolocation.getCurrentPosition((position) => {
      result.Latitude = position.coords.latitude, result.Longitude = position.coords.longitude, setLocation({ Latitude: result.Latitude, Longitude: result.Longitude });
    });
  }, [showCamera, setShowCamera] = (0, import_react16.useState)(!1), dataImg = (0, import_recoil10.useRecoilValue)(imgUser), setDataImg = (0, import_recoil10.useSetRecoilState)(imgUser), [check_in, setCheck_in] = (0, import_react16.useState)(!0), today = new Date(), onSubmit = () => {
    console.log(location, dataImg);
  }, handleCheckboxChange = () => {
    setCheck_in(!check_in);
  };
  return (0, import_react16.useEffect)(() => {
    console.log(location);
  }, [location]), /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { className: "container mx-auto w-full mt-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(Button_default, { onClick: () => {
      GetLocation();
    }, children: "\u0110\u1ECBnh v\u1ECB l\u1EA1i" }, void 0, !1, {
      fileName: "app/src/pages/CheckIn/index.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(SurFace_default, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { className: "flex justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("h1", { className: "mt-[8px] text-3xl font-bold", children: "Check In" }, void 0, !1, {
          fileName: "app/src/pages/CheckIn/index.tsx",
          lineNumber: 52,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("h1", { children: location.Latitude }, void 0, !1, {
          fileName: "app/src/pages/CheckIn/index.tsx",
          lineNumber: 53,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("h1", { children: location.Longitude }, void 0, !1, {
          fileName: "app/src/pages/CheckIn/index.tsx",
          lineNumber: 54,
          columnNumber: 11
        }, this),
        check_in ? /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(SurFace_default, { className: "w-[280px] bg-[#ecfdf5]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("span", { className: "text-[#10b981]", children: "B\u1EA1n \u0111\xE3 check-in l\xFAc 8:34:55 ng\xE0y 29/07/2022 th\xE0nh c\xF4ng!" }, void 0, !1, {
          fileName: "app/src/pages/CheckIn/index.tsx",
          lineNumber: 64,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/src/pages/CheckIn/index.tsx",
          lineNumber: 63,
          columnNumber: 13
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(SurFace_default, { className: "w-[500px] bg-[#fee2e2]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("span", { className: "text-[#dc2626]", children: `Hi\u1EC7n t\u1EA1i ${today} b\u1EA1n ch\u01B0a check-in, vui l\xF2ng check-in tr\u01B0\u1EDBc khi b\u1EAFt
                \u0111\u1EA7u c\xF4ng vi\u1EC7c!` }, void 0, !1, {
          fileName: "app/src/pages/CheckIn/index.tsx",
          lineNumber: 57,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/src/pages/CheckIn/index.tsx",
          lineNumber: 56,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/src/pages/CheckIn/index.tsx",
        lineNumber: 51,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { className: "mt-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(SurFace_default, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("h1", { className: "mb-1 text-lg font-semibold", children: "Ch\u1EE5p h\xECnh" }, void 0, !1, {
            fileName: "app/src/pages/CheckIn/index.tsx",
            lineNumber: 72,
            columnNumber: 13
          }, this),
          dataImg ? /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { className: "flex flex-col justify-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { className: "w-[300px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("img", { src: dataImg, alt: "checkInImg" }, void 0, !1, {
              fileName: "app/src/pages/CheckIn/index.tsx",
              lineNumber: 76,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/src/pages/CheckIn/index.tsx",
              lineNumber: 75,
              columnNumber: 17
            }, this),
            !check_in && /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(
              ButtonLink_default,
              {
                id: "modal-check-in",
                className: "w-[120px] mt-1 border-dashed",
                children: "Ch\u1EE5p l\u1EA1i"
              },
              void 0,
              !1,
              {
                fileName: "app/src/pages/CheckIn/index.tsx",
                lineNumber: 79,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/src/pages/CheckIn/index.tsx",
            lineNumber: 74,
            columnNumber: 15
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(
            "div",
            {
              className: `relative h-[200px] w-[200px] border-2 border-dashed cursor-pointer rounded-lg hover:border-indigo-600
                  `,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(
                "label",
                {
                  onClick: () => {
                    setShowCamera(!0);
                  },
                  htmlFor: "modal-check-in",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { className: "flex h-full flex-col items-center justify-center", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("img", { src: "/assets/img/upload.png", alt: "" }, void 0, !1, {
                      fileName: "app/src/pages/CheckIn/index.tsx",
                      lineNumber: 99,
                      columnNumber: 21
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("span", { className: "text-gray-790 font-semibold", children: "Click open your camera" }, void 0, !1, {
                      fileName: "app/src/pages/CheckIn/index.tsx",
                      lineNumber: 100,
                      columnNumber: 21
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "app/src/pages/CheckIn/index.tsx",
                    lineNumber: 98,
                    columnNumber: 19
                  }, this)
                },
                void 0,
                !1,
                {
                  fileName: "app/src/pages/CheckIn/index.tsx",
                  lineNumber: 92,
                  columnNumber: 17
                },
                this
              )
            },
            void 0,
            !1,
            {
              fileName: "app/src/pages/CheckIn/index.tsx",
              lineNumber: 88,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/src/pages/CheckIn/index.tsx",
          lineNumber: 71,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(
          Modal_default,
          {
            id: "modal-check-in",
            handleCancel: () => {
              setDataImg(null), setShowCamera(!1);
            },
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { children: showCamera && /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(WebcamCapture_default, {}, void 0, !1, {
              fileName: "app/src/pages/CheckIn/index.tsx",
              lineNumber: 115,
              columnNumber: 33
            }, this) }, void 0, !1, {
              fileName: "app/src/pages/CheckIn/index.tsx",
              lineNumber: 115,
              columnNumber: 13
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/src/pages/CheckIn/index.tsx",
            lineNumber: 108,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/src/pages/CheckIn/index.tsx",
        lineNumber: 70,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(SurFace_default, { className: "mt-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { className: "flex justify-between", children: /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("h1", { className: "font-semibold text-lg mb-1", children: "GPS" }, void 0, !1, {
          fileName: "app/src/pages/CheckIn/index.tsx",
          lineNumber: 120,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/src/pages/CheckIn/index.tsx",
          lineNumber: 119,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { className: "h-60 flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("h1", { className: "my-auto font-semibold text-lg", children: "MAP" }, void 0, !1, {
          fileName: "app/src/pages/CheckIn/index.tsx",
          lineNumber: 123,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/src/pages/CheckIn/index.tsx",
          lineNumber: 122,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/src/pages/CheckIn/index.tsx",
        lineNumber: 118,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { className: "text-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(
          Modal_default,
          {
            id: "modal-btn-check-in-img",
            customCancel: "H\u1EE7y",
            nextCancelButton: /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("button", { className: "whitespace-nowrap rounded-md border border-gray-300 bg-[#4f46e5] px-3 py-2 text-sm font-semibold text-[#fff] hover:opacity-90", children: "Ti\u1EBFp t\u1EE5c" }, void 0, !1, {
              fileName: "app/src/pages/CheckIn/index.tsx",
              lineNumber: 131,
              columnNumber: 15
            }, this),
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { className: "flex flex-row", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { className: "flex h-fit rounded-full bg-[#fee2e2] p-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(Warning_default, { className: "" }, void 0, !1, {
                fileName: "app/src/pages/CheckIn/index.tsx",
                lineNumber: 138,
                columnNumber: 17
              }, this) }, void 0, !1, {
                fileName: "app/src/pages/CheckIn/index.tsx",
                lineNumber: 137,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { className: "ml-4 text-left", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("p", { className: "font-semibold mb-3 text-lg", children: "\u1EA2nh kh\xF4ng h\u1EE3p l\u1EC7, ti\u1EBFp t\u1EE5c check-in?" }, void 0, !1, {
                  fileName: "app/src/pages/CheckIn/index.tsx",
                  lineNumber: 141,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("p", { className: "text-sm leading-6", children: "N\u1EBFu ti\u1EBFp t\u1EE5c s\u1EED d\u1EE5ng \u1EA3nh n\xE0y, b\u1EA1n s\u1EBD check-in v\u1EDBi h\xECnh \u1EA3nh b\u1EA5t th\u01B0\u1EDDng!" }, void 0, !1, {
                  fileName: "app/src/pages/CheckIn/index.tsx",
                  lineNumber: 144,
                  columnNumber: 17
                }, this)
              ] }, void 0, !0, {
                fileName: "app/src/pages/CheckIn/index.tsx",
                lineNumber: 140,
                columnNumber: 15
              }, this)
            ] }, void 0, !0, {
              fileName: "app/src/pages/CheckIn/index.tsx",
              lineNumber: 136,
              columnNumber: 13
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/src/pages/CheckIn/index.tsx",
            lineNumber: 127,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(
          Modal_default,
          {
            id: "modal-btn-check-in-location",
            customCancel: "H\u1EE7y",
            nextCancelButton: /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("button", { className: "whitespace-nowrap rounded-md border border-gray-300 bg-[#4f46e5] px-3 py-2 text-sm font-semibold text-[#fff] hover:opacity-90", children: "Ti\u1EBFp t\u1EE5c" }, void 0, !1, {
              fileName: "app/src/pages/CheckIn/index.tsx",
              lineNumber: 155,
              columnNumber: 15
            }, this),
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { className: "flex flex-row w-[520px]", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { className: "flex h-fit rounded-full bg-[#fee2e2] p-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(Warning_default, { className: "" }, void 0, !1, {
                fileName: "app/src/pages/CheckIn/index.tsx",
                lineNumber: 162,
                columnNumber: 17
              }, this) }, void 0, !1, {
                fileName: "app/src/pages/CheckIn/index.tsx",
                lineNumber: 161,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { className: "ml-4 text-left", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("p", { className: "font-semibold mb-3 text-lg", children: "V\u1ECB tr\xED c\u1EE7a b\u1EA1n kh\xF4ng h\u1EE3p l\u1EC7, kho\u1EA3ng c\xE1ch t\u1EDBi VarMeta Office qu\xE1 xa, ti\u1EBFp t\u1EE5c check-in?" }, void 0, !1, {
                  fileName: "app/src/pages/CheckIn/index.tsx",
                  lineNumber: 165,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("p", { className: "text-sm leading-6", children: "N\u1EBFu ti\u1EBFp t\u1EE5c check-in, b\u1EA1n s\u1EBD check-in v\u1EDBi v\u1ECB tr\xED b\u1EA5t th\u01B0\u1EDDng!" }, void 0, !1, {
                  fileName: "app/src/pages/CheckIn/index.tsx",
                  lineNumber: 169,
                  columnNumber: 17
                }, this)
              ] }, void 0, !0, {
                fileName: "app/src/pages/CheckIn/index.tsx",
                lineNumber: 164,
                columnNumber: 15
              }, this)
            ] }, void 0, !0, {
              fileName: "app/src/pages/CheckIn/index.tsx",
              lineNumber: 160,
              columnNumber: 13
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/src/pages/CheckIn/index.tsx",
            lineNumber: 151,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(
          ButtonLink_default,
          {
            id: "modal-btn-check-in-location",
            onClick: onSubmit,
            className: "rounded-md mt-4",
            disabled: check_in,
            children: "Check-in"
          },
          void 0,
          !1,
          {
            fileName: "app/src/pages/CheckIn/index.tsx",
            lineNumber: 176,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/src/pages/CheckIn/index.tsx",
        lineNumber: 126,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/src/pages/CheckIn/index.tsx",
      lineNumber: 50,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/src/pages/CheckIn/index.tsx",
    lineNumber: 47,
    columnNumber: 5
  }, this);
}

// app/routes/__private/check-in.tsx
var import_jsx_dev_runtime38 = require("react/jsx-dev-runtime"), meta2 = () => ({
  title: "Check In"
}), Index = () => /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(CheckIn, {}, void 0, !1, {
  fileName: "app/routes/__private/check-in.tsx",
  lineNumber: 10,
  columnNumber: 10
}, this), check_in_default = Index;

// app/routes/__private/employee.tsx
var employee_exports = {};
__export(employee_exports, {
  default: () => employee
});

// app/src/pages/Employee/index.tsx
var import_jsx_dev_runtime39 = require("react/jsx-dev-runtime"), columns2 = [
  {
    name: "M\xE3 NS",
    sort: !1,
    key: "id"
  },
  {
    name: "H\u1ECD v\xE0 t\xEAn",
    sort: !1,
    key: "name"
  },
  {
    name: "Ph\xF2ng ban",
    sort: !0,
    key: "department"
  },
  {
    name: "V\u1ECB tr\xED",
    sort: !0,
    key: "position"
  },
  {
    name: "Ch\u1EE9c v\u1EE5",
    sort: !0,
    key: "role"
  },
  {
    name: "H\u1ECDc v\u1EA5n",
    sort: !0,
    key: "hv"
  },
  {
    name: "L\u01B0\u01A1ng",
    sort: !0,
    key: "luong"
  },
  {
    name: "Ng\xE0y sinh",
    sort: !1,
    key: "dob"
  },
  {
    name: "Ng\xE0y v\xE0o",
    sort: !1,
    key: "date"
  },
  {
    name: "Gi\u1EDBi t\xEDnh",
    sort: !0,
    key: "gender"
  },
  {
    name: "Ng\xE0y t\u1EA1o",
    sort: !1,
    key: "createAt"
  }
], dataSource2 = [
  {
    id: "1",
    name: "A",
    department: "PTSA",
    position: "DEv",
    role: "Team lead",
    hv: "\u0110\u1EA1i h\u1ECDc",
    luong: "7000000",
    dob: "11/11/2000",
    date: "12/10/2022",
    gender: "male",
    createAt: "12/12/2022"
  },
  {
    id: "2",
    name: "A",
    department: "PTSP",
    position: "DEv",
    role: "Team lead",
    hv: "\u0110\u1EA1i h\u1ECDc",
    luong: "7000000",
    dob: "11/11/2000",
    date: "12/10/2022",
    gender: "male",
    createAt: "12/12/2022"
  }
];
function Employee() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "container mx-auto w-full mt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(SurFace_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(
    Table_default,
    {
      title: "Danh s\xE1ch nh\xE2n s\u1EF1",
      columns: columns2,
      dataSource: dataSource2
    },
    void 0,
    !1,
    {
      fileName: "app/src/pages/Employee/index.tsx",
      lineNumber: 93,
      columnNumber: 9
    },
    this
  ) }, void 0, !1, {
    fileName: "app/src/pages/Employee/index.tsx",
    lineNumber: 92,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/src/pages/Employee/index.tsx",
    lineNumber: 91,
    columnNumber: 5
  }, this);
}

// app/routes/__private/employee.tsx
var import_jsx_dev_runtime40 = require("react/jsx-dev-runtime");
function employee() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(Employee, {}, void 0, !1, {
    fileName: "app/routes/__private/employee.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/__private/request.tsx
var request_exports = {};
__export(request_exports, {
  default: () => request
});

// app/src/pages/Request/index.tsx
var import_jsx_dev_runtime41 = require("react/jsx-dev-runtime"), columns3 = [
  {
    name: "M\xE3 NS",
    sort: !1,
    key: "id"
  },
  {
    name: "H\u1ECD v\xE0 t\xEAn",
    sort: !1,
    key: "name"
  },
  {
    name: "Ph\xF2ng ban",
    sort: !0,
    key: "department"
  },
  {
    name: "V\u1ECB tr\xED",
    sort: !0,
    key: "position"
  },
  {
    name: "Th\u1EDDi gian",
    sort: !1,
    key: "dob"
  },
  {
    name: "Ngh\u1EC9 ph\xE9p",
    sort: !1,
    key: "a"
  }
], dataSource3 = [
  {
    id: "1",
    name: "A",
    department: "PTSP",
    position: "DEv",
    dob: "11/11/2000",
    a: "\u0110\xE3 duy\u1EC7t"
  },
  {
    id: "2",
    name: "A",
    department: "PTSP",
    position: "DEv",
    dob: "11/11/2000",
    a: "\u0110\xE3 duy\u1EC7t"
  }
];
function Request() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(
    Table_default,
    {
      title: "B\xE1o c\xE1o ch\u1EA5m c\xF4ng",
      columns: columns3,
      dataSource: dataSource3
    },
    void 0,
    !1,
    {
      fileName: "app/src/pages/Request/index.tsx",
      lineNumber: 56,
      columnNumber: 5
    },
    this
  );
}

// app/routes/__private/request.tsx
var import_jsx_dev_runtime42 = require("react/jsx-dev-runtime");
function request() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(Request, {}, void 0, !1, {
    fileName: "app/routes/__private/request.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/__private/ui-test.tsx
var ui_test_exports = {};
__export(ui_test_exports, {
  default: () => ui_test_default
});
var import_react_toastify2 = require("react-toastify"), yup2 = __toESM(require("yup"));
var import_jsx_dev_runtime43 = require("react/jsx-dev-runtime"), UiTest = () => {
  let resolver = useYupValidationResolver_default(
    yup2.object().shape({
      username: yup2.string().trim().min(3, "user name too short").max(256, "user name must be less than 256 characters").label("username"),
      password: yup2.string().trim().min(3, "password too short").max(50, "password must be less than 50 characters").label("password")
    })
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "container mx-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { children: "ui-test" }, void 0, !1, {
      fileName: "app/routes/__private/ui-test.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "flex items-start gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(Button_default, { className: "w-24", children: "2" }, void 0, !1, {
        fileName: "app/routes/__private/ui-test.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(Button_default, { className: "w-24", iconStart: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(Heart_default, {}, void 0, !1, {
        fileName: "app/routes/__private/ui-test.tsx",
        lineNumber: 31,
        columnNumber: 47
      }, this), children: "2" }, void 0, !1, {
        fileName: "app/routes/__private/ui-test.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(Button_default, { className: "w-24", iconEnd: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(Heart_default, {}, void 0, !1, {
        fileName: "app/routes/__private/ui-test.tsx",
        lineNumber: 34,
        columnNumber: 45
      }, this), label: "2" }, void 0, !1, {
        fileName: "app/routes/__private/ui-test.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(Button_default, { className: "w-24", iconEnd: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(Heart_default, {}, void 0, !1, {
        fileName: "app/routes/__private/ui-test.tsx",
        lineNumber: 35,
        columnNumber: 45
      }, this), label: "4", loading: !0 }, void 0, !1, {
        fileName: "app/routes/__private/ui-test.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(Button_default, { className: "w-24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(Heart_default, {}, void 0, !1, {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { children: "typo" }, void 0, !1, {
      fileName: "app/routes/__private/ui-test.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("article", { className: "prose", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("h1", { children: "Garlic bread with cheese: What the science tells us" }, void 0, !1, {
        fileName: "app/routes/__private/ui-test.tsx",
        lineNumber: 43,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("p", { children: "For years parents have espoused the health benefits of eating garlic bread with cheese to their children, with the food earning such an iconic status in our culture that kids will often dress up as warm, cheesy loaf for Halloween." }, void 0, !1, {
        fileName: "app/routes/__private/ui-test.tsx",
        lineNumber: 44,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("p", { children: "But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases springing up around the country." }, void 0, !1, {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { children: "Form" }, void 0, !1, {
      fileName: "app/routes/__private/ui-test.tsx",
      lineNumber: 56,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "mx-auto mt-5 w-1/2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(Form_default, { onSubmit: (data) => import_react_toastify2.toast.success(JSON.stringify(data)), className: "mx-auto w-1/2", resolver, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "space-y-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(TextInput, { name: "username" }, void 0, !1, {
          fileName: "app/routes/__private/ui-test.tsx",
          lineNumber: 60,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(Select, { name: "like", options: ["yes", "no"] }, void 0, !1, {
          fileName: "app/routes/__private/ui-test.tsx",
          lineNumber: 61,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/__private/ui-test.tsx",
        lineNumber: 59,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(PassWordInput, { name: "password" }, void 0, !1, {
        fileName: "app/routes/__private/ui-test.tsx",
        lineNumber: 63,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(Button_default, { className: "mt-8", children: "Submit" }, void 0, !1, {
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

// app/routes/__public.tsx
var public_exports = {};
__export(public_exports, {
  default: () => Private2
});
var import_react17 = require("@remix-run/react"), import_jsx_dev_runtime44 = require("react/jsx-dev-runtime");
function Private2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(import_react17.Outlet, {}, void 0, !1, {
    fileName: "app/routes/__public.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}

// app/routes/__public/__common.tsx
var common_exports = {};
__export(common_exports, {
  default: () => Private3
});
var import_react19 = require("@remix-run/react");

// app/src/layout/MainLayout/Navbar/index.tsx
var import_react18 = require("@remix-run/react");
var import_jsx_dev_runtime45 = require("react/jsx-dev-runtime");
function Navbar() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("div", { className: "navbar bg-primary", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("div", { className: "flex-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(import_react18.Link, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(
      Button_default,
      {
        className: "btn-ghost glass text-xl normal-case",
        iconStart: /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(Heart_default, {}, void 0, !1, {
          fileName: "app/src/layout/MainLayout/Navbar/index.tsx",
          lineNumber: 13,
          columnNumber: 24
        }, this),
        children: "Var-Management"
      },
      void 0,
      !1,
      {
        fileName: "app/src/layout/MainLayout/Navbar/index.tsx",
        lineNumber: 11,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/src/layout/MainLayout/Navbar/index.tsx",
      lineNumber: 10,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/src/layout/MainLayout/Navbar/index.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("div", { className: "flex-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(AuthSection, {}, void 0, !1, {
      fileName: "app/src/layout/MainLayout/Navbar/index.tsx",
      lineNumber: 20,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/src/layout/MainLayout/Navbar/index.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/src/layout/MainLayout/Navbar/index.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

// app/routes/__public/__common.tsx
var import_jsx_dev_runtime46 = require("react/jsx-dev-runtime");
function Private3() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(import_jsx_dev_runtime46.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(Navbar, {}, void 0, !1, {
      fileName: "app/routes/__public/__common.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(import_react19.Outlet, {}, void 0, !1, {
      fileName: "app/routes/__public/__common.tsx",
      lineNumber: 8,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/__public/__common.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

// app/routes/__public/__common/child.tsx
var child_exports = {};
__export(child_exports, {
  default: () => child,
  meta: () => meta3
});
var import_jsx_dev_runtime47 = require("react/jsx-dev-runtime"), meta3 = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
});
function child() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("div", { children: "this is child" }, void 0, !1, {
    fileName: "app/routes/__public/__common/child.tsx",
    lineNumber: 10,
    columnNumber: 10
  }, this);
}

// app/routes/__public/__common/index.tsx
var common_exports2 = {};
__export(common_exports2, {
  default: () => Index2
});
var import_jsx_dev_runtime48 = require("react/jsx-dev-runtime");
function Index2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)("div", { className: "custom-class w-full", children: "HOME Page" }, void 0, !1, {
    fileName: "app/routes/__public/__common/index.tsx",
    lineNumber: 2,
    columnNumber: 10
  }, this);
}

// app/routes/__public/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  action: () => action
});
var import_node4 = require("@remix-run/node");
var action = async ({ request: request2 }) => {
  let session = await getSession(request2.headers.get("Cookie"));
  return (0, import_node4.redirect)("/login?reLogin=true", {
    headers: {
      "Set-Cookie": await destroySession(session)
    }
  });
};

// app/routes/__public/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action2,
  default: () => Loginv2,
  loader: () => loader2
});
var import_node5 = require("@remix-run/node"), import_react20 = require("@remix-run/react"), import_clsx7 = __toESM(require("clsx")), import_react21 = require("react"), import_react_toastify3 = require("react-toastify"), import_recoil11 = require("recoil"), yup3 = __toESM(require("yup"));
var import_jsx_dev_runtime49 = require("react/jsx-dev-runtime"), loader2 = async function({ request: request2, params }) {
  let session = await getSession(request2.headers.get("Cookie"));
  if (new URL(request2.url).searchParams.get("reLogin"))
    return (0, import_node5.json)({ emptySession: !0 });
  if (session.has("token"))
    return (0, import_node5.redirect)("/");
  let data = {
    error: session.get("error"),
    username: session.get("username"),
    password: session.get("password")
  };
  return (0, import_node5.json)(data, {
    headers: {
      "Set-Cookie": await commitSession(session)
    }
  });
}, action2 = async function({ request: request2 }) {
  let session = await getSession(request2.headers.get("Cookie")), form = await request2.formData(), username = form.get("username"), password = form.get("password"), token = await validateCredentials({
    username: String(username),
    password: String(password),
    id: ""
  });
  return token == null ? (session.flash("error", "Invalid username/password"), session.flash("username", username), session.flash("password", password), (0, import_node5.redirect)("/login", {
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
function Loginv2() {
  let { error, username, password, emptySession } = (0, import_react20.useLoaderData)(), reset = (0, import_recoil11.useResetRecoilState)(userInfo), submit = (0, import_react20.useSubmit)(), initialValues = {
    username: "Abcxyz",
    password: "1234567"
  }, resolver = useYupValidationResolver_default(
    yup3.object().shape({
      username: yup3.string().trim().min(3, "User name too short").max(256, "User name must be less than 256 characters").label("Username"),
      password: yup3.string().trim().required().max(50, "password must be less than 50 characters").label("password")
    })
  );
  (0, import_react21.useEffect)(() => {
    emptySession && (reset(), typeof window < "u" && localStorage.removeItem("user"), (0, import_react_toastify3.toast)("You are logged out"));
  }, [emptySession, reset]), (0, import_react21.useEffect)(() => {
    (0, import_react_toastify3.toast)(error);
  }, [error, username, password]);
  let onSubmit = async (data, e) => {
    try {
      await submit(e.target, {
        replace: !0,
        method: "post"
      }), localStorage.setItem("user", data.username);
    } catch (error2) {
      (0, import_react_toastify3.toast)(error2.message);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("div", { className: "bg-[#f3f4f6] h-[calc(100vh)] flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("div", { className: "container mx-auto flex flex-col flex-auto items-center justify-center min-w-0 h-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("div", { className: "card w-[450px] card-shadow bg-[#fff] rounded-md drop-shadow-md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("div", { className: "p-[40px] ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(
    Form_default,
    {
      onSubmit,
      className: "mx-auto w-full",
      resolver,
      defaultValues: initialValues,
      mode: "onBlur",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(import_react20.Link, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("div", { className: "flex text-center justify-center pt-[16px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(VarLogo_default, {}, void 0, !1, {
          fileName: "app/routes/__public/login.tsx",
          lineNumber: 163,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/routes/__public/login.tsx",
          lineNumber: 162,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/__public/login.tsx",
          lineNumber: 161,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("h2", { className: "w-full flex justify-center font-semibold text-2xl", children: "Welcome back!" }, void 0, !1, {
            fileName: "app/routes/__public/login.tsx",
            lineNumber: 168,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/__public/login.tsx",
            lineNumber: 167,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("div", { className: "w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("h3", { className: "font-normal text-sm mb-[28px] text-[#6B7280] text-center", children: "Please enter your credentials to sign in!" }, void 0, !1, {
            fileName: "app/routes/__public/login.tsx",
            lineNumber: 173,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/__public/login.tsx",
            lineNumber: 172,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("div", { className: "mb-[32px]", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("div", { className: "mb-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(
                "label",
                {
                  htmlFor: "username",
                  className: "font-semibold opacity-70",
                  children: "User Name:"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/__public/login.tsx",
                  lineNumber: 180,
                  columnNumber: 23
                },
                this
              ) }, void 0, !1, {
                fileName: "app/routes/__public/login.tsx",
                lineNumber: 179,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(TextInput, { id: "username", name: "username" }, void 0, !1, {
                fileName: "app/routes/__public/login.tsx",
                lineNumber: 187,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/__public/login.tsx",
              lineNumber: 178,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("div", { className: "flex justify-between mb-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(
              "label",
              {
                htmlFor: "password",
                className: "font-semibold opacity-70",
                children: "Password:"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/__public/login.tsx",
                lineNumber: 190,
                columnNumber: 21
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/__public/login.tsx",
              lineNumber: 189,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(PassWordInput, { id: "password", name: "password" }, void 0, !1, {
              fileName: "app/routes/__public/login.tsx",
              lineNumber: 197,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("div", { className: "flex justify-between mt-[28px]", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("div", { className: "flex", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(
                  "input",
                  {
                    id: "rememberMe",
                    type: "checkbox",
                    className: (0, import_clsx7.default)(
                      "checkbox checkbox-sm mr-2 checkbox-primary"
                    )
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/__public/login.tsx",
                    lineNumber: 200,
                    columnNumber: 23
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("label", { htmlFor: "rememberMe", children: /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("span", { className: "label-text", children: "Remember me" }, void 0, !1, {
                  fileName: "app/routes/__public/login.tsx",
                  lineNumber: 208,
                  columnNumber: 25
                }, this) }, void 0, !1, {
                  fileName: "app/routes/__public/login.tsx",
                  lineNumber: 207,
                  columnNumber: 23
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/__public/login.tsx",
                lineNumber: 199,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(import_react20.Link, { to: "/", className: "text-[#228FA6] decoration-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("span", { className: "text-[rgba(79,70,229,var(--tw-text-opacity))]", children: "Forgot Password?" }, void 0, !1, {
                fileName: "app/routes/__public/login.tsx",
                lineNumber: 212,
                columnNumber: 23
              }, this) }, void 0, !1, {
                fileName: "app/routes/__public/login.tsx",
                lineNumber: 211,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/__public/login.tsx",
              lineNumber: 198,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(
              Button_default,
              {
                onClick: onSubmit,
                className: "mt-[20px] bg-[#4f46e5] border-none mb-[4px]",
                children: "Sign In"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/__public/login.tsx",
                lineNumber: 217,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("div", { className: "text-center flex justify-center mt-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("span", { className: "text-[#6B7280] text-sm", children: "Don't have an account yet?" }, void 0, !1, {
                fileName: "app/routes/__public/login.tsx",
                lineNumber: 224,
                columnNumber: 21
              }, this),
              "\xA0",
              /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("a", { href: "/", className: "text-[#4F46E5] text-sm", children: "Sign up" }, void 0, !1, {
                fileName: "app/routes/__public/login.tsx",
                lineNumber: 228,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/__public/login.tsx",
              lineNumber: 223,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/__public/login.tsx",
            lineNumber: 177,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/__public/login.tsx",
          lineNumber: 166,
          columnNumber: 15
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/__public/login.tsx",
      lineNumber: 154,
      columnNumber: 13
    },
    this
  ) }, void 0, !1, {
    fileName: "app/routes/__public/login.tsx",
    lineNumber: 153,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/routes/__public/login.tsx",
    lineNumber: 152,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/__public/login.tsx",
    lineNumber: 151,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/__public/login.tsx",
    lineNumber: 150,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "c89557fb", entry: { module: "/build/entry.client-AZBCWGSX.js", imports: ["/build/_shared/chunk-VCGUIM5T.js", "/build/_shared/chunk-GTNGNULT.js", "/build/_shared/chunk-VIPVJV6J.js", "/build/_shared/chunk-5KL4PAQL.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-BXEU63YV.js", imports: ["/build/_shared/chunk-XI2PPV4M.js", "/build/_shared/chunk-CJVKIGCM.js", "/build/_shared/chunk-6OU4J75P.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/__private": { id: "routes/__private", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/__private-SOH6XRLJ.js", imports: ["/build/_shared/chunk-TSLE2QBT.js", "/build/_shared/chunk-GLWAIFE6.js", "/build/_shared/chunk-KXVBJRZQ.js", "/build/_shared/chunk-AFJELVHT.js", "/build/_shared/chunk-3W2HLPIQ.js", "/build/_shared/chunk-IVRN7LCO.js", "/build/_shared/chunk-6BX4ZD7G.js", "/build/_shared/chunk-TFSG6JOI.js", "/build/_shared/chunk-TF3VKJDO.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__private/attendance": { id: "routes/__private/attendance", parentId: "routes/__private", path: "attendance", index: void 0, caseSensitive: void 0, module: "/build/routes/__private/attendance-VD34ZNN7.js", imports: ["/build/_shared/chunk-V3ZQNEBB.js", "/build/_shared/chunk-XI2PPV4M.js", "/build/_shared/chunk-6OU4J75P.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__private/check-in": { id: "routes/__private/check-in", parentId: "routes/__private", path: "check-in", index: void 0, caseSensitive: void 0, module: "/build/routes/__private/check-in-SKYJOP2I.js", imports: ["/build/_shared/chunk-YYFVUT7Z.js", "/build/_shared/chunk-XI2PPV4M.js", "/build/_shared/chunk-6OU4J75P.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__private/employee": { id: "routes/__private/employee", parentId: "routes/__private", path: "employee", index: void 0, caseSensitive: void 0, module: "/build/routes/__private/employee-2UH75PX3.js", imports: ["/build/_shared/chunk-YYFVUT7Z.js", "/build/_shared/chunk-V3ZQNEBB.js", "/build/_shared/chunk-XI2PPV4M.js", "/build/_shared/chunk-6OU4J75P.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__private/request": { id: "routes/__private/request", parentId: "routes/__private", path: "request", index: void 0, caseSensitive: void 0, module: "/build/routes/__private/request-LPWM5EFA.js", imports: ["/build/_shared/chunk-V3ZQNEBB.js", "/build/_shared/chunk-XI2PPV4M.js", "/build/_shared/chunk-6OU4J75P.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__private/ui-test": { id: "routes/__private/ui-test", parentId: "routes/__private", path: "ui-test", index: void 0, caseSensitive: void 0, module: "/build/routes/__private/ui-test-XOZ6XWX2.js", imports: ["/build/_shared/chunk-CJVKIGCM.js", "/build/_shared/chunk-6OU4J75P.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__public": { id: "routes/__public", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/__public-TALOCLK2.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__public/__common": { id: "routes/__public/__common", parentId: "routes/__public", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/__public/__common-HVCXITXN.js", imports: ["/build/_shared/chunk-TSLE2QBT.js", "/build/_shared/chunk-KXVBJRZQ.js", "/build/_shared/chunk-XI2PPV4M.js", "/build/_shared/chunk-6BX4ZD7G.js", "/build/_shared/chunk-TF3VKJDO.js", "/build/_shared/chunk-6OU4J75P.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__public/__common/child": { id: "routes/__public/__common/child", parentId: "routes/__public/__common", path: "child", index: void 0, caseSensitive: void 0, module: "/build/routes/__public/__common/child-CJUGGAIC.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__public/__common/index": { id: "routes/__public/__common/index", parentId: "routes/__public/__common", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/__public/__common/index-TKIOINF4.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__public/login": { id: "routes/__public/login", parentId: "routes/__public", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/__public/login-NPKPFYV5.js", imports: ["/build/_shared/chunk-GLWAIFE6.js", "/build/_shared/chunk-KXVBJRZQ.js", "/build/_shared/chunk-XI2PPV4M.js", "/build/_shared/chunk-CJVKIGCM.js", "/build/_shared/chunk-3W2HLPIQ.js", "/build/_shared/chunk-IVRN7LCO.js", "/build/_shared/chunk-6BX4ZD7G.js", "/build/_shared/chunk-TFSG6JOI.js", "/build/_shared/chunk-TF3VKJDO.js", "/build/_shared/chunk-6OU4J75P.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__public/logout": { id: "routes/__public/logout", parentId: "routes/__public", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/__public/logout-6DFRJ7O4.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-C89557FB.js" };

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
  "routes/__private/attendance": {
    id: "routes/__private/attendance",
    parentId: "routes/__private",
    path: "attendance",
    index: void 0,
    caseSensitive: void 0,
    module: attendance_exports
  },
  "routes/__private/check-in": {
    id: "routes/__private/check-in",
    parentId: "routes/__private",
    path: "check-in",
    index: void 0,
    caseSensitive: void 0,
    module: check_in_exports
  },
  "routes/__private/employee": {
    id: "routes/__private/employee",
    parentId: "routes/__private",
    path: "employee",
    index: void 0,
    caseSensitive: void 0,
    module: employee_exports
  },
  "routes/__private/request": {
    id: "routes/__private/request",
    parentId: "routes/__private",
    path: "request",
    index: void 0,
    caseSensitive: void 0,
    module: request_exports
  },
  "routes/__private/ui-test": {
    id: "routes/__private/ui-test",
    parentId: "routes/__private",
    path: "ui-test",
    index: void 0,
    caseSensitive: void 0,
    module: ui_test_exports
  },
  "routes/__public": {
    id: "routes/__public",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: public_exports
  },
  "routes/__public/__common": {
    id: "routes/__public/__common",
    parentId: "routes/__public",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: common_exports
  },
  "routes/__public/__common/child": {
    id: "routes/__public/__common/child",
    parentId: "routes/__public/__common",
    path: "child",
    index: void 0,
    caseSensitive: void 0,
    module: child_exports
  },
  "routes/__public/__common/index": {
    id: "routes/__public/__common/index",
    parentId: "routes/__public/__common",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: common_exports2
  },
  "routes/__public/logout": {
    id: "routes/__public/logout",
    parentId: "routes/__public",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/__public/login": {
    id: "routes/__public/login",
    parentId: "routes/__public",
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
