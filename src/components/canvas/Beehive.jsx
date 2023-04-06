import React, { Suspense, useEffect, useState, useRef } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { Preload, useGLTF } from "@react-three/drei";

// useCannon physics hooks
import { Physics, useBox, useHingeConstraint } from '@react-three/cannon';

import CanvasLoader from "../Loader";

const Beehive = ({ isMobile }) => {
  const beehive = useGLTF("./hive/scene.gltf");
  return (
    <>
      <primitive
        object={beehive.scene}
        scale={isMobile ? 0.08 : 0.09}
        position={isMobile ? [0, -2.3, -2.2] : [0, -0.8, -3.5]}
        rotation={[0,0.95,0]}
      />
    </>
  );
};

const Branch = ({ isMobile }) => {
  const branch = useGLTF("./branch/scene.gltf");
  return (
    <>
      <hemisphereLight intensity={0.3} groundColor='white' />
      <spotLight
        position={[-10, 55, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={0.3} />
      <primitive
        object={branch.scene}
        scale={isMobile ? 0.25 : 0.3}
        position={isMobile ? [-0.22, 2, -7.5] : [-0.14, 3.7, -9]}
        rotation={[0,-1.5,-0.01]}
      />
    </>
  );
};

const References = ({ isMobile }) => {

  const [branchRef] = useBox(() => ({
    args: [.25, 2, .25],
  }), useRef(null));

  const [hiveRef, api] = useBox(() => ({
    args: [1.75, 2, .25],
    mass: 1,
  }), useRef(null));

  const [, , hingeApi] = useHingeConstraint(hiveRef, branchRef, {
    collideConnected: false,
    axisA: [0, 0, 1],
    axisB: [0, 0, 1],
    pivotA: isMobile ? [0, 1.4, 0] : [0, 3.8, 0],
    pivotB: isMobile ? [0, 1.4, 0] : [0, 3.5, 0],
  });

  const clickHit = (event) => {
    // console.log(event);
    const worldPoint = event.point.clone();
    //get the center position of the object
    const center = new THREE.Vector3(...event.eventObject.position);
    const deltaPosition = worldPoint.sub(center);
    const localClickPos = center.add(deltaPosition).toArray();

    const normal = event.face.normal.multiplyScalar(1.4).toArray();
    api.applyImpulse(normal, localClickPos);
  }
  return (
    <>
      <mesh ref={hiveRef} onClick={clickHit}>
        <Beehive isMobile={isMobile} />
      </mesh>
      <mesh ref={branchRef}>
        <Branch isMobile={isMobile} />
      </mesh>
    </>
  )
}

const BeehiveCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [23.7, 0, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Physics defaultContactMaterial={{ friction: 0.1, restitution: 0.8, gravity: [0, -7, 0] }}>

        <Suspense fallback={<CanvasLoader />}>
          <hemisphereLight intensity={0.2} groundColor='white' />
          <spotLight
            position={[-10, 55, 10]}
            angle={0.12}
            penumbra={1}
            intensity={1.2}
            castShadow
            shadow-mapSize={1024}
          />
          <pointLight intensity={1} />
          <References isMobile={isMobile} />
        </Suspense>

        <Preload all />
      </Physics>
    </Canvas>
  );
};

export default BeehiveCanvas;
