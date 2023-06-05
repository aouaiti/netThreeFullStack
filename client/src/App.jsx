import "./App.css";
import { useQuery, useQueries } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ThreeDim from "./3D/ThreeDim";
import TwoDim from "./2D/TwoDim";
import { axiosIntercepter } from "./utils/axios-intercepter";
import { store } from "./utils/valtioStates";

function App() {
  const fetchData = () => axiosIntercepter({ url: "/buildings" });
  const getBuilding = useQuery({
    queryKey: ["currentBuilding"],
    queryFn: () => fetchData(),
    onSuccess: (x) => (store.activeBuilding = x.data[0]),
  });

  const getDevices = useQueries({
    queries: (getBuilding?.data?.data[0]?.equipments ?? []).map(
      (equipment, i) => {
        return {
          queryKey: [getBuilding.data.data[0].name, equipment],
          queryFn: () => axiosIntercepter({ url: `/equipments/${equipment}` }),
          onSuccess: (x) => (store.activeDevices[i] = x.data),
        };
      }
    ),
  });

  getBuilding.isFetched;
  if (getBuilding.isLoading) return <div>Loading building</div>;
  if (getDevices.some((x) => x.status === "loading"))
    return <div>Loading devices</div>;

  // getDevices.map((x, i) => (store.activeDevices[i] = x.data.data));

  // console.log(calc);
  // store.activeDevices = getDevices;
  return (
    <>
      <ThreeDim display="full" devices={getDevices} />
      <TwoDim />
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </>
  );
}

export default App;
