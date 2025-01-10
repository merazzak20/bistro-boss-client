import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://bistro-boss-server-phi-khaki.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
