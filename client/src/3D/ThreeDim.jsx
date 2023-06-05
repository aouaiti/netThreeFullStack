import { Suspense, useState, memo } from "react";
import { Canvas } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import {
  Loader,
  Preload,
  AdaptiveDpr,
  AdaptiveEvents,
} from "@react-three/drei";
import Helpers from "./components/Helpers";
import Lighting from "./components/Lighting";
import LogicalArchitecture from "./components/LogicalArchitecture";
import PhysicalArchitecture from "./components/PhysicalArchitecture";

function ThreeDim() {
  const [architecture] = useState("logical");
  return (
    <div style={full}>
      <Canvas camera={cameraParams}>
        <Suspense>
          <color attach={"background"} args={["#fff"]} />
          {architecture === "logical" ? (
            <LogicalArchitecture />
          ) : architecture === "physical" ? (
            <PhysicalArchitecture />
          ) : (
            <></>
          )}
          <Lighting />
          <Helpers />
          <Perf position="top-left" />
          <Preload all />
          <AdaptiveEvents />
          <AdaptiveDpr pixelated />
        </Suspense>
      </Canvas>
      <Loader />
    </div>
  );
}

const full = {
  width: "100vw",
  height: "100vh",
};

const cameraParams = {
  fov: 45,
  position: [5, 10, 5],
};

export default ThreeDim;
