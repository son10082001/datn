import { checkLogin } from "@recoil_state/authState";
import { Link, useFetcher } from "@remix-run/react";
import { useRecoilValue } from "recoil";

export default function AuthSection() {
  // const data = useLoaderData();
  const fetcher = useFetcher();
  // const setUser = useSetRecoilState(userInfo);
  const isLogin = useRecoilValue(checkLogin);
  // useEffect(() => {
  //   if (data) setUser(data);
  //   else setUser({});
  // }, [data, setUser]);

  return (
    <div className="flex-none">
      {!isLogin ? (
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/check-in">Check-in</Link>
          </li>
          <li>
            <Link to="/ui-test">UI</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      ) : (
        <div className="dropdown-end dropdown">
          <label tabIndex={0} className="btn-ghost btn-circle avatar btn">
            <div className="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" alt="avatar" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
          >
            <li>
              <Link to="/check-in">Check-in</Link>
            </li>
            <li>
              <Link to="/ui-test">UI</Link>
            </li>
            <li>
              <Link to="/child" className="justify-between">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            <li>
              <fetcher.Form method="post" action="/logout">
                <button className="w-full text-left" type="submit">
                  Logout
                </button>
              </fetcher.Form>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
