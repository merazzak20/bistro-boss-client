import React from "react";
import SectionTitle from "../../../components/SectionTitle";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxioxSecure from "../../../hooks/useAxioxSecure";
import Swal from "sweetalert2";

const img_hosting_key = import.meta.env.VITE_IMG_HOSTING_KEY;
const img_hosting_Api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`;

const AddItems = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxioxSecure();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    const imgFile = { image: data.image[0] };
    const res = await axiosPublic.post(img_hosting_Api, imgFile, {
      headers: {
        "content-Type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const menuInfo = {
        name: data.name,
        recipe: data.recipe,
        image: res.data.data.display_url,
        category: data.category,
        price: parseFloat(data.price),
      };
      const menuRes = await axiosSecure.post("/menu", menuInfo);
      if (menuRes.data.insertedId) {
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Successfuly add ${data.name}`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
      console.log(menuRes.data);
    }

    console.log(res.data);
  };
  return (
    <div>
      <SectionTitle
        subHeading={"What's new"}
        mainHeading={"Add Item"}
      ></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Nmae */}
          <label className="form-control w-full my-6 ">
            <div className="label">
              <span className="label-text">Item Name*</span>
            </div>
            <input
              type="text"
              {...register("name", { required: true })}
              placeholder="Enter the item name"
              className="input input-bordered w-full "
            />
          </label>

          <div className="flex gap-4">
            {/* Category */}
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Category*</span>
              </div>
              <select
                defaultValue="default"
                {...register("category", { required: true })}
                className="select select-bordered w-full"
              >
                <option disabled value="default">
                  Select Category
                </option>
                <option value="dessert">Dessert</option>
                <option value="pizza">Pizza</option>
                <option value="salad">Salad</option>
                <option value="soup">Soup</option>
                <option value="drinks">Drinks</option>
              </select>
            </label>

            {/* Price */}
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Price*</span>
              </div>
              <input
                type="number"
                {...register("price", { required: true })}
                placeholder="Enter the price"
                className="input input-bordered w-full "
              />
            </label>
          </div>

          {/* Details */}
          <label className="form-control my-6">
            <div className="label">
              <span className="label-text">Item's Details</span>
            </div>
            <textarea
              {...register("recipe")}
              className="textarea textarea-bordered h-24"
              placeholder="Recipe"
            ></textarea>
          </label>

          <div className="mb-6">
            <input
              type="file"
              {...register("image", { required: true })}
              className="file-input w-full max-w-xs"
            />
          </div>

          <button className="btn btn-warning">
            {" "}
            Add Item <FaUtensils className="ml-4"></FaUtensils>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
