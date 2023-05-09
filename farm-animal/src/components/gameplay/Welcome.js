import React, { Fragment } from 'react';
import { Unity, useUnityContext } from "react-unity-webgl";


function Welcome() {

  const { unityProvider, loadingProgression, isLoaded } = useUnityContext({
    loaderUrl: "/Build/Build.loader.js",
    dataUrl: "/build/Build.data",
    frameworkUrl: "/Build/Build.framework.js",
    codeUrl: "/Build/Build.wasm",
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