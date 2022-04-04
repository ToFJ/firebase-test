import { useAuth } from "../Context/AuthContext";
import { useRouter } from "next/router";
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const { user, logout } = useAuth();
  const router = useRouter();
  console.log(user);

  // useEffect(() => {
  //   setTimeout(() => {
  //     if (!user) {
  //       router.push("/login");
  //     }
  //   }, 1000);
  // }, [user, router]);
  // console.log("ue" + new Date().getTime());

  return <>{user ? children : null}</>;
};

export default ProtectedRoute;
