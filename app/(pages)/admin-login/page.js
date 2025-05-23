"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // App Router compatible

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();

    if (res.ok) {
      localStorage.setItem("token", data.token);
      alert("Login successful");
      router.push("/admin"); // change to your actual route
    } else {
      alert(data.message || "Login failed");
    }
  };

  return (
    <form onSubmit={handleLogin} className="max-w-sm mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">Admin Login</h2>
      <input
        type="text"
        placeholder="Username"
        className="w-full mb-2 px-4 py-2 border"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full mb-4 px-4 py-2 border"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Login
      </button>
    </form>
  );
};

export default Login;
