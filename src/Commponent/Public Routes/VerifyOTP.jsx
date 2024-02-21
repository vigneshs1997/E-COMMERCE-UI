
import axios from 'axios';
import React, { useState } from 'react'

const VerifyOTP = () => {
  const [otp, setOTP] = useState("");
  const email=sessionStorage.getItem("email")
  
  const handleRegistration = async (event) => {
    event.preventDefault();
    //first request to the server using axios
    const URL = "http://localhost:8080/api/v1/verify-otp";
    const body = {
      email: email,
      otp:otp,
    }
    const header = {
      headers: {
        "Content-Type":"application/json",
      },
      withCredentials:true,
    }
    try {
      const response = await axios.post(URL, body, header);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  
};

  return (
    <header className="flex justify-center ">
      <div className="w-1/2 h-96 bg-orange-400 mt-32">
        <div className="h-96 bg-green-400 w-72 border-2 border-black">
          <h3 className="text-2xl pt-6 pl-2.5 font-bold">
            Varify Your OTP
          </h3>
          <img src="/Images\otp1.webp" alt=""  />
        </div>

        <div className="ml-80 -mt-80 font-bold">
          <label htmlFor="" className="pr-8">
            Enter the OTP
          </label>
          <input
            type="text"
            className="w-60 pl-3 "
            onChange={(event) => setOTP(event.target.value)}
          />
          
          <br />
          <br />

          <button
            onClick={handleRegistration}
            className="border-2  border-black  px-1 py-0.5 bg-white "
          >
            Submit
          </button>
        </div>
      </div>
    </header>
  );
};

export default VerifyOTP;
