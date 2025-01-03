import { useQuery } from "@tanstack/react-query";
import useAxioxSecure from "./useAxioxSecure";

const useCart = () => {
  const axiosSecure = useAxioxSecure();
  const { data: cart = [] } = useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const res = await axiosSecure.get("/carts");
      return res.data;
    },
  });
  return [cart];
};

export default useCart;
