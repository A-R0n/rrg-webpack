import React, { lazy, Suspense, memo } from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
const LazyLoadDirections = lazy(() =>
  import("../Directions/LazyLoadDirections")
);

function MyGoogleMap(props) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const mapContainerStyle = {
    width: "100vw",
    height: "100vh",
  };

  const miguels = {
    lat: 37.7831,
    lng: -83.6828,
  };

  if (loadError) return "Error Loading Maps";
  if (!isLoaded) return "Loading Maps";
  return (
    <GoogleMap
      ref={props.ref}
      mapContainerStyle={mapContainerStyle}
      zoom={11}
      center={miguels}
      onLoad={props.onMapLoad}
    >
      <Suspense fallback={<p>directions fallback</p>}>
        {<LazyLoadDirections geoCords={props.geoCords} />}
      </Suspense>
    </GoogleMap>
  );
}

export default memo(MyGoogleMap);
