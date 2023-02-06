import { GoogleMap } from "react-google-maps";
import withGoogleMap from "react-google-maps/lib/withGoogleMap";
import withScriptjs from "react-google-maps/lib/withScriptjs";

const MapUI = () => {
  return (
    <div>
      <GoogleMap
        // {...props}
        defaultZoom={8}
        defaultCenter={{ lat: -34.397, lng: 150.644 }}
      ></GoogleMap>
    </div>
  );
};

export default withScriptjs(withGoogleMap(MapUI));
