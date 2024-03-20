import { Link } from "react-router-dom";

export default function Card({ data, color }) {
   return (
      <div className="card m-8 self-center w-80 md:w-96">
         <div className={`card__img ${color}`}></div>
         <p className="card__title text-2xl font-semibold"> {data.name} </p>
         <div className="card__descr-wrapper flex-col justify-between h-full">
            <p className="card__descr text-lg xl:text-xl">{data.description}</p>
            <div className="card__links text-xl">
               <div className="flex flex-row">
                  <img src="/icons8-github-96.png" className="w-7 h-7" />
                  <Link
                     className="link text-blue-800 font-semibold flex items-center"
                     to={data.html_url}
                  >
                     Source Code
                  </Link>
               </div>
               <div>
                  <Link
                     className={`link text-blue-800 font-semibold ${
                        data.homepage ? "block" : "hidden"
                     }`}
                     to={data.homepage}
                  >
                     Preview
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
}
