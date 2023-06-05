import { proxy } from "valtio";

export const store = proxy({
  buildings: [],
  activeBuilding: null,
  activeDevices: [],
  updateLinks: false,
});

const getActiveBuilding = () => {
  return store.activeBuilding;
};
const getActiveDevices = () => {
  return store.activeDevices;
};

export { getActiveBuilding, getActiveDevices };
