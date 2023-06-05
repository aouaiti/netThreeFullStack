import { Environment } from "@react-three/drei";

function Lighting() {
  return (
    <>
      <Environment preset="forest" />
      <ambientLight intensity={0.1} />
    </>
  );
}

export default Lighting;
