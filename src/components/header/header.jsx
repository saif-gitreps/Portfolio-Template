import { Link, NavLink } from "react-router-dom";

export default function Header() {
   return (
      <header className="shadow sticky z-50 top-0">
         <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
               <Link to="/" className="hidden lg:flex items-center">
                  <img
                     src="https://cdn-icons-png.flaticon.com/512/5698/5698711.png"
                     className="mr-3 h-16 w-16 rounded-sm"
                     alt="Logo"
                  />
               </Link>
               <div className="lg:order-2"></div>
               <div
                  className="justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                  id="mobile-menu-2"
               >
                  <ul className="flex justify-center mt-4 font-medium text-xl flex-row lg:space-x-8 lg:mt-0">
                     <li>
                        <NavLink
                           to="/"
                           className={({ isActive }) =>
                              `block py-2 pr-4 pl-3 duration-200 ${
                                 isActive ? "text-blue-800" : "text-gray-700"
                              } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-800 lg:p-0`
                           }
                        >
                           Home
                        </NavLink>
                     </li>
                     <li>
                        <NavLink
                           to="/github"
                           className={({ isActive }) =>
                              `block py-2 pr-4 pl-3 duration-200 ${
                                 isActive ? "text-blue-800" : "text-gray-700"
                              } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-800 lg:p-0`
                           }
                        >
                           Projects and Repo
                        </NavLink>
                     </li>
                  </ul>
               </div>
            </div>
         </nav>
      </header>
   );
}
