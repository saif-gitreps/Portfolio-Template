import { Link } from "react-router-dom";

export default function Home() {
   return (
      <div className="mx-auto w-full max-w-7xl">
         <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
            <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
               <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
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

         <div className="grid  place-items-center sm:mt-20">
            <img
               className="sm:w-96 w-48"
               src="https://i.ibb.co/2M7rtLk/Remote1.png"
               alt="image2"
            />
         </div>

         <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">
            Lorem Ipsum Yojo
         </h1>
      </div>
   );
}
