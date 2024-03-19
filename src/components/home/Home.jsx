import { useForm, ValidationError } from "@formspree/react";

export default function Home() {
   const [state, handleSubmit] = useForm("meqyzybj");

   return (
      <div className="mx-auto w-full max-w-7xl">
         <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-1">
            <div className="relative z-10 max-w-screen-xl py-10 my-10 mx-auto sm:px-6 lg:px-8">
               <div className="terminal-loader max-w-80 sm:max-w-96 sm:relative absolute">
                  <div className="terminal-header">
                     <div className="terminal-title">terminal</div>
                     <div className="terminal-controls">
                        <div className="control close"></div>
                        <div className="control minimize"></div>
                        <div className="control maximize"></div>
                     </div>
                  </div>
                  <div className="content">
                     <div className="text">Hello! Saif here..</div>
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
         <div className="relative overflow text-black rounded-lg sm:mx-16 mx-2 sm:p-10">
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
         <div className="flex justify-centre md:justify-end relative overflow text-black rounded-lg sm:mx-16 mx-2 sm:p-10 ">
            <form
               onSubmit={handleSubmit}
               className="flex-col w-96 items-start gap-3 md:w-1/2 p-8 rounded-xl shadow-lg"
            >
               <div className="text-blue-900 text-2xl font-semibold tracking-tighter leading-9 ">
                  Send an email to{" "}
                  <span className="text-black text-2xl">saifrahman3092@gmail.com</span>
               </div>
               <input
                  type="email"
                  placeholder="Your email"
                  id="email"
                  name="email"
                  className="outline-none text-xl border border-gray-300 rounded px-4 py-8 w-full h-14"
               />
               <ValidationError prefix="Email" field="email" errors={state.errors} />
               <textarea
                  placeholder="Message"
                  id="message"
                  name="message"
                  className="outline-none text-xl border border-gray-300 rounded px-4 py-8 w-full h-24 resize-none"
               ></textarea>
               <ValidationError prefix="Message" field="message" errors={state.errors} />
               <button
                  type="submit"
                  disabled={state.submitting}
                  className="px-8 py-2 outline-none rounded text-xl text-white bg-blue-900 cursor-pointer"
               >
                  Send
               </button>
               <p
                  className={`${
                     state.succeeded ? "block" : "hidden"
                  } p-2 outline-none rounded text-xl font-extrabold text-green-700 `}
               >
                  message sent!
               </p>
            </form>
         </div>
      </div>
   );
}
