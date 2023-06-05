import axios from "axios";

const client = axios.create({ baseURL: import.meta.env.VITE_SERVER_URL });

export const axiosIntercepter = ({ ...options }) => {
  const onSuccess = (reponse) => reponse;
  const onError = (error) => error;
  return client(options).then(onSuccess).catch(onError);
};
