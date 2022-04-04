import React from "react";
import { useAuth } from "../Context/AuthContext";
import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";

const Navbar = () => {
  const { user, logout } = useAuth();
  const router = useRouter();

  return (
    <div>
      {user && (
        <button
          onClick={() => {
            logout();
            router.push("/login");
          }}
        >
          logout
        </button>
      )}
    </div>
  );
};

export default Navbar;
