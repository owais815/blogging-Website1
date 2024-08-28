# Currently in Progress 


//Virtual Dom
//Reconciliation: A process of syncing virtual DOM which kept the UI Element in memory and sync with the actual dom,



  //how it works

 // 1- initial render: when component renders for the first time, A virtual DOM Tree is created , known as Initial rendering 

 // 2- Re-Rendering : when component's state changed, it firstly change the virtual dom tree without affecting the actual/real DOM

 // 3- Diffing: A process in which react compares new Virtual DOM tree with previous one to identify the changes. it uses REACT DIFFING algorithm for diffing

 //after the changes ere being identified 

 // 4- Reconciliation: A process of syncing virtual DOM (which kept the UI Element in memory) with the actual dom, it specifically updates those elements in the Real dom where the changes have made,

 // 5- Batch Updates: react batches multiple updates and then updates the actual DOM once to reduce the number of times of DOM manipulation.

 //Virtual DOM Functions:

 // render(), componentDidMount(), componentDidUpdate(), 

 

                 //Component lifecycle:

   // 1- Mounting: When component is inserted into the DOM, it is called mounting
   // 2- Updating: When component's state or props are changed, it is called updating
   // 3- Unmounting: When component is removed from the DOM, it is called unmounting
   



                    //Learning and creating Custom hooks

// To minimize the repetition  of the same code across multiple components in Application, we use Custom hooks, we add the relevant code which can include multiple functional hooks and other logics and pack it up in a single custom hook.

// created custom hook to toast message name 
//useToasts.jsx    which shows toast message where ever i will use it in any component.


//firstly imported the useToasts hook in that component and then called the required function from that hook
//i specifically used it in    


//Home.jsx:
                // line:36
//login.jsx  
                // line:60
                // line:38
                // line:72
                // line:76
                // line:79
//Signup.jsx
                // line:51
                // line:57
                // line:59
                // line:62

// DropDownUser.jsx
                // line:27

//here is the repo link where i used Custom Hook:


https://github.com/owais815/blogging-Website1.git