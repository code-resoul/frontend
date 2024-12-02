import React, { useState } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";
import { Loader2 } from 'lucide-react';

function Login() {
  const [input, setInput] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const signupHandler = async (e) => {
    e.preventDefault();
    console.log(input);
    try {
      setLoading(true);
      const res = await axios.post(
        "http://localhost:3000/api/v1/user/login",
        input,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      if (res.data.success) {
        navigate('/');
        toast.success(res.data.message);
        setInput({ email: "", password: "" });
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" flex w-screen h-screen items-center justify-center">
      <form
        onSubmit={signupHandler}
        className=" flex flex-col gap-5 p-8 shadow-lg"
      >
        <div className=" my-4">
          <h1 className=" text-center font-bold text-2xl">LOGO</h1>
          <p>Login to see photos & videos from your friends.</p>
        </div>
        <div>
          <span className=" font-medium">Email</span>
          <Input
            type="email"
            name="email"
            value={input.email}
            onChange={handleChange}
            className=" focus-visible:ring-transparent my-2"
          />
        </div>
        <div>
          <span className=" font-medium">Password</span>
          <Input
            type="password"
            name="password"
            value={input.password}
            onChange={handleChange}
            className=" focus-visible:ring-transparent my-2"
          />
        </div>
        { loading? <Button><Loader2 className=" animate-spin" /> Please wait</Button> : <Button type="submit">Login</Button>}
        <span className=" text-center">Want to create an account? <Link to='/signup' className=" text-blue-500">Signup</Link></span>
      </form>
    </div>
  );
}

export default Login;
