import styles from "../styles/Home.module.css";
import React, { useState } from "react";
import { useAuth } from "../Context/AuthContext";
import Link from "next/link";
import { useRouter } from "next/router";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [isError, setIsError] = useState(false);
  const { login } = useAuth();

  const router = useRouter();

  const handleLogin = async e => {
    e.preventDefault();
    try {
      await login(userData.email, userData.password);
      router.push("/dashboard");
    } catch (err) {
      console.error(err);
      setIsError(true);
      setTimeout(() => {
        setIsError(false);
      }, 5000);
    }
    // setUserData({
    //   email: "",
    //   password: "",
    // });
  };

  return (
    <div className={`${styles.container} ${isError && styles.error}`}>
      <form className={`${styles.form}`} onSubmit={handleLogin}>
        <h1>Log in</h1>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          required
          value={userData.email}
          onChange={e => setUserData({ ...userData, email: e.target.value })}
        />
        <label htmlFor="password">Password</label>
        <input
          required
          type="password"
          name="password"
          value={userData.password}
          onChange={e => setUserData({ ...userData, password: e.target.value })}
        />
        <button type="submit">Log In</button>
        {isError && <p className={styles.loginError}>Either your email or password is false.</p>}
      </form>
      <p>
        Don&apos;t have an account? <Link href="/signup">Sign Up</Link>
      </p>
    </div>
  );
};

export default Login;
