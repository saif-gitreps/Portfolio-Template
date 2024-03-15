import { Link } from "react-router-dom";

export default function Footer() {
   return (
      <footer className="bg-white border-y">
         <div className="mx-auto w-full max-w-screen-xl p-2 lg:py-4">
            <div className="sm:flex sm:items-center sm:justify-between">
               <span className="text-sm text-gray-500 sm:text-center"></span>
               <div className="flex mt-4 sm:justify-center sm:mt-0 items-center">
                  <Link to="#" className="text-gray-500 hover:text-gray-900">
                     <img
                        src="src/assets/icons8-facebook-96.png"
                        className="h-10 w-10"
                        alt="Facebook"
                     />
                     <span className="sr-only">Facebook</span>
                  </Link>
                  <Link to="#" className="text-gray-500">
                     <img
                        src="src/assets/icons8-github-96.png"
                        className="h-10 w-10"
                        alt="Github"
                     />
                     <span className="sr-only">Github</span>
                  </Link>
                  <Link to="#" className="text-gray-500">
                     <img
                        src="src/assets/icons8-linkedin-96.png"
                        className="h-10 w-10"
                        alt="linkedin"
                     />
                     <span className="sr-only">LinkedIN</span>
                  </Link>
                  <Link to="#" className="text-gray-500">
                     <img
                        src="src/assets/icons8-stack-overflow-96.png"
                        className="h-10 w-10"
                        alt="Stack overflow"
                     />
                     <span className="sr-only">Stack Overflow</span>
                  </Link>
                  <Link to="#" className="text-gray-500">
                     <img
                        src="src/assets/icons8-twitterx-96.png"
                        className="h-10 w-10"
                        alt="X"
                     />
                     <span className="sr-only">X</span>
                  </Link>
                  <Link to="#" className="text-gray-500">
                     <img src="src/assets/leetcode.png" className="h-10 w-10" alt="X" />
                     <span className="sr-only">LeetCode</span>
                  </Link>
               </div>
            </div>
         </div>
      </footer>
   );
}
