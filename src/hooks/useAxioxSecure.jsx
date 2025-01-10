import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
  baseURL: "https://bistro-boss-server-phi-khaki.vercel.app",
});
const useAxioxSecure = () => {
  const { signOutUser } = useAuth();
  const navigate = useNavigate();
  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      // console.log(token);
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  // Intercept 401 and 403
  axiosSecure.interceptors.response.use(
    function (response) {
      return response;
    },
    async (error) => {
      if (error.response) {
        const status = error.response.status;
        // console.log("status error in interceptor", status);
        if (status === 401 || status === 403) {
          await signOutUser();
          navigate("/login");
        }
      }

      return Promise.reject(error);
    }
  );
  return axiosSecure;
};

export default useAxioxSecure;
