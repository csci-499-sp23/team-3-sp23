import React, { Fragment } from 'react'
import { Unity, useUnityContext } from "react-unity-webgl";


function Welcome() {

  const { unityProvider, loadingProgression, isLoaded } = useUnityContext({
    loaderUrl: "/build/BuildAM.loader.js",
    dataUrl: "/build/BuildAM.data",
    frameworkUrl: "/build/BuildAM.framework.js",
    codeUrl: "/build/BuildAM.wasm",
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
          width: "100%"
        }}
      />
    </Fragment>
  );
}

export default Welcome