import { Link } from "@remix-run/react";
import Heart from "~/src/icons/Heart";
import Button from "~/src/ui/Button";
import AuthSection from "../AuthSection";

export default function Navbar() {
  return (
    <div className="navbar bg-primary">
      <div className="flex-1">
        <Link to="/">
          <Button
            className="btn-ghost glass text-xl normal-case"
            iconStart={<Heart />}
          >
            Var-Management
          </Button>
        </Link>
      </div>
      <div className="flex-none">
        <AuthSection />
      </div>
    </div>
  );
}
