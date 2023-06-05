import {
  OrbitControls,
  Grid,
  GizmoHelper,
  GizmoViewport,
} from "@react-three/drei";

function Helpers({ theme = "light" }) {
  return (
    <>
      <OrbitControls makeDefault />
      <Grid
        position-y={-0.5}
        infiniteGrid
        cellColor={gridParams.cell[theme]}
        sectionColor={gridParams.section[theme]}
        fadeDistance={80}
        fadeStrength={5}
        // sectionThickness={1.1}
      />
      <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
        <GizmoViewport labelColor="black" />
      </GizmoHelper>
    </>
  );
}

const gridParams = {
  cell: {
    light: "#030303",
    darkt: "#6f6f6f",
  },
  section: {
    light: "#2196f3",
    dark: "#f50057",
  },
};

export default Helpers;
