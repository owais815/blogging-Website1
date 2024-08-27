// import { useState, useEffect } from "react";
import logo from "../images/logo/logo2.svg";
// // import { useNavigate } from "react-router-dom";
// import axios from "axios";


// const Blogs = () => {
//   const [blogs, setBlogs] = useState([]);

//   useEffect(() => {
//     // Get blogs from localStorage
//     const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
//     setBlogs(storedBlogs);
//   }, []);
// // const navigate =useNavigate();
//   // const handleLogin = () => {
//   //   setTimeout(() => {
//   //     navigate("/Login");
//   //   }, 1000);
//   // };
//   // const gotoBlogs=()=>{
//   //   navigate("/Blogs")
//   // }
//   // const gotoHome=()=>{
//   //   navigate("/")
//   // }




//   useEffect(() => {
//     const fetchBlogs = async () => {
//       try {
//         const response = await axios.get('/api/blogs');
//         setBlogs(response.data);
//       } catch (error) {
//         console.error('Error fetching blogs', error);
//       }
//     };

//     fetchBlogs();
//   }, []);
  
//   return (
//     <div>
     


//       <section className="bg-white dark:bg-gray-900">
//       <div className=" max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
//       <h1 className="text-2xl   font-bold mb-6">Blogs</h1>

//         {/* <div className="space-y-6">
//           {blogs.length > 0 ? (
//             blogs.map((blog, index) => (
//               <div
//                 key={index}
//                 className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark p-6"
//               >
//                 <h2 className="text-xl font-semibold">{blog.title}</h2>
//                 <p className="text-sm text-gray-600 dark:text-gray-400">
//                   {blog.category}
//                 </p>
//                 {blog.image && (
//                   <img
//                     src={URL.createObjectURL(blog.image)}
//                     alt={blog.title}
//                     className="my-4 w-full rounded"
//                   />
//                 )}
//                 <p>{blog.content}</p>
//               </div>
//             ))
//           ) : (
//             <p>No blogs available. Please add some from the Blog Editor.</p>
//           )}
//         </div> */}




//         <div className="space-y-6">
//         {blogs.length > 0 ? (
//           blogs.map((blog, index) => (
//             <div key={index}                 className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark p-6"
// >
//               <h2 className="text-xl font-semibold">{blog.title}</h2>
//               <p>{blog.category}</p>
//               {blog.image && (
//                 <img src={`/${blog.image}`} alt={blog.title} />
//               )}
//               <div dangerouslySetInnerHTML={{ __html: blog.content }} />
//             </div>
//           ))
//         ) : (
//           <p>No blogs available.</p>
//         )}
//       </div>
//       </div>
//       </section>
//     </div>
//   );
// };

// export default Blogs;












import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";



const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Get blogs from localStorage
    const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    setBlogs(storedBlogs);


    console.log("showing if blogs are there",setBlogs)
  }, []);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('/api/blogs');
        setBlogs(response.data);
        // Optionally, you can store fetched blogs in localStorage
        localStorage.setItem('blogs', JSON.stringify(response.data));
      } catch (error) {
        console.error('Error fetching blogs', error);
      }
    };

    fetchBlogs();
  }, []);


  const navigate =useNavigate();
  const handleLogin = () => {
    setTimeout(() => {
      navigate("/Login");
    }, 1000);
  };
  const gotoBlogs=()=>{
    navigate("/Blogs")
  }
  const gotoHome=()=>{
    navigate("/")
  }


  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">



<header className="fixed w-full">
<nav className="bg-slate-700 text-white  border-gray-200 py-2.5 dark:bg-gray-900">
  <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
    <a onClick={gotoHome} className="flex items-center">
      <img src={logo} className="h-6 mr-3 sm:h-9" alt="Owais Logo" />
      <p className="text-3xl font-extrabold   ">Blog Crafters</p>
      {/* <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">{loggedInUser}</span> */}
    </a>
    <div className="flex items-center lg:order-2">
      {/* <div className="hidden mt-2 mr-4 sm:inline-block">
                <a className="github-button" href="#" data-size="large" data-icon="octicon-star" data-show-count="true" aria-label="Star themesberg/Owais on GitHub">Star</a>
            </div> */}
      <button
        onClick={handleLogin}
        className="text-gray-800 dark:text-white hover:bg-purple-50 hover:text-black  focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 hover:bg-gray-700 dark:hover:bg-gray-800 focus:outline-none dark:focus:ring-gray-800"
      >
        Log in
      </button>

      {/* <button onClick={handleLogout} className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">Logout</button> */}
      <button
        data-collapse-toggle="mobile-menu-2"
        type="button"
        className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="mobile-menu-2"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          ></path>
        </svg>
        <svg
          className="hidden w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
    <div
      className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
      id="mobile-menu-2"
    >
      <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
        <li>
          <button
           onClick={gotoHome}
            className="block py-2 pl-3 pr-4 text-white bg-purple-700 rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-white"
            aria-current="page"
          >
            Home
          </button>
        </li>
        <li>
          <button
            onClick={gotoBlogs}
            className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
          >
            Blogs
          </button>
        </li>
        <li>
          <button
            href="#"
            className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
          >
            Marketplace
          </button>
        </li>
        <li>
          <button
            href="#"
            className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
          >
            Features
          </button>
        </li>
        <li>
          <button
            href="#"
            className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
          >
            Team
          </button>
        </li>
        <li>
          <button
            href="#"
            className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
          >
            Contact
          </button>
        </li>
      </ul>
    </div>
  </div>
</nav>
</header>

          <h1 className="text-2xl font-bold mb-6">Blogs</h1>



          <div className="space-y-6">
            {blogs.length > 0 ? (
              blogs.map((blog, index) => (
                <div
                  key={index}
                  className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark p-6"
                >
                  <h2 className="text-xl font-semibold">{blog.title}</h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {blog.category}
                  </p>
                  {blog.image && (
                    <img
                      src={`/${blog.image}`} // Ensure this URL is correctly formed
                      alt={blog.title}
                      className="my-4 w-full rounded"
                    />
                  )}
                  <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                </div>
              ))
            ) : (
              <p>No blogs available. Please add some from the Blog Editor.</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;

