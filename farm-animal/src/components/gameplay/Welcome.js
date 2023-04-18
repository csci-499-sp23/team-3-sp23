import React, { Fragment } from 'react'
import { Unity, useUnityContext } from "react-unity-webgl";


function Welcome() {

  const { unityProvider, loadingProgression, isLoaded } = useUnityContext({
    loaderUrl: "/Build/farm-animal.loader.js",
    dataUrl: "/Build/farm-animal.data",
    frameworkUrl: "/Build/farm-animal.framework.js",
    codeUrl: "/Build/farm-animal.wasm",
  });

  return (
    <Fragment>
      {!isLoaded && (
        <p>Loading Application... {Math.round(loadingProgression * 100)}%</p>
      )}
      <Unity
        unityProvider={unityProvider}
        style={{
          visibility: isLoaded ? "visible" : "hidden",
          width: "80%",
          height: "80%"
        }}
      />
    </Fragment>
  );
}

export default Welcome