import React, { Fragment } from 'react';
import { Unity, useUnityContext } from "react-unity-webgl";


function Welcome() {

  const { unityProvider, loadingProgression, isLoaded } = useUnityContext({
    loaderUrl: "/Build/farm-animal.loader.js",
    dataUrl: "/Build/farm-animal.data",
    frameworkUrl: "/Build/farm-animal.framework.js",
    codeUrl: "/Build/farm-animal.wasm",
  });

  const pStyle = {
    textAlign: "center",
    marginTop: "25%"
  }

  const uStyle = {
    visibility: isLoaded ? "visible" : "hidden",
    width: "95%",
    height: "95%",
    justifySelf: "center",
    alignSelf: "center",
    margin: "0px 40px",
  }

  return (
    <Fragment >
      {!isLoaded && (
        <p style={pStyle}>Loading Application... {Math.round(loadingProgression * 100)}%</p>
      )}
      <Unity
        unityProvider={unityProvider}
        style={uStyle}
      />
    </Fragment>
  );
}

export default Welcome