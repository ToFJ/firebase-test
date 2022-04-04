import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import { useAuth } from "../Context/AuthContext";
import Link from "next/dist/client/link";
import { useRouter } from "next/dist/client/router";

const Signup = () => {
  const [userData, setUserData] = useState({
    email: "",
    password1: "",
    password2: "",
  });
  const [isError, setIsError] = useState(false);
  const { signup, user } = useAuth();
  const router = useRouter();

  const handleSignup = async e => {
    e.preventDefault();
    if (userData.password1 != userData.password2) {
      setIsError(true);
    } else {
      setIsError(false);
    }
    try {
      await signup(userData.email, userData.password1);
      router.push("/dashboard");
    } catch (err) {
      console.error(err);
    }
    // setUserData({
    //   email: "",
    //   password1: "",
    //   password2: "",
    // });
  };

  return (
    <div className={styles.container}>
      <form className={`${styles.form}`} onSubmit={handleSignup}>
        <h1>Sign Up</h1>
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
          className={`${isError && styles.error}`}
          required
          type="password"
          name="password"
          value={userData.password1}
          onChange={e => setUserData({ ...userData, password1: e.target.value })}
        />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          className={`${isError && styles.error}`}
          required
          type="password"
          name="confirmPassword"
          value={userData.password2}
          onChange={e => setUserData({ ...userData, password2: e.target.value })}
        />
        {isError && <p>Your passwords don&apos;t match</p>}

        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? <Link href="/login">Log In</Link>
      </p>
    </div>
  );
};

export default Signup;
