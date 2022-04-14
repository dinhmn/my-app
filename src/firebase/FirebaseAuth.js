import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "./firebase-config";

const FirebaseAuth = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [userInfo, setUserInfo] = useState("");
  onAuthStateChanged(auth, (currentUser) => {
    setUserInfo(currentUser);
  });
  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const handleCreateUser = async (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(auth, values.email, values.password);
    // if (user) setUserInfo(user);
    console.log("Create user successfully");
  };
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <div className="w-full max-w-[500px] mx-auto bg-white shadow-lg p-5 mb-10">
      <form onSubmit={handleCreateUser}>
        <input
          type="email"
          className="w-full p-3 mb-5 border border-gray-200 rounded outline-none focus:border-blue-500 "
          placeholder="Enter your email address"
          name="email"
          onChange={handleInputChange}
        />
        <input
          type="password"
          className="w-full p-3 mb-5 border border-gray-200 rounded outline-none focus:border-blue-500 "
          placeholder="Enter your password"
          name="password"
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="w-full p-3 text-sm font-medium text-white bg-blue-500 rounded-lg"
        >
          Sign up
        </button>
      </form>
      <div className="flex items-center mt-10 gap-x-5">
        <span>{userInfo?.email}</span>
        <button
          type="submit"
          className="p-3 text-sm font-medium text-white bg-purple-500 rounded-lg "
          onClick={handleSignOut}
        >
          SignOut
        </button>
      </div>
    </div>
  );
};

export default FirebaseAuth;
