import axios from "axios";
import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Register = ({ role }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");//variable,setter method=predefined function for setting values
  const [password, setPassword] = useState("");

  const handleRegistration = async (event) => {//async=>multi thread

    event.preventDefault();
     //fire request to the server using axio

    const URL = "http://localhost:8080/api/v1/users/register";//API

    const body = {
      userEmail: email,
      userPassword: password,
      userRole: role,
    }
    const header = {
      headers: {//given format
        "Content-Type":"application/json",
      },
      withCredentials:true  //allowing the cookies
    }
    try {
      const response = await axios.post(URL, body, header);//axios is react library
      console.log(response)
      alert("done successfully")
      sessionStorage.setItem("email", email)
      if (response.status === 202)
      {
        alert("OTP Send Successfully..!!")
        navigate("/varify-otp")
        }
    }
    catch (error) {
      console.log(error);
    }
    
  }



   return (
  <header className="flex justify-center">
      <div className="w-1/2 h-96 bg-red-300 mt-32  ">
        <div className="h-96 bg-green-400 w-72 border-2 border-black ">
          <h3 className="text-2xl pt-4 pl-2.5 font-bold">Register</h3>
          <h4 className="text-1xl pt-1 pl-2.5 font-bold">
            Sign up with your email to get started
          </h4>
          <img src="/Images\login@4x.png" alt="" className="h-60" />
        </div>

        <div className="ml-80 -mt-80 font-bold ">
          <label htmlFor="" className="pr-8">
            Email
          </label>
          <input
            type="email"
            className="w-60 pl-3 "
            onChange={(event) => setEmail(event.target.value)}//event =>change
          />
          <br />
          <br />
          <label htmlFor="" className="pr-8 font-bold">
            Password
          </label>
          <input
            type="password"
            className="w-60 pl-3"
            onChange={(event) => setPassword(event.target.value)}
          />
          <br />
          <br />

          <button
            onClick={handleRegistration}
            className="border-2  border-black  px-1 py-0.5 bg-white font-bold"
          >
            Submit
          </button>
        </div>
      </div>
    </header>
  );
};

export default Register;
