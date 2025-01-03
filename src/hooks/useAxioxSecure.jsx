import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "http://localhost:9000",
});
const useAxioxSecure = () => {
  return axiosSecure;
};

export default useAxioxSecure;
