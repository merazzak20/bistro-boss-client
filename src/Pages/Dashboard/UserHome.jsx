import React from "react";
import useAuth from "../../hooks/useAuth";

const UserHome = () => {
  const { user } = useAuth();
  return (
    <div>
      <h2 className="text-4xl font-semibold">
        <span>Welcome </span>
        {user.displayName ? user.displayName : "Buddy"}
      </h2>
    </div>
  );
};

export default UserHome;
