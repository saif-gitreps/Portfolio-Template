import { Link } from "react-router-dom";

export default function Home() {
   return (
      <div className="mx-auto w-full max-w-7xl">
         <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-1">
            <div className="relative z-10 max-w-screen-xl py-10 my-10 mx-auto sm:px-6 lg:px-8">
               {/* <div className="inset-0 w-full sm:my-1 sm:pt-1 pt-12 ">
                  <div className="wrapper">
                     <div className="typing-demo">Hello Saif here,</div>
                  </div>
               </div> */}
               <div className="terminal-loader sm:relative absolute">
                  <div className="terminal-header">
                     <div className="terminal-title">terminal</div>
                     <div className="terminal-controls">
                        <div className="control close"></div>
                        <div className="control minimize"></div>
                        <div className="control maximize"></div>
                     </div>
                  </div>
                  <div className="content">
                     <div className="text">Hi! Saif here..</div>
                  </div>
               </div>

               <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-left sm:ml-auto">
                  <h2 className="text-2xl font-bold sm:text-3xl italic">
                     A{" "}
                     <span className="text-blue-900 font-extrabold">
                        software engineer
                     </span>{" "}
                     and a{" "}
                     <span className="text-blue-900 font-extrabold">
                        {" "}
                        problem solver{" "}
                     </span>
                     , thriving on crafting elegant solutions to complex challenges with a
                     blend of technical expertise and creativity, I love to bring ideas to
                     life through programming.
                  </h2>
               </div>
            </div>
         </aside>
         <div className="relative overflow text-black rounded-lg sm:mx-16 mx-2 sm:py-10">
            <h2 className="text-2xl font-bold sm:text-4xl">Technologies I work with..</h2>
            <ul className="text-xl ml-2">
               <li>
                  {" "}
                  <span className="text-blue-900 font-extrabold ">Languages:</span>{" "}
                  Python, C++, JavaScript, ASM86, PHP, Java
               </li>
               <li>
                  {" "}
                  <span className="text-blue-900 font-extrabold ">Frameworks: </span>
                  Express.js, React.js, Flask.py, Mongoose.js , Prisma.js , EJS, FastAPI
               </li>
               <li>
                  {" "}
                  <span className="text-blue-900 font-extrabold">Databases: </span>
                  MongoDB, MySQL, PostreSQL
               </li>
               <li>
                  <span className="text-blue-900 font-extrabold">Cloud and Tools: </span>{" "}
                  Render, AWS, Git/Github, Postman, Linux
               </li>
            </ul>
         </div>
         <div className="flex justify-end overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:p">
            <form className="flex-col items-start gap-3 w-96 p-8 rounded-lg shadow-lg">
               <div className="text-blue-900 text-3xl font-semibold tracking-tighter leading-9 ">
                  Email me
               </div>
               <input
                  type="text"
                  placeholder="Your email"
                  className="outline-none text-xl border border-gray-300 rounded px-4 py-8 w-full h-14"
               />
               <textarea
                  placeholder="Message"
                  className="outline-none text-xl border border-gray-300 rounded px-4 py-8 w-full h-24 resize-none"
               ></textarea>
               <button className="px-8 py-2 outline-none rounded font-medium text-white bg-blue-900 cursor-pointer">
                  Send
               </button>
            </form>
         </div>
      </div>
   );
}
