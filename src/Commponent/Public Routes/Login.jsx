import axios from 'axios';
import React, { useState } from 'react'
import { useAuth } from '../Context/AuthProvider';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { auth, setAuth } = useAuth();
  
  const navigate = useNavigate();

  const handleRegistration = async (event) => {
    event.preventDefault();

    const URL = "http://localhost:8080/api/v1/login";
    const body = {
      email: email,
      password: password,
    }
    const header = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true
    }
    try {
      const response = await axios.post(URL, body, header);
      if (response.status == 200) {
        console.log(response);
        const user = {
        userId: response.data.data.userId,
        username:response.data.data.username,
        role:response.data.data.role,
        isAuthenticated:response.data.data.authenticated,
        accessExpiration:response.data.data.accessExpiration,
        refreshExpiration:response.data.data.refreshExpiration
        }
        localStorage.setItem("user", JSON.stringify(user)); //converting js data into JSON 
        setAuth(user)
        navigate("/")
      }
      
    }
    catch (error) {
      console.log(error);
    }
  };
  return (
 <header className="flex justify-center  ">
      <div className="w-1/2 h-96 bg-gray-400 mt-32">
        <div className="h-96 bg-green-400 w-72 border-2 border-black">
          <h3 className="text-2xl pt-6 pl-2.5 font-bold">Login</h3>
          <h4 className="text-1xl pt-4 pl-2.5 font-bold">
            Get access to your Orders, Wishlist and Recommendations
          </h4>
          <img src="/Images\login.png" alt="" />
        </div>

        <div className="ml-80 -mt-80">
          <label htmlFor="" className="pr-8 font-bold">
            Email
          </label>
          <input
            type="email"
            className="w-60 pl-3  "
            
            onChange={(event) => setEmail(event.target.value)}
            
          />
          <br />
          <br />
          <label htmlFor="" className="pr-8 font-bold ">
            Password
          </label>
          <input
            type="text"
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
export default Login;
