import type { MetaFunction } from "@remix-run/react/dist/routeModules";
import type { FC } from "react";
import CheckIn from "~/src/pages/CheckIn";

interface checkInProps {}
export const meta: MetaFunction = () => ({
  title: "Check In",
});
const Index: FC<checkInProps> = () => {
  return <CheckIn />;
};

export default Index;
