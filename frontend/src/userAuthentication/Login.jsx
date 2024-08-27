

import { useState } from 'react';
// import { ToastContainer } from 'react-toastify';

// import 'react-toastify/dist/ReactToastify.css';


import useToasts from '../useToasts';

import { useNavigate } from "react-router-dom";

function Login() {

  const [loginInfo, setLoginInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

//called or accessed custom hook's functions here
  const {ErrorToast, SuccessToast} =useToasts();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  };



  const handleLogin = async (e) => {
    e.preventDefault();
  
    const { email, password } = loginInfo;
    if ( !email || !password) {
      //
       ErrorToast("Email, and password are required");
    }
  
    try {
      const response = await fetch("https://user-authentication-complete-app-api.vercel.app/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
  
      const result = await response.text(); // Get the response as text first
      console.log("Raw response:", result); // Log the raw response
  
      // Parse the JSON response
      const parsedResult = JSON.parse(result);
      const { success, message ,jwtToken,name,error } = parsedResult;
  
      if (success) {

        //here again used custom hook's function
        SuccessToast(message);
        localStorage.setItem('token',jwtToken);
        localStorage.setItem('loggedInUser',name);



        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
      } else if (error) {
        const details = error?.details?.[0]?.message || error.message;
      //here again used custom hook's function
        ErrorToast(details);
      } else {
      //here again used custom hook's function

        ErrorToast(message);
      }
    } catch (error) {
      ErrorToast(error.message);
    }
  };
  

  return (
    <div>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center bg-gray-800 px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign In
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={handleLogin}
              >
              
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    onChange={handleChange}
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required
                    value={loginInfo.email}
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    onChange={handleChange}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    value={loginInfo.password}
                  />
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="terms"
                      className="font-light text-gray-500 dark:text-gray-300"
                    >
                      I accept the{" "}
                      <button
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                        onClick={(e) => e.preventDefault()}
                      >
                        Terms and Conditions
                      </button>
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sign In
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Dont have an account?{" "}
                  <button
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    onClick={() => navigate("/Signup")}
                  >
                   Sign Up here
                  </button>
                </p>
              </form>
              {/* <ToastContainer /> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
