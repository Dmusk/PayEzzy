import React, { useState } from 'react';
import axios from 'axios'; // Import axios
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Heading from '../components/Heading';
import SubHeading from '../components/SubHeading';
import Input from '../components/Input';
import Button from '../components/Button';
import BottomWarning from '../components/BottomWarning';

const Signin = () => {
  const [username, setUsername] = useState(""); // Define username state
  const [password, setPassword] = useState(""); // Define password state
  const navigate = useNavigate(); // Initialize navigation

  return (
    <div className='bg-slate-300 h-screen flex justify-center'>
      <div className='flex flex-col justify-center'>
        <div className='rounded-lg bg-white w-80 p-2 h-max px-4'>
          <Heading label={"Sign In"} />
          <SubHeading label={"Enter your details to get signed in"} />

          {/* Input for Email */}
          <Input
            label={"Email"}
            placeholder={"aadarsh.wadile@gmail.com"}
            onChange={(e) => setUsername(e.target.value)} // Update username state
          />

          {/* Input for Password */}
          <Input
            label={"Password"}
            placeholder={"XXXXXXXXX"}
            type="password" // Make it a password input
            onChange={(e) => setPassword(e.target.value)} // Update password state
          />

          <div>
            {/* Sign In Button */}
            <Button
              onClick={async () => {
                try {
                  const res = await axios.post("http://localhost:5000/api/v1/user/signin", {
                    username,
                    password
                  });
                  localStorage.setItem("token", res.data.token); // Store token in local storage
                  navigate("/dashboard"); // Navigate to dashboard
                } catch (error) {
                  console.error("Signin failed:", error);
                  // Handle error (e.g., show error message to user)
                }
              }}
              label={"Sign In"}
            />
          </div>

          <BottomWarning label={"Create New Account"} buttonText={"Sign Up"} to={"/signup"} />
        </div>
      </div>
    </div>
  );
}

export default Signin;
