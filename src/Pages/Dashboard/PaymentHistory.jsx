import React from "react";
import SectionTitle from "../../components/SectionTitle";
import useAuth from "../../hooks/useAuth";
import useAxioxSecure from "../../hooks/useAxioxSecure";
import { useQuery } from "@tanstack/react-query";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxioxSecure();

  const { data: payments } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user.email}`);
      return res.data;
    },
  });
  return (
    <div>
      <SectionTitle
        subHeading={"Remember"}
        mainHeading={"Payment History"}
      ></SectionTitle>
      <div className="overflow-x-auto">
        <h2 className="text-2xl font-semibold">
          Total Payments: {payments?.length}
        </h2>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Status</th>
              <th>Price</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {payments?.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>{item?.email}</td>
                <td>
                  <div className="font-bold">{item?.status}</div>
                </td>
                <td>$ {item?.price}</td>
                <th>{item.date}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
