// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
// import SelectGroupOne from '../../components/Forms/SelectGroup/SelectGroupOne';

// import { Editor } from '@tinymce/tinymce-react';

// const BlogEditor = () => {
//   const [blogData, setBlogData] = useState({
//     title: '',
//     category: '',
//     content: '',
//     image: null,
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setBlogData({
//       ...blogData,
//       [name]: value,
//     });
//   };

//   const handleImageChange = (e) => {
//     setBlogData({
//       ...blogData,
//       image: e.target.files[0],
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Retrieve existing blogs from localStorage
//     const existingBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
//     // Add the new blog to the list
//     const updatedBlogs = [...existingBlogs, blogData];
//     // Store the updated list back to localStorage
//     localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
//     // Navigate to the Blogs page
//     navigate('/blogs');
//   };

//   return (
//     <>
//       <Breadcrumb pageName="Blog Editor" />

//       <div>
//         <div className="flex flex-col gap-9">
//           <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
//             <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
//               <h3 className="font-medium text-black dark:text-white">
//                 Add Your Blog
//               </h3>
//             </div>
//             <form onSubmit={handleSubmit}>
//               <div className="p-6.5">
//                 <div className="mb-4.5">
//                   <label className="mb-2.5 block text-black dark:text-white">
//                     Blog Title <span className="text-meta-1">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     name="title"
//                     placeholder="Enter your blog title"
//                     value={blogData.title}
//                     onChange={handleChange}
//                     className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
//                   />
//                 </div>

//                 <div className="mb-4.5">
//                   <label className="mb-2.5 block text-black dark:text-white">
//                     Category <span className="text-meta-1">*</span>
//                   </label>
//                   <SelectGroupOne />
//                 </div>

//                 {/* <div className="mb-6">
//                   <label className="mb-2.5 block text-black dark:text-white">
//                     Blog Content <span className="text-meta-1">*</span>
//                   </label>
//                   <textarea
//                     rows={10}
//                     name="content"
//                     placeholder="Type your blog content here..."
//                     value={blogData.content}
//                     onChange={handleChange}
//                     className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
//                   ></textarea>
//                 </div> */}

//     <Editor

//       apiKey='ra2nyxxlfo2r71f7d4n7s5c1s46sy48jd9mykq0459y3rsec'
//       init={{
//         plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown',
//         toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
//         tinycomments_mode: 'embedded',
//         tinycomments_author: 'Author name',
//         mergetags_list: [
//           { value: 'First.Name', title: 'First Name' },
//           { value: 'Email', title: 'Email' },
//         ],
//         ai_request: (request, respondWith) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
//       }}
//       initialValue="Welcome to TinyMCE!"
//     />

//                 <div className="mb-4.5">
//                   <label className="mb-2.5 block text-black dark:text-white">
//                     Upload Image
//                   </label>
//                   <input
//                     type="file"
//                     name="image"
//                     onChange={handleImageChange}
//                     className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
//                   />
//                 </div>

//                 <button
//                   type="submit"
//                   className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
//                 >
//                   Publish Blog
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default BlogEditor;

import { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { useNavigate } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import SelectGroupOne from '../../components/Forms/SelectGroup/SelectGroupOne';

const BlogEditor = () => {
  const [blogData, setBlogData] = useState({
    title: '',
    category: '',
    content: '',
    image: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlogData({
      ...blogData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    setBlogData({
      ...blogData,
      image: e.target.files[0],
    });
  };

  const handleEditorChange = (content) => {
    setBlogData({
      ...blogData,
      content, // Update the content field with TinyMCE content
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to the blog details page and pass the blogData
    navigate('/blogs', { state: { blogData } });
  };

  return (
    <>
      <Breadcrumb pageName="Blog Editor" />

      <div>
        <div className="flex flex-col gap-9">
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Add Your Blog
              </h3>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="p-6.5">
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Blog Title <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="text"
                    name="title"
                    placeholder="Enter your blog title"
                    value={blogData.title}
                    onChange={handleChange}
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>

                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Category <span className="text-meta-1">*</span>
                  </label>
                  <SelectGroupOne />
                </div>

                <div className="mb-6">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Blog Content <span className="text-meta-1">*</span>
                  </label>
                  <Editor
                     apiKey='ra2nyxxlfo2r71f7d4n7s5c1s46sy48jd9mykq0459y3rsec'
                    initialValue="<p>Type your blog content here...</p>"
                    init={{
                      plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown',
                      toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                      tinycomments_mode: 'embedded',
                      tinycomments_author: 'Author name',
                    }}
                    onEditorChange={handleEditorChange}
                  />
                </div>

                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Upload Image
                  </label>
                  <input
                    type="file"
                    name="image"
                    onChange={handleImageChange}
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>

                <button
                  type="submit"
                  className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
                >
                  Publish Blog
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="flex flex-col gap-9">
          {/* Additional components can be added here if needed */}
        </div>
      </div>
    </>
  );
};

export default BlogEditor;



// import  { useState } from 'react';
// import { Editor } from '@tinymce/tinymce-react';
// import { useNavigate } from 'react-router-dom';
// import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
// import SelectGroupOne from '../../components/Forms/SelectGroup/SelectGroupOne';

// const BlogEditor = () => {
//   const [blogData, setBlogData] = useState({
//     title: '',
//     category: '',
//     content: '',
//     image: null,
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setBlogData({
//       ...blogData,
//       [name]: value,
//     });
//   };

//   const handleImageChange = (e) => {
//     setBlogData({
//       ...blogData,
//       image: e.target.files[0],
//     });
//   };

//   const handleEditorChange = (content) => {
//     console.log("Editor Content:", content); // Log editor content
//     setBlogData({
//       ...blogData,
//       content, // Update the content field with TinyMCE content
//     });
//   };

//  const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Create a FormData object to handle the file upload along with other data
//     const formData = new FormData();
//     formData.append('title', blogData.title);
//     formData.append('category', blogData.category);
//     formData.append('content', blogData.content);
//     formData.append('image', blogData.image);

//     try {
//         const response = await fetch('/api/blogs', {
//             method: 'POST',
//             body: formData,
//         });

//         if (response.ok) {
//             // If the blog is successfully saved to the database, navigate to the Blogs page
//             navigate('/blogs');
//         } else {
//             // Handle errors here
//             console.error('Failed to save the blog');
//         }
//     } catch (error) {
//         console.error('Error:', error);
//     }
// };


//   return (
//     <>
//       <Breadcrumb pageName="Blog Editor" />

//       <div>
//         <div className="flex flex-col gap-9">
//           <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
//             <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
//               <h3 className="font-medium text-black dark:text-white">
//                 Add Your Blog
//               </h3>
//             </div>
//             <form onSubmit={handleSubmit}>
//               <div className="p-6.5">
//                 <div className="mb-4.5">
//                   <label className="mb-2.5 block text-black dark:text-white">
//                     Blog Title <span className="text-meta-1">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     name="title"
//                     placeholder="Enter your blog title"
//                     value={blogData.title}
//                     onChange={handleChange}
//                     className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
//                   />
//                 </div>

//                 <div className="mb-4.5">
//                   <label className="mb-2.5 block text-black dark:text-white">
//                     Category <span className="text-meta-1">*</span>
//                   </label>
//                   <SelectGroupOne />
//                 </div>

//                 <div className="mb-6">
//                   <label className="mb-2.5 block text-black dark:text-white">
//                     Blog Content <span className="text-meta-1">*</span>
//                   </label>
//                   <Editor
//                   apiKey='ra2nyxxlfo2r71f7d4n7s5c1s46sy48jd9mykq0459y3rsec'
// initialValue="<p>Type your blog content here...</p>"
//                     init={{
//                       plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown',
//                       toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
//                       tinycomments_mode: 'embedded',
//                       tinycomments_author: 'Author name',
//                     }}
//                     onEditorChange={handleEditorChange}
//                   />
//                 </div>

//                 <div className="mb-4.5">
//                   <label className="mb-2.5 block text-black dark:text-white">
//                     Upload Image
//                   </label>
//                   <input
//                     type="file"
//                     name="image"
//                     onChange={handleImageChange}
//                     className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
//                   />
//                 </div>

//                 <button
//                   type="submit"
//                   className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
//                 >
//                   Publish Blog
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>

//         <div className="flex flex-col gap-9">
//           {/* Additional components can be added here if needed */}
//         </div>
//       </div>
//     </>
//   );
// };

// export default BlogEditor;
