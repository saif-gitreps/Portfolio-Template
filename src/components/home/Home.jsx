import { Link } from "react-router-dom";

export default function Home() {
   return (
      <div className="mx-auto w-full max-w-7xl">
         <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-1">
            <div className="relative z-10 max-w-screen-xl py-20 my-20 mx-auto sm:px-6 lg:px-8">
               <div className="inset-0 w-full sm:my-1 sm:pt-1 pt-12 ">
                  <div className="wrapper">
                     <div className="typing-demo">Hello Saif here,</div>
                  </div>
               </div>
               <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-left sm:ml-auto">
                  <h2 className="text-2xl font-bold sm:text-3xl">
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
            <h2 className="text-3xl font-bold sm:text-4xl">Technologies I work with..</h2>
            <ul className="text-2xl ">
               <li>
                  {" "}
                  <span className="text-blue-900 font-extrabold ml-6">
                     Languages:
                  </span>{" "}
                  Python, C++, JavaScript, ASM86, PHP, Java
               </li>
               <li>
                  {" "}
                  <span className="text-blue-900 font-extrabold ml-8">Frameworks: </span>
                  Express.js, React.js, Flask.py, Mongoose.js , Prisma.js , EJS, FastAPI
               </li>
               <li>
                  {" "}
                  <span className="text-blue-900 font-extrabold ml-10">Databases: </span>
                  MongoDB, MySQL, PostreSQL
               </li>
               <li>
                  <span className="text-blue-900 font-extrabold ml-12">
                     Cloud and Tools:{" "}
                  </span>{" "}
                  Render, AWS, Git/Github, Postman, Linux
               </li>
            </ul>
         </div>
      </div>
   );
}
