import { store } from "../../utils/valtioStates";
import { Bvh } from "@react-three/drei";
import Device from "./Device";

function LogicalArchitecture() {
  const activeBuilding = store.activeBuilding;
  const activeDevices = store.activeDevices;

  return (
    <Bvh firstHitOnly>
      {activeDevices.map((x, i) => {
        // console.log(x);
        return <Device key={i} deviceData={x} />;
      })}
    </Bvh>
  );
}

export default LogicalArchitecture;
