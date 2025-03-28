import React from 'react'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {

      const [email, setEmail] = useState()
      const [password, setPassword] = useState();
      const navigate = useNavigate()
  
  
      const handleSubmit = (e) => {
          e.preventDefault();
          axios
            .post("https://loginpageapi.vercel.app/login", { email, password })
            .then((result) => {
              console.log(result)
              if(result.data === "Success") {
                navigate('/home')
              }
            })
            .catch((err) => console.error(err));
      }    

  return (
    <section class="bg-[#6B757F] h-[100vh] flex justify-center items-center">
      <div class="bg-[#FFFFFF] p-3 rounded-lg w-[300px]">
        <h1 className="font-bold text-3xl mb-3">Register</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Email"
              required
              className="border-1 p-2"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="font-semibold">
              Password
            </label>
            <input
              type="text"
              id="password"
              name="password"
              placeholder="Enter Password"
              required
              className="border-1 p-2"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-green-900 text-white h-12 text-xl rounded-lg cursor-pointer"
          >
            Login
          </button>
        </form>
        <p className="mb-5">Already have an account?</p>
        <Link
          to="/register"
          className="bg-yellow-800 px-[117px] rounded-lg text-white py-2"
        >
          Register
        </Link>
      </div>
    </section>
  );
}

export default Login
