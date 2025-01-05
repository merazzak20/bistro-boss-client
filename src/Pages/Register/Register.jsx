import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

import useAuth from "../../hooks/useAuth";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogins from "../../components/SocialLogins";

const Register = () => {
  const navigate = useNavigate();
  const { createNewUser, setUser, updateUserProfile, signOutUser } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const axiosPublic = useAxiosPublic();
  const onSubmit = (data) => {
    createNewUser(data.email, data.password)
      .then((res) => {
        setUser(res.user);
        console.log(res.user);

        updateUserProfile(data.name, data.photo)
          .then(() => {
            const registeredUser = { name: data.name, email: data.email };
            axiosPublic.post("/users", registeredUser).then((res) => {
              if (res.data.insertedId) {
                reset();
                signOutUser();
                navigate("/");
                toast.success("Successfully Registered");
              }
            });

            // console.log(2);
          })
          .catch((error) => {
            // console.log(error);
            toast.warn("Somthing Wrong");
          });
      })
      .catch((err) => {
        // console.log(err.message);
        toast.warn("Somthing Wrong");
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Helmet>
        <title>Bistro Boss | Register</title>
      </Helmet>
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
        <h2 className="text-center font-semibold text-2xl">
          Register Your Account
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", { required: true })}
              placeholder="name"
              name="name"
              className="input input-bordered"
            />
            {errors.name && <span>This field is required</span>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              {...register("photo", { required: true })}
              placeholder="photo url"
              name="photo"
              className="input input-bordered"
            />
            {errors.photo && <span>This field is required</span>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="email"
              name="email"
              className="input input-bordered"
            />
            {errors.email && <span>This field is required</span>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: true,
                maxLength: 20,
                minLength: 6,
                pattern: /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])/,
              })}
              placeholder="password"
              name="password"
              className="input input-bordered"
              //   required
            />
            {errors.password?.type === "required" && (
              <span className="text-red-600">This field is required</span>
            )}
            {errors.password?.type === "maxLength" && (
              <span className="text-red-600">
                Password must less than 20 character
              </span>
            )}
            {errors.password?.type === "minLength" && (
              <span className="text-red-600">
                Password must be at least 6 character
              </span>
            )}
            {errors.password?.type === "pattern" && (
              <span className="text-red-600">
                Password has at least 1 Uppercase, 1 Lowercase character and 1
                number
              </span>
            )}
          </div>
          <div className="form-control mt-6">
            <input
              className="btn btn-neutral rounded-none"
              type="submit"
              value="Register"
            />
          </div>

          {/* {errorMessage && <p className="text-red-600">{errorMessage}</p>}
          {success && <p className="text-green-600">Successfully Sign In</p>} */}
        </form>
        <SocialLogins></SocialLogins>

        <p className="text-center ">
          Already have an account? Please{" "}
          <Link className="text-red-500" to="/login">
            Login
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Register;
