// import type { IMapProps, IMarkerProps } from "google-maps-react";
// import { GoogleApiWrapper, Map, Marker } from "google-maps-react";
import clsx from "clsx";
import type { FC } from "react";
interface SurFaceProps {
  children: any;
  className?: string;
}
const SurFace: FC<SurFaceProps> = ({ children, className }) => {
  return (
    <div
      className={clsx(
        className,
        "w-full rounded-md border-2 border-[#e5e7eb] py-6 px-5 "
      )}
    >
      {children}
    </div>
  );
};
export default SurFace;
