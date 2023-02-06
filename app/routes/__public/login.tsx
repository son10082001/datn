import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Link, useLoaderData, useSubmit } from "@remix-run/react";
import clsx from "clsx";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useResetRecoilState } from "recoil";
import * as yup from "yup";
import { commitSession, getSession } from "~/session.server";
import useYupValidationResolver from "~/src/hooks/useYupValidationResolver";
import { VarLogo } from "~/src/icons";

// import { GoogleIcon, Logo } from "~/src/icons";
import { userInfo } from "~/src/recoil_state/authState";
import Button from "~/src/ui/Button";
import Form from "~/src/ui/Form";
import { PassWordInput, TextInput } from "~/src/ui/Input";

interface IUser {
  id: string;
  username: string;
  password: string;
}

export const loader: LoaderFunction = async function ({ request, params }) {
  const session = await getSession(request.headers.get("Cookie"));
  const url = new URL(request.url);
  const query = url.searchParams.get("reLogin");

  if (query) {
    return json({ emptySession: true });
  }

  if (session.has("token")) {
    // Redirect to the home page if they are already signed in.
    return redirect("/");
  }

  const data = {
    error: session.get("error"),
    username: session.get("username"),
    password: session.get("password"),
  };

  return json(data, {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
};

export const action: ActionFunction = async function ({ request }) {
  const session = await getSession(request.headers.get("Cookie"));
  const form = await request.formData();
  const username = form.get("username");
  const password = form.get("password");

  const token = await validateCredentials({
    username: String(username),
    password: String(password),
    id: "",
  });
  if (token == null) {
    session.flash("error", "Invalid username/password");
    session.flash("username", username);
    session.flash("password", password);
    // Redirect back to the login page with errors.
    return redirect("/login", {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
      status: 302,
    });
  }

  session.set("token", token);

  // Login succeeded, send them to the home page.
  return redirect("/ui-test", {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
};

async function validateCredentials(params: IUser) {
  if (params.password === "1234567" && params.username === "Abcxyz") {
    return "access-token";
  }
  return null;
}

export default function Loginv2() {
  const { error, username, password, emptySession } = useLoaderData();
  const reset = useResetRecoilState(userInfo);
  const submit = useSubmit();
  const initialValues = {
    username: "Abcxyz",
    password: "1234567",
  };
  const resolver = useYupValidationResolver(
    yup.object().shape({
      username: yup
        .string()
        // .email()
        .trim()
        .min(3, "User name too short")
        .max(256, "User name must be less than 256 characters")
        .label("Username"),
      password: yup
        .string()
        .trim()
        .required()
        // .matches(uppercase, "Cần chữ in")
        // .matches(lowercase, "cần chữ thường")
        // .matches(number, "cần 1 số")
        // .min(8, "quá ngắn")
        .max(50, "password must be less than 50 characters")
        .label("password"),
    })
  );

  useEffect(() => {
    if (emptySession) {
      reset();
      if (typeof window !== "undefined") {
        localStorage.removeItem("user");
      }
      toast("You are logged out");
    }
  }, [emptySession, reset]);

  useEffect(() => {
    toast(error);
  }, [error, username, password]);

  const onSubmit = async (data: IUser, e: any) => {
    try {
      await submit(e.target, {
        replace: true,
        method: "post",
      });
      localStorage.setItem("user", data.username);
    } catch (error: any) {
      toast(error.message);
    }
  };

  return (
    <div className="bg-[#f3f4f6] h-[calc(100vh)] flex items-center">
      <div className="container mx-auto flex flex-col flex-auto items-center justify-center min-w-0 h-full">
        <div className="card w-[450px] card-shadow bg-[#fff] rounded-md drop-shadow-md">
          <div className="p-[40px] ">
            <Form
              onSubmit={onSubmit}
              className="mx-auto w-full"
              resolver={resolver}
              defaultValues={initialValues}
              mode="onBlur"
            >
              <Link to={"/"}>
                <div className="flex text-center justify-center pt-[16px]">
                  <VarLogo />
                </div>
              </Link>
              <div>
                <div className="">
                  <h2 className="w-full flex justify-center font-semibold text-2xl">
                    Welcome back!
                  </h2>
                </div>
                <div className="w-full">
                  <h3 className="font-normal text-sm mb-[28px] text-[#6B7280] text-center">
                    Please enter your credentials to sign in!
                  </h3>
                </div>
                <div className="flex flex-col">
                  <div className="mb-[32px]">
                    <div className="mb-3">
                      <label
                        htmlFor="username"
                        className="font-semibold opacity-70"
                      >
                        User Name:
                      </label>
                    </div>
                    <TextInput id="username" name="username" />
                  </div>
                  <div className="flex justify-between mb-3">
                    <label
                      htmlFor="password"
                      className="font-semibold opacity-70"
                    >
                      Password:
                    </label>
                  </div>
                  <PassWordInput id="password" name="password" />
                  <div className="flex justify-between mt-[28px]">
                    <div className="flex">
                      <input
                        id="rememberMe"
                        type="checkbox"
                        className={clsx(
                          "checkbox checkbox-sm mr-2 checkbox-primary"
                        )}
                      />
                      <label htmlFor="rememberMe">
                        <span className="label-text">Remember me</span>
                      </label>
                    </div>
                    <Link to="/" className="text-[#228FA6] decoration-1">
                      <span className="text-[rgba(79,70,229,var(--tw-text-opacity))]">
                        Forgot Password?
                      </span>
                    </Link>
                  </div>
                  <Button
                    onClick={onSubmit}
                    className="mt-[20px] bg-[#4f46e5] border-none mb-[4px]"
                  >
                    Sign In
                  </Button>
                  <div className="text-center flex justify-center mt-4">
                    <span className="text-[#6B7280] text-sm">
                      Don't have an account yet?
                    </span>
                    &nbsp;
                    <a href="/" className="text-[#4F46E5] text-sm">
                      Sign up
                    </a>
                  </div>
                  {/* <div className="flex flex-col w-full border-opacity-50">
                    <div className="divider">OR</div>
                  </div> */}
                </div>
                {/* <Button className="rounded-sm border-none bg-[#3C4648] mt-[4px]"> */}
                {/* <GoogleIcon></GoogleIcon> */}
                {/* Continue with Googles */}
                {/* </Button> */}
                {/* <div className="mt-[60px] flex justify-center">
                  <span>© Var-meta jsc.</span>
                </div>
*/}
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
