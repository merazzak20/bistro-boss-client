import { useQuery } from "@tanstack/react-query";
import useAxioxSecure from "./useAxioxSecure";
import useAuth from "./useAuth";

const useCart = () => {
  const axiosSecure = useAxioxSecure();
  const { user } = useAuth();
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/carts?email=${user.email}`);
      return res.data;
    },
  });
  return [cart, refetch];
};

export default useCart;
