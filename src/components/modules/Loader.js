import React from "react";
import { ColorRing } from "react-loader-spinner";

function Loader({ deleted }) {
  return (
    <>
      {deleted ? (
        <ColorRing
          visible={true}
          height={60}
          // width={}
          ariaLabel="color-ring-loading"
          wrapperStyle={{width: "100%"}}
          wrapperClass="color-ring-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      ) : (
        <ColorRing
          visible={true}
          height={60}
          ariaLabel="color-ring-loading"
          wrapperStyle={{}}
          wrapperClass="color-ring-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      )}
    </>
  );
}

export default Loader;
