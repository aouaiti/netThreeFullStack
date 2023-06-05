import { memo, useCallback } from "react";
import { TransformControls, Edges } from "@react-three/drei";
import { useState, useRef, useEffect } from "react";
import * as THREE from "three";
import { useSnapshot } from "valtio";
import { store } from "../../utils/valtioStates";
import { useMutation } from "@tanstack/react-query";
import { axiosIntercepter } from "../../utils/axios-intercepter";

function Device({ deviceData, theme = "light" }) {
  const [axis, setAxis] = useState([false, false, false]);
  // const [drag, setDrag] = useState(false);
  const [selected, setSelected] = useState(false);
  const [position, setPosition] = useState([]);
  const object = useRef();

  const mutateDevices = useMutation({
    mutationFn: () =>
      axiosIntercepter({
        url: `/equipments/${deviceData.id}`,
        method: "Patch",
        data: { position },
      }),
    onSuccess: (data) => console.log(data),
  });

  const endOfDragHandler = () => {
    // setAnimate(false)
    // console.log("rst");
    mutateDevices.mutate();
  };

  return (
    <>
      <TransformControls
        object={object.current}
        showY={false}
        showX={axis[0]}
        showZ={axis[2]}
        mode="translate"
        // object={object.current}
        // onMouseDown={() => setDrag(true)}
        onMouseUp={() => endOfDragHandler()}
        onChange={() => setPosition(object.current.position)}
        onMouseDown={() => console.log(object.current.position)}
      />
      <mesh
        ref={object}
        position={[deviceData.position.x, 0, deviceData.position.z]}
        onPointerMissed={(e) => (
          setSelected(false),
          e.type === "click" && setAxis([false, false, false])
        )}
        onClick={() => (setAxis([true, false, true]), setSelected(true))}
      >
        <boxGeometry args={[1, 0.25, 0.8]} />
        <meshStandardMaterial color={"#7d8ce2"} />
        {selected && (
          <Edges scale={1.1} renderOrder={1000}>
            <meshBasicMaterial color="#333" depthTest={false} />
          </Edges>
        )}
      </mesh>
    </>
  );
}

export default memo(Device);
