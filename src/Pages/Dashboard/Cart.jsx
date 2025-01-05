import React from "react";
import useCart from "../../hooks/useCart";

import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import useAxioxSecure from "../../hooks/useAxioxSecure";

const Cart = () => {
  const [cart, refetch] = useCart();
  const axiosSecure = useAxioxSecure();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${_id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <div className="flex justify-evenly items-center">
        <h2 className="text-5xl">Items:{cart.length} </h2>
        <h2 className="text-5xl">Total Price: ${totalPrice} </h2>
        <button className="btn btn-warning">Pay</button>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={item?.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="font-bold">{item?.name}</div>
                </td>
                <td>$ {item?.price}</td>
                <th>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="bg-red-500 p-2 rounded-sm"
                  >
                    {" "}
                    <MdDelete className="text-xl  text-white "></MdDelete>{" "}
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
