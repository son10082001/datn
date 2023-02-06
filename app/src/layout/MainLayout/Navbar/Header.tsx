import clsx from "clsx";
import { MenuIcon } from "~/src/icons";
import Button from "~/src/ui/Button";
import AuthSection from "../AuthSection";

export default function Header({
  menuCollapse,
  setMenuCollapse,
  collapse,
}: any) {
  return (
    <div className="navbar border-b-2 border-[#e5e7eb]">
      <div className="flex-1">
        <Button
          className={clsx("btn-ghost btn w-fit justify-start")}
          iconStart={<MenuIcon />}
          onClick={() => setMenuCollapse()}
        ></Button>
      </div>
      <div className="flex-none">
        <AuthSection />
      </div>
    </div>
  );
}
