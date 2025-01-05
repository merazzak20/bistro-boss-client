import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import useAxiosPublic from "../hooks/useAxiosPublic";

const SocialLogins = () => {
  const navigate = useNavigate();
  const { googleSignIn, updateUserProfile, setUser } = useAuth();
  const axiosPublic = useAxiosPublic();
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        setUser(res.user);
        console.log(res.user);
        toast.success(`Welcome ${res.user.displayName}`);

        const userInfo = {
          name: res.user?.displayName,
          email: res.user?.email,
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          console.log(res.data);
          navigate("/");
        });

        // console.log(res.user);
        // updateUserProfile(data.name, data.photo)
        //   .then(() => {})
        //   .catch((error) => {
        //     // console.log(error);
        //   });
      })
      .catch((err) => {
        // console.log(err.message);
      });
  };
  return (
    <div className="mx-auto -mt-5">
      <button
        onClick={handleGoogleSignIn}
        className="flex justify-arround items-center gap-4 bg-gray-100 btn"
      >
        <FcGoogle />
        <span className="font-semibold">Login with Google</span>
      </button>
    </div>
  );
};

export default SocialLogins;
