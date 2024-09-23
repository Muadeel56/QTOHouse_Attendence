import React, { useEffect, useState } from "react";
import loginImg from "../../assets/images/login.jpg";
import logo from "../../assets/images/logo.svg";
import { Button, Checkbox, TextField } from "@mui/material";

function Login() {
  const texts = [
    "Success is built on consistency. Let's make today another productive day.",
    "Believe in yourself and all that you are.",
    "Every day is a new beginning. Take a deep breath, smile, and start again.",
    "Your limitation—it's only your imagination.",
    "Push yourself, because no one else is going to do it for you."
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setFade(false);
      }, 500); // Duration to match fade-out animation
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      <div className="flex h-[100vh] justify-center items-center w-full bg-gradient-to-tl from-[#0bd7e6] via-blue-600 to-[#28c56f]">
        <div className="relative flex flex-col md:flex-row items-center bg-blue-900 h-[450px] md:h-[700px] w-[300px] md:w-[900px] rounded-xl">
          {/* Background Image with Low Opacity */}
          <div
            className="absolute inset-0 h-[200px] md:h-[700px] w-full"
            style={{
              backgroundImage: `url(${loginImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.3,
            }}
          />
          <div className="relative z-10 flex-grow w-[300px] md:w-[900px]">
            <h1
              className={`justify-center text-center text-gray-400 font-bold text-sm md:text-xl h-[60px] flex items-center transition-opacity duration-500 ${fade ? 'opacity-0' : 'opacity-100'}`}
            >
              "{texts[currentTextIndex]}"
            </h1>
          </div>
          <div className="flex flex-col md:w-[700px] h- md:h-[700px] items-center bg-white p-10 relative z-10 rounded-b-lg md:rounded-r-lg">
            <img src={logo} alt="Logo" className="w-[100px] md:w-[130px]" />
            <div className="flex flex-col justify-center items-start my-8 space-y-2">
              <h1 className="text-xl text-blue-500 font-bold">Welcome Back!</h1>
              <p className="text-gray-500">Sign in to continue to QTO House Portal.</p>
            </div>
            <div className="flex flex-col space-y-4">
              <TextField id="outlined-basic" label="Username" variant="outlined" className="w-[200px] md:w-[300px]" />
              <TextField id="outlined-basic" label="Password" variant="outlined" className="w-[200px] md:w-[300px]" />
              <div className="flex items-center">
                <Checkbox
                  sx={{ color: "#0bd7e", "&.Mui-checked": { color: "#0bd7e" } }}
                  className="w-[10px] md:w-[30px]"
                />
                <p className="text-gray-500">Remember me</p>
              </div>
              <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded w-[200px] md:w-[300px]" 
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
