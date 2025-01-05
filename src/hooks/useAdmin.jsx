import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxioxSecure from "./useAxioxSecure";

const useAdmin = () => {
  const { user } = useAuth();
  const axiosSecure = useAxioxSecure();
  const { data: isAdmin, isPending: isAdminLoading } = useQuery({
    queryKey: [user?.email, "isAdmin"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user.email}`);
      console.log(res.data);
      return res.data?.Admin;
    },
  });
  return [isAdmin, isAdminLoading];
};

export default useAdmin;
